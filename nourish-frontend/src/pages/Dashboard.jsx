import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  const age = storedUser.age || "—";
  const weight = storedUser.weight || "—";
  const height = storedUser.height || "—";
  const goal = storedUser.goal || "Healthy Lifestyle";

  return (
    <div className="dashboard-page">

      <main className="dashboard-main">

        {/* HERO SECTION */}
        <section className="dashboard-hero">

          <div className="hero-content">

            <p className="small-heading">
              YOUR WELLNESS JOURNEY
            </p>

            <h1 className="welcome-title">
              <span className="welcome-text">Welcome,</span>{" "}
              <span className="name-text">
                Miss Bhavya Samskruthi 👋
              </span>
            </h1>

            <p className="hero-subtitle">
              Take care of your body, nourish your mind, and build
              healthy habits one day at a time.
            </p>

            {/* DAILY MOTIVATION */}
            <div className="daily-motivation">

              <div className="motivation-icon">
                🥗
              </div>

              <div>
                <p className="motivation-label">
                  TODAY'S GOAL
                </p>

                <h2>
                  Eat Healthy Only ✨
                </h2>

                <p>
                  Small healthy choices create a healthier you.
                </p>
              </div>

            </div>

            <p className="hero-quote">
              “A healthier you, a happier tomorrow ♡”
            </p>

          </div>

          {/* HERO IMAGE */}
          <div className="hero-image-wrapper">

            <img
              src="/nourish-hero.png"
              alt="A healthier you, a happier tomorrow"
              className="hero-image"
            />

          </div>

        </section>


        {/* PROFILE SUMMARY */}
        <section className="profile-summary">

          <div>
            <span>Age</span>
            <strong>{age}</strong>
          </div>

          <div>
            <span>Weight</span>
            <strong>
              {weight !== "—" ? `${weight} kg` : "—"}
            </strong>
          </div>

          <div>
            <span>Height</span>
            <strong>
              {height !== "—" ? `${height} cm` : "—"}
            </strong>
          </div>

          <div>
            <span>Goal</span>
            <strong>{goal}</strong>
          </div>

        </section>


        {/* DASHBOARD TOOLS */}
        <section className="dashboard-tools-section">

          <p className="tools-label">
            EXPLORE NOURISH
          </p>

          <h2 className="section-title">
            Your Wellness Tools
          </h2>

          <p className="tools-subtitle">
            Everything you need to make healthier choices.
          </p>


          <div className="dashboard-grid">

            {/* DIET PLANS */}
            <Link
              to="/diet-plans"
              className="dashboard-card"
            >
              <div className="card-icon">
                🥗
              </div>

              <h3>
                Diet Plans
              </h3>

              <p>
                Discover healthy meal plans made for your goals.
              </p>

              <span className="card-action">
                Explore →
              </span>
            </Link>


            {/* FOOD ITEMS */}
            <Link
              to="/food-items"
              className="dashboard-card"
            >
              <div className="card-icon">
                🍎
              </div>

              <h3>
                Food Items
              </h3>

              <p>
                Explore foods and learn about their nutrition.
              </p>

              <span className="card-action">
                Explore →
              </span>
            </Link>


            {/* MEAL TRACKER */}
            <Link
              to="/meals"
              className="dashboard-card"
            >
              <div className="card-icon">
                🍽️
              </div>

              <h3>
                Meal Tracker
              </h3>

              <p>
                Track your daily meals and stay consistent.
              </p>

              <span className="card-action">
                Track →
              </span>
            </Link>


            {/* PROGRESS */}
            <Link
              to="/progress"
              className="dashboard-card"
            >
              <div className="card-icon">
                📈
              </div>

              <h3>
                Progress
              </h3>

              <p>
                Monitor your wellness journey and achievements.
              </p>

              <span className="card-action">
                View →
              </span>
            </Link>


            {/* FOOD EXPLORER */}
            <Link
              to="/food-explorer"
              className="dashboard-card"
            >
              <div className="card-icon">
                🔎
              </div>

              <h3>
                Food Explorer
              </h3>

              <p>
                Search and discover nutritious foods.
              </p>

              <span className="card-action">
                Explore →
              </span>
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Dashboard;