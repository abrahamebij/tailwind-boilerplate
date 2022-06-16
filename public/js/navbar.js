// This is for the navbar only.
let hamburger = document.getElementById("hamburger");
let links = document.getElementById("links");
let main = document.querySelector("main");

hamburger.addEventListener("click", hideLinks); // When hamburger is clicked, the links appear or disappear
hamburger.addEventListener("click", changeMenuState); // When hamburger is clicked, it changes into menu or x

// When one of the links is clicked, the links disappear
let link = document.querySelectorAll("ul#links > *");
for (let i = 0; i < link.length; i++) {
	let allLinks = link[i];
	allLinks.addEventListener("click", hideLinks);
	allLinks.addEventListener("click", removeActive);
}

// When the outer part of the hamburger menu is clicked the links disappear
main.addEventListener("click", hideLinksOnly);
main.addEventListener("click", removeActive);

// Function Components
function hideLinks() {
	if (links.classList.contains("hidden")) {
		links.classList.remove("hidden");
	} else {
		links.classList.add("hidden");
	}
}
function hideLinksOnly() {
	if (links.classList.contains("hidden") === false) {
		links.classList.add("hidden");
	}
}
function changeMenuState() {
	hamburger.classList.toggle("active");
}
function removeActive() {
	hamburger.classList.remove("active");
}
