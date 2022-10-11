import { data } from "./recipesArray.js"

const mealTitle = document.querySelector(".random-recipe-title");
const img = document.querySelector(".random-image");
const resDescription = document.querySelector(".random-recipe-description");
const ingredients = document.querySelector(".ingredients-list-title");
const ingredientsList = document.querySelector(".ingredients-list");
const btn = document.querySelector(".choose-random-meal");

let temporaryArray = [];

function generateRandomMeal() {

    let randomNumber = Math.floor(Math.random() * data.length);
    let randomObject = data[randomNumber];

    if (temporaryArray.length != 0) {
        temporaryArray.forEach(liElement => {
            ingredientsList.removeChild(liElement)
        })
        temporaryArray = [];
    }

    mealTitle.innerHTML = randomObject.mealTitle;
    img.setAttribute('src', randomObject.imgPath);
    img.style.display = "block";

    resDescription.innerHTML = randomObject.description;
    ingredients.innerHTML = "Ingredients:";

    for (let i = 0; i < randomObject.ingredients.length; i++) {

        const li = document.createElement("li");

        li.innerHTML = randomObject.ingredients[i];
        temporaryArray.push(li)
        ingredientsList.append(li);
    }
}


btn.addEventListener("click", generateRandomMeal);