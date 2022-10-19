/* 	C O M P A T I B L E  H T M L

			        <h1 id="vidHeading"><br class="mobileBr"/><br class="mobileBr"/><br class="mobileBr"/>
			        					<br class="mobileBr"/><br class="mobileBr"/>
			        					He's <span id="article"></span><br>
			        					<span id="iDoDis">...</span>
			        </h1>

*/
//Tags
var jobTag;
var vidHeading;
var articleTag;

//Global variables
var loop;
var buzzword;
var article;

window.onload = init;

  function init(){
	console.log(document);
	jobTag = document.getElementById("iDoDis");
	vidHeading = document.getElementById("vidHeading");
	articleTag = document.getElementById("article");
	buzzword = "";
	loop = setInterval(changeName, 1800); //to change name instead of shake, just replace shakeIt with changeName
  }

function shakeIt() {
	goDown(); //triggers all other shakes
}

function goDown() {
	vidHeading.style.top = "2vh";
	vidHeading.style.left = "0px";
	setTimeout(goCenter, 60);
	setTimeout(goLeft, 150);
}

function goCenter() {
	vidHeading.style.top = "0px";
	vidHeading.style.left = "0px";
}

function goLeft() {
	vidHeading.style.top = "0px";
	vidHeading.style.left = "-1em"
	setTimeout(goCenter, 50);
	setTimeout(changeName, 25);
}

function changeName () {
	selectNewBuzzword();
	jobTag.innerHTML = buzzword;
	articleTag.innerHTML = article;
	console.log(buzzword);
	changeClass();
	//changeFont();
}

const allArticles = ["a <br class=\"mobileBr\"/>"/*musician*/, "a <br class=\"mobileBr\"/>"/*director*/, "a <br class=\"mobileBr\"/>"/*writer*/, 
					""/*sharp*/, ""/*insane*/, "an <br class=\"mobileBr\"/>"/*animator*/, "a <br class=\"mobileBr\"/>"/*Songwriter*/, "a <br class=\"mobileBr\"/>" /*synth wiz*/,
					"a <br class=\"mobileBr\"/>" /*filmmaker*/, "a <br class=\"mobileBr\"/>"/*singer*/, ""/*the next rock icon*/, "a <br class=\"mobileBr\"/>" /*coder*/,
					""/*ridiculous*/, ""/*over the top*/, ""/*dedicated*/, ""/*adhd incarnate*/, "a <br class=\"mobileBr\"/>"/*madmaan*/, "a <br class=\"mobileBr\"/>"/*genius*/,
					"the <br class=\"mobileBr\"/>" /*andes mountain animal*/, "a <br class=\"mobileBr\"/>"/*cartoonist*/];
					console.log("articles length: " + allArticles.length);

const allBuzzwords = ["musician", "director", "writer",
					"sharp", "insane", "animator", "songwriter", "synth wiz",
					"filmmaker", "singer", "the next <br class=\"mobileBr\"/>rock icon", "coder",
					"ridiculous", "over <br class=\"mobileBr\"/>the top", "dedicated", "ADHD <br class=\"mobileBr\"/>incarnate", "madman", "genius",
					"Andes <br class=\"mobileBr\"/>Mountain <br class=\"mobileBr\"/>Animal", "cartoonist"];
					console.log("buzzwords length: " + allBuzzwords.length);

function selectNewBuzzword () {
	var newIndex = getNewIndex();
	buzzword =  allBuzzwords[newIndex];
	article = allArticles[newIndex];
	prev4Title = prev3Title;
	prev3Title = prev2Title;
	prev2Title = prevTitle;
	prevTitle = newIndex;
}

var prevTitle = 0;
var prev2Title = 0;
var prev3Title = 0;
var prev4Title = 0;
function getNewIndex() { // gets a new index that's not the same as the previous or the one before.
	var newIndex = Math.floor(Math.random() * allBuzzwords.length);
	if (newIndex == prevTitle || newIndex == prev2Title || newIndex == prev3Title || newIndex == prev4Title)
		newIndex = getNewIndex();

	return newIndex;
}

const effects = ["font-effect-emboss", "font-effect-3d-float", "font-effect-3d"];
var prevEffect = 0;

function changeClass() {
	var newIndex = getNewClassIndex();
	jobTag.classList.add(effects[newIndex]);
	jobTag.classList.remove(effects[prevEffect]);
	prevEffect = newIndex;
	console.log(effects[prevEffect]);
}

function getNewClassIndex() {
	var newIndex = Math.floor(Math.random() * effects.length);
	if (newIndex == prevEffect)
		newIndex = getNewClassIndex();
	return newIndex;
}

const fonts = ["Ubuntu", "BhuTuka Expanded One", "Syncopate", "Concert One", "Racing Sans One", "sang", "Cookie"];
var prevFont = 0;

function changeFont() {
	var newIndex = getNewFontIndex();
	jobTag.style.fontFamily = fonts[newIndex];
	prevFont = newIndex;
	console.log(fonts[newIndex]);
}

function getNewFontIndex() {
	var newIndex = Math.floor(Math.random() * fonts.length);
	if (newIndex == prevFont)
		newIndex = getNewFontIndex();
	return newIndex;
}