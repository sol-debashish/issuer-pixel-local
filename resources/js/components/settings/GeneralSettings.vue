<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-md-10 offset-md-2">
                <h4 class="py-3 settings-title-text">Update Profile Information</h4>

                <div class="form-group mb-5">
                    <img :src="croppedImageSrc"  alt="" class="rounded-circle" width="150" height="150">
                    <div class="rounded-circle image-edit-icon-settings text-center"  @click="showImageCropperModal">
                        <img class="" src="/images/pencil-icon.png" title="" height="15px"/>
                    </div>
                </div>
                <form v-on:submit.prevent="updateGeneralInformation">
                    <div class="form-group">
                        <label for="firstName" class="control-label font-weight-bold">First Name<span class="text-danger">*</span></label>
                        <input
                            type="text"
                            v-model="form.firstName"
                            class="form-control"
                            ref="firstName"
                            :class="{ 'is-invalid': $v.form.firstName.$error }"
                            id="firstName"
                            placeholder="Ex: John"
                            autocomplete="off"
                        />
                        <div v-if="!$v.form.firstName.required" class="invalid-feedback">First name is required.</div>
                        <span class="invalid-feedback" role="alert" v-if="errors.firstName">
                                <strong>{{ errors.firstName[0] }}</strong>
                            </span>
                    </div>
                    <div class="form-group">
                        <label for="lastName" class="control-label font-weight-bold">Last Name<span class="text-danger">*</span></label>
                        <input
                            type="text"
                            v-model="form.lastName"
                            class="form-control"
                            ref="lastName"
                            :class="{ 'is-invalid': $v.form.lastName.$error }"
                            id="lastName"
                            placeholder="Ex: Smith"
                            autocomplete="off"
                        />
                        <div v-if="!$v.form.lastName.required" class="invalid-feedback">Last name is required.</div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="control-label font-weight-bold">Email<span class="text-danger">*</span></label>
                        <input
                            type="email"
                            v-model="form.email"
                            class="form-control"
                            ref="email"
                            :class="{ 'is-invalid': $v.form.email.$error }"
                            id="email"
                            placeholder="Type in your email address"
                            autocomplete="off"
                        />
                        <div v-if="!$v.form.email.required" class="invalid-feedback">Email is required.</div>
                        <div v-if="!$v.form.email.customEmailValidate" class="invalid-feedback">The email is not
                            valid.
                        </div>

                    </div>
                    <div class="form-group">
                        <label for="companyName" class="control-label font-weight-bold">Company Name<span class="text-danger">*</span></label>
                        <input
                            type="text"
                            v-model="form.companyName"
                            class="form-control"
                            ref="companyName"
                            :class="{ 'is-invalid': $v.form.companyName.$error }"
                            id="companyName"
                            placeholder="Name of your organization"
                            autocomplete="off"
                        />
                        <div v-if="!$v.form.companyName.required" class="invalid-feedback">Company name is
                            required.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="companyPhone" class="control-label font-weight-bold">Company Phone Number<span class="text-danger">*</span></label>
                        <input
                            type="text"
                            v-model="form.companyPhone"
                            class="form-control"
                            ref="companyPhone"
                            :class="{ 'is-invalid': $v.form.companyPhone.$error }"
                            id="companyPhone"
                            placeholder="(XXX) XXX-XXXX"
                            autocomplete="off"
                            @input="acceptPhoneNumber"
                        />
                        <div v-if="$v.form.companyPhone.$error" class="invalid-feedback">
                            <span v-if="!$v.form.companyPhone.required">Company Phone Number is required</span>
                            <span v-else-if="!$v.form.companyPhone.phoneValid">Phone Number is not valid</span>
                        </div>
                    </div>
                    <p>If you would like to delete your user account or if you require any other support, please contact support@issuerpixel.com</p>
                    <div class="text-left mb-4">
                        <button class="btn btn-back-next" :disabled='submitButtonDisabled'>Save Changes</button>
                    </div>
                </form>

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
        <loader :is-visible="isLoading"></loader>
    </div>
</template>
<script>
    import User from "../../apis/User";
    import {required} from 'vuelidate/lib/validators'
    const customEmailValidate = function (value = "") {
        if (value != "") {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
        } else {
            return true;
        }
    }
    export default {
        data() {
            return {
                form: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    companyName: "",
                    companyPhone: "",
                    _token: "",
                },
                isLoading: false,
                submitButtonDisabled : false,
                errors: [],

                imageSrc: "",
                isDisabled: false,
                isUploading: false,
                croppedImageSrc: "",
                isDragging: false,
                dragCount: 0,
            };
        },
        validations: {
            form: {
                firstName: {required},
                lastName: {required},
                companyName: {required},
                companyPhone: {required,
                    phoneValid: function(value) {
                        const containsNumber = /[0-9]/.test(value)
                        const pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
                        return containsNumber && pattern
                    }},
                email: {required, customEmailValidate},
            }

        },
        methods: {
            acceptPhoneNumber() {
                var x = this.form.companyPhone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                this.form.companyPhone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            },
            updateGeneralInformation() {
                this.$v.form.companyName.$touch();
                this.$v.form.firstName.$touch();
                this.$v.form.lastName.$touch();
                this.$v.form.companyPhone.$touch();
                this.$v.form.email.$touch();
                if (this.$v.form.companyName.$invalid || this.$v.form.firstName.$invalid || this.$v.form.lastName.$invalid || this.$v.form.companyPhone.$invalid || this.$v.form.email.$invalid) {
                    if (this.$v.form.firstName.$invalid) {
                        this.$refs.firstName.focus();
                    } else if (this.$v.form.lastName.$invalid) {
                        this.$refs.lastName.focus();
                    } else if (this.$v.form.email.$invalid) {
                        this.$refs.email.focus();
                    } else if (this.$v.form.companyName.$invalid) {
                        this.$refs.companyName.focus();
                    } else if (this.$v.form.companyPhone.$invalid) {
                        this.$refs.companyPhone.focus();
                    }
                    return false;
                }
                this.isLoading = true
                this.submitButtonDisabled = true;
                this.form._token =  document.querySelector('meta[name="csrf-token"]').content;
                User.updateGeneralInformation(this.form)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        localStorage.setItem("info", JSON.stringify(response.data.data));
                        this.$emit('updateProfile', response.data.data)
                        toastr.success(response.data.success.message)
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        }
                        else if (error.response.status == 401) {
                            this.$emit('logout')
                        }
                        else{
                            toastr.error(error)
                        }
                    });
            },
            getGeneralInformation(){
                User.getGeneralInformation()
                    .then(response => {
                        var generalInfo = response.data.data
                        this.form.firstName = generalInfo.first_name
                        this.form.lastName = generalInfo.last_name
                        this.form.email = generalInfo.email
                        this.form.companyName = generalInfo.company.name
                        this.form.companyPhone = generalInfo.company.phone_number
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status == 401) {
                            this.$emit('logout')
                        }
                    });
            },

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
            this.isLoading = true
            this.getGeneralInformation()
            const user = JSON.parse(localStorage.getItem("info"))
            this.croppedImageSrc = ("" != user.company_image) ? user.company_image : "/images/image-placeholder-1.png"
        },
        components: {
            ImageCropper:() => import("../ImageCropper.vue"),
            loader: () => import("../Loader")
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
        left: 60px;
        top: 200px;
        bottom: -13px;
        padding-bottom: 2px;
        width: 27px;
    }
</style>
