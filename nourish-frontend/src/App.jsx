import React from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import FoodExplorer from "./pages/FoodExplorer";
import FoodItems from "./pages/FoodItems";
import DietPlans from "./pages/DietPlans";
import Meals from "./pages/Meals";
import Progress from "./pages/Progress";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* LOGIN */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />


                {/* REGISTER */}

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* DASHBOARD */}

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />


                {/* FOOD EXPLORER */}

                <Route
                    path="/food-explorer"
                    element={<FoodExplorer />}
                />


                {/* FOOD ITEMS */}

                <Route
                    path="/food-items"
                    element={<FoodItems />}
                />


                {/* DIET PLANS */}

                <Route
                    path="/diet-plans"
                    element={<DietPlans />}
                />


                {/* MEALS */}

                <Route
                    path="/meals"
                    element={<Meals />}
                />


                {/* PROGRESS */}

                <Route
                    path="/progress"
                    element={<Progress />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;