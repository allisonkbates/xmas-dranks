let openPresent = document.getElementById('open-present');
let drinkCard = document.getElementById('drink-card');

function showDrink() {
	drinkCard.classList.toggle('drink__card--hide');
	openPresent.classList.toggle('present__button--hide');
	console.log('Yay!')
}
	

openPresent.addEventListener('click', showDrink);