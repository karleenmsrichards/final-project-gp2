import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./pages/Dashboard";
import Hero from "./Components/Hero";

const App = () => (
	<div>
		<Header />
		<Hero />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/contact-us" element={<ContactUs />} />
		</Routes>
		<Footer />
	</div>
);

export default App;
