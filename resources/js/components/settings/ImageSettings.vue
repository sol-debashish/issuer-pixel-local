<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col text-center mb-4">
                <h4 class="py-3 settings-title-text">Change Photo</h4>
                <img :src="croppedImageSrc" alt="" class="company-profile-photo rounded-circle" width="150" height="150">
                <div class="rounded-circle image-edit-icon-settings text-center" @click="showImageCropperModal">
                    <!--<i class="fas fa-pencil-alt"></i>-->
                    <img class="" src="/images/pencil-icon.png" title="" height="15px"/>
                </div>
            </div>
        </div>
        <!--<div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-sm-6 text-center mt-5">
                <button class="btn-theme-purple" @click="showImageCropperModal">
                    Change photo
                </button>
            </div>
        </div>-->
        <b-modal
            centered
            id="image-cropper-modal"
            ref="image-cropper-modal"
            size="lg"
            >
            <template #modal-header>
                <div class="w-100">
                    <h3 class="float-left">Add photo</h3>
                    <b-button
                        class="modal-close close float-right"
                        @click="closeImageCropperModal"
                    >x
                    </b-button>
                </div>
            </template>
            <div class="uploader"
                 @dragenter="OnDragEnter"
                 @dragleave="OnDragLeave"
                 @dragover.prevent
                 @drop="onDrop"
            >
                <ImageCropper :src="imageSrc" ref="imageCropper" />
            </div>
            <div class="text-center" v-if="!imageSrc">Upload a photo. Then crop and adjust it to perfection.</div>
            <a class="float-right mt-4 image-rotate-icon" v-if="imageSrc" @click="imageRotate">Rotate <i class="fas fa-undo"></i></a>

            <template #modal-footer>
                <label class="btn btn-default">
                    <input type="file" name="audioFile" id="audioFile" ref="audioFile" v-if="!isUploading"
                           style="display:None;"
                           @change="onInputChange"
                           accept="image/*">
                    <span v-if="imageSrc">Change photo</span>
                    <span v-else>Upload photo</span>

                </label>
                <button v-if="imageSrc" class="btn btn-default" :disabled='isDisabled' @click="uploadImage">{{isUploading ? "Uploading..." : "Save photo"}}</button>
            </template>
        </b-modal>
    </div>
</template>
<script>
    import User from "../../apis/User";
    export default {
        data() {
            return {
                imageSrc: "",
                isDisabled: false,
                isUploading: false,
                croppedImageSrc: "",
                isDragging: false,
                dragCount: 0,
            };
        },
        methods: {
            showImageCropperModal() {
                this.$refs['image-cropper-modal'].show()
            },
            closeImageCropperModal: function () {
                let vi = this;
                if(this.imageSrc)
                {
                    $.confirm({
                        title: 'Discard changes',
                        content: "Are you sure you want to discard changes you made?",
                        columnClass: 'medium',
                        type: 'blue',
                        typeAnimated: true,
                        buttons: {
                            Cancel: function () {
                            },
                            Discard: function () {
                                vi.$refs['image-cropper-modal'].hide()
                                vi.imageSrc = ""
                                vi.isDisabled = false
                                vi.isUploading = false
                            }
                        }
                    },this);

                }else {
                    this.$refs['image-cropper-modal'].hide()
                }
            },
            setImage: function (file) {
                // const file = e.target.files[0]
                if(!!file[0]){
                    if (!file[0].type.includes("image/")) {
                        alert("Please select an image file")
                        return
                    }
                    if (typeof FileReader === "function") {
                        const reader = new FileReader()
                        reader.onload = event => {
                            this.imageSrc = event.target.result
                            // Rebuild cropperjs with the updated source
                            this.$refs.imageCropper.cropper.replace(event.target.result)
                        }
                        reader.readAsDataURL(file[0])
                    } else {
                        alert("Sorry, FileReader API not supported")
                    }
                }
            },
            imageRotate() {
                // Get image data for post processing, e.g. upload or setting image src
                this.$refs.imageCropper.cropper.rotate(90)
            },
            uploadImage() {
                this.isDisabled = true;
                this.isUploading = true;
                let vi = this;
                this.$refs.imageCropper.cropper.getCroppedCanvas().toBlob(function (blob) {
                    let formData = new FormData()

                    // Add name for our image
                    formData.append("name", "image-name-" + new Date().getTime())

                    // Append image file
                    formData.append("file", blob)

                    User.companyProfileImageUpload(formData)
                        .then((response) => {
                            vi.croppedImageSrc = vi.$refs.imageCropper.cropper.getCroppedCanvas().toDataURL()
                            vi.$refs['image-cropper-modal'].hide()
                            vi.isDisabled = false;
                            vi.isUploading = false;
                            vi.companyImage = response.data.data.company_image;
                            localStorage.setItem("info", JSON.stringify(response.data.data));
                            vi.$emit('updateProfile', response.data.data)
                        })
                        .catch((error) => {
                            if (error.response.status == 401) {
                                vi.$emit("logout");
                            }
                            else {
                                toastr.error(error)
                            }
                        });
                })
            },
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
                this.setImage(e.target.files);
            },
            onDrop(e) {
                e.preventDefault();
                e.stopPropagation();
                this.isDragging = false;
                this.setImage(e.dataTransfer.files)
                // this.addFile(e.dataTransfer.files);
            },
        },
        created: function () {
            const user = JSON.parse(localStorage.getItem("info"));
            this.croppedImageSrc = ("" != user.company_image) ? user.company_image : "/images/image-placeholder-1.png"
        },
        components: {
            ImageCropper:() => import("../ImageCropper.vue"),
        }
    };
</script>
<style>
    .image-edit-icon-settings {
        background-color: #fff;
        border: 1px solid #cccccc63;
        cursor: pointer;
        height: 27px;
        position: absolute;
        left: calc(50% - 13px);
        /*top: 85px;*/
        bottom: -13px;
        padding-bottom: 2px;
        width: 27px;
    }
</style>
