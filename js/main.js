// BOM : Brwoser Object Model
// var w = window.innerWidth; // get window width in px
// var h = window.innerHeight; // get window height in px : available screen

// var x = screen.width;
// var y = screen.availWidth;
// var z = screen.height;
// var a = screen.availHeight;

// document.querySelector("#demo").innerHTML = "Your Width Is " + w + " And Your Height Is " + h;

// var z = w - 200;
// document.querySelector("#demo").style.width = z;

// function winOpen() {
// 	// window.open("https://www.google.com"); //opens in new tab
// 	window.open("https://www.google.com", "_self"); //opens in same tab
// }

// function winClose() {
// 	window.close(); //closes the opened tab
// }
window.addEventListener("scroll", function () {
	var nav = document.querySelector(".navbar");
	var scrollValue = window.scrollY;
	if (scrollValue > 300) {
		this.document.querySelector("body").style.backgroundColor = "red";
		nav.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
	} else {
		this.document.querySelector("body").style.backgroundColor = "white";
		nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-danger");
	}
});
