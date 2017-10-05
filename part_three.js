
var text;

document.getElementById('text').addEventListener('keypress', function (e) {
	text = String(e.key);
	document.getElementById('instant').innerHTML = text;
});