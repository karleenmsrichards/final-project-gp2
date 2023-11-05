import React, { useCallback, useContext, useEffect, useState } from "react";
import {
	Typography,
	Box,
	Container,
	CardMedia,
} from "@mui/material";
import useAuth from "../customHooks/useAuth";
import { AppContext } from "../App";

const MyProfile = () => {
	const { user, isLoggedIn, setIsLoggedIn } =
		useContext(AppContext);
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
			</Box>
		</Container>
	);
};

export default MyProfile;
