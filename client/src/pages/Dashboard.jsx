import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
import useAuth from "../customHooks/useAuth";

const Dashboard = () => {
	const { user, handleSignOut, isLoggedIn, setIsLoggedIn, getJwtToken } =
		useAuth();

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
	}, [isLoggedIn]);

	return (
		<Box sx={{ marginX: { xs: 1, sm: 5, md: 10, lg: 15, xl: 20 }, my: 5 }}>
			{isLoggedIn ? (
				<>
					<Typography variant="h6">Hello {user?.name}</Typography>
				</>
			) : (
				<Typography>You need Log In</Typography>
			)}
		</Box>
	);
};

export default Dashboard;
