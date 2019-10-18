window.onload = ()=>{
    //MUsic information constructor function.
    let files = function(musicSource, Image, title, track){
        this.musicSource = musicSource;
        this.Image = Image; 
        this.title = title;
        this.track = track;
    }

    let musicSrc = document.querySelectorAll('audio source');
    let musicS = [];
    let musicTitle = [];
    let imageSrc = [];
    let musicTrack = [];

    //Take out all the data from the audio source file and put it to the rellevant array
    for (let i = 0; i < musicSrc.length; i++) {
        musicS.push(musicSrc[i].dataset.src);
        musicTitle.push(musicSrc[i].dataset.title);
        imageSrc.push(musicSrc[i].dataset.img);
        musicTrack.push(musicSrc[i].dataset.track);
    }

    // Add the music file.
    m1 = new files(musicS[0], imageSrc[0], musicTitle[0], musicTrack[0]);
    m2 = new files(musicS[1], imageSrc[1], musicTitle[1], musicTrack[1]);
    m3 = new files(musicS[2], imageSrc[2], musicTitle[2], musicTrack[2]);

    // Creat music playlist
    let playList = [m1, m2, m3];
    let audio = document.querySelector('audio');
    let playit = 0;
    let playing = playList[playit];
    audio.setAttribute('src', playing.musicSource);
    audio.play();
    
    function nextPrev() {
    // Put the music information on the DOM
        document.querySelector('.singer-image').src = playing.Image;
        document.querySelector('.music-title').innerHTML = playing.track +'. '+ playing.title;
    }

    //Working on the controllers
    (function(){
        let playBtn = document.querySelector('.fa-play-circle');
        let pauseBtn = document.querySelector('.fa-pause-circle');
        let nextBtn = document.querySelector('.fa-forward');
        let priviesBtn = document.querySelector('.fa-backward');
        playBtn.addEventListener('click', ()=>{
            audio.play();
       });

        pauseBtn.addEventListener('click', ()=>{
            audio.pause();
        });
        
        nextBtn.addEventListener('click', ()=>{
            if(playit < playList.length){
                playit++; 
            }if (playit >= playList.length){
                playit = 0;
            }
            playing = playList[playit];
            audio.setAttribute('src',playing.musicSource);
            audio.play();
            nextPrev();

        });

        priviesBtn.addEventListener('click',()=> {
            if (playit > 0) {
                playit--;
            }else if(playit <= 0){
                playit = playList.length-1;
            }
            
            playing = playList[playit];
            audio.setAttribute('src',playing.musicSource);
            audio.play();
            nextPrev();
        });
        
        nextPrev();
    })();
    

}