import React, { useContext } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import useAuth from "../customHooks/useAuth";
import { AppContext } from "../App";

const backgroundImage = "";

export default function ProductHero() {
	const { isLoggedIn } = useContext(AppContext);
	const { handleSignUp } = useAuth();

	return (
		<Box
			sx={{
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				backgroundRepeat: "no-repeat",
				color: "white",
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "80vh",
				maxHeight: 1300,
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundColor: "#7FC7D9",
				overflow: "hidden",
			}}
		>
			<Container
				sx={{
					mt: 0,
					mb: 14,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography color="inherit" align="center" variant="h2" marked="center">
					Something goes here
				</Typography>
				<Typography
					color="inherit"
					align="center"
					variant="h5"
					sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
				>
					More Info
				</Typography>
				<Button
					variant="contained"
					size="large"
					component="a"
					onClick={!isLoggedIn ? handleSignUp : null}
					sx={{
						minWidth: 200,
						backgroundColor: "#F3263B",
						color: "#fff",
						px: 3,
						py: 1,
						borderRadius: "10px",
						"&:hover": {
							backgroundColor: "#cc0000",
						},
					}}
				>
					Sign In / Sign Up
				</Button>
				<Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
					Your text goes here
				</Typography>
			</Container>
		</Box>
	);
}
