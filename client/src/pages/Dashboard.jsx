import { Typography, Box, Button } from "@mui/material";
import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import { AppContext } from "../App";

const Dashboard = () => {
	const { user, isLoggedIn, setIsLoggedIn } = useContext(AppContext);
	const navigate = useNavigate();
	const { handleSignOut, getJwtToken } = useAuth();

	const sendingToken = useCallback(
		async (token) => {
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
		},
		[handleSignOut]
	);

	useEffect(() => {
		const token = getJwtToken();
		if (token) {
			sendingToken(token);
			setIsLoggedIn(true);
		} else {
			console.log("Token not found");
			setIsLoggedIn(false);
		}
	}, [isLoggedIn, setIsLoggedIn, getJwtToken, sendingToken]);

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
