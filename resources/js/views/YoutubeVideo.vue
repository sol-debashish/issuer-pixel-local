<template>
    <div id="watch-now" class="mt-5">
        <Navigation />
        <section id="recommanded-for-you" class="recommanded-for-you ">
        <div class="container mt-3" data-aos="fade-up">
            <h2 class="text-center mb-5">Youtube video</h2>
            <div class="row">
                <article class="col-sm-3" v-for="video in videos">
                    <div class="container">
                        <div class="row">
                            <a href="#" class="mb-3">
                                <div>
                                    <img v-b-modal.modal-view-video @click="watchVideo" :src="'https://i.ytimg.com/vi/'+ video.video_id +'/mqdefault.jpg'" alt="" width="255"  height="255" class="img-fluid  img-responsive video-btn"
                                         data-toggle="modal" :data-src="'https://www.youtube.com/embed/'+ video.video_id +'?autoplay=1'" data-target="#myModal"
                                    >
<!--                                    <img :src="video.photoUrl" alt="" class="img-fluid  img-responsive">-->
                                    <div class="play_btn"></div>
                                </div>
                            </a>

                            <ul class="list-unstyled">
                                <li>{{video.title}}</li>
                                <li>{{video.created_at}}</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

        <b-modal
            id="modal-view-video"
            ref="modal"
            hide-footer>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" :src="videoSrc"  id="ytplayer" type="text/html" width="640" height="360" frameborder="0"></iframe>
                </div>
        </b-modal>

<!--        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--            <div class="modal-dialog" role="document">-->
<!--                <div class="modal-content">-->
<!--                    <div class="modal-body">-->

<!--                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
<!--                            <span aria-hidden="true">&times;</span>-->
<!--                        </button>-->
<!--                        &lt;!&ndash; 16:9 aspect ratio &ndash;&gt;-->
<!--                        <div class="embed-responsive embed-responsive-16by9">-->
<!--                            <iframe class="embed-responsive-item" :src="videoSrc"  id="ytplayer" type="text/html" width="640" height="360" frameborder="0"></iframe>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>
<script>
    import Navigation from "../components/Navigation.vue";
    export default {
        data() {
            return {
                videos : [],
                isLoading: false,
                videoSrc: ''
            }
        },
        methods:{
            getYoutubeVideoList : function(){
                axios.get('api/youtube-video')
                    .then(response => {
                        this.videos = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            watchVideo: function (event) {
                this.videoSrc  = event.target.getAttribute('data-src');
            }
        },
        created: function () {
            this.isLoading = true
            this.getYoutubeVideoList();
        },
        components : {Navigation}
    }
</script>
