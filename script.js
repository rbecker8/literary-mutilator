// this will change the text color
function changeColor(x) {
	x.style.color = "red";
}

function changeColorBack(x) {
	x.style.color = "black";
}

// this will add text highlighting
function highlightOn(x) {
	x.style.backgroundColor = "yellow";
}

function highlightOff(x) {
	x.style.backgroundColor = "white";
}

// this will replace the words
function replaceWord() {
	let y = document.getElementById('third').innerHTML;
	let x = y.replace(/beef/gi, 'BEEF');
	document.getElementById('third').innerHTML = x;
}

function replaceWordBack() {
	let y = document.getElementById('third').innerHTML;
	let x = y.replace(/BEEF/gi, 'beef');
	document.getElementById('third').innerHTML = x;
}
