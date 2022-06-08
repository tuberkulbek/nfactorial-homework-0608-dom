const leftButton = document.getElementById("btn-left")
const rightButton = document.getElementById("btn-right")

const video = document.getElementById("video")
const backgroundVideo = document.getElementById("background-video")

const musicPlay = document.getElementById("music-play")
const prevTrack = document.getElementById("prev-track")
const nextTrack = document.getElementById("next-track")

const audio = document.getElementById("audio")
const trackName = document.getElementById("track-name")

const trackList = ["Mo bamba", "Never Gonna Give You Up", "Toxicity"]
const trackList1 = ["Mo%20bamba", "Never%20Gonna%20Give%20You%20Up", "Toxicity"]
let num = 0;

const progressBar = document.getElementById("progressBar")
const currentTime = document.getElementById("currentTime")
const durationTime = document.getElementById("durationTime")

const tyga = document.getElementById("tyga")
const first = document.getElementById("first")
const second = document.getElementById("second")
const remix = document.getElementById("remix")
const pause = document.getElementById("pause")

let attribute = backgroundVideo.getAttribute("src")

const remixOn = (buttons) => {
    let idToSrc = buttons.getAttribute("id")
    remix.setAttribute("src", `assets/${idToSrc}.mp3`)
    remix.play()
}

const playDrums = () => {
    if(attribute === "assets/drake_dance.mp4"){
        backgroundVideo.setAttribute("src", "assets/videoplayback.mp4")
    }
    attribute = backgroundVideo.getAttribute("src")
};

const playDrake = () => {
    if(attribute === "assets/videoplayback.mp4"){
        backgroundVideo.setAttribute("src", "assets/drake_dance.mp4")
    }
    attribute = backgroundVideo.getAttribute("src")
};

const playPause = (video) =>{
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

const playMusic = () => {
    if(audio.paused){
        audio.play()
        musicPlay.setAttribute("class", "fi fi-br-pause")
        trackName.innerText = trackList[num]
    }else{
        audio.pause()
        musicPlay.setAttribute("class", "fi fi-br-play")
    }
}

const next_track = () => {
    if(audio.getAttribute("src") === "assets/Toxicity.mp3"){
        alert("it was the last song")
    }else{
        num++;
        audio.setAttribute("src", `assets/${trackList1[num]}.mp3`)
        audio.play()
        musicPlay.setAttribute("class", "fi fi-br-pause")
        trackName.innerText = trackList[num]
    }
}

const prev_track = () => {
    if(audio.getAttribute("src") === "assets/Mo%20bamba.mp3"){
        alert("it was the firs song")
    }else{
        num--;
        audio.setAttribute("src", `assets/${trackList1[num]}.mp3`)
        audio.play()
        musicPlay.setAttribute("class", "fi fi-br-pause")
        trackName.innerText = trackList[num]
    }
}

function progressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;

    currentTime.textContent = formatTime(audio.currentTime);
    durationTime.textContent = formatTime(audio.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function changeProgressBar() {
    audio.currentTime = progressBar.value;
}

pause.addEventListener("click", ()=>{remix.pause()})

tyga.addEventListener("click", ()=>{remixOn(tyga)})
first.addEventListener("click", ()=>{remixOn(first)})
second.addEventListener("click", ()=>{remixOn(second)})

progressBar.addEventListener("click", changeProgressBar);

prevTrack.addEventListener("click", prev_track)
nextTrack.addEventListener("click", next_track)

musicPlay.addEventListener("click", playMusic)

backgroundVideo.addEventListener("click", ()=>{playPause(backgroundVideo)})
video.addEventListener("click", ()=>{playPause(video)})

leftButton.addEventListener("click", playDrake)
rightButton.addEventListener("click", playDrums)