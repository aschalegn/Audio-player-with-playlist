//Track constructor function.
function Track(track, title, src, Image, artist) {
    this.src = src;
    this.Image = Image;
    this.title = title;
    this.track = track;
    this.artist = artist;
}

let musicSrc = document.querySelectorAll('audio source');
let playList = [];
musicSrc.forEach((src, i) => {
    let truck = new Track(src.dataset.track, src.dataset.title, src.dataset.src, src.dataset.img, src.dataset.title.artist);
    playList.push(truck);
});

// Creat music playlist
let audio = document.querySelector('audio');
let playing = playList[0];
let playit = 0
audio.setAttribute.src = playing.src;
document.querySelector('.singer-image').src = playing.Image;
document.querySelector('.music-title').innerText = playing.track + '. ' + playing.title;

function nextPrev() {
    playing = playList[playit];
    audio.pause();
    audio.src = playing.src;
    audio.play();
    // Put the track information on the DOM
    document.querySelector('.singer-image').src = playing.Image;
    document.querySelector('.music-title').innerText = playing.track + '. ' + playing.title;
}

//Working on the controllers
function Play() {
    let playBtn = document.querySelector('.fa-play-circle');
    let pauseBtn = document.querySelector('.fa-pause-circle');
    let nextBtn = document.querySelector('.fa-forward');
    let priviesBtn = document.querySelector('.fa-backward');
    playBtn.addEventListener('click', () => {
        audio.play();
    });
    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });
    nextBtn.addEventListener('click', () => {
        if (playit < playList.length) {
            playit++;
        } if (playit >= playList.length) {
            playit = 0;
        }
        nextPrev();
    });
    priviesBtn.addEventListener('click', () => {
        if (playit > 0) {
            playit--;
        } else if (playit <= 0) {
            playit = playList.length - 1;
        }
        nextPrev();
    });
}
Play();