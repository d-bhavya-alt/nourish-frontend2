import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        setMessage("");
        setLoading(true);

        try {

            const response = await API.post("/users/login", {
                email: email,
                password: password
            });

            localStorage.setItem(
                "user",
                JSON.stringify(response.data)
            );

            navigate("/dashboard");

        } catch (error) {

            setMessage(
                error.response?.data?.message ||
                "Invalid email or password"
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="auth-page">

            <div className="auth-card">

                <div className="logo">
                    🌿
                </div>

                <h1>Nourish</h1>

                <p className="subtitle">
                    Your personalized diet companion
                </p>

                <form onSubmit={handleLogin}>

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

                {message && (
                    <p className="error-message">
                        {message}
                    </p>
                )}

                <p className="switch-text">

                    Don't have an account?

                    {" "}

                    <Link to="/register">
                        Create Account
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Login;