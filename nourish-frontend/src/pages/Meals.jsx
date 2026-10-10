import React, { useEffect, useMemo, useState } from "react";
import API from "../services/api";

export default function Meals() {
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");
  const [mealType, setMealType] = useState("Breakfast");
  const [quantity, setQuantity] = useState("");
  const [meals, setMeals] = useState([]);
  const [foodSearch, setFoodSearch] = useState("");

  const [loadingFoods, setLoadingFoods] = useState(true);
  const [foodError, setFoodError] = useState("");

  // Load all foods from Spring Boot
  useEffect(() => {
    const loadFoods = async () => {
      try {
        setLoadingFoods(true);
        setFoodError("");

        const response = await API.get("/food-items");

        console.log("Food items received from backend:", response.data);

        setFoods(response.data);
      } catch (error) {
        console.error("Error loading food items:", error);

        setFoodError(
          "Unable to load food items. Please make sure the backend is running."
        );
      } finally {
        setLoadingFoods(false);
      }
    };

    loadFoods();
  }, []);

  // Search/filter foods
  const options = useMemo(() => {
    return foods.filter((food) =>
      food.name
        ?.toLowerCase()
        .includes(foodSearch.toLowerCase())
    );
  }, [foods, foodSearch]);

  // Selected food object
  const selectedFoodData = foods.find(
    (food) => food.name === selectedFood
  );

  function addMeal(event) {
    event.preventDefault();

    const grams = Number(quantity);

    if (!selectedFoodData) {
      alert("Please select a food.");
      return;
    }

    if (!Number.isFinite(grams) || grams <= 0) {
      alert("Please enter a positive quantity in grams.");
      return;
    }

    // Calories are stored per 100g for the numeric foods
    const caloriesPer100g = Number(selectedFoodData.calories);

    let calories = null;

    if (Number.isFinite(caloriesPer100g)) {
      calories = (caloriesPer100g * grams) / 100;
    }

    const newMeal = {
      localId: `${Date.now()}-${Math.random()}`,
      foodName: selectedFoodData.name,
      mealType: mealType,
      quantity: grams,
      calories: calories,
    };

    setMeals((current) => [...current, newMeal]);

    setSelectedFood("");
    setQuantity("");
  }

  return (
    <div
      className="meal-tracker"
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "32px 20px",
      }}
    >
      {/* HEADER */}
      <header
        className="meal-header"
        style={{
          textAlign: "center",
        }}
      >
        <p className="small-heading">DAILY NUTRITION</p>

        <h1>Meal Tracker</h1>

        <p>
          Add your meals and monitor your calorie intake.
        </p>
      </header>

      {/* ADD MEAL */}
      <section
        className="add-meal"
        style={{
          marginTop: 32,
        }}
      >
        <h2>Add Meal</h2>

        <form
          onSubmit={addMeal}
          style={{
            display: "grid",
            gap: 16,
          }}
        >
          {/* SEARCH */}
          <label>
            Search foods

            <input
              type="search"
              value={foodSearch}
              onChange={(e) => setFoodSearch(e.target.value)}
              placeholder="Search Apple, Dosa, Paneer..."
              style={{
                display: "block",
                width: "100%",
                padding: 10,
                marginTop: 6,
              }}
            />
          </label>

          {/* FOOD DROPDOWN */}
          <label>
            Food Item

            <select
              value={selectedFood}
              onChange={(e) => setSelectedFood(e.target.value)}
              required
              style={{
                display: "block",
                width: "100%",
                padding: 10,
                marginTop: 6,
              }}
            >
              <option value="">
                {loadingFoods
                  ? "Loading foods..."
                  : "Select Food"}
              </option>

              {!loadingFoods &&
                options.map((food) => (
                  <option
                    key={food.id}
                    value={food.name}
                  >
                    {food.name}
                    {food.calories !== null &&
                    food.calories !== undefined
                      ? ` (${food.calories} kcal)`
                      : ""}
                  </option>
                ))}
            </select>
          </label>

          {/* ERROR */}
          {foodError && (
            <p
              style={{
                color: "red",
                margin: 0,
              }}
            >
              {foodError}
            </p>
          )}

          {/* FOOD COUNT */}
          {!loadingFoods && !foodError && (
            <small>
              {options.length} food item
              {options.length !== 1 ? "s" : ""} available
            </small>
          )}

          {/* MEAL TYPE */}
          <label>
            Meal Type

            <select
              value={mealType}
              onChange={(e) =>
                setMealType(e.target.value)
              }
              style={{
                display: "block",
                width: "100%",
                padding: 10,
                marginTop: 6,
              }}
            >
              {[
                "Breakfast",
                "Lunch",
                "Dinner",
                "Snack",
              ].map((type) => (
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))}
            </select>
          </label>

          {/* QUANTITY */}
          <label>
            Quantity (grams)

            <input
              type="number"
              min="1"
              step="any"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
              placeholder="Example: 100"
              required
              style={{
                display: "block",
                width: "100%",
                padding: 10,
                marginTop: 6,
              }}
            />
          </label>

          {/* SELECTED FOOD INFORMATION */}
          {selectedFoodData && (
            <div
              style={{
                padding: 12,
                border: "1px solid #ddd",
                borderRadius: 8,
              }}
            >
              <strong>
                {selectedFoodData.name}
              </strong>

              <div>
                Category:{" "}
                {selectedFoodData.category ||
                  "Not available"}
              </div>

              {selectedFoodData.calories !== null &&
                selectedFoodData.calories !==
                  undefined && (
                  <div>
                    Calories:{" "}
                    {selectedFoodData.calories} kcal /
                    100 g
                  </div>
                )}

              {selectedFoodData.protein !== null &&
                selectedFoodData.protein !==
                  undefined && (
                  <div>
                    Protein:{" "}
                    {selectedFoodData.protein} g
                  </div>
                )}

              {selectedFoodData.carbohydrates !==
                null &&
                selectedFoodData.carbohydrates !==
                  undefined && (
                  <div>
                    Carbohydrates:{" "}
                    {
                      selectedFoodData.carbohydrates
                    }{" "}
                    g
                  </div>
                )}

              {selectedFoodData.fat !== null &&
                selectedFoodData.fat !==
                  undefined && (
                  <div>
                    Fat:{" "}
                    {selectedFoodData.fat} g
                  </div>
                )}

              {selectedFoodData.fiber !== null &&
                selectedFoodData.fiber !==
                  undefined && (
                  <div>
                    Fiber:{" "}
                    {selectedFoodData.fiber} g
                  </div>
                )}
            </div>
          )}

          {/* ADD MEAL BUTTON */}
          <button
            type="submit"
            style={{
              padding: 12,
              cursor: "pointer",
            }}
          >
            Add Meal
          </button>
        </form>
      </section>

      {/* MY MEALS */}
      <section
        className="my-meals"
        style={{
          marginTop: 32,
        }}
      >
        <h2>My Meals</h2>

        {meals.length === 0 ? (
          <p>No meals added yet.</p>
        ) : (
          meals.map((meal) => (
            <div
              key={meal.localId}
              style={{
                padding: 14,
                borderBottom:
                  "1px solid #ddd",
                display: "flex",
                justifyContent:
                  "space-between",
                gap: 12,
              }}
            >
              <div>
                <strong>
                  {meal.foodName}
                </strong>

                <div>
                  {meal.mealType} ·{" "}
                  {meal.quantity} g
                </div>

                <small>
                  {meal.calories === null
                    ? "Calories unavailable"
                    : `${Math.round(
                        meal.calories * 10
                      ) / 10} kcal (estimated)`}
                </small>
              </div>

              <button
                type="button"
                onClick={() =>
                  setMeals((current) =>
                    current.filter(
                      (item) =>
                        item.localId !==
                        meal.localId
                    )
                  )
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}