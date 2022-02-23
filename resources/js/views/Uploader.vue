<script>
    export default {
        watch: {
            chunks(n, o) {
                if (n.length > 0) {
                    this.upload();
                }
                else{
                    this.showProgress = false
                    // this.showSuccess = true
                    this.showSelect =  true
                    window.onbeforeunload = function () {
                        // blank function do nothing
                    }
                }
            }
        },

        data() {
            return {
                title: '',
                file: null,
                chunks: [],
                uploaded: 0,
                showProgress: false,
                showSuccess: false,
                showSelect: true,
                uploadedChunkSize: 0
            };
        },

        computed: {
            progress() {
                return Math.floor((this.uploaded * 100) / this.file.size);
            },
            formData() {
                let formData = new FormData;

                formData.set('title', this.title);
                formData.set('is_last', this.chunks.length === 1);
                formData.set('file', this.chunks[0], `${this.file.name}.part`);

                return formData;
            },
            config() {
                return {
                    method: 'POST',
                    data: this.formData,
                    url: '/video/upload',
                    headers: {
                        'Content-Type': 'application/octet-stream'
                    },
                    onUploadProgress: event => {
                        // this.uploaded += event.loaded;
                        this.uploadedChunkSize = event.loaded;
                    }
                };
            }
        },

        methods: {
            refreshHandler(event){
                return "Are you sure you want to leave?";
            },
            select(event) {
                this.chunks = [];
                this.uploaded = 0;
                this.changeProgressValue;
                this.showSuccess = false;
                this.uploadedChunkSize = 0;
                this.showSelect =  false;
                this.file = event.target.files.item(0);
                if(this.file['type']==='video/mp4'){
                    this.showProgress = true;
                    this.createChunks();
                }else{
                    this.showProgress = false;
                    alert('select a video file');
                }
            },
            upload() {
                window.onbeforeunload = function() {
                    return "A XHR request is pending, are you sure you want to leave ?";
                }
                axios(this.config).then(response => {
                    this.chunks.shift();
                    this.uploaded += this.uploadedChunkSize;
                }).catch(error => {});
            },
            createChunks() {
                let size = 2048000, chunks = Math.ceil(this.file.size / size);

                for (let i = 0; i < chunks; i++) {
                    this.chunks.push(this.file.slice(
                        i * size, Math.min(i * size + size, this.file.size), this.file.type
                    ));
                }
            },
            changeProgressValue: function() {
                this.progress = 0;
            }
        }
    }
</script>

<template>
    <section>
        <div class="container  mt-5 mb-5">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Video Title" id="title" v-model="title">
                    </div>

                    <div class="form-group">
                        <input type="file" v-if="showSelect" @change="select">
                        <template  v-if="showProgress">
                            <progress :value="progress" :max="100"></progress>&nbsp; {{progress}}% uploaded
                        </template>
                        <template  v-if="showSuccess">
                            <span>Upload completed</span>
                        </template>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>
