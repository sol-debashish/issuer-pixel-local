<template>
    <div class="home">
        <Navigation />
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <sidebar></sidebar>

                <div class="col p-5">
                    <h4>Youtube Video Upload</h4>
                    <div class="form-group col-lg-offset-2 col-lg-8 mt-5">
                        <input type="text" class="form-control" placeholder="Video Title" id="title" v-model="title">
                    </div>
                    <div class="col-lg-offset-2 col-lg-8 mt-5">
                        <button type="button" class="btn btn-success" aria-label="Add file" id="add-file-btn">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add file
                        </button>
                        <button type="button" class="btn btn-info" aria-label="Start upload" id="start-upload-btn" @click="startUpload">
                            <span class="glyphicon glyphicon-upload" aria-hidden="true"></span> Start upload
                        </button>
                        <button type="button" class="btn btn-warning" aria-label="Pause upload" id="pause-upload-btn" @click="pauseUpload">
                            <span class="glyphicon glyphicon-pause " aria-hidden="true"></span> Pause upload
                        </button>
                    </div>
                    <div class="col-lg-offset-2 col-lg-8 mt-5">
                    <div class="progress d-none" id="upload-progress">
                        <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"   style="width: 0%">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                    <div class="alert alert-box"></div>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Navigation from "../components/Navigation.vue";
    import sidebar from '../components/Sidebar'
    import Resumable from 'resumablejs'
    export default {
        data() {
            return {
                r: null,
                progressBar: null,
                title: '',
            }
        },
        methods: {
            startUpload: function () {
                this.r.opts.query.title= this.getTitle();
                this.r.upload();
            },
            pauseUpload: function () {
                if (this.r.files.length>0) {
                    if (this.r.isUploading()) {
                        return  this.r.pause();
                    }
                    return this.r.upload();
                }
            },
            getTitle: function () {
                return this.title
            }

        },
        created: function () {

        },
        mounted : function() {
            this.r = new Resumable({
                // Use chunk size that is smaller than your maximum limit due a resumable issue
                // https://github.com/23/resumable.js/issues/51
                chunkSize: 1 * 1024 * 1024, // 1MB
                simultaneousUploads: 2,
                testChunks: false,
                throttleProgressCallbacks: 1,
                fileType: ['MOV', 'MPEG4', 'MP4', 'AVI', 'WMV', 'MPEGPS', 'FLV', '3GPP', 'WebM', 'DNxHR', 'ProRes', 'CineForm', 'HEVC (h265)'],
                // Get the url from data-url tag
                target:'/media-upload',
                // Append token to the request - required for web routes
                query: {_token:  document.querySelector('meta[name="csrf-token"]').content, title : this.getTitle(), type: 'youtube'}
            });

            this.r.assignBrowse($('#add-file-btn'));


            this.r.on('fileAdded', function(file, event){

                window.onbeforeunload = function() {
                    return "A XHR request is pending, are you sure you want to leave ?";
                }
                //$('#upload-progress').removeClass('d-none').find('.progress-bar').css('width','0%');
            });

            this.r.on('uploadStart', function () {
                $('.alert-box').removeClass('alert-success').removeClass('alert-danger').text('');
            });

            this.r.on('fileSuccess', function(file, message){
                $('#upload-progress').addClass('d-none').find('.progress-bar').css('width','0%');
                $('.alert-box').addClass('alert-success').html("Uploading Done. Go to <a href='/youtube-video'>video</a>");
                window.onbeforeunload = function () {
                    // blank function do nothing
                }
            });

            this.r.on('progress', function(){
                $('#upload-progress').removeClass('d-none').find('.progress-bar').attr('style', "width:"+ this.progress() * 100 + '%');
                $('#pause-upload-btn').find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');
            });

            this.r.on('pause', function(){
                $('#pause-upload-btn').find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
            });

            this.r.on('fileError', function(file, message){
                $('#upload-progress').addClass('d-none').find('.progress-bar').css('width','0%');
                $('.alert-box').addClass('alert-danger').html("Unable to upload");
            });
        },
        components : {sidebar,  Navigation}
    }
</script>
