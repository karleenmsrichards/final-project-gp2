import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./pages/Dashboard";
import SignUpForm from "./pages/SignUpForm";
import useAuth from "./customHooks/useAuth";

const App = () => {
	const { isLoggedIn } = useAuth();
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				{isLoggedIn && <Route path="/sign-up" element={<SignUpForm />} />}
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/contact-us" element={<ContactUs />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
