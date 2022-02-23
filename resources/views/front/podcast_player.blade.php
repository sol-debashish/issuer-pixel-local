<!DOCTYPE html>
<html>
	<head>
		<title>AmplitudeJS Testing</title>

		<!-- Include Amplitude JS -->
		<script type="text/javascript" src="{{asset('podcast-player/amplitude.js')}}"></script>

		<!-- Include Style Sheet -->
		<link rel="stylesheet" type="text/css" href="{{asset('podcast-player/css/app.css')}}"/>
	</head>
	<body>
		<!-- Blue Playlist Container -->
		<div id="blue-playlist-container">

			<!-- Amplitude Player -->
			<div id="amplitude-player">

				<!-- Left Side Player -->
				<div id="amplitude-left">
					<img data-amplitude-song-info="cover_art_url"/>
					<div id="player-left-bottom">
						<div id="time-container">
							<span class="current-time">
								<span class="amplitude-current-minutes" ></span>:<span class="amplitude-current-seconds"></span>
							</span>
							<div id="progress-container">
								<input type="range" class="amplitude-song-slider"/>
								<progress id="song-played-progress" class="amplitude-song-played-progress"></progress>
								<progress id="song-buffered-progress" class="amplitude-buffered-progress" value="0"></progress>
							</div>
							<span class="duration">
								<span class="amplitude-duration-minutes"></span>:<span class="amplitude-duration-seconds"></span>
							</span>
						</div>

						<div id="control-container">
							<div id="repeat-container">
								<div class="amplitude-repeat" id="repeat"></div>
								<div class="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>
							</div>

							<div id="central-control-container">
								<div id="central-controls">
									<div class="amplitude-prev" id="previous"></div>
									<div class="amplitude-play-pause" id="play-pause"></div>
									<div class="amplitude-next" id="next"></div>
								</div>
							</div>

							<div id="volume-container">
								<div class="volume-controls">
									<div class="amplitude-mute amplitude-not-muted"></div>
									<input type="range" class="amplitude-volume-slider"/>
									<div class="ms-range-fix"></div>
								</div>
								<div class="amplitude-shuffle amplitude-shuffle-off" id="shuffle-right"></div>
							</div>
						</div>

						<div id="meta-container">
							<span data-amplitude-song-info="name" class="song-name"></span>

							<div class="song-artist-album">
								<span data-amplitude-song-info="artist"></span>
								<span data-amplitude-song-info="album"></span>
							</div>
						</div>
					</div>
				</div>
				<!-- End Left Side Player -->

				<!-- Right Side Player -->
				<div id="amplitude-right">
					<div class="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="0">
						<div class="song-now-playing-icon-container">
							<div class="play-button-container">

							</div>
							<img class="now-playing" src="{{asset('podcast-player/img/now-playing.svg')}}"/>
						</div>
						<div class="song-meta-data">
							<span class="song-title">Music File 1</span>
							<span class="song-artist">Artist</span>
						</div>
					</div>
					<div class="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="1">
						<div class="song-now-playing-icon-container">
							<div class="play-button-container">

							</div>
							<img class="now-playing" src="{{asset('podcast-player/img/now-playing.svg')}}"/>
						</div>
						<div class="song-meta-data">
							<span class="song-title">Music File 2</span>
							<span class="song-artist">Artist</span>
						</div>
					</div>
					<div class="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="2">
						<div class="song-now-playing-icon-container">
							<div class="play-button-container">

							</div>
							<img class="now-playing" src="{{asset('podcast-player/img/now-playing.svg')}}"/>
						</div>
						<div class="song-meta-data">
							<span class="song-title">Music File 3</span>
							<span class="song-artist">Artist</span>
						</div>
					</div>
					
				</div>
				<!-- End Right Side Player -->
			</div>
			<!-- End Amplitdue Player -->
		</div>
		
		<!--
			Include UX functions JS

			NOTE: These are for handling things outside of the scope of AmplitudeJS
		-->
		<script>
                /*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	continue_next: false,
	"songs": [
		{
			"name": "Risin' High (feat Raashan Ahmad)",
			"artist": "Ancient Astronauts",
			"album": "We Are to Answer",
			"url": "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
		},
		{
			"name": "The Gun",
			"artist": "Lorn",
			"album": "Ask The Dust",
			"url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
		},
		{
			"name": "Anvil",
			"artist": "Lorn",
			"album": "Anvil",
			"url": "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
		}
	]
});
                </script>
	</body>
</html>
