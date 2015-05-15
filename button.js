if(!(document.getElementById("youthumb"))) {
	var youtube = document.getElementsByClassName("action-panel-trigger-share")[0];
	var button = document.createElement("BUTTON"); button.id = "youthumb";
	var youtube_id = document.querySelectorAll("[itemprop=videoId]")[0].getAttribute("content");
	button.innerHTML = "<span class=\"yt-uix-button-content\">Thumbnails</span>";
	button.className = "yt-uix-button yt-uix-button-size-default yt-uix-button-opacity";
	button.onclick = function() {
		var win = window.open('https://youthumb.net/watch?v='+youtube_id, "_blank");
		win.focus();
	};
	
	youtube.parentNode.insertBefore(button, youtube.nextSibling);
}



/*
if (youtube.nextSibling) {
  youtube.parentNode.insertBefore(button, youtube.nextSibling);
}
else {
  youtube.parentNode.appendChild(button);
} */