import { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const useAuth = () => {
	const { setUser, clientId, setIsLoggedIn } = useContext(AppContext);

	const navigate = useNavigate();

	function getJwtToken() {
		return localStorage.getItem("jwtToken");
	}

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
			localStorage.setItem("jwtToken", response.credential);
			setIsLoggedIn(true);
			document.getElementById("signInDiv").hidden = true;
			navigate("/dashboard");
		} else {
			console.error("Error handling callback response:", response);
		}
	}
	const handleDeleteProfile = async () => {
		try {
			const token = getJwtToken();
			const response = await fetch("/api/delete-profile", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token,
				}),
			});
			const data = await response.json();
			if (response.ok) {
				alert(data.message);
				handleSignOut();
			} else {
				console.log(data.error);
			}
		} catch (error) {
			console.error("An error occurred:", error);
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("jwtToken");
		if (token !== null && token !== "") {
			const userObject = jwtDecode(token);
			const currentTime = Date.now() / 1000;

			if (userObject.exp > currentTime) {
				setUser(userObject);
				setIsLoggedIn(true);
			} else {
				setUser(null);
				localStorage.removeItem("jwtToken");
				setIsLoggedIn(false);
			}
		} else {
			setIsLoggedIn(false);
		}
	}, [navigate, setIsLoggedIn, setUser]);

	return {
		handleSignUp,
		handleSignOut,
		handleDeleteProfile,
		getJwtToken,
	};
};

export default useAuth;
