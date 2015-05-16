// function to inssert button
var insertButton = function() {
	if(!(document.getElementById("youthumb"))) {
		// find Share button, create a new button and find the youtube id
		var youtube = document.getElementsByClassName("action-panel-trigger-share")[0];
		var button = document.createElement("BUTTON");
		var youtube_id = document.querySelectorAll("[itemprop=videoId]")[0].getAttribute("content");
		button.innerHTML = "<span class=\"yt-uix-button-content\">Thumbnails</span>";
		button.className = "yt-uix-button yt-uix-button-size-default yt-uix-button-opacity";
		// open link to youthumb on click
		button.onclick = function() {
			var win = window.open('https://youthumb.net/watch?v='+youtube_id, "_blank");
			win.focus();
		};
		
		//insert button next to share button
		youtube.parentNode.insertBefore(button, youtube.nextSibling);
	};
};

var isPageLoaded = false;

// new mutation observer to look for changes in the DOM
var observer = new MutationObserver(function(mutations) {
	// checks if the youtube body contains page-loaded class
	var hasPageLoadedClass = mutations[0].target.classList.contains('page-loaded');
	
	// if it contains page-loaded class and is not loaded allready
	if (hasPageLoadedClass && !isPageLoaded) {
		insertButton();
	}
	
	isPageLoaded = hasPageLoadedClass;
});

// observe the body for changes in class attribute
observer.observe(document.querySelector('body'), {
	attributes: true,
	attributeFilter: ['class']
});