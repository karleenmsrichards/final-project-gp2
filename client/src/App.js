import { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MyProfile from "./pages/MyProfile";
import axios from "axios";

export const AppContext = createContext(null);

const App = () => {
	const [user, setUser] = useState(null);
	const [clientId, setClientId] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);


	useEffect(() => {
		async function fetchClientId() {
			try {
				const response = await axios.get("/api/clientId");
				const { clientId } = response.data;
				setClientId(clientId);
			} catch (error) {
				console.error("Error fetching client ID:", error);
			}
		}
		fetchClientId();
	}, []);

	const contextValue = {
		user,
		setUser,
		clientId,
		setClientId,
		isLoggedIn,
		setIsLoggedIn,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				{isLoggedIn && <Route path="/profile" element={<MyProfile />} />}
			</Routes>
			<Footer />
		</AppContext.Provider>
	);
};

export default App;
