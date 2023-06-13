// import logo svg
import logo from "../../public/images/logo.svg";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
export default function NavBar() {
	// Basic Bootstrap Navbar
	return (
		<nav className="navbar navbar-expand-md bg-white py-4">
			<div className="container">
				<div>
					<a className="navbar-brand" href="/">
						<img src={logo} alt="Easy Bank" />
					</a>
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
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
							<a className="nav-link" href="/about">
								About
							</a>
							<a className="nav-link" href="/contact">
								Contact
							</a>
							<a className="nav-link" href="/blog">
								Blog
							</a>
							<a className="nav-link" href="/careers">
								Careers
							</a>
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
									<a className="nav-link active" aria-current="page" href="/">
										Home
									</a>
								</li>
								<li className="nav-item text-center">
									<a className="nav-link" href="/about">
										About
									</a>
								</li>
								<li className="nav-item text-center">
									<a className="nav-link" href="/contact">
										Contact
									</a>
								</li>
								<li className="nav-item text-center">
									<a className="nav-link" href="/blog">
										Blog
									</a>
								</li>
								<li className="nav-item text-center">
									<a className="nav-link" href="/careers">
										Careers
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
