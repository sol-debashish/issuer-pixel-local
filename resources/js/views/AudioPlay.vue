<template>
    <div id="">
        <img class="img-fluid" data-amplitude-song-info="cover_art_url"/>
        <div class="bottom-container">
            <progress class="amplitude-song-played-progress" id="song-played-progress"></progress>

            <div class="time-container">
          <span class="current-time">
            <span class="amplitude-current-minutes"></span>:<span class="amplitude-current-seconds"></span>
          </span>
                <span class="duration">
            <span class="amplitude-duration-minutes"></span>:<span class="amplitude-duration-seconds"></span>
          </span>
            </div>

            <div class="control-container">
                <div class="amplitude-play-pause" id="play-pause"></div>
                <div class="meta-container">
                    <span data-amplitude-song-info="name" class="song-name"></span>
                    <span data-amplitude-song-info="artist"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import sidebar from '../components/Sidebar'
    import Amplitude from 'amplitudejs'
    export default {
        data() {
            return {
            };
        },
        props: ['audioUrl','audioName'],

        mounted : function() {
            Amplitude.init({
                "bindings": {
                    37: 'prev',
                    39: 'next',
                    32: 'play_pause'
                },
                "songs": [
                    {
                        // "name": "Risin' High (feat Raashan Ahmad)",
                        // "artist": "Ancient Astronauts",
                        // "album": "We Are to Answer",
                        "name": this.audioName,
                        "url": this.audioUrl,
                        // "url": "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
                        "cover_art_url": "/images/audio_bg.jpg"
                    }
                ]
            });

            // window.onkeydown = function(e) {
            //     return !(e.keyCode == 32);
            // };

            /*
              Handles a click on the song played progress bar.
            */
            document.getElementById('song-played-progress').addEventListener('click', function( e ){
                var offset = this.getBoundingClientRect();
                var x = e.pageX - offset.left;

                Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
            });
        },
        beforeDestroy() {
            Amplitude.stop();
            Amplitude.currentTime = 0;
            Amplitude.init({
                "bindings": {
                },
                "songs": [
                    {
                        "name": '',
                        "url": '',
                    }
                ]
            });
        },
        components : {sidebar}
    };
</script>
<style>
    div.control-container {
        margin-top: 10px;
        padding-bottom: 10px; }
    div.control-container div.amplitude-play-pause {
        width: 74px;
        height: 74px;
        cursor: pointer;
        float: left;
        margin-left: 10px; }
    div.control-container div.amplitude-play-pause.amplitude-paused {
        background: url("../assets/play.svg");
        background-size: cover; }
    div.control-container div.amplitude-play-pause.amplitude-playing {
        background: url("../assets/pause.svg");
        background-size: cover; }
    div.control-container div.meta-container {
        float: left;
        width: calc(100% - 84px);
        text-align: center;
        color: white;
        margin-top: 10px; }
    div.control-container div.meta-container span[data-amplitude-song-info="name"] {
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        color: #fff;
        display: block; }
    div.control-container div.meta-container span[data-amplitude-song-info="artist"] {
        font-family: "Open Sans", sans-serif;
        font-weight: 100;
        font-size: 14px;
        color: #fff;
        display: block; }
    div.control-container:after {
        content: "";
        display: table;
        clear: both; }

    /*
      Small only
    */
    @media screen and (max-width: 39.9375em) {
        div.control-container div.amplitude-play-pause {
            background-size: cover;
            width: 64px;
            height: 64px; }
        div.control-container div.meta-container {
            width: calc(100% - 74px); } }
    /*
      Medium only
    */
    /*
      Large Only
    */
    div.time-container {
        opacity: 0.5;
        font-family: 'Open Sans';
        font-weight: 100;
        font-size: 12px;
        color: #fff;
        height: 15px; }
    div.time-container span.current-time {
        float: left;
        margin-left: 5px; }
    div.time-container span.duration {
        float: right;
        margin-right: 5px; }

    /*
      Small only
    */
    /*
      Medium only
    */
    /*
      Large Only
    */
    progress.amplitude-song-played-progress {
        background-color: #313252;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 15px;
        display: block;
        cursor: pointer;
        border: none; }
    progress.amplitude-song-played-progress:not([value]) {
        background-color: #313252; }

    progress[value]::-webkit-progress-bar {
        background-color: #313252; }

    progress[value]::-moz-progress-bar {
        background-color: #00a0ff; }

    progress[value]::-webkit-progress-value {
        background-color: #00a0ff; }

    /*
      Small only
    */
    /*
      Medium only
    */
    /*
      Large Only
    */
    /*
      3. Layout
    */
    div.bottom-container {
        background-color: #202136;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px; }

    /*
      Small only
    */
    /*
      Medium only
    */
    /*
      Large Only
    */
    div#single-song-player {
        border-radius: 10px;
        margin: auto;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        margin-top: 50px;
        width: 100%;
        max-width: 460px;
        -webkit-font-smoothing: antialiased; }
    div#single-song-player img[data-amplitude-song-info="cover_art_url"] {
        width: 100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px; }

    a.learn-more{
        display: block;
        width: 300px;
        margin: auto;
        margin-top: 30px;
        text-align: center;
        color: white;
        text-decoration: none;
        background-color: #202136;
        font-family: "Lato", sans-serif;
        padding: 20px;
        font-weight: 100;
    }
</style>
