import { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios";

const useAuth = () => {
	const {
		user,
		setUser,
		clientId,
		setIsLoggedIn,
		providers,
		setProviders,
		isProvider,
	} = useContext(AppContext);

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

	const handleCallbackResponse = (response) => {
		if (response && response.credential) {
			localStorage.setItem("jwtToken", response.credential);
			setIsLoggedIn(true);
//			document.getElementById("signInDiv").hidden = true;
			navigate("/dashboard");
		} else {
			console.error("Error handling callback response:", response);
		}
	};

	const handleDeleteProfile = async () => {
		try {
			const confirmed = window.confirm(
				"Are you sure you want to delete your profile? "
			);
			if (!confirmed) {
				return;
			}

			const token = getJwtToken();
			const response = await axios.delete("/api/profile", {
				headers: {
					"Content-Type": "application/json",
				},
				data: {
					token,
				},
			});
			const data = response.data;
			if (response.status === 200) {
				if (isProvider) {
					const providerIndex = providers.findIndex(
						(provider) => provider.email === user.email
					);
					if (providerIndex !== -1) {
						const updatedProviders = [...providers];
						updatedProviders.splice(providerIndex, 1);
						setProviders(updatedProviders);
					}
				}
				handleSignOut();
				alert(data.message);
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
