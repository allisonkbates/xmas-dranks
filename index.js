let openPresent = document.getElementById('open-present');
let viewRecipe = document.getElementById('view-recipe');
let drinkCard = document.getElementById('drink-card');
let modal = document.getElementById('modal');

function showDrink() {
	drinkCard.classList.toggle('drink__card--hide');
	openPresent.classList.toggle('present__button--hide');
	console.log('open gift!')
}

function showRecipe() {
	modal.classList.toggle('modal__container--hide')
	console.log('show modal!')
}

viewRecipe.addEventListener('click', showRecipe);
openPresent.addEventListener('click', showDrink);