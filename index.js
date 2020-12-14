let giftButtons = document.querySelectorAll('.open-gift-button');
let recipeButtons = document.querySelectorAll('.view-recipe-button');
let closeButtons = document.querySelectorAll('.close-button');
let closeDrinks = document.querySelectorAll('.close-drink');

function showDrink(e) {
	const giftNumber = e.target.dataset.key;
	const buttonNumber = giftNumber.replace('gift', 'button');
	console.log(giftNumber, buttonNumber);
	const drinkCard = document.querySelector(`div[data-key="${giftNumber}"]`);
	console.log(drinkCard);
	const openButton = document.querySelector(`button[data-key="${giftNumber}"]`);
	console.log(openButton);
  drinkCard.classList.toggle('drink__card--hide');
	openButton.classList.toggle('present__button--hide');
}

function viewRecipe(e) {
	const recipeNumber = e.target.dataset.key;
	const modal = document.querySelector(`div[data-key="${recipeNumber}"]`);
	modal.classList.toggle('modal__container--hide');
}

giftButtons.forEach(giftButton => giftButton.addEventListener('click', showDrink));
recipeButtons.forEach(recipeButton => recipeButton.addEventListener('click', viewRecipe));
closeButtons.forEach(closeButton => closeButton.addEventListener('click', viewRecipe));
closeDrinks.forEach(closeDrink => closeDrink.addEventListener('click', showDrink));