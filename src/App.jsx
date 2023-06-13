import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<main className="bg-light">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Routes>
					<Route path="/about" element={<About />} />
				</Routes>
				<Routes>
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Routes>
					<Route path="/blog" element={<Blog />} />
				</Routes>
				<Routes>
					<Route path="/careers" element={<Careers />} />
				</Routes>
				<Routes>
					<Route path="/support" element={<Support />} />
				</Routes>
				<Routes>
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
