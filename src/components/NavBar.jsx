// import logo svg
import logo from "../images/logo.svg";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
export default function NavBar() {
	// Dismiss modal on link click
	const dismissModal = () => {
		const modal = document.querySelector(".navbar-toggler");
		modal.click();
	};
	return (
		<nav className="navbar navbar-expand-md bg-white py-4">
			<div className="container">
				<div>
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="Easy Bank" />
					</Link>
				</div>
				<div>
					<button
						className="navbar-toggler border-0"
						type="button"
						data-bs-toggle="modal"
						data-bs-target="#navbarModal"
						aria-controls="navbarModal"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
							<Link className="nav-link" to="/about">
								About
							</Link>
							<Link className="nav-link" to="/contact">
								Contact
							</Link>
							<Link className="nav-link" to="/blog">
								Blog
							</Link>
							<Link className="nav-link" to="/careers">
								Careers
							</Link>
						</div>
					</div>
				</div>
				<div className="d-none d-md-block">
					<button className="btn btn-sm btn-custom">Request Invite</button>
				</div>
			</div>
			{/* Navbar Modal */}
			<div
				className="modal fade"
				id="navbarModal"
				tabIndex="-1"
				aria-labelledby="navbarModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header border-0 text-end">
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<ul className="navbar-nav">
								<li className="nav-item text-center">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/"
										onClick={dismissModal}
									>
										Home
									</Link>
								</li>
								<li className="nav-item text-center">
									<Link className="nav-link" to="/about" onClick={dismissModal}>
										About
									</Link>
								</li>
								<li className="nav-item text-center">
									<Link
										className="nav-link"
										to="/contact"
										onClick={dismissModal}
									>
										Contact
									</Link>
								</li>
								<li className="nav-item text-center">
									<Link className="nav-link" to="/blog" onClick={dismissModal}>
										Blog
									</Link>
								</li>
								<li className="nav-item text-center">
									<Link
										className="nav-link"
										to="/careers"
										onClick={dismissModal}
									>
										Careers
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
