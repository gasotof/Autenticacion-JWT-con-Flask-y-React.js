import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const token = sessionStorage.getItem("token");

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-between">
				<Link to="/" className="navbar-brand mb-0 h1">
					React Boilerplate
				</Link>

				<div className="d-flex gap-2">
					{!token && (
						<>
							<Link to="/login">
								<button className="btn btn-outline-primary">
									Login
								</button>
							</Link>

							<Link to="/signup">
								<button className="btn btn-outline-success">
									Signup
								</button>
							</Link>
						</>
					)}

					{token && (
						<button
							onClick={handleLogout}
							className="btn btn-outline-danger"
						>
							Logout
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};