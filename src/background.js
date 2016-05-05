chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "http://tureng.com/tr/turkce-ingilizce/" + encodeURIComponent(request.selectedText), false);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();

	sendResponse({
		status : xhttp.status,
		responseText: xhttp.responseText
	});
	
});