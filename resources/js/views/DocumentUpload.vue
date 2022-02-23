<template>
    <div class="home">
        <Navigation/>
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <sidebar></sidebar>
                <div class="col-lg-9 pl-lg-5">
                        <h2 class="text-center upload-title">Document Upload</h2>
                        <div class="col">
                            <div class="large-12 columns mx-auto mb-4">
                                <div class="uploader"
                                     @dragenter="OnDragEnter"
                                     @dragleave="OnDragLeave"
                                     @dragover.prevent
                                     @drop="onDrop"
                                     :class="{ dragging: isDragging }"
                                >
                                    <header>Drag and drop audio</header>
                                    <header>to upload</header>
                                    <div class="form-group mb-1">
                                        <label class="btn btn-info">
                                            <input type="file" name="document" id="document" ref="document"
                                                   @change="onInputChange"
                                                   style="display:None;"
                                                   accept=".xls,.xlsx,.pdf,.txt,.docx,.doc"> <span>Or choose files</span>

                                        </label>
                                    </div>
                                    <div id="results" class="h5 font-weight-bold"></div>
                                </div>
                                <p class="text-center mt-1 font-italic">After selecting your
                                    file press "Upload" to upload the file</p>
                                <div class="text-center">
                                    <button type="button"class="btn btn-success px-5 video-upload-button" @click="startUpload">
                                        Upload File
                                    </button>
                                    <div class="alert-box alert" data-nothingToUpload>Error Nothing To Upload, Please
                                        Add File
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
    import Questionnnaire from "../apis/Questionnnaire";
    import loader from '../components/Loader'
    import sidebar from '../components/Sidebar'
    import User from "../apis/User";

    export default {
        data() {
            return {
                isLoading: false,
                isDragging: false,
                dragCount: 0,
                document: '',
                form: {

                },
                submitButtonDisabled: false,
            };
        },
        methods: {
            OnDragEnter(e) {
                e.preventDefault();
                this.dragCount++;
                this.isDragging = true;
                return false;
            },
            OnDragLeave(e) {
                e.preventDefault();
                this.dragCount--;
                if (this.dragCount <= 0)
                    this.isDragging = false;
            },
            onInputChange(e) {
                this.addFile(e.target.files);
            },
            onDrop(e) {
                e.preventDefault();
                e.stopPropagation();
                this.isDragging = false;
                this.addFile(e.dataTransfer.files);
            },
            addFile: function(files){

                if(!!files) {
                    const fileExtention = files[0].name.split('.').pop();
                    if (fileExtention == 'xls' ||
                        fileExtention == 'xlsx' ||
                        fileExtention == 'pdf' ||
                        fileExtention == 'txt' ||
                        fileExtention== 'doc' ||
                        fileExtention == 'docx') {

                        toastr.info('Audio Selected!')
                        this.document = files[0];
                        var template = files[0].name;
                        $('#results').html(template);
                    } else {
                        toastr.error('File type not supported, file must be in the format of xls/xlsx/pdf/txt/doc/docx')
                    }
                }
            },
            startUpload: function () {
                var nothingToUpload = $('[data-nothingToUpload]');
                if (this.document) {
                    // this.isLoading = true


                    const config = {
                        headers: {'content-type': 'multipart/form-data'}
                    }

                    let formData = new FormData();
                    formData.append('file', this.file);

                    // this.submitButtonDisabled = true;
                    toastr.success('successfully uploaded')

                    // Questionnnaire.uploadDocument(formData, config)
                    //     .then((response) => {
                    //         this.isLoading = false
                    //         this.submitButtonDisabled = false;
                    //         toastr.success(response.data.success.message)
                    //     })
                    //     .catch(error => {
                    //         this.isLoading = false
                    //         this.submitButtonDisabled = false;
                    //         if (error.response.status === 422) {
                    //             toastr.error(error.response.data.error.message)
                    //         } else if (error.response.status == 401) {
                    //             this.$emit('logout')
                    //         } else {
                    //             toastr.error(error)
                    //         }
                    //     });
                } else {
                    nothingToUpload.fadeIn();
                    setTimeout(function () {
                        nothingToUpload.fadeOut();
                    }, 3000);
                }

            },
        },
        created: function () {
        },
        components: {
            loader,
            sidebar,
            Navigation
        }
    };
</script>
<style lang="scss" scoped>
    .upload-title {
        margin-top: 30px;
    }
    div[data-nothingToUpload] {
        display: none;
    }
    .uploader {
        width: 100%;
        padding: 40px 15px;
        text-align: center;
        border-radius: 5px;
        border: 2px dashed #b0a1a1;
        font-size: 20px;
        position: relative;
        &.dragging {
            background: #fff;
            color: #2196F3;
            border: 3px dashed #2196F3;
            .file-input label {
                background: #2196F3;
                color: #fff;
            }
        }
        label{
            margin-top: 10px;
            color: #fff;
        }
        i {
            font-size: 85px;
        }
        .file-input {
            width: 200px;
            margin: auto;
            height: 68px;
            position: relative;
            label,
            input {
                color: #fff;
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
                padding: 10px;
                border-radius: 4px;
                margin-top: 7px;
            }
            input {
                opacity: 0;
                z-index: -2;
            }
        }
        .images-preview {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            .img-wrapper {
                width: 160px;
                display: flex;
                flex-direction: column;
                margin: 10px;
                height: 150px;
                justify-content: space-between;
                background: #fff;
                box-shadow: 5px 5px 20px #3e3737;
                img {
                    max-height: 105px;
                }
            }
            .details {
                font-size: 12px;
                background: #fff;
                color: #000;
                display: flex;
                flex-direction: column;
                align-items: self-start;
                padding: 3px 6px;
                .name {
                    overflow: hidden;
                    height: 18px;
                }
            }
        }
        .upload-control {
            position: absolute;
            width: 100%;
            background: #fff;
            top: 0;
            left: 0;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            padding: 10px;
            padding-bottom: 4px;
            text-align: right;
            button, label {
                background: #2196F3;
                border: 2px solid #03A9F4;
                border-radius: 3px;
                color: #fff;
                font-size: 15px;
                cursor: pointer;
            }
            label {
                padding: 2px 5px;
                margin-right: 10px;
            }
        }
    }
</style>
