import online from "../../public/images/icon-online.svg";
import budgeting from "../../public/images/icon-budgeting.svg";
import onboarding from "../../public/images/icon-onboarding.svg";
import api from "../../public/images/icon-api.svg";
import confetti from "../../public/images/image-confetti.jpg";
import currency from "../../public/images/image-currency.jpg";
import plane from "../../public/images/image-plane.jpg";
import restaurant from "../../public/images/image-restaurant.jpg";
export default function Home() {
	return (
		<>
			<div className="homeBanner">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-xl-6">
							<h1 className="text-center text-xl-start">
								Next generation <br></br> digital banking
							</h1>
							<p className="text-secondary text-center text-xl-start">
								Take your financial life online. Your Easybank account will be a
								one-stop-shop for spending, saving, budgeting, investing, and
								much more.
							</p>
							<div className="text-center text-xl-start">
								<button className="btn btn-sm btn-custom">
									Request Invite
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-secondary bg-opacity-10" id="whyChoose">
				<div className="container h-100">
					<div className="row">
						<div className="col-12">
							<h2 className="mb-4">Why choose Easybank?</h2>
							<p className="text-secondary mb-2">
								We leverage Open Banking to turn your bank account into your
								financial hub.
							</p>
							<p className="text-secondary">
								Control your finances like never before.
							</p>
						</div>
					</div>
					<div className="row" style={{ marginTop: "5rem" }}>
						<div className="col-xl-3 text-center text-xl-start">
							<img src={online} alt="Online Icon" />
							<h3 className="mt-5">Online Banking</h3>
							<p className="text-secondary">
								Our modern web and mobile applications allow you to keep track
								of your finances wherever you are in the world.
							</p>
						</div>
						<div className="col-xl-3 text-center text-xl-start">
							<img src={budgeting} alt="Budgeting Icon" />
							<h3 className="mt-5">Simple Budgeting</h3>
							<p className="text-secondary">
								See exactly where your money goes each month. Receive
								notifications when you're close to hitting your limits.
							</p>
						</div>
						<div className="col-xl-3 text-center text-xl-start">
							<img src={onboarding} alt="Onboarding Icon" />
							<h3 className="mt-5">Fast Onboarding</h3>
							<p className="text-secondary">
								We don't do branches. Open your account in minutes online and
								start taking control of your finances right away.
							</p>
						</div>
						<div className="col-xl-3 text-center text-xl-start">
							<img src={api} alt="API Icon" />
							<h3 className="mt-5">Open API</h3>
							<p className="text-secondary">
								Manage your savings, investments, pension, and much more from
								one account. Tracking your money has never been easier.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="container"
				style={{ paddingTop: "5rem", paddingBottom: "8rem" }}
			>
				<div className="row">
					<div className="col-12">
						<h2 className="my-5">Latest Articles</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 text-center text-xl-start">
						<img
							src={currency}
							alt="Currency"
							className="rounded-top article-image mb-4"
						/>
						<h3>Receive money in any currency with no fees</h3>
						<p className="text-secondary">
							The world is getting smaller and we're becoming more mobile. So
							why should you be forced to only receive money in a single …
						</p>
					</div>
					<div className="col-xl-3 text-center text-xl-start">
						<img
							src={restaurant}
							alt="Restaurant"
							className="rounded-top article-image mb-4"
						/>
						<h3>Receive money in any currency with no fees</h3>
						<p className="text-secondary">
							Our simple budgeting feature allows you to separate out your
							spending and set realistic limits each month. That means you
						</p>
					</div>
					<div className="col-xl-3 text-center text-xl-start">
						<img
							src={plane}
							alt="Plane"
							className="rounded-top article-image mb-4"
						/>
						<h3>Receive money in any currency with no fees</h3>
						<p className="text-secondary">
							We want you to enjoy your travels. This is why we don't charge any
							fees on purchases while you're abroad. We'll even show you …
						</p>
					</div>
					<div className="col-xl-3 text-center text-xl-start">
						<img
							src={confetti}
							alt="Confetti"
							className="rounded-top article-image mb-4"
						/>
						<h3>Receive money in any currency with no fees</h3>
						<p className="text-secondary">
							After a lot of hard work by the whole team, we're excited to
							launch our closed beta. It's easy to request an invite through the
							site ...
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
