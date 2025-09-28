function highlight() {
    //Write your code here

	const bolds = document.querySelectorAll('strong');
    
    bolds.forEach(strong => {
        strong.style.color = 'rgb(0, 128, 0)';
    });
}


function return_normal() {
    //Write your code here
	const bolds = document.querySelectorAll('strong');
	bolds.forEach(strong => {
        strong.style.color = 'rgb(0, 0, 0)';
    });
    
}
