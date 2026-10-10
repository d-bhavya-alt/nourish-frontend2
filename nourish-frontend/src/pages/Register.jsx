import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        weight: "",
        height: "",
        healthGoal: "",
        dietaryPreference: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        setMessage("");
        setLoading(true);

        try {

            await API.post("/users/register", {

                name: form.name,

                email: form.email,

                password: form.password,

                age: Number(form.age),

                weight: Number(form.weight),

                height: Number(form.height),

                healthGoal: form.healthGoal,

                dietaryPreference:
                    form.dietaryPreference

            });

            setMessage(
                "Registration successful! Redirecting to login..."
            );

            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (error) {

            setMessage(
                error.response?.data?.message ||
                "Registration failed. Email may already exist."
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="auth-page">

            <div className="register-card">

                <div className="logo">
                    🌿
                </div>

                <h1>Create Account</h1>

                <p className="subtitle">
                    Start your healthy journey with Nourish
                </p>

                <form onSubmit={handleRegister}>

                    <label>Full Name</label>

                    <input
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    <div className="two-inputs">

                        <div>
                            <label>Age</label>

                            <input
                                type="number"
                                name="age"
                                placeholder="Age"
                                value={form.age}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label>Weight (kg)</label>

                            <input
                                type="number"
                                name="weight"
                                placeholder="Weight"
                                value={form.weight}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <label>Height (cm)</label>

                    <input
                        type="number"
                        name="height"
                        placeholder="Height"
                        value={form.height}
                        onChange={handleChange}
                        required
                    />

                    <label>Health Goal</label>

                    <select
                        name="healthGoal"
                        value={form.healthGoal}
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Health Goal
                        </option>

                        <option value="Weight Loss">
                            Weight Loss
                        </option>

                        <option value="Weight Gain">
                            Weight Gain
                        </option>

                        <option value="Weight Management">
                            Weight Management
                        </option>

                        <option value="Healthy Diet">
                            Healthy Diet
                        </option>

                    </select>

                    <label>Dietary Preference</label>

                    <select
                        name="dietaryPreference"
                        value={form.dietaryPreference}
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Preference
                        </option>

                        <option value="Vegetarian">
                            Vegetarian
                        </option>

                        <option value="Non-Vegetarian">
                            Non-Vegetarian
                        </option>

                        <option value="Vegan">
                            Vegan
                        </option>

                    </select>

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Creating..."
                            : "Create Account"}
                    </button>

                </form>

                {message && (
                    <p className="success-message">
                        {message}
                    </p>
                )}

                <p className="switch-text">

                    Already have an account?

                    {" "}

                    <Link to="/">
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;