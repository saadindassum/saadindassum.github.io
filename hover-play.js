var code = "ris";
//you can automate these to play by code
var audio = document.getElementById(code + "-audio");
audio.volume = 0;

var image = document.getElementById(code + "-image");

image.onmouseover = function() {
    audio.play();
    fadeIn('ris-audio');
}

image.onmouseleave = function() {
    fadeOut('ris-audio');
}

//FADE FUNCTIONALITY

var fader;
var stopTimeout;

function fadeIn (audiosnippetId) {
    clearInterval(fader);
    clearTimeout(stopTimeout);
    var sound = document.getElementById(audiosnippetId);

    fader = setInterval(function () {

        try {
          sound.volume += 0.02;

        } catch (e) {
            sound.volume = 1;
            clearInterval(fader);
        }
    }, 10);
}


function fadeOut (audiosnippetId) {
    clearInterval(fader);
    var sound = document.getElementById(audiosnippetId);

    fader = setInterval(function () {

        try {
          sound.volume -= 0.02;

        } catch (e) {
            sound.volume = 0;
            clearInterval(fader);
            sound.pause();
            stopTimeout = setTimeout(function() {
                resetSound(audiosnippetId);
            }, 2000);
        }
    }, 10);
}

function resetSound(audiosnippetId) {
    var sound = document.getElementById(audiosnippetId);
    sound.currentTime = 0;
}