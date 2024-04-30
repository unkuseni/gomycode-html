const mobileNavBtn = document.querySelector(".mobile-nav-btn");


mobileNavBtn.addEventListener("click", () => {
	const navList = document.querySelector(".nav-list");
	navList.classList.toggle("active");
})