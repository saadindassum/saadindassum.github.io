//MOUSEOVER FUNCTIONALITY

$('.project-image').mouseover(function() {
    //console.log(this.id);
    //console.log('Project index: ' + projectMap.get(this.id));
    if (this.id != 'ast') {
        playAudioById(this.id);
        fadeIn(this.id);
    }

 });

 $('.project-image').mouseleave(function() {
    //console.log("left " + this.id);
    if (this.id != 'ast') {
        fadeOut(this.id);
    }
 });

var projectList = document.querySelectorAll('.project-image');
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
var stopTimeouts = new Array(projectList.length);
var fadingIds = new Array(projectList.length);

function playAudioById(projectId) {
    var sound = document.getElementById(projectId + '-audio');
    sound.play();    
}

function fadeIn (projectId) {
    var index = projectMap.get(projectId);
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

    faders[index] = setInterval(function () {

        try {
          sound.volume -= 0.02;
        } catch (e) {
            sound.volume = 0;
            clearInterval(faders[index]);
            sound.pause();
            stopTimeouts[index] = setTimeout(function() {
                resetSound(projectId);
            }, 2000);
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