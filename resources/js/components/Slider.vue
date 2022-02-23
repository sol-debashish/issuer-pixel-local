<template>
        <b-carousel
                id="heroCarousel"
                class="carousel-fade"
                v-model="slide"
                :interval="5000"
                controls
                indicators
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >
            <!-- Slides with custom text -->
<!--            <b-carousel-slide style="background-image: url('images/slide/slide-1.jpg')">-->
            <b-carousel-slide>
                <div class="carousel-container">
                    <div class="container slider-content">
                        <h3 class="animate__animated animate__fadeInDown">Welcome to </h3>
                        <h2>Issuer Pixel</h2>
                    </div>
                </div>
            </b-carousel-slide>
<!--            <b-carousel-slide style="background-image: url('images/slide/slide-1.jpg')">-->
<!--                <div class="carousel-container">-->
<!--                <div class="container slider-content">-->
<!--                    <h3 class="animate__animated animate__fadeInDown">Welcome to </h3>-->
<!--                    <h2>Issuer Pixel</h2>-->
<!--                    <p class="animate__animated animate__fadeInUp">The only Platform leveraging the power of video-->
<!--                        to connect investors with today’s top market movers</p>-->
<!--                    <a href="#" class="btn-get-started animate__animated animate__fadeInUp scrollto">Take a Look</a>-->
<!--                </div>-->
<!--                </div>-->
<!--            </b-carousel-slide>-->
        </b-carousel>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            }
        }
    }
</script>
