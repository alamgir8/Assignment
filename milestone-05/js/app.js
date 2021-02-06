
function getRequireFood() {
   const inputFoodName = document.getElementById('input-food').value;
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
        <a onclick="displayFoodIngredient('foodId')"> <img src=${food.strMealThumb}>
        <h2>${food.strMeal}</h2></a>
        `
        foodItemDiv.innerHTML = foodDescription;
        foodList.appendChild(foodItemDiv);
    })
}

const displayFoodIngredient = foodId =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
displayFoodIngredient();
