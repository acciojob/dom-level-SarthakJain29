window.onload = function(){
	const target = document.getElementById("level");
	let current = target;
	let count = 0;

	while(current){
		count++;
		current = current.parentElement;
	}
	alert(`The level of the element is: ${count}`)
}