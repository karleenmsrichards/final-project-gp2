import { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./pages/Dashboard";
import Subscription from "./pages/Subscription";
import SignUpForm from "./pages/SignUpForm";
import Find from "./pages/Find";
import axios from "axios";
import EditForm from "./pages/EditForm";
import NotFound from "./pages/NotFound";

export const AppContext = createContext(null);

const App = () => {
	const [user, setUser] = useState(null);
	const [clientId, setClientId] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [providers, setProviders] = useState([]);
	const [isProvider, setIsProvider] = useState(false);
	const [isProvidersLoading, setIsProvidersLoading] = useState(false);



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
				<Route path="/find" element={<Find />} />
				<Route path="*" element={<NotFound />} />
				{isLoggedIn && (
					<>
						<Route path="/sign-up" element={<SignUpForm />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/edit" element={<EditForm />} />
					</>
				)}
			</Routes>
			<Footer />
		</AppContext.Provider>
	);
};

export default App;
