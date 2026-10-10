import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function DietPlans() {

    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPlans();
    }, []);

    const loadPlans = async () => {

        try {

            const response =
                await API.get("/diet-plans");

            setPlans(response.data);

        } catch (error) {

            console.error(
                "Failed to load diet plans",
                error
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="app-page">

            <Navbar />

            <main className="content-main">

                <div className="page-heading">

                    <div>

                        <p className="small-heading">
                            PERSONALIZED NUTRITION
                        </p>

                        <h1>
                            Diet Plans
                        </h1>

                        <p>
                            Find a plan that matches
                            your health goals.
                        </p>

                    </div>

                </div>

                {loading ? (

                    <p>
                        Loading diet plans...
                    </p>

                ) : plans.length === 0 ? (

                    <div className="empty-box">
                        No diet plans available.
                    </div>

                ) : (

                    <div className="plan-grid">

                        {plans.map(plan => (

                            <div
                                className="plan-card"
                                key={plan.id}
                            >

                                <div className="plan-icon">
                                    🥗
                                </div>

                                <h2>
                                    {plan.name}
                                </h2>

                                <p className="plan-description">
                                    {plan.description}
                                </p>

                                <div className="plan-details">

                                    <div>
                                        <span>
                                            Goal
                                        </span>

                                        <strong>
                                            {plan.goal}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            Preference
                                        </span>

                                        <strong>
                                            {plan.dietaryPreference}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            Daily Calories
                                        </span>

                                        <strong>
                                            {plan.dailyCalories}
                                            {" "} kcal
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            Duration
                                        </span>

                                        <strong>
                                            {plan.durationDays}
                                            {" "} days
                                        </strong>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </main>

        </div>
    );
}

export default DietPlans;