import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [clientId, setClientId] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function handleSignUp() {
		/* global google */
		google.accounts.id.initialize({
			client_id: clientId,
			callback: handleCallbackResponse,
		});
		google.accounts.id.renderButton(document.getElementById("signInDiv"), {
			theme: "outline",
			size: "large",
		});
		google.accounts.id.prompt();
	}

	const handleSignOut = () => {
		localStorage.removeItem("jwtToken");
		setIsLoggedIn(false);
		navigate("/");
	};

	function handleCallbackResponse(response) {
		if (response && response.credential) {
			// console.log("Encoded JWT ID token: " + response.credential);
			let userObject = jwtDecode(response.credential);
			// console.log(userObject);
			localStorage.setItem("jwtToken", response.credential);
			setIsLoggedIn(true); // Update isLoggedIn to true after successful login
			navigate("/dashboard");
		} else {
			console.error("Error handling callback response:", response);
		}
	}

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

	useEffect(() => {
		const token = localStorage.getItem("jwtToken");
		if (token !== null && token !== "") {
			const userObject = jwtDecode(token);
			const currentTime = Date.now() / 1000;

			if (userObject.exp > currentTime) {
				setUser(userObject);
				setIsLoggedIn(true); // Update isLoggedIn to true if valid token is present
			} else {
				setUser(null);
				localStorage.removeItem("jwtToken");
				setIsLoggedIn(false); // Update isLoggedIn to false if token is expired
			}
		} else {
			setIsLoggedIn(false); // Update isLoggedIn to false if no token is found
		}
	}, [navigate]);

	return { user, handleSignUp, handleSignOut, isLoggedIn, setIsLoggedIn };
};

export default useAuth;
