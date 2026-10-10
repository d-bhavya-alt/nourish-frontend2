import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="navbar">

            {/* LOGO */}
            <Link to="/dashboard" className="navbar-logo">

                <span className="navbar-logo-icon">
                    🌿
                </span>

                <span>
                    Nourish
                </span>

            </Link>


            {/* NAVIGATION */}
            <div className="navbar-links">

                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/food-items">
                    Food Items
                </Link>

                <Link to="/diet-plans">
                    Diet Plans
                </Link>

                <Link to="/meals">
                    Meals
                </Link>

                <Link to="/progress">
                    Progress
                </Link>

                <button
                    className="navbar-logout"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;