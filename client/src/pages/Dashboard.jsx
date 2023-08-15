import React, { useCallback, useContext, useEffect, useState } from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import useAuth from "../customHooks/useAuth";
import { AppContext } from "../App";
import GoogleCalendarForm from "../Components/GoogleCalendarForm";

const Dashboard = () => {
	const { user, isLoggedIn, setIsLoggedIn, providers } = useContext(AppContext);
	const { handleSignOut, getJwtToken } = useAuth();
	const [showGoogleCalendarForm, setShowGoogleCalendarForm] = useState(false);

	const handleToggleForm = () => {
		setShowGoogleCalendarForm((prevState) => !prevState);
	};

	const loggedInProvider = providers.find(
		(provider) => provider.email === user?.email
	);

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
		<Container>
			<Box sx={{ marginX: { xs: 1, sm: 5, md: 10, lg: 15, xl: 20 }, my: 5 }}>
				<Typography variant="h6">Hello {user?.name}</Typography>
			</Box>

			{loggedInProvider && (
				<Box mt={2}>
					<Button
						type="button"
						variant="contained"
						color="primary"
						style={{ backgroundColor: "#F3263B" }}
						onClick={handleToggleForm}
					>
						{showGoogleCalendarForm ? "Close" : "Add Google Calendar"}
					</Button>
				</Box>
			)}

			{showGoogleCalendarForm && (
				<GoogleCalendarForm userId={loggedInProvider.user_id} />
			)}
		</Container>
	);
};

export default Dashboard;
