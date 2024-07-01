// for customized video - removes the poster element when the video loads.
let vid = document.getElementById("video-bg");
let poster = document.getElementById("poster-container");
vid.onloadeddata = function() {
    // console.log('Video has finished loading!');
    poster.remove();
};