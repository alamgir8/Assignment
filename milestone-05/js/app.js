
function getRequireFood() {
let inputFoodName = document.getElementById('input-food').value;
if (inputFoodName == '') {
    alert('please inter valid food name');
    return;
}
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f&s=${inputFoodName}`)
.then(response => response.json())
.then(data => displayFood(data));

}


const displayFood = food =>{
    console.log(food);
    const foodList = document.getElementById('food-list');
    food.meals.forEach(food => {
        const foodItemDiv = document.createElement('div');

        foodItemDiv.className = 'food-name'
        const foodDescription = `
        <span  onclick="displayFoodIngredient('${food.strMeal}')">
        <div id="food-details"> </div>        
        <img src=${food.strMealThumb}>
        <h2>${food.strMeal}</h2></span>
        `
        foodItemDiv.innerHTML = foodDescription;
        foodList.appendChild(foodItemDiv);
    })
}

const displayFoodIngredient = foodName =>{
    
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f&s=${foodName}`
    fetch(url)
    .then(res => res.json())
    .then(data => foodDetails(data.meals[0]))
  

}

const foodDetails = food =>{
    const foodDetails = document.getElementById('food-details');

    foodDetails.innerHTML = `
    <img src=${food.strMealThumb}>
    <h2>${food.strMeal}</h2>
    <h4>Ingredient:</h4><br>
    ${food.strMeasure1} ${food.strIngredient1}
    ${food.strMeasure2} ${food.strIngredient2}
    ${food.strMeasure3} ${food.strIngredient3}
    ${food.strMeasure4} ${food.strIngredient4}
    ${food.strMeasure5} ${food.strIngredient5}
    ${food.strMeasure6} ${food.strIngredient6}
    ${food.strMeasure7} ${food.strIngredient7}
    ${food.strMeasure8} ${food.strIngredient8}
    ${food.strMeasure9} ${food.strIngredient9}
    `
}
