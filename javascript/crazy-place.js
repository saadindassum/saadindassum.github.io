// A little script I cooked up based on the FarCry 3 loading screen.
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

/** Starts out the crazy place words by grabbing from the word bank */
function initWords() {
    for (let i = 0; i < wordContainers.length; i++) {
        //We grab a random word
        let word = words[Math.floor(Math.random() * words.length)];

        //Now we make sure every div within a container has that word.
        for (let j = 0; j < wordContainers[i].length; j++) {
            wordContainers[i][j].innerHTML = word;
        }
    }
}