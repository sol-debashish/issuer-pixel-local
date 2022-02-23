<template>
    <div>
        <div class="img-container">
<!--            <p>upload your image</p>-->
            <img ref="image" :src="src" crossorigin>
        </div>
    </div>
</template>

<script>
    import Cropper from "cropperjs";
    export default {
        name: "ImageCropper",
        data() {
            return {
                cropper: {},
                destination: {},
                image: {},
                aspectRatio: 1
            }
        },
        props: {
            src: String,
            customAspectRatio: String
        },
        mounted() {
            this.image = this.$refs.image;
            this.cropper = new Cropper(this.image, {
                zoomable: false,
                scalable: true,
                aspectRatio:  this.customAspectRatio ? this.customAspectRatio : this.aspectRatio,
            });
        }
    }
</script>

<style scoped>
    .img-container {
        height: 40vh;
    }
</style>
