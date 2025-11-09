//MOUSEOVER FUNCTIONALITY

$('.image-stack').mouseover(function() {
    if (window.innerWidth < 992) return;
    //console.log(this.id);
    //console.log('Project index: ' + projectMap.get(this.id));
    fadeInGlow(this.id);
    if (this.id != 'ast' && this.id != 'inh') {
        playAudioById(this.id);
        fadeIn(this.id);
    }

 });

 $('.image-stack').mouseleave(function() {
    fadeOutGlow(this.id);
    if (this.id != 'ast' && this.id != 'inh') {
        fadeOut(this.id);
    }
 });

var projectList = document.querySelectorAll('.image-stack');
var images = document.getElementsByClassName("glow-image");
var projectMap = new Map();

for (i = 0; i < projectList.length; i++) {
    projectMap.set(projectList[i].id, i);
    //console.log(projectMap);
    //console.log('getting ' + projectList[i].id + ': ' + projectMap.get(projectList[i].id));
}

// Set all volumes to 0 (because HTML decided it didn't wanna listen to me)

function setAllToZero() {
    for (i = 0; i < projectList.length; i++) {
        try {
            var sound = document.getElementById(projectList[i].id + '-audio');
            sound.volume = 0;
        } catch (e) {
            //console.log('Did not find audio for project ID ' + projectList[i].id);
        }
    }
}

// function ensureOthersFade(exceptionAudioId) {
//     for (i = 0; i < projectList.length; i++) {
//         try {
//             if (projectList[i].id != exceptionAudioId) {
//               fadeOut(projectList[i].id);
//             }
//         } catch (e) {
//             console.log('Did not find audio for project ID ' + projectList[i].id);
//         }
//     }
// }

//FADE FUNCTIONALITY
var faders = new Array(projectList.length);
var imageFaders = new Array(projectList.length);
var stopTimeouts = new Array(projectList.length);
var fadingIds = new Array(projectList.length);

function playAudioById(projectId) {
    var sound = document.getElementById(projectId + '-audio');
    sound.play();    
}

function fadeIn (projectId) {
    //console.log('attempting fade-in');
    var index = projectMap.get(projectId);
    //console.log('index: ' + index);
    clearInterval(faders[index]);
    clearTimeout(stopTimeouts[index]);
    var sound = document.getElementById(projectId + '-audio');

    faders[index] = setInterval(function () {

        try {
          sound.volume += 0.01;
        } catch (e) {
            sound.volume = 1;
            clearInterval(faders[index]);
        }
    }, 10);
}


function fadeOut (projectId) {
    var index = projectMap.get(projectId);
    clearInterval(faders[index]);
    var sound = document.getElementById(projectId + '-audio');
    var image = document.getElementById(projectId + '-glow');
    faders[index] = setInterval(function () {

        try {
          sound.volume = parseFloat(image.style.opacity) - 0.02;
        } catch (e) {
            console.log('Error caught!' + e);
            sound.volume = 0;
            clearInterval(faders[index]);
            sound.pause();
            stopTimeouts[index] = setTimeout(function() {
                resetSound(projectId);
            }, 2000);
        }
    }, 10);
}

function fadeInGlow(projectId) {
    //console.log('attempting fadeInGlow');
    var index = projectMap.get(projectId);
    //console.log('index: ' + index);
    clearInterval(imageFaders[index]);
    var image = document.getElementById(projectId + '-glow');
    //console.log('opacity: ' + image.style.opacity);
    imageFaders[index] = setInterval(function () {

        try {
          image.style.opacity = parseFloat(image.style.opacity) + 0.1;
          if (image.style.opacity >= 1) {
            image.style.opacity = 1;
            clearInterval(imageFaders[index]);
          }
        } catch (e) {
            image.style.opacity = 1;
            clearInterval(imageFaders[index]);
        }
    }, 10);

    // image.style.opacity += 0.5;
    // console.log('opacity: ' + image.style.opacity);
}

function fadeOutGlow(projectId) {
    var index = projectMap.get(projectId);
    clearInterval(imageFaders[index]);
    var image = document.getElementById(projectId + '-glow');

    imageFaders[index] = setInterval(function () {

        try {
          image.style.opacity -= 0.02;
          if (image.style.opacity <= 0) {
            image.style.opacity = 0;
            clearInterval(imageFaders[index]);
          }
        } catch (e) {
            image.style.opacity = 0;
            clearInterval(imageFaders[index]);
        }
    }, 10);
}

function resetSound(projectId) {
    var index = projectMap.get(projectId);
    var sound = document.getElementById(projectId + '-audio');
    fadingIds[index] = projectId;
    sound.currentTime = 0;
}

//On startup
setAllToZero();