let lid = document.getElementById('lid');
let dog = document.getElementById('dog');

function openPresent() {
	console.log('opened!');
	lid.classList.toggle('present-lid--open');
	dog.classList.toggle('dog--hide');

}

lid.addEventListener('click', openPresent);
dog.addEventListener('click', openPresent);