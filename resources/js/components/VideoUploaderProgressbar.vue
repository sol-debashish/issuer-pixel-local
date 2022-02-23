<template>
    <div class="video-modal-backdrop">
        <div class="video-modal">
            <header class="video-modal-header">
                <slot name="header">{{uploadMsg}}</slot>
                <button
                    type="button"
                    class="btn-close"
                    @click="close"
                >
                    x
                </button>
            </header>

            <section class="video-modal-body">
                <slot name="body">
<!--                    <div class="progress" id="mini-upload-progress">-->
<!--                        <div class="progress-bar bg-success text-center" role="progressbar" style="width: 0%">-->
<!--                            <span class="sr-only"></span>-->
<!--                        </div>-->
<!--                    </div>-->

                    <div id="progress-list" class="panel"></div>
                </slot>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                uploadMsg: "Uploading...",
                uploadingFiles: []
            }
        },
        props: ['resumble'],
        methods: {
            close() {
                var vueInstance = this;
                if (this.resumble.isUploading())
                {
                    $.confirm({
                        title: 'Cancel upload',
                        content: 'Are you sure you want to cancel the upload?',
                        type: 'purple',
                        typeAnimated: true,
                        buttons: {
                            'Cancel Upload': {
                                btnClass: 'btn-default rounded-pill',
                                action: function(){
                                    vueInstance.resumble.cancel()
                                    vueInstance.$emit('close');
                                }
                            },
                            Close: {
                                btnClass: 'btn-success rounded-pill', // class for the button
                                action: function(){
                                }
                            },
                        }
                    });
                }
                else
                {
                    vueInstance.$emit('close');
                }
            },
        },
        mounted: function () {
            var vi = this;
            // this.resumble.on('progress', function () {
            //     $('#mini-upload-progress').removeClass('d-none').find('.progress-bar').attr('style', "width:" + this.progress() * 100 + '%').html(Math.round(this.progress() * 100) + '%');
            //
            // });

            this.resumble.on('fileProgress', function (file) {
                $('[data-uniqueId=' + file.uniqueIdentifier + ']').find('.progress-bar').attr('style', "width:" + file.progress() * 100 + '%').html(Math.round(file.progress() * 100) + '%');
            });

            this.resumble.on('complete', function (file, message) {
                vi.uploadMsg =  "Uploading complete!",
                vi.$emit('resumbleUploadCompleted');
                window.onbeforeunload = function () {
                    // blank function do nothing
                }
            });
            this.resumble.on('fileSuccess', function (file) {
                $('[data-uniqueId=' + file.uniqueIdentifier + ']').find('.deleteVideoFile').hide();
            });
            this.resumble.files.forEach(file => {
                vi.uploadingFiles.push(file.uniqueIdentifier);
                var template =
                    '<div data-uniqueid="' + file.uniqueIdentifier + '" class="mb-3">' +
                    '<div class="clearfix">' +
                        '<div class="fileName float-left">' + file.fileName + '</div>' +
                        '<div class="deleteVideoFile float-md-right">X</div>' +
                    '</div>' +
                    '<div class="progress">' +
                        '<div class="progress-bar bg-success text-center" role="progressbar" style="width:0%;>' +
                            '<span className="sr-only"></span>' +
                        '</div>' +
                    '</div>'

                $('#progress-list').append(template);
            })

            $(document).on('click', '.deleteVideoFile', function () {
                var self = $(this),
                    parent = self.parent().parent(),
                    identifier = parent.data('uniqueid'),
                    file = vi.resumble.getFromUniqueIdentifier(identifier);

                if (vi.resumble.files.length == 1)
                {
                    $.confirm({
                        title: 'Cancel upload',
                        content: 'Are you sure you want to cancel the upload?',
                        type: 'purple',
                        typeAnimated: true,
                        buttons: {
                            'Cancel Upload': {
                                btnClass: 'btn-default rounded-pill',
                                action: function () {
                                    vi.resumble.cancel()
                                    vi.$emit('close');
                                }
                            },
                            Close: {
                                btnClass: 'btn-success rounded-pill', // class for the button
                                action: function () {
                                }
                            },
                        }
                    });
                }
                else
                {
                    vi.resumble.removeFile(file);
                    parent.remove();
                }
            });
        }
    };
</script>
<style scoped>
    .video-modal-backdrop {
        position: fixed;
        bottom: 25px;
        right: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .video-modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        width: 350px;
    }

    .video-modal-header,
    .video-modal-footer {
        padding: 15px;
        display: flex;
    }

    .video-modal-header {
        position: relative;
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }

    .video-modal-footer {
        border-top: 1px solid #eeeeee;
        flex-direction: column;
        justify-content: flex-end;
    }

    .video-modal-body {
        max-height: 200px;
        position: relative;
        padding: 20px 10px;
    }

    .btn-close {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }

    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }

    #progress-list:last-child{
        padding-bottom: 10px;
    }
</style>
