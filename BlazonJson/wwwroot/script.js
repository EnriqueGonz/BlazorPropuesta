var ready = false;




function loadVideo(ListVideo) {
    console.log(ListVideo)
    var myvid = document.getElementById('video');
    var myvids = ListVideo
    var activeVideo = 0;

    myvid.addEventListener('ended', function (e) {
        // update the new active video index
        activeVideo = (++activeVideo) % myvids.length;

        // update the video source and play
        myvid.src = myvids[activeVideo];
        myvid.load();
    });
}

function tooglePP() {

    var video = document.getElementById('video');
    var juice = document.querySelector('.orange-juice')
    var btn = document.getElementById('play-pause');

    if (video.paused) {
        btn.className = 'pause';
     
        video.play();
    }
    else {
        btn.className = 'play';
        video.pause();
        
    }
}


function listener(ListVideo) {


    var lista = ready;
    if (lista) {
        alert('listo')
    }
    else {
        var video = document.getElementById('video');
        var juice = document.querySelector('.orange-juice')
        var btn = document.getElementById('play-pause');


        video.addEventListener('timeupdate', function () {
            var juicepos = video.currentTime / video.duration;
            juice.style.width = juicepos * 100 + "%";

            if (video.ended) {
                btn.className = 'play'
                loadVideo(ListVideo)
                

            }
        })

        lista = true;
    }

}


window.convertArray = () => {
    const video = document.getElementById('video');
    const timeElapsed = document.getElementById('time-elapsed');
    const duration = document.getElementById('duration');


    function formatTime(timeInSeconds) {
        const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

        return {
            minutes: result.substr(3, 2),
            seconds: result.substr(6, 2),
        };
    };
    function initializeVideo() {
        console.log("llege aqui")
        const videoDuration = Math.round(video.duration);
        const time = formatTime(videoDuration);
        duration.innerText = `${time.minutes}:${time.seconds}`;
        duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
    }
    function updateTimeElapsed() {
        const time = formatTime(Math.round(video.currentTime));
        timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
        timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
    }
    video.addEventListener('loadedmetadata', initializeVideo);
    video.addEventListener('timeupdate', updateTimeElapsed);
};

window.volumen = () => {
    const video = document.getElementById('video');
    const volume = document.getElementById('volume');
    function updateVolume() {
        if (video.muted) {
            video.muted = false;
        }

        video.volume = volume.value;
    }
    volume.addEventListener('input', updateVolume);
};
window.updateProgressBar = () => {

    barSize = document.getElementById('defaultBar').offsetWidth;
    myMovie = document.getElementById('video');
    bar = document.getElementById('defaultBar');
    progressBar = document.getElementById('progressBar');
    bar.addEventListener('click', clickedBar, false);


    function clickedBar(e) {
        var mouseX =event.offsetX 
        var newtime = mouseX * myMovie.duration / barSize;
        myMovie.currentTime = newtime;
        progressBar.style.width = mouseX + 'px';
    }


};

function animatePlayback() {
    const playbackAnimation = document.getElementById('playback-animation');
    var btn = document.getElementById('play');
    if (video.paused) {
        btn.className = 'play';
   
    }
    else {
        btn.className = 'pause';

    }
    playbackAnimation.animate([
        {
            opacity: 1,
            transform: "scale(1)",
        },
        {
            opacity: 0,
            transform: "scale(1.3)",
        }], {
        duration: 500,
    });
}


window.menu = () => {
    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
        }

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }

        var accordion = new Accordion($('#accordion'), false);
    });
};

<<<<<<< Updated upstream
function toggleFullScreen() {
    var video = document.querySelector('.video');
    vid = document.getElementById("video");
    fullscreenbtn = document.getElementById("fullscreenbtn");
    videoContainer = document.getElementById('video-container')
      var btn = document.getElementById('fullscreenbtn');
    if (document.fullscreenElement) {
        fullscreenbtn.className = 'play';
            document.exitFullscreen();
        } else {
            videoContainer.requestFullscreen();

        fullscreenbtn.className = 'pause';
        }

}
=======



>>>>>>> Stashed changes
