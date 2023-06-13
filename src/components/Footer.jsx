import logo from "../../public/images/logo-white.svg";
import fb from "../../public/images/icon-facebook.svg";
import yt from "../../public/images/icon-youtube.svg";
import tw from "../../public/images/icon-twitter.svg";
import pi from "../../public/images/icon-pinterest.svg";
import ig from "../../public/images/icon-instagram.svg";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<footer className="bg-primary text-white py-5">
			<div className="container">
				<div className="row">
					<div className="col-12 col-xl-4 mb-5 mb-xl-0">
						<Link to="/">
							<img src={logo} alt="Easy Bank" />
						</Link>
						<div className="d-flex gap-3 mt-5">
							<Link
								to="https://www.facebook.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={fb} alt="Facebook" />
							</Link>
							<Link
								to="https://www.youtube.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={yt} alt="Youtube" />
							</Link>
							<Link
								to="https://www.twitter.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={tw} alt="Twitter" />
							</Link>
							<Link
								to="https://www.pinterest.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={pi} alt="Pinterest" />
							</Link>
							<Link
								to="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={ig} alt="Instagram" />
							</Link>
						</div>
					</div>
					<div className="col-12 col-xl-4  mb-5 mb-xl-0">
						<div className="row">
							<div className="col-6">
								<ul className="list-unstyled">
									<li className="mb-3">
										<Link
											to="/about"
											className="footer-text text-decoration-none"
										>
											About Us
										</Link>
									</li>
									<li className="mb-3">
										<Link
											to="/contact"
											className="footer-text text-decoration-none"
										>
											Contact
										</Link>
									</li>
									<li>
										<Link
											to="/blog"
											className="footer-text text-decoration-none"
										>
											Blog
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-6">
								<ul className="list-unstyled">
									<li className="mb-3">
										<Link
											to="/careers"
											className="footer-text text-decoration-none"
										>
											Careers
										</Link>
									</li>
									<li className="mb-3">
										<Link
											to="/support"
											className="footer-text text-decoration-none"
										>
											Support
										</Link>
									</li>
									<li>
										<Link
											to="/privacy-policy"
											className="footer-text text-decoration-none"
										>
											Privacy Policy
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-xl-4 text-xl-end text-start">
						<button className="btn btn-sm btn-custom">Request Invite</button>
						<p className="footer-text mt-5">© Easybank. All Rights Reserved </p>
					</div>
				</div>
			</div>
		</footer>
	);
}
