import React, { useState } from "react";

function FoodItems() {

    const [search, setSearch] = useState("");
    const [selectedFood, setSelectedFood] = useState(null);

    const foods = [

        // =========================
        // FRUITS
        // =========================

        {
            name: "Apple",
            emoji: "🍎",
            category: "Fruit",
            cuisine: "Universal",
            calories: "52 kcal",
            protein: "0.3 g",
            carbs: "13.8 g",
            fat: "0.2 g",
            fiber: "2.4 g",
            serving: "100 g",
            description: "A fiber-containing fruit that can be included as a snack or part of breakfast."
        },

        {
            name: "Banana",
            emoji: "🍌",
            category: "Fruit",
            cuisine: "Universal",
            calories: "89 kcal",
            protein: "1.1 g",
            carbs: "22.8 g",
            fat: "0.3 g",
            fiber: "2.6 g",
            serving: "100 g",
            description: "A convenient fruit providing carbohydrates and dietary fiber."
        },

        {
            name: "Mango",
            emoji: "🥭",
            category: "Fruit",
            cuisine: "Indian / Tropical",
            calories: "60 kcal",
            protein: "0.8 g",
            carbs: "15 g",
            fat: "0.4 g",
            fiber: "1.6 g",
            serving: "100 g",
            description: "A tropical fruit containing carbohydrates and natural sugars."
        },

        {
            name: "Orange",
            emoji: "🍊",
            category: "Fruit",
            cuisine: "Universal",
            calories: "47 kcal",
            protein: "0.9 g",
            carbs: "11.8 g",
            fat: "0.1 g",
            fiber: "2.4 g",
            serving: "100 g",
            description: "A citrus fruit containing carbohydrates and dietary fiber."
        },

        {
            name: "Watermelon",
            emoji: "🍉",
            category: "Fruit",
            cuisine: "Universal",
            calories: "30 kcal",
            protein: "0.6 g",
            carbs: "7.6 g",
            fat: "0.2 g",
            fiber: "0.4 g",
            serving: "100 g",
            description: "A water-rich fruit that can be a refreshing snack."
        },

        {
            name: "Pineapple",
            emoji: "🍍",
            category: "Fruit",
            cuisine: "Tropical",
            calories: "50 kcal",
            protein: "0.5 g",
            carbs: "13.1 g",
            fat: "0.1 g",
            fiber: "1.4 g",
            serving: "100 g",
            description: "A tropical fruit containing carbohydrates and fiber."
        },


        // =========================
        // VEGETABLES
        // =========================

        {
            name: "Carrot",
            emoji: "🥕",
            category: "Vegetable",
            cuisine: "Universal",
            calories: "41 kcal",
            protein: "0.9 g",
            carbs: "9.6 g",
            fat: "0.2 g",
            fiber: "2.8 g",
            serving: "100 g",
            description: "A vegetable containing fiber and carbohydrates."
        },

        {
            name: "Broccoli",
            emoji: "🥦",
            category: "Vegetable",
            cuisine: "Universal",
            calories: "34 kcal",
            protein: "2.8 g",
            carbs: "6.6 g",
            fat: "0.4 g",
            fiber: "2.6 g",
            serving: "100 g",
            description: "A nutrient-containing vegetable that can be added to balanced meals."
        },

        {
            name: "Potato",
            emoji: "🥔",
            category: "Vegetable",
            cuisine: "Universal",
            calories: "77 kcal",
            protein: "2 g",
            carbs: "17.5 g",
            fat: "0.1 g",
            fiber: "2.2 g",
            serving: "100 g",
            description: "A carbohydrate-rich vegetable that can be prepared in many ways."
        },

        {
            name: "Tomato",
            emoji: "🍅",
            category: "Vegetable",
            cuisine: "Universal",
            calories: "18 kcal",
            protein: "0.9 g",
            carbs: "3.9 g",
            fat: "0.2 g",
            fiber: "1.2 g",
            serving: "100 g",
            description: "A versatile vegetable commonly used in salads, curries and sauces."
        },

        {
            name: "Spinach",
            emoji: "🥬",
            category: "Leafy Vegetable",
            cuisine: "Universal",
            calories: "23 kcal",
            protein: "2.9 g",
            carbs: "3.6 g",
            fat: "0.4 g",
            fiber: "2.2 g",
            serving: "100 g",
            description: "A leafy vegetable that can add variety and fiber to meals."
        },


        // =========================
        // GRAINS
        // =========================

        {
            name: "Cooked Rice",
            emoji: "🍚",
            category: "Grain",
            cuisine: "Asian",
            calories: "130 kcal",
            protein: "2.7 g",
            carbs: "28.2 g",
            fat: "0.3 g",
            fiber: "0.4 g",
            serving: "100 g",
            description: "A common carbohydrate source used in many cuisines."
        },

        {
            name: "Brown Rice",
            emoji: "🍚",
            category: "Whole Grain",
            cuisine: "Universal",
            calories: "123 kcal",
            protein: "2.7 g",
            carbs: "25.6 g",
            fat: "1 g",
            fiber: "1.6 g",
            serving: "100 g",
            description: "A whole-grain rice option that provides carbohydrates and fiber."
        },

        {
            name: "Oats",
            emoji: "🥣",
            category: "Grain",
            cuisine: "Universal",
            calories: "389 kcal",
            protein: "16.9 g",
            carbs: "66.3 g",
            fat: "6.9 g",
            fiber: "10.6 g",
            serving: "100 g",
            description: "A grain commonly used for breakfast and containing protein and fiber."
        },

        {
            name: "Quinoa",
            emoji: "🌾",
            category: "Whole Grain",
            cuisine: "International",
            calories: "120 kcal",
            protein: "4.4 g",
            carbs: "21.3 g",
            fat: "1.9 g",
            fiber: "2.8 g",
            serving: "100 g cooked",
            description: "A grain-like food that provides carbohydrates and plant protein."
        },


        // =========================
        // PROTEIN FOODS
        // =========================

        {
            name: "Chicken Breast",
            emoji: "🍗",
            category: "Protein",
            cuisine: "Universal",
            calories: "165 kcal",
            protein: "31 g",
            carbs: "0 g",
            fat: "3.6 g",
            fiber: "0 g",
            serving: "100 g",
            description: "A protein-rich food commonly used in balanced meals."
        },

        {
            name: "Egg",
            emoji: "🥚",
            category: "Protein",
            cuisine: "Universal",
            calories: "143 kcal",
            protein: "12.6 g",
            carbs: "0.7 g",
            fat: "9.5 g",
            fiber: "0 g",
            serving: "100 g",
            description: "An animal-based protein source that can be used in many meals."
        },

        {
            name: "Paneer",
            emoji: "🧀",
            category: "Dairy / Protein",
            cuisine: "Indian",
            calories: "265 kcal",
            protein: "18.3 g",
            carbs: "1.2 g",
            fat: "20.8 g",
            fiber: "0 g",
            serving: "100 g",
            description: "A popular Indian dairy food containing protein and fat."
        },

        {
            name: "Tofu",
            emoji: "🥢",
            category: "Plant Protein",
            cuisine: "Asian",
            calories: "76 kcal",
            protein: "8 g",
            carbs: "1.9 g",
            fat: "4.8 g",
            fiber: "0.3 g",
            serving: "100 g",
            description: "A plant-based protein food commonly used in Asian cuisine."
        },

        {
            name: "Chickpeas",
            emoji: "🫘",
            category: "Legume",
            cuisine: "Indian / Middle Eastern",
            calories: "164 kcal",
            protein: "8.9 g",
            carbs: "27.4 g",
            fat: "2.6 g",
            fiber: "7.6 g",
            serving: "100 g cooked",
            description: "A legume providing plant protein, carbohydrates and fiber."
        },

        {
            name: "Rajma",
            emoji: "🫘",
            category: "Legume",
            cuisine: "Indian",
            calories: "127 kcal",
            protein: "8.7 g",
            carbs: "22.8 g",
            fat: "0.5 g",
            fiber: "6.4 g",
            serving: "100 g cooked",
            description: "Kidney beans provide plant protein and dietary fiber."
        },


        // =========================
        // INDIAN DISHES
        // =========================

        {
            name: "Dosa",
            emoji: "🥞",
            category: "Indian Dish",
            cuisine: "South Indian",
            calories: "Varies",
            protein: "Varies",
            carbs: "Usually significant",
            fat: "Depends on oil",
            fiber: "Depends on recipe",
            serving: "1 dosa",
            description: "A South Indian dish commonly made from fermented rice and lentil batter."
        },

        {
            name: "Idli",
            emoji: "⚪",
            category: "Indian Dish",
            cuisine: "South Indian",
            calories: "Varies",
            protein: "Varies",
            carbs: "Usually significant",
            fat: "Usually low",
            fiber: "Depends on recipe",
            serving: "1 idli",
            description: "A steamed South Indian dish commonly served with sambar or chutney."
        },

        {
            name: "Sambar",
            emoji: "🍲",
            category: "Indian Dish",
            cuisine: "South Indian",
            calories: "Varies",
            protein: "Varies",
            carbs: "Varies",
            fat: "Depends on preparation",
            fiber: "Can provide fiber",
            serving: "1 bowl",
            description: "A lentil and vegetable-based South Indian dish."
        },

        {
            name: "Chicken Biryani",
            emoji: "🍛",
            category: "Indian Dish",
            cuisine: "Indian",
            calories: "Varies",
            protein: "Generally moderate to high",
            carbs: "Usually significant",
            fat: "Depends on oil or ghee",
            fiber: "Varies",
            serving: "1 serving",
            description: "A rice-based dish prepared with chicken, spices and other ingredients."
        },

        {
            name: "Veg Biryani",
            emoji: "🍛",
            category: "Indian Dish",
            cuisine: "Indian",
            calories: "Varies",
            protein: "Varies",
            carbs: "Usually significant",
            fat: "Depends on oil or ghee",
            fiber: "Can provide fiber",
            serving: "1 serving",
            description: "A rice-based dish prepared with mixed vegetables and spices."
        },

        {
            name: "Paneer Tikka",
            emoji: "🧀",
            category: "Indian Dish",
            cuisine: "North Indian",
            calories: "Varies",
            protein: "Moderate to high",
            carbs: "Usually moderate",
            fat: "Depends on preparation",
            fiber: "Depends on vegetables",
            serving: "1 serving",
            description: "Grilled paneer with vegetables and Indian spices."
        },

        {
            name: "Rajma Chawal",
            emoji: "🍛",
            category: "Indian Dish",
            cuisine: "North Indian",
            calories: "Varies",
            protein: "Provided by rajma",
            carbs: "Usually significant",
            fat: "Depends on preparation",
            fiber: "Can provide fiber",
            serving: "1 serving",
            description: "A traditional combination of kidney beans and rice."
        },

        {
            name: "Pav Bhaji",
            emoji: "🥘",
            category: "Indian Dish",
            cuisine: "Mumbai / Indian",
            calories: "Varies",
            protein: "Varies",
            carbs: "Usually significant",
            fat: "Depends on butter",
            fiber: "Vegetables can provide fiber",
            serving: "1 serving",
            description: "A vegetable-based Indian street food served with bread rolls."
        },

        {
            name: "Chole Bhature",
            emoji: "🍛",
            category: "Indian Dish",
            cuisine: "North Indian",
            calories: "Varies",
            protein: "Varies",
            carbs: "Usually significant",
            fat: "Usually higher",
            fiber: "Chickpeas provide fiber",
            serving: "1 serving",
            description: "Chickpea curry served with fried bread."
        },


        // =========================
        // INTERNATIONAL DISHES
        // =========================

        {
            name: "Pizza",
            emoji: "🍕",
            category: "International Dish",
            cuisine: "Italian",
            calories: "Varies",
            protein: "Varies",
            carbs: "Usually significant",
            fat: "Depends on cheese and toppings",
            fiber: "Depends on crust and toppings",
            serving: "1 slice",
            description: "A dish made with a baked dough base, sauce and toppings."
        },

        {
            name: "Pasta",
            emoji: "🍝",
            category: "International Dish",
            cuisine: "Italian",
            calories: "Varies",
            protein: "Varies",
            carbs: "Usually significant",
            fat: "Depends on sauce",
            fiber: "Depends on ingredients",
            serving: "1 serving",
            description: "A versatile Italian dish that can be combined with vegetables and protein."
        },

        {
            name: "Sushi",
            emoji: "🍣",
            category: "International Dish",
            cuisine: "Japanese",
            calories: "Varies",
            protein: "Varies",
            carbs: "Usually significant",
            fat: "Depends on filling",
            fiber: "Varies",
            serving: "Several pieces",
            description: "Japanese cuisine commonly involving seasoned rice and different fillings."
        },

        {
            name: "Tacos",
            emoji: "🌮",
            category: "International Dish",
            cuisine: "Mexican",
            calories: "Varies",
            protein: "Varies",
            carbs: "Varies",
            fat: "Depends on filling",
            fiber: "Can increase with beans and vegetables",
            serving: "1 taco",
            description: "A Mexican dish that can contain meat, beans, vegetables and other fillings."
        },

        {
            name: "Burger",
            emoji: "🍔",
            category: "Fast Food",
            cuisine: "American",
            calories: "Varies",
            protein: "Varies",
            carbs: "Usually significant",
            fat: "Varies",
            fiber: "Depends on ingredients",
            serving: "1 burger",
            description: "A sandwich-style meal that can contain a protein filling, bread and toppings."
        },

        {
            name: "Fried Rice",
            emoji: "🍚",
            category: "Asian Dish",
            cuisine: "Chinese / Asian",
            calories: "Varies",
            protein: "Depends on ingredients",
            carbs: "Usually significant",
            fat: "Depends on oil",
            fiber: "Depends on vegetables",
            serving: "1 serving",
            description: "Rice cooked with vegetables, seasonings and optional protein."
        },


        // =========================
        // DAIRY
        // =========================

        {
            name: "Milk",
            emoji: "🥛",
            category: "Dairy",
            cuisine: "Universal",
            calories: "61 kcal",
            protein: "3.2 g",
            carbs: "4.8 g",
            fat: "3.3 g",
            fiber: "0 g",
            serving: "100 ml",
            description: "A dairy beverage containing protein and carbohydrates."
        },

        {
            name: "Greek Yogurt",
            emoji: "🥣",
            category: "Dairy",
            cuisine: "International",
            calories: "Varies",
            protein: "Generally high",
            carbs: "Varies",
            fat: "Depends on fat level",
            fiber: "Usually low",
            serving: "100 g",
            description: "A thick yogurt that can provide protein."
        },


        // =========================
        // NUTS & SEEDS
        // =========================

        {
            name: "Almonds",
            emoji: "🌰",
            category: "Nuts",
            cuisine: "Universal",
            calories: "579 kcal",
            protein: "21.2 g",
            carbs: "21.6 g",
            fat: "49.9 g",
            fiber: "12.5 g",
            serving: "100 g",
            description: "A nutrient-dense nut containing protein, fats and fiber."
        },

        {
            name: "Walnuts",
            emoji: "🌰",
            category: "Nuts",
            cuisine: "Universal",
            calories: "654 kcal",
            protein: "15.2 g",
            carbs: "13.7 g",
            fat: "65.2 g",
            fiber: "6.7 g",
            serving: "100 g",
            description: "A nutrient-dense nut containing fats, protein and fiber."
        },

        {
            name: "Chia Seeds",
            emoji: "🌱",
            category: "Seeds",
            cuisine: "Universal",
            calories: "486 kcal",
            protein: "16.5 g",
            carbs: "42.1 g",
            fat: "30.7 g",
            fiber: "34.4 g",
            serving: "100 g",
            description: "Seeds that provide fiber, fats and plant protein."
        }

    ];


    const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase()) ||
        food.category.toLowerCase().includes(search.toLowerCase()) ||
        food.cuisine.toLowerCase().includes(search.toLowerCase())
    );


    return (

        <div className="food-items-page">

            <div className="food-items-container">

                {/* HEADER */}

                <section className="food-items-header">

                    <div className="food-main-logo">
                        🍎
                    </div>

                    <p className="small-heading">
                        NOURISH FOOD LIBRARY
                    </p>

                    <h1>
                        Explore Your Food
                    </h1>

                    <p>
                        Discover nutritional information about
                        foods, ingredients and dishes from different cuisines.
                    </p>

                </section>


                {/* SEARCH */}

                <section className="food-search-box">

                    <div className="search-icon">
                        🔍
                    </div>

                    <input
                        type="text"
                        placeholder="Search for apple, dosa, biryani, pizza, paneer..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </section>


                {/* CATEGORY HINTS */}

                <div className="food-category-hints">

                    <span>🍎 Fruits</span>

                    <span>🥦 Vegetables</span>

                    <span>🍛 Indian</span>

                    <span>🍕 International</span>

                    <span>🥛 Dairy</span>

                    <span>🥜 Nuts</span>

                    <span>💪 Protein</span>

                </div>


                {/* RESULTS */}

                <div className="food-results-top">

                    <h2>
                        {search
                            ? `Results for "${search}"`
                            : "Popular Food Choices"}
                    </h2>

                    <span>
                        {filteredFoods.length} foods
                    </span>

                </div>


                <section className="food-items-grid">

                    {filteredFoods.map((food, index) => (

                        <div
                            className="food-item-card"
                            key={index}
                            onClick={() => setSelectedFood(food)}
                        >

                            <div className="food-card-top">

                                <div className="food-emoji">

                                    {food.emoji}

                                </div>

                                <span className="food-category">

                                    {food.category}

                                </span>

                            </div>


                            <h3>
                                {food.name}
                            </h3>


                            <p className="food-cuisine">
                                🌍 {food.cuisine}
                            </p>


                            <div className="food-mini-nutrition">

                                <div>
                                    <span>🔥</span>
                                    <strong>
                                        {food.calories}
                                    </strong>
                                    <small>
                                        Calories
                                    </small>
                                </div>

                                <div>
                                    <span>💪</span>
                                    <strong>
                                        {food.protein}
                                    </strong>
                                    <small>
                                        Protein
                                    </small>
                                </div>

                                <div>
                                    <span>🌿</span>
                                    <strong>
                                        {food.fiber}
                                    </strong>
                                    <small>
                                        Fiber
                                    </small>
                                </div>

                            </div>


                            <button
                                className="food-view-button"
                            >
                                View Nutrition →
                            </button>

                        </div>

                    ))}

                </section>


                {filteredFoods.length === 0 && (

                    <div className="no-food-results">

                        <div>
                            🔎
                        </div>

                        <h3>
                            Food not found in the library
                        </h3>

                        <p>
                            Try another food, dish, ingredient or cuisine.
                        </p>

                    </div>

                )}

            </div>


            {/* FOOD DETAILS POPUP */}

            {selectedFood && (

                <div
                    className="food-modal-overlay"
                    onClick={() => setSelectedFood(null)}
                >

                    <div
                        className="food-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="food-modal-close"
                            onClick={() => setSelectedFood(null)}
                        >
                            ×
                        </button>


                        <div className="modal-food-icon">

                            {selectedFood.emoji}

                        </div>


                        <p className="small-heading">
                            NUTRITION INFORMATION
                        </p>


                        <h2>
                            {selectedFood.name}
                        </h2>


                        <span className="modal-category">
                            {selectedFood.category}
                        </span>


                        <p className="modal-description">
                            {selectedFood.description}
                        </p>


                        <div className="modal-serving">

                            ⚖️ Serving:
                            <strong>
                                {selectedFood.serving}
                            </strong>

                        </div>


                        <div className="modal-nutrition-grid">

                            <div>
                                <span>🔥</span>
                                <small>Calories</small>
                                <strong>
                                    {selectedFood.calories}
                                </strong>
                            </div>

                            <div>
                                <span>💪</span>
                                <small>Protein</small>
                                <strong>
                                    {selectedFood.protein}
                                </strong>
                            </div>

                            <div>
                                <span>🌾</span>
                                <small>Carbohydrates</small>
                                <strong>
                                    {selectedFood.carbs}
                                </strong>
                            </div>

                            <div>
                                <span>🥑</span>
                                <small>Fat</small>
                                <strong>
                                    {selectedFood.fat}
                                </strong>
                            </div>

                            <div>
                                <span>🌿</span>
                                <small>Fiber</small>
                                <strong>
                                    {selectedFood.fiber}
                                </strong>
                            </div>

                        </div>


                        <div className="nourish-tip">

                            <h3>
                                💡 Nourish Tip
                            </h3>

                            <p>
                                {selectedFood.description}
                                {" "}
                                Portion size and preparation method
                                can affect the final nutritional value.
                            </p>

                        </div>


                    </div>

                </div>

            )}

        </div>

    );
}

export default FoodItems;