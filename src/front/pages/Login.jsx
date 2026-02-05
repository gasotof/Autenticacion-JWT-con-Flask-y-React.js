import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resp = await fetch(
            import.meta.env.VITE_BACKEND_URL + "/api/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            }
        );

        const data = await resp.json();

        if (resp.ok) {
            sessionStorage.setItem("token", data.access_token);
            navigate("/private");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>

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
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};