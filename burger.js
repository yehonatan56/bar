function nav_toggle(navId) {
	nav = document.getElementById(navId);
	if (nav.style.display == "none") {
		nav.style.display = "block"; // == boolean check, single = assimilation
	} else {
		nav.style.display = "none";

	}
}