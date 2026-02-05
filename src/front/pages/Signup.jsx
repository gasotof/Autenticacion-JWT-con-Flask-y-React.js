import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resp = await fetch(
            import.meta.env.VITE_BACKEND_URL + "/api/signup",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            }
        );

        if (resp.ok) {
            navigate("/login");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Create account</button>
                </form>

                <p style={{ textAlign: "center", marginTop: "1rem" }}>
                    Already have an account? <a href="/login">Login</a>
                </p>

            </div>
        </div>
    );
};