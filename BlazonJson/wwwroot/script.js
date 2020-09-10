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

    var video = document.querySelector('.video');
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
function video0() {

    var video = document.querySelector('.video');
    var juice = document.querySelector('.orange-juice');
    var btn = document.getElementById('play-pause');
    var source = document.getElementsByTagName('source');
    source[0].src = '.\video\WIN_20200816_16_54_49_Pro.mp4'
    video.load()
    juice.style.width = '1px'
}

function video1() {

    var video = document.querySelector('.video');
    var juice = document.querySelector('.orange-juice');
    var btn = document.getElementById('play-pause');
    var source = document.getElementsByTagName('source');
    source[0].src = './video/1.mp4'
    video.load()
    juice.style.width = '1px'
}

function video2() {
    var video = document.querySelector('.video');
    var juice = document.querySelector('.orange-juice')
    var btn = document.getElementById('play-pause');
    var source = document.getElementsByTagName('source');
    source[0].src = './video/2.mp4'
    video.load()
    juice.style.width = '1px'
}

function video3() {
    var video = document.querySelector('.video');
    var juice = document.querySelector('.orange-juice')
    var btn = document.getElementById('play-pause');
    var source = document.getElementsByTagName('source');
    source[0].src = './video/3.mp4'
    video.load()
    juice.style.width = '1px'
}

function listener(ListVideo) {


    var lista = ready;
    if (lista) {
        alert('listo')
    }
    else {
        var video = document.querySelector('.video');
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


window.autoplay = () => {
    var myvid = document.getElementById('video');
    var myvids = [
        "http://www.w3schools.com/html/mov_bbb.mp4",
        "http://www.w3schools.com/html/movie.mp4"
    ];
    var activeVideo = 0;

    myvid.addEventListener('ended', function (e) {
        // update the new active video index
        activeVideo = (++activeVideo) % myvids.length;

        // update the video source and play
        myvid.src = myvids[activeVideo];
        myvid.play();
    });
};

