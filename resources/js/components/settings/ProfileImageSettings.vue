<template>
    <div>
        <div class="pt-2 pb-3 text-center">
            <p class="mb-2 dashboard-private-text truncated">Private Profile</p>
            <div class="position-relative profile-img-circle">
                <template v-if="profileUpdatedData">
                    <img :src="profileUpdatedData.company_image" @click="showImageCropperModal" alt=""
                         class="company-profile-photo rounded-circle cursor-pointer ml-2" width="100" height="100">
                </template>
                <template v-else-if="!companyImage">
                    <img :src="croppedImageSrc" @click="showImageCropperModal" alt=""
                         class="company-profile-photo rounded-circle cursor-pointer ml-2" width="100" height="100">
                </template>
                <template v-else>
                    <img :src="croppedImageSrc" @click="showImageCropperModal" alt=""
                         class="company-profile-photo rounded-circle cursor-pointer ml-2" width="100" height="100">
                </template>
                <div class="rounded-circle image-edit-icon" @click="showImageCropperModal">
                    <!--<i class="fas fa-pencil-alt"></i>-->
                    <img class="mt-1" src="/images/pencil-icon.png" title="" height="15px"/>
                </div>
            </div>
            <div class="pt-3 top-left-profile-text pr-0">
                <p class="mb-2 company-name truncated"><strong>Welcome, {{ (profileUpdatedData) ? profileUpdatedData.firstName : firstName }}</strong></p>
                <p class="mb-0 company-name truncated"><strong>{{ (profileUpdatedData) ? profileUpdatedData.company : company }}</strong></p>
            </div>
        </div>
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
                <ImageCropper :src="imageSrc" ref="imageCropper"/>
            </div>
            <div class="text-center" v-if="!imageSrc">Upload a photo. Then crop and adjust it to perfection.</div>
            <a class="float-right mt-4 image-rotate-icon" v-if="imageSrc" @click="imageRotate">Rotate <i
                class="fas fa-undo"></i></a>

            <template #modal-footer>
                <label class="btn btn-default">
                    <input type="file" name="audioFile" id="audioFile" ref="audioFile" v-if="!isUploading"
                           style="display:None;"
                           @change="onInputChange"
                           accept="image/*">
                    <span v-if="imageSrc">Change photo</span>
                    <span v-else>Upload photo</span>

                </label>
                <button v-if="imageSrc" class="btn btn-default" :disabled='isDisabled' @click="uploadImage">
                    {{isUploading ? "Uploading..." : "Save photo"}}
                </button>
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
                company: '',
                firstName: "",
                companyImage: '',
                croppedImageSrc: "",
                isDragging: false,
                dragCount: 0,
            };
        },
        props: ["profileUpdatedData"],
        methods: {
            showImageCropperModal() {
                this.$refs['image-cropper-modal'].show()
            },
            closeImageCropperModal: function () {
                let vi = this;
                if (this.imageSrc) {
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
                    }, this);

                } else {
                    this.$refs['image-cropper-modal'].hide()
                }
            },
            setImage: function (file) {
                // const file = e.target.files[0]
                if (!!file[0]) {
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
                            } else {
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
            this.company = user.company;
            this.firstName = user.firstName;
            this.companyImage = user.company_image;
            this.croppedImageSrc = ("" != user.company_image) ? user.company_image : "/images/image-placeholder-1.png"
        },
        components: {
            ImageCropper: () => import("../ImageCropper.vue"),
        }
    };
</script>
<style>
    .profile-img-circle {
        /*max-width: 120px;*/
    }

    .dashboard-private-text {
        color: #6d6d6d;
    }
    #image-cropper-modal___BV_modal_content_ {
        background: black !important;;
        color: white;
    }

    #image-cropper-modal___BV_modal_content_ .modal-title {
        margin-left: initial;
    }

    #image-cropper-modal___BV_modal_content_ .close {
        color: #ffffff;
    }

    #image-cropper-modal___BV_modal_footer_ .btn-default {
        background-color: #ffffff;
    }

    #image-cropper-modal___BV_modal_header_ {
        border-bottom: 1px solid #484e53;
    }

    #image-cropper-modal___BV_modal_footer_ {
        border-top: 1px solid #484e53;
    }

    .cropper-view-box {
        box-shadow: 0 0 0 1px #39f;
        border-radius: 50%;
        outline: 0;
    }

    .cropper-face {
        background-color: inherit !important;
    }

    .cropper-view-box {
        outline: inherit !important;
    }

    .company-profile-photo {
        border: 2px solid #bbafaf;
    }

    .image-edit-icon {
        background-color: #fff;
        border: 1px solid #cccccc63;
        cursor: pointer;
        height: 27px;
        position: absolute;
        left: calc(50% - 13px);
        top: 85px;
        padding-bottom: 2px;
        width: 27px;
    }
</style>
