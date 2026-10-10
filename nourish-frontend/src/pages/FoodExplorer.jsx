import React, { useState } from "react";

function FoodExplorer() {
    const [foodName, setFoodName] = useState("");
    const [foodResult, setFoodResult] = useState(null);

    const foodDatabase = {
        apple: {
            name: "Apple",
            category: "Fruit",
            calories: "52 kcal",
            protein: "0.3 g",
            carbohydrates: "13.8 g",
            fat: "0.2 g",
            fiber: "2.4 g",
            serving: "100 g",
            guidance:
                "Apple provides carbohydrates and dietary fiber. It can be included as part of a balanced diet."
        },

        banana: {
            name: "Banana",
            category: "Fruit",
            calories: "89 kcal",
            protein: "1.1 g",
            carbohydrates: "22.8 g",
            fat: "0.3 g",
            fiber: "2.6 g",
            serving: "100 g",
            guidance:
                "Banana provides carbohydrates and can be a convenient snack or breakfast option."
        },

        orange: {
            name: "Orange",
            category: "Fruit",
            calories: "47 kcal",
            protein: "0.9 g",
            carbohydrates: "11.8 g",
            fat: "0.1 g",
            fiber: "2.4 g",
            serving: "100 g",
            guidance:
                "Orange provides carbohydrates and dietary fiber and can be included in a balanced diet."
        },

        mango: {
            name: "Mango",
            category: "Fruit",
            calories: "60 kcal",
            protein: "0.8 g",
            carbohydrates: "15 g",
            fat: "0.4 g",
            fiber: "1.6 g",
            serving: "100 g",
            guidance:
                "Mango provides carbohydrates and natural sugars. Portion size is useful to consider."
        },

        avocado: {
            name: "Avocado",
            category: "Fruit",
            calories: "160 kcal",
            protein: "2 g",
            carbohydrates: "8.5 g",
            fat: "14.7 g",
            fiber: "6.7 g",
            serving: "100 g",
            guidance:
                "Avocado provides fiber and unsaturated fats. It can be included in balanced meals."
        },

        almonds: {
            name: "Almonds",
            category: "Nuts",
            calories: "579 kcal",
            protein: "21.2 g",
            carbohydrates: "21.6 g",
            fat: "49.9 g",
            fiber: "12.5 g",
            serving: "100 g",
            guidance:
                "Almonds provide protein, fats and fiber. They are energy-dense, so portion size matters."
        },

        rice: {
            name: "Cooked Rice",
            category: "Grain",
            calories: "130 kcal",
            protein: "2.7 g",
            carbohydrates: "28.2 g",
            fat: "0.3 g",
            fiber: "0.4 g",
            serving: "100 g",
            guidance:
                "Rice is mainly a carbohydrate source. Pairing it with vegetables and protein can make the meal more balanced."
        },

        dosa: {
            name: "Dosa",
            category: "Indian Dish",
            calories: "Varies by preparation",
            protein: "Varies by recipe",
            carbohydrates: "Usually significant",
            fat: "Depends on oil used",
            fiber: "Depends on ingredients",
            serving: "1 dosa",
            guidance:
                "Dosa can be paired with sambar, vegetables or another protein-rich side to create a more balanced meal."
        },

        idli: {
            name: "Idli",
            category: "Indian Dish",
            calories: "Varies by size and recipe",
            protein: "Varies by recipe",
            carbohydrates: "Usually significant",
            fat: "Usually low to moderate",
            fiber: "Varies by recipe",
            serving: "1 idli",
            guidance:
                "Idli can be combined with sambar and vegetable-based sides for a more balanced meal."
        },

        sambar: {
            name: "Sambar",
            category: "Indian Dish",
            calories: "Varies by recipe",
            protein: "Varies by dal quantity",
            carbohydrates: "Varies by ingredients",
            fat: "Depends on preparation",
            fiber: "Can provide dietary fiber",
            serving: "1 bowl",
            guidance:
                "Sambar can provide lentils and vegetables. It can be paired with idli, dosa or rice."
        },

        biryani: {
            name: "Biryani",
            category: "Complete Dish",
            calories: "Varies by recipe and portion",
            protein: "Varies by ingredients",
            carbohydrates: "Usually significant",
            fat: "Varies by oil or ghee",
            fiber: "Varies by ingredients",
            serving: "1 serving",
            guidance:
                "Biryani nutrition depends strongly on rice quantity, meat or vegetables, oil, ghee and serving size."
        },

        "chicken biryani": {
            name: "Chicken Biryani",
            category: "Indian Dish",
            calories: "Varies by recipe and portion",
            protein: "Generally higher due to chicken",
            carbohydrates: "Usually significant",
            fat: "Varies by oil or ghee",
            fiber: "Varies by ingredients",
            serving: "1 serving",
            guidance:
                "Chicken provides protein while rice provides carbohydrates. Portion size and oil or ghee can affect total calories."
        },

        "veg biryani": {
            name: "Vegetable Biryani",
            category: "Indian Dish",
            calories: "Varies by recipe and portion",
            protein: "Varies by ingredients",
            carbohydrates: "Usually significant",
            fat: "Varies by oil or ghee",
            fiber: "Can provide dietary fiber",
            serving: "1 serving",
            guidance:
                "Vegetable biryani provides carbohydrates and vegetables. A protein-rich side can make the meal more balanced."
        },

        "paneer tikka": {
            name: "Paneer Tikka",
            category: "Indian Dish",
            calories: "Varies by preparation",
            protein: "Moderate to high",
            carbohydrates: "Usually moderate",
            fat: "Depends on paneer and preparation",
            fiber: "Depends on vegetables",
            serving: "1 serving",
            guidance:
                "Paneer provides protein and fat. Adding vegetables alongside it can make the meal more balanced."
        },

        "rajma chawal": {
            name: "Rajma Chawal",
            category: "Indian Dish",
            calories: "Varies by portion",
            protein: "Provided by rajma",
            carbohydrates: "Usually significant",
            fat: "Depends on preparation",
            fiber: "Rajma provides dietary fiber",
            serving: "1 serving",
            guidance:
                "Rajma provides plant protein and fiber while rice provides carbohydrates. Portion balance is useful."
        },

        "pav bhaji": {
            name: "Pav Bhaji",
            category: "Indian Dish",
            calories: "Varies by preparation and portion",
            protein: "Varies",
            carbohydrates: "Usually significant",
            fat: "Depends on butter and preparation",
            fiber: "Vegetables can provide fiber",
            serving: "1 serving",
            guidance:
                "Pav bhaji contains vegetables, while butter and pav can increase calories. Portion size can help balance the meal."
        },

        pizza: {
            name: "Pizza",
            category: "International Dish",
            calories: "Varies by size and toppings",
            protein: "Varies by toppings",
            carbohydrates: "Usually significant",
            fat: "Varies by cheese and toppings",
            fiber: "Varies by crust and toppings",
            serving: "1 slice / serving",
            guidance:
                "Pizza nutrition depends on crust, cheese, toppings and portion size. Adding vegetables can increase variety."
        },

        pasta: {
            name: "Pasta",
            category: "Italian Dish",
            calories: "Varies by preparation",
            protein: "Varies by ingredients",
            carbohydrates: "Usually significant",
            fat: "Depends on sauce and oil",
            fiber: "Depends on pasta type and vegetables",
            serving: "1 serving",
            guidance:
                "Pasta can be paired with vegetables and a protein source. Sauce and cheese can change calories and fat."
        },

        sushi: {
            name: "Sushi",
            category: "Japanese Dish",
            calories: "Varies by type and quantity",
            protein: "Varies by fish or filling",
            carbohydrates: "Usually significant",
            fat: "Varies by filling and sauces",
            fiber: "Varies by ingredients",
            serving: "Varies by pieces",
            guidance:
                "Sushi nutrition depends on rice quantity, filling, sauces and preparation style."
        },

        tacos: {
            name: "Tacos",
            category: "Mexican Dish",
            calories: "Varies by filling and toppings",
            protein: "Varies by filling",
            carbohydrates: "Varies by tortilla and fillings",
            fat: "Varies by cheese, meat and sauces",
            fiber: "Can increase with beans and vegetables",
            serving: "1 taco",
            guidance:
                "Tacos can include protein, vegetables and carbohydrates. Beans and vegetables can increase fiber."
        },

        "greek yogurt": {
            name: "Greek Yogurt",
            category: "Dairy",
            calories: "Varies by brand and fat level",
            protein: "Generally high",
            carbohydrates: "Varies",
            fat: "Depends on fat level",
            fiber: "Usually low",
            serving: "100 g",
            guidance:
                "Greek yogurt can be a protein-rich food. Check added sugar when choosing flavored varieties."
        }
    };

    const analyzeFood = () => {
        const search = foodName.toLowerCase().trim();

        if (!search) {
            alert("Please enter a food, ingredient or dish.");
            return;
        }

        if (foodDatabase[search]) {
            setFoodResult(foodDatabase[search]);
            return;
        }

        setFoodResult({
            name: foodName,
            category: "Food / Dish",
            calories: "Needs detailed analysis",
            protein: "Depends on ingredients",
            carbohydrates: "Depends on ingredients",
            fat: "Depends on preparation",
            fiber: "Depends on ingredients",
            serving: "Depends on portion size",
            guidance:
                "Nourish does not have an exact nutrition record for this item yet. Complete-dish nutrition can vary according to ingredients, recipe, cooking method and portion size."
        });
    };

    return (
        <div className="food-explorer-page">

            <div className="food-explorer-container">

                <div className="explorer-header">

                    <div className="explorer-icon">
                        🍽️
                    </div>

                    <p className="small-heading">
                        NOURISH FOOD EXPLORER
                    </p>

                    <h1>
                        What did you eat today?
                    </h1>

                    <p>
                        Search for a food, ingredient, dish or cuisine
                        and explore its nutritional information.
                    </p>

                </div>

                <div className="food-search-card">

                    <label>
                        Enter a food or dish
                    </label>

                    <div className="food-search-row">

                        <input
                            type="text"
                            placeholder="e.g. Apple, Biryani, Pizza, Dosa..."
                            value={foodName}
                            onChange={(e) => setFoodName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    analyzeFood();
                                }
                            }}
                        />

                        <button onClick={analyzeFood}>
                            🔍 Analyze
                        </button>

                    </div>

                    <p className="search-hint">
                        You can enter individual foods or complete dishes.
                    </p>

                </div>

                {foodResult && (

                    <div className="food-result-card">

                        <div className="food-result-header">

                            <div className="large-food-icon">
                                🍽️
                            </div>

                            <div>

                                <p className="result-label">
                                    NUTRITION ANALYSIS
                                </p>

                                <h2>
                                    {foodResult.name}
                                </h2>

                                <span className="food-category">
                                    {foodResult.category}
                                </span>

                            </div>

                        </div>

                        <div className="nutrition-heading">
                            Nutritional Information
                        </div>

                        <div className="nutrition-grid">

                            <div className="nutrition-item">
                                <span>🔥</span>
                                <p>Calories</p>
                                <strong>{foodResult.calories}</strong>
                            </div>

                            <div className="nutrition-item">
                                <span>💪</span>
                                <p>Protein</p>
                                <strong>{foodResult.protein}</strong>
                            </div>

                            <div className="nutrition-item">
                                <span>🌾</span>
                                <p>Carbohydrates</p>
                                <strong>{foodResult.carbohydrates}</strong>
                            </div>

                            <div className="nutrition-item">
                                <span>🥑</span>
                                <p>Fat</p>
                                <strong>{foodResult.fat}</strong>
                            </div>

                            <div className="nutrition-item">
                                <span>🌿</span>
                                <p>Fiber</p>
                                <strong>{foodResult.fiber}</strong>
                            </div>

                            <div className="nutrition-item">
                                <span>⚖️</span>
                                <p>Serving</p>
                                <strong>{foodResult.serving}</strong>
                            </div>

                        </div>

                        <div className="guidance-box">

                            <h3>
                                💡 Nourish Guidance
                            </h3>

                            <p>
                                {foodResult.guidance}
                            </p>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}

export default FoodExplorer;