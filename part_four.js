
document.getElementById('form').addEventListener('submit', function (e){
	e.preventDefault();
	var user = document.getElementById('username').value;
	var password = document.getElementById('password').value;	
	if (user.length < 14 && password === '12345678') {
		document.getElementById('title').innerHTML = 'Congrats on knowing your username and password!';
	} else {
		alert('Wrong! Try again!');
	}

});





