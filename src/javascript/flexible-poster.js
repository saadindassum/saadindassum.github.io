// for customized video - removes the poster element when the video loads.
let vid = document.getElementById("video-banner");
let poster = document.getElementById("fallback-banner");
vid.onloadeddata = function () {
    document.querySelector('#fallback-banner').style.display = 'none';
};