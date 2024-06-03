// console.log("Crash stars imported!");
let starContainer = document.getElementById("star-container");

// The amount of space stars have around them in pixels
var horiSpace = 50;
// console.log(starContainer);
var vw = 3840;
var vh = 2160;

let windowX = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let windowY = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

if (windowX > vw) {
    vw = windowX;
}

if (windowY > vh) {
    vh = windowY;
}

// console.log(`Viewport Width: ${vw}`);
// console.log(`Viewport Height: ${vh}`);

var stars = new Array();

initStars();

function initStars() {
    for (var i = horiSpace/2; i < vw; i+= horiSpace) {
        currentStar = document.createElement('div');
        currentStar.setAttribute("class", "star");
        var x = i;
        var y = Math.floor(Math.random() * vh) + 1;
        currentStar.setAttribute("style", `left:${x}px;top:${y}px;`);
        starContainer.appendChild(currentStar);
    }
    stars = starContainer.childNodes;
}

//speed chosen because it's half of 24 fps
var speed = 84;
var scrollingBg = setInterval(moveStars, speed);

/**
 * Checks to see if the star is no longer in the viewport. If that is the case,
 * a new star is born <3 awwww, right?
 * If star is still within bounds, the star is moved to the right.
 * Keep in mind some star elements will still exist
 */
function moveStars() {
	for (var i=0; i < stars.length; i++) {

        // check if star is out of bounds
		var starX = parseInt(stars[i].style.left);

		if(starX > vw) {
			starContainer.removeChild(stars[i]);
            delete stars[i];
            
            //Now that we deleted the thing, we're adding a new star
            starContainer.appendChild(createZeroStar());
            // console.log(stars);
		} else {
            // move the stars
    		var newLeft = (parseInt(stars[i].style.left) + 1) + "px";
    		stars[i].style.left = newLeft;
        }
	}
}

/**
 * Returns a star at x = 0 with a random height
 */
function createZeroStar() {
    currentStar = document.createElement('div');
    currentStar.setAttribute("class", "star");
    var x = 0;
    var y = Math.floor(Math.random() * vh) + 1;
    currentStar.setAttribute("style", `left:${x}px;top:${y}px;`);

    return currentStar;
}