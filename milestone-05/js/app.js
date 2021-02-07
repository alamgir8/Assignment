
    function getRequireFood() {
        let inputFoodName = document.getElementById('input-food').value;
        if (inputFoodName == '') {
            alert('please inter valid recipe items name');
            return;
        }
        if (inputFoodName == 1) {
            document.getElementById('food-list').style.display = inputFoodName;
        }
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f&s=${inputFoodName}`)
        .then(response => response.json())
        .then(data => displayFood(data));

        document.getElementById('input-food').value = '';
        document.getElementById('food-list').innerHTML = '';


        }
      

/*==========================function for display search recipe=======================*/
    const displayFood = food =>{
        console.log(food);
        const foodList = document.getElementById('food-list');
        food.meals.forEach(food => {
            const foodItemDiv = document.createElement('div');

            foodItemDiv.className = 'food-name'
            const foodDescription = `
            <span  onclick="displayFoodIngredient('${food.strMeal}')">
            
                
            <img onclick="window.location.href='#search'" src=${food.strMealThumb}>
            <h2>${food.strMeal}</h2></span>
            `
            foodItemDiv.innerHTML = foodDescription;
            foodList.appendChild(foodItemDiv);
        })
    }

/*==========================function for display recipe ingredient=======================*/
    const displayFoodIngredient = foodName =>{

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f&s=${foodName}`)
        .then(res => res.json())
        .then(data => foodDetails(data.meals[0]))
    

    }


/*==========================function for display recipe details information=======================*/    
    const foodDetails = food =>{
        const foodImage = document.getElementById('food-image');
        const foodDetails = document.getElementById('food-details');
        
        foodImage.innerHTML = `
        <img src=${food.strMealThumb}>
        `
        foodDetails.innerHTML = `
        <h1>${food.strMeal}</h1><br>
        <h4>Ingredients:</h4>
        ${food.strMeasure1} ${food.strIngredient1}<br>
        ${food.strMeasure2} ${food.strIngredient2}<br>
        ${food.strMeasure3} ${food.strIngredient3}<br>
        ${food.strMeasure4} ${food.strIngredient4}<br>
        ${food.strMeasure5} ${food.strIngredient5}<br>
        ${food.strMeasure6} ${food.strIngredient6}<br>
        ${food.strMeasure7} ${food.strIngredient7}<br>
        ${food.strMeasure8} ${food.strIngredient8}<br>
        ${food.strMeasure9} ${food.strIngredient9}<br>
        ${food.strMeasure10} ${food.strIngredient10}<br>
        ${food.strMeasure11} ${food.strIngredient11}<br>
        ${food.strMeasure12} ${food.strIngredient12}
        `
    }


    /*===function for jump up===*/
    function jumpBottom(from, id) {
        var to = document.getElementById(id);
        document.body.scrollTop = to.offsetTop - $(window).height() + to.offsetHeight;
    }