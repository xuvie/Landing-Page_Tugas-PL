const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
	e.preventDefault();
	button.classList.add("button--clicked");
	document.querySelectorAll("span").forEach((element) => {
		element.classList.add("expanded");
	});

	setTimeout(() => {
		button.classList.remove("button--clicked");
	}, 3500);
	setTimeout(() => {
		document.querySelectorAll("span").forEach((element) => {
			element.classList.remove("expanded");
		});
	}, 1700);

	setTimeout(() => {
		location.href = "./login.html";
	}, 1900);
});
