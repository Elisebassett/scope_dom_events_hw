document.getElementById('first').addEventListener('click', function (){
	( document.getElementById('child_of_divorce').innerHTML = "I'm right!");
});

document.getElementById('second').addEventListener('click', function (){
	( document.getElementById('child_of_divorce').innerHTML = "No, I'm right!!!" );
});