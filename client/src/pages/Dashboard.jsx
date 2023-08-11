import { Container, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useAuth from "../customHooks/useAuth";

const Dashboard = () => {
	const {
		user,
		handleSignUp,
		handleSignOut,
		isLoggedIn,
		setIsLoggedIn,
		handleDeleteProfile,
		getJwtToken,
	} = useAuth();

	const sendingToken = async (token) => {
		try {
			const response = await fetch("/api/validation", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token,
					role: "customer",
				}),
			});
			const data = await response.json();
			if (response.ok) {
				console.log(data.message);
				fetch("/api/dashboard")
					.then((res) => {
						if (!res.ok) {
							throw new Error(res.message);
						}
						return res.json();
					})
					.then((data) => {
						console.log(data);
					})
					.catch((err) => {
						console.error(err);
					});
			} else {
				handleSignOut();
			}
		} catch (err) {
			console.error(err);
			handleSignOut();
		}
	};

	useEffect(() => {
		const token = getJwtToken();
		if (token) {
			sendingToken(token);
			setIsLoggedIn(true);
		} else {
			console.log("Token not found");
			setIsLoggedIn(false);
		}
		/* eslint-disable-next-line */ //// missing dependency ////////
	}, [setIsLoggedIn]);

	return (
		<Container sx={{ width: "400px", height: "200px", marginTop: "200px" }}>
			{isLoggedIn ? (
				<>
					<Typography> Hello {user.name}</Typography>
					<Button onClick={handleDeleteProfile}>Delete Profile</Button>
				</>
			) : (
				<>
					<Typography>You need Log In</Typography>
					<Button onClick={handleSignUp}>Log in</Button>
				</>
			)}
		</Container>
	);
};

export default Dashboard;
