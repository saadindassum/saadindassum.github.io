// A little script I cooked up based on the FarCry 3 loading screen.

//SOME CONSTS

/** Because a frame is abouuuut 42 milliseconds  at 24fps
 * And we're going for cinema here.
*/
const frame = 42;

// Main word will have index 0
// Top shadow will have index 1
// Bot shadow will have index 2
const mWord = 0;
const tShad = 1;
const bShad = 2;

//And now, onto the code

let wordBank = document.getElementById("word-bank");
let words = wordBank.innerHTML.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
}

// console.log(words);

// First, we're gonna wanna get all the on-screen words containers, so that we can mess with their inner HTML.
let crazyPlace = document.getElementById("crazy-place");
let splitScreen = crazyPlace.getElementsByTagName("*")[0];
let screens = new Array();

for (let i = 0; i < splitScreen.childNodes.length; i++) {
    if (splitScreen.childNodes[i].classList != null) {
        // console.log(`Class name when adding screens: ${splitScreen.childNodes[i].classList}`);
        screens.push(splitScreen.childNodes[i]);
    }
}
// Now we have both screens

/** wordContainers is a 2D array containing word containers and their word and shadow capsules.*/
let wordContainers = new Array();

//We're also gonna need to store the actual divs, which we don't in the array above
let wordContainerObjects = new Array();
//We're gonna get two sreens, but let's run through them with a for loop. Just in case.

for (let i = 0; i < screens.length; i++) {
    // Now we filter out those weird undefined children that come in for some reason
    let containerChildren = new Array();
    for (let j = 0; j < screens[i].childNodes.length; j++) {
        if (screens[i].childNodes[j].classList != null) {
            // console.log("Pushing to container children!");
            containerChildren.push(screens[i].childNodes[j]);
        }
    }
    //This following loop is the one that will have all the words
    for (let j = 0; j < containerChildren.length; j++) {
        wordContainerObjects.push(containerChildren[j]);
        // At the first level we have the word container. This itself needs to be an array.
        let wordContainer = new Array();
        // And now, we're adding one last layer to the nest
        let deepChildren = new Array();
        for (let k = 0; k < containerChildren[j].childNodes.length; k++) {
            if (containerChildren[j].childNodes[k].classList != null) {
                deepChildren.push(containerChildren[j].childNodes[k]);
            }
        }

        for (let k = 0; k < deepChildren.length; k++) {
            wordContainer.push(deepChildren[k]);
        }
        wordContainers.push(wordContainer);
    }
}
console.log(wordContainers);

initWords();

console.log('Container lengths match? ' + (wordContainers.length == wordContainerObjects.length));

for (let i = 0; i < wordContainers.length; i++) {
    triggerRandomAnimation(i);
}

/** Starts out the crazy place words by grabbing from the word bank */
function initWords() {
    for (let i = 0; i < wordContainers.length; i++) {
        //We grab a random word
        let word = words[Math.floor(Math.random() * words.length)];

        //Now we make sure every div within a container has that word.
        for (let j = 0; j < wordContainers[i].length; j++) {
            wordContainers[i][j].innerHTML = word;
            if (j > 0) {
                //We want to hide every shadow.
                wordContainers[i][j].style.opacity = "0";
            }
        }
    }
}

// ANIMATION

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/** Shows the top shadow of a word container
 * @param {number} index The word container to animate
 */
function showTopShadow(index) {
    wordContainers[index][tShad].style.opacity = "0.5";
}

/** Hides the top shadow of a word container
 * @param {number} index The word container to animate
 */
function hideTopShadow(index) {
    wordContainers[index][tShad].style.opacity = "0";
}

/** Shows the bottom shadow of a word container
 * @param {number} index The word container to animate
 */
function showBotShadow(index) {
    wordContainers[index][bShad].style.opacity = "0.5";
}

/** Hides the bottom shadow of a word container
 * @param {number} index The word container to animate
 */
function hideBotShadow(index) {
    wordContainers[index][bShad].style.opacity = "0";
}

/** Fades in an element over a number of frames to full opacity
 * @param {number} index The word container to animate
 * @param {number} frames How many frames to fade out over at 24 fps
 * @param {number} opacity Desired opacity to fade into, defaults to 0.5
 */
async function fadeIn(index, frames, opacity = 1) {
    // We want to find the distance between the current opacity and 1 and the desired opacity.
    let wordContainer = wordContainerObjects[index];
    let distance = opacity - parseFloat(wordContainer.style.opacity);
    // Now that we have that, we basically want to know how much to decrement
    // for every frame. Computers are bad at division so we'll have to use a
    // try catch
    let amount = (distance/frames).toFixed(2);
    // console.log('Amount: ' + amount);

    // Now let's loop until it's at the desired opacity;
    try {
        for (let i = 0; i < frames; i++) {
            let newValue = parseFloat(wordContainer.style.opacity) + amount;

            // As long as the new value is within our bounds, we set it.
            // Else we set our desired opacity.
            wordContainer.style.opacity = `${newValue < opacity ? newValue : opacity}`;
            await delay(frames * frame);
        }
        if (parseFloat(wordContainer.style.opacity) != opacity) {
            wordContainer.style.opacity = `${opacity}`;
        }
    } catch (e) {
        console.log('Exception caught on fade-in');
        wordContainer.style.opacity = `${opacity}`;
    }
    // And from what I understand we have to return a promise...
    // ¯\_(ツ)_/¯
    return wordContainer;
}

/** Fades out an element over a number of frames
 * @param {number} index The word container to animate
 * @param {number} frames How many frames to fade out over at 24fps
 * @param {number} opacity Desired opacity to fade out to, defaults to 0.5
 */
async function fadeOut(index, frames, opacity = 0.5) {
    // We want to find the distance between 1 and the desired opacity.
    let distance = 1 - opacity;
    // Now that we have that, we basically want to know how much to decrement
    // for every frame. Computers are bad at division so we'll have to use a
    // try catch
    let amount = (distance/frames).toFixed(2);

    // Now let's get the word container, and loop until it's at the desired opacity;
    let wordContainer = wordContainerObjects[index];
    try {
        for (let i = 0; i < frames; i++) {
            let newValue = parseFloat(wordContainer.style.opacity) - amount;
            // As long as the new value is within our bounds, we set it.
            // Else we set our desired opacity.
            wordContainer.style.opacity = `${newValue > opacity? newValue : opacity}`;
            await delay(frames * frame);
        }
        if (parseFloat(wordContainer.style.opacity) != opacity) {
            wordContainer.style.opacity = `${opacity}`;
        }
    } catch (e) {
        console.log('Exception caught on fade-out');
        wordContainer.style.opacity = `${opacity}`;
    }
    // And from what I understand we have to return a promise...
    // ¯\_(ツ)_/¯
    return wordContainer;
}

/**Changes the word in a word container
 * @param {number} index The word container to change
 */
function changeWord(index) {
    let word = words[Math.floor(Math.random() * words.length)];
    //Now we make sure every div within a container has that word.
    for (let j = 0; j < wordContainers[index].length; j++) {
        wordContainers[index][j].innerHTML = word;
    }
}


/** Triggers a random animation out of 4 animations
 * @param {number} index The word container to animate
 */

function triggerRandomAnimation(index) {
    let anim = Math.floor(Math.random() * 4);
    switch (anim) {
        case 0:
            animation0(index);
            break;
        case 1:
            animation1(index);
            break;
        case 2:
            animation2(index);
            break;
        default:
            animation3(index);
            break;
    }
}

//2 and 3 have half opacity, so we always have to consider that.

/** Triggers animation 0
 * @param {number} index The word container to animate
 */
async function animation0 (index) {
    await delay(7 * frame);
    parts = wordContainers[index];
    showTopShadow(index);
    await delay(2 * frame);
    hideTopShadow(index);
    showBotShadow(index);
    await delay(5 * frame);
    hideBotShadow(index);
    wordContainerObjects[index].style.opacity = index == 2 || index == 3 ? "0.1" : "0.5";
    await delay(frame);
    changeWord(index);
    showBotShadow(index);
    await delay(5 * frame);
    await fadeIn(index, 3, index == 2 || index == 3 ? 0.5 : 1);
    hideBotShadow(index);
    triggerRandomAnimation(index);
}

/** Triggers animation 1
 * @param {number} index The word container to animate
 */
async function animation1 (index) {
    wordContainerObjects[index].style.opacity = index == 2 || index == 3 ? "0.1" : "0.5";
    await delay(2 * frame);
    changeWord(index);
    await delay(2 * frame);
    await fadeIn(index, 3, index == 2 || index == 3 ? 0.5 : 1);
    triggerRandomAnimation(index);
}

/** Triggers animation 2
 * @param {number} index The word container to animate
 */
async function animation2 (index) {
    await delay(2 * frame);
    showTopShadow(index);
    await delay(2 * frame);
    hideTopShadow(index);
    showBotShadow(index);
    await delay(2 * frame);
    hideBotShadow(index);
    await delay(2 * frame);
    fadeOut(index, 3, index == 2 || index == 3 ? 0.1 : 0.5);
    wordContainerObjects[index].style.opacity = index == 2 || index == 3 ? "0.5" : "1";
    await delay(2 * frame);
    await fadeOut(index, 6, index == 2 || index == 3 ? 0.1 : 0.5);
    await delay(5 * frame);
    showTopShadow(index);
    await delay(5 * frame);
    hideTopShadow(index);
    showBotShadow(index);
    await delay(2 * frame);
    await fadeOut(index, 7, index == 2 || index == 3 ? 0.1 : 0.5);
    hideBotShadow(index);
    changeWord(index);
    await fadeIn(index, 3, index == 2 || index == 3 ? 0.5 : 1);
    triggerRandomAnimation(index);
}

/** Triggers animation 3
 * @param {number} index The word container to animate
 */
async function animation3 (index) {
    await delay(frame);
    showBotShadow(index);
    await delay(3 * frame);
    hideBotShadow(index);
    await delay(2 * frame);
    await fadeOut(index, 3, index == 2 || index == 3 ? 0.1 : 0.5);
    wordContainerObjects[index].style.opacity = index == 2 || index == 3 ? "0.5" : "1";
    await delay(7 * frame);
    await fadeOut(index, 3, index == 2 || index == 3 ? 0.1 : 0.5);
    showTopShadow(index);
    wordContainerObjects[index].style.opacity = index == 2 || index == 3 ? "0.5" : "1";
    await delay(5 * frame);
    hideTopShadow(index);
    showBotShadow(index);
    await delay(frame);
    await fadeOut(index, 5, index == 2 || index == 3 ? 0.1 : 0.5);
    changeWord(index);
    await fadeIn(index, 3, index == 2 || index == 3 ? 0.5 : 1);
    triggerRandomAnimation(index);
}