import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<main className="bg-light">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
