import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Header from "./Components/Header";

const App = () => (
	<div>
	<Header/>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/contact-us" element={<ContactUs />} />
	</Routes>
	</div>
);

export default App;
