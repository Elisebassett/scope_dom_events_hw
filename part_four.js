var user = document.getElementById('username').addEventListener('submit');

if (user.length > 14) {
		alert('WRONG!');
	} else {
		alert('CORRECT');
	}
