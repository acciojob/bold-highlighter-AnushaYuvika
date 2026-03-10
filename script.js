function highlight() {
    //Write your code here
	const strong = document.querySelectorAll("strong");
	strong.forEach((item) => {
		item.style.color = "rgb(0, 128, 0)";
	})
}

function return_normal() {
    //Write your code here
	const strong = document.querySelectorAll("strong");
	strong.forEach((item) => {
		item.style.color = "rgb(0, 0, 0)";
	})
}
