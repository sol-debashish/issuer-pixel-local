<template>
    <section class="dashboard pt-0 video-upload-section">
        <div class='row'>

            <div class="col-md-12 grid-margin text-center font-weight-bold">
                <h4 class="text-theme-dark-blue font-weight-bold" >Video upload</h4>
                <div class="d-block mb-2 fs-16 text-theme-dark-blue">
                    You can upload up to 20 files at a time. Once you’ve uploaded your files you can then categorize them and add additional details.
                </div>
            </div>

            <div class='col-md-8 offset-md-2 grid-margin'>
                <div class='card'>
                    <div class='card-body'>
                        <div class="col">
                            <div class="large-12 columns mx-auto">
                                <div id="drag-area" class="panel drop-zone drag-area">
                                    <div v-if="resumbleUploading && !resumbleUploadCompleted" class="p-3 mb-2 bg-danger text-white">
                                        <h2>Please wait for complete previous upload</h2>
                                    </div>
                                        <header class="text-theme-dark-blue" v-show="!resumbleUploading || resumbleUploadCompleted">Drag and drop video to upload</header>
                                        <button class="btn btn-info px-5" id="browseButton" v-show="!resumbleUploading || resumbleUploadCompleted">
                                            <i class="fas fa-cloud-upload-alt"></i>
                                            <!--                                        <img src="images/cloud-upload.png" alt="Media Upload">-->
                                            Choose File from Computer
                                        </button>

                                        <div class="mt-2 mb-2" v-show="!resumbleUploading || resumbleUploadCompleted">
                                            <p class="text-theme-dark-blue fs-16">Issuer Pixel supports video files of type webm, mkv, flv, vob, avi, mov, wmv, mp4, m4p, mpg, and mpeg</p>
                                        </div>

                                        <div id="results" class="panel"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

                <p class="text-center mt-3 font-italic upload-notice">
                    After selecting your
                    video file press "Upload" to upload the file
                </p>

                <div class="text-center">
                    <button type="button" :disabled='videoUploadIsDisabled'
                            class="btn btn-secondary px-5 video-upload-button" @click="startUpload">
                        <i class="fas fa-cloud-upload-alt"></i>  Upload Video
                    </button>
                    <div class="alert-box alert" data-nothingToUpload>Error Nothing To Upload, Please
                        Add File
                    </div>
                </div>
            </div>


        </div>
    </section>
</template>
<script>
    import Resumable from 'resumablejs'
    import AudioVideo from "../apis/AudioVideo";
    export default {
        data() {
            return {
                r: null,
                resumbleUploading: false,
                videoUploadIsDisabled: true,
            };
        },
        props: ['resumble', 'resumbleUploadCompleted'],
        methods: {
            startUpload: function () {
                var nothingToUpload = $('[data-nothingToUpload]');
                if ($('#results').children().length > 0) {
                    window.onbeforeunload = function () {
                        return "A XHR request is pending, are you sure you want to leave ?";
                    }
                    this.r.files.forEach(function(file, i){
                        file.fileName = file.fileName.split('.').slice(0, -1).join('.').replace(/[^a-zA-Z0-9\s]/g, "-")
                    })
                    this.r.upload();
                    this.$emit('setVideoUploaderState',this.r);
                    this.$router.push({name: "Content"});
                    toastr.success("You're now being redirected to your content library where you can activate your content")
                } else {
                    nothingToUpload.fadeIn();
                    setTimeout(function () {
                        nothingToUpload.fadeOut();
                    }, 3000);
                }

            },
            pauseUpload: function () {
                if (this.r.files.length > 0) {
                    if (this.r.isUploading()) {
                        return this.r.pause();
                    }
                    return this.r.upload();
                }
            },
        },
        mounted: function () {
            this.resumbleUploading = false
            if(!!this.resumble && this.resumble.isUploading())
            {
                this.resumbleUploading = true
            }
            this.r = new Resumable({
                // Use chunk size that is smaller than your maximum limit due a resumable issue
                // https://github.com/23/resumable.js/issues/51
                chunkSize: 1 * 1024 * 1024, // 1MB
                simultaneousUploads: 1,
                maxFiles: 20,
                maxFileSize: 500 * 1024 * 1024,
                testChunks: false,
                throttleProgressCallbacks: 1,
                fileType: ['webm', 'mkv', 'flv', 'vob', 'avi', 'mov', 'wmv', 'mp4', 'm4p', 'm4v', 'mpg', 'mpeg'],
                fileTypeErrorCallback: function (file, errorCount) {
                    toastr.error('Warning, Issuer Pixel supports video files of webm/mkv/flv/vob/avi/mov/wmv/mp4/m4p/m4v/mpg/mpeg. Please select a supported file, thank you!')
                },
                maxFilesErrorCallback: function () {
                    $.confirm({
                        title: '',
                        content: "Please upload no more than 20 files at a time.",
                        columnClass: 'medium',
                        type: 'blue',
                        typeAnimated: true,
                        buttons: {
                            OK: function () {
                            },
                        }
                    });
                },
                // Get the url from data-url tag
                //target:'/media-upload',
                target: '/api/video-upload',
                // Append token to the request - required for web routes
                query: {_token: document.querySelector('meta[name="csrf-token"]').content, Accept: 'application/json'},
                headers:{Authorization: 'Bearer '+ localStorage.getItem("token")},
            });

            var draggable = $('#drag-area'), browseButton = $('#browseButton');
            this.r.assignBrowse(browseButton);
            this.r.assignDrop(draggable);

            var vm = this;

            this.r.on('fileAdded', function (file, event) {
                var template =
                    '<div class="single-video" data-uniqueid="' + file.uniqueIdentifier + '">' +
                        '<div class="fileName">' + file.fileName + ' (' + file.file.type + ')' + '</div>' +
                        '<div class="deleteFile"><i class="far fa-times-circle"></i></div>' +
                    '</div>'

                $('#results').append(template);
                toastr.info('Video Selected!')
                vm.videoUploadIsDisabled = false;
            });

            this.r.on('uploadStart', function () {
            });

            this.r.on('fileSuccess', function (file) {
            });
            this.r.on('progress', function () {
            });
            this.r.on('error', function (e) {
            });

            this.r.on('pause', function () {
            });

            $(document).on('click', '.deleteFile', function () {
                var self = $(this),
                    parent = self.parent(),
                    identifier = parent.data('uniqueid'),
                    file = vm.r.getFromUniqueIdentifier(identifier);
                vm.r.removeFile(file);
                parent.remove();
                if($('#results').children().length < 1){
                    vm.videoUploadIsDisabled = true;
                }
            });

        },
        components: {
        },
    }
</script>
