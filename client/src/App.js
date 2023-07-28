import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/contact-us" element={<ContactUs />} />
	</Routes>
);

export default App;
