import React, { useCallback, useContext, useEffect, useState } from "react";
import {
	Typography,
	Box,
	Paper,
	Container,
	Button,
	CardMedia,
} from "@mui/material";
import useAuth from "../customHooks/useAuth";
import { AppContext } from "../App";
import GoogleCalendarForm from "../Components/GoogleCalendarForm";
import LeftSideCard from "../Components/LeftSideCard";
import RightSideCard from "../Components/RightSideCard";
import CloseIcon from "@mui/icons-material/Close";

const Dashboard = () => {
	const { user, isLoggedIn, setIsLoggedIn, providers, isProvider } =
		useContext(AppContext);
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
			<Box sx={{ my: 5 }}>
				<CardMedia
					component="img"
					image={user?.picture}
					sx={{ height: 70, width: 70, mb: 2 }}
				/>
				<Typography>
					Hello{" "}
					<Box component="span" fontWeight="bold">
						{user?.name}
					</Box>
				</Typography>
				<Typography>
					Logged In As:{" "}
					<Box component="span" fontWeight="bold">
						{user?.email}
					</Box>
				</Typography>
				{isProvider && (
					<Paper
						sx={{
							px: { xs: 1, sm: 3, md: 5, lg: 5, xl: 10 },
							border: 1,
							borderColor: "gray",
							borderRadius: "20px",
							py: 3,
							mt: 5,
							"&:hover": {
								backgroundColor: "#f2f2f2",
							},
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								flexDirection: { xs: "column", md: "row" },
							}}
						>
							<LeftSideCard eachProvider={loggedInProvider} />
							<RightSideCard eachProvider={loggedInProvider} />
						</Box>
						<Box sx={{ direction: "rtl" }} mt={2}>
							<Button
								type="button"
								variant="contained"
								sx={{
									backgroundColor: "#F3263B",
									color: "#fff",
									py: 1,
									borderRadius: "10px",
									"&:hover": {
										backgroundColor: "#cc0000",
									},
								}}
								onClick={handleToggleForm}
							>
								{showGoogleCalendarForm ? <CloseIcon /> : "Add Google Calendar"}
							</Button>
							{showGoogleCalendarForm && (
								<GoogleCalendarForm email={loggedInProvider.email} />
							)}
						</Box>
					</Paper>
				)}
			</Box>
		</Container>
	);
};

export default Dashboard;
