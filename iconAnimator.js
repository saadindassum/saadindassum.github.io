			
			function checkScreenSize() {
				console.log("Body: " + document.getElementsByTagName("body")[0]);
				console.log("Background color is: " + document.getElementsByTagName("body")[0].style.backgroundColor);
			}

			checkScreenSize();

			var casette = document.getElementById("casette");
			casette.addEventListener('mouseover', replaceCasette);
			casette.addEventListener('mouseleave', restoreCasette);
			function replaceCasette () {
				//console.log("replacing casette");
				if (casette.src == "casette.gif")
					return;
				casette.src = "casette.gif";
			}
			function restoreCasette() {
				//console.log("restoring casette");
				if (casette.src == "casetteIcon.gif")
					return;
				casette.src = "casetteIcon.gif";
			}

			var keyHead = document.getElementById("keyHead");
			keyHead.addEventListener('mouseover', replaceKeyHead);
			keyHead.addEventListener('mouseleave', restoreKeyHead);
			function replaceKeyHead () {
				//console.log("replacing casette");
				if (keyHead.src == "keyHeadbob.gif")
					return;
				keyHead.src = "keyHeadbob.gif";
			}
			function restoreKeyHead() {
				//console.log("restoring casette");
				if (casette.src == "keyHeadIcon.gif")
					return;
				keyHead.src = "keyHeadIcon.gif";
			}

			var recordPlayer = document.getElementById("recordPlayer");
			recordPlayer.addEventListener('mouseover', replacePlayer);
			recordPlayer.addEventListener('mouseleave', restorePlayer);
			function replacePlayer () {
				//console.log("replacing casette");
				if (recordPlayer.src == "recordPlayer.gif")
					return;
				recordPlayer.src = "recordPlayer.gif";
			}
			function restorePlayer() {
				//console.log("restoring casette");
				if (recordPlayer.src == "recordIcon.gif")
					return;
				recordPlayer.src = "recordIcon.gif";
			}