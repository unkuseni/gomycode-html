

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

const navLinks = document.querySelectorAll(".navlink");
menuBtn.addEventListener("click", () => {
	const navList = document.querySelector("#nav-list");
	if (window.getComputedStyle(navList).getPropertyValue("display") == "none") {
		navList.style.display = "flex";
		navList.classList.add("open-nav");
	} else {
		navList.style.display = "none";
		navList.classList.remove("open-nav");
	}
	console.log(window.getComputedStyle(navList).getPropertyValue("display"));
});

closeBtn.addEventListener("click", () => {
	const navList = document.querySelector("#nav-list");
	navList.style.display = "none";
	navList.classList.remove("open-nav");
});


window.addEventListener("resize", () => {
	const navList = document.querySelector("#nav-list");
	let width = window.innerWidth;
	if (width > 768) {
		navList.style.display = "flex";
		navList.classList.remove("open-nav");
	} else {
		navList.style.display = "none";
		navList.classList.remove("open-nav");
	}
})


navLinks.forEach(link => {
	link.addEventListener("click", () => {
		const navList = document.querySelector("#nav-list");
		navList.style.display = "none";
		navList.classList.remove("open-nav");
	})
})