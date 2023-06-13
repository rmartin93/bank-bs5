import logo from "../../public/images/logo-white.svg";
import fb from "../../public/images/icon-facebook.svg";
import yt from "../../public/images/icon-youtube.svg";
import tw from "../../public/images/icon-twitter.svg";
import pi from "../../public/images/icon-pinterest.svg";
import ig from "../../public/images/icon-instagram.svg";
export default function Footer() {
	return (
		<footer className="bg-primary text-white py-5">
			<div className="container">
				<div className="row">
					<div className="col-12 col-xl-4 mb-5 mb-xl-0">
						<img src={logo} alt="Easy Bank" />
						<div className="d-flex gap-3 mt-5">
							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={fb} alt="Facebook" />
							</a>
							<a
								href="https://www.youtube.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={yt} alt="Youtube" />
							</a>
							<a
								href="https://www.twitter.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={tw} alt="Twitter" />
							</a>
							<a
								href="https://www.pinterest.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={pi} alt="Pinterest" />
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={ig} alt="Instagram" />
							</a>
						</div>
					</div>
					<div className="col-12 col-xl-4  mb-5 mb-xl-0">
						<div className="row">
							<div className="col-6">
								<ul className="list-unstyled">
									<li className="mb-3">
										<a
											href="/about"
											className="footer-text text-decoration-none"
										>
											About Us
										</a>
									</li>
									<li className="mb-3">
										<a
											href="/contact"
											className="footer-text text-decoration-none"
										>
											Contact
										</a>
									</li>
									<li>
										<a
											href="/blog"
											className="footer-text text-decoration-none"
										>
											Blog
										</a>
									</li>
								</ul>
							</div>
							<div className="col-6">
								<ul className="list-unstyled">
									<li className="mb-3">
										<a
											href="/careers"
											className="footer-text text-decoration-none"
										>
											Careers
										</a>
									</li>
									<li className="mb-3">
										<a
											href="/support"
											className="footer-text text-decoration-none"
										>
											Support
										</a>
									</li>
									<li>
										<a
											href="/privacy-policy"
											className="footer-text text-decoration-none"
										>
											Privacy Policy
										</a>
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
