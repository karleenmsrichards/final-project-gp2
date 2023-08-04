import { AppBar, Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { handleSignUp, handleSignOut, isLoggedIn } = useAuth();

	return (
		<AppBar sx={{ background: "white", color: "black", position:"static" }}>

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: 5,
					py:2,
				}}
				px={{ xs: 2, md: 5 }}
			>
				<Tabs
					sx={{
						display: "flex",
						justifyContent: "space-evenly",
						borderColor: "divider",
						flexGrow: 1,
					}}
					selectionFollowsFocus
				>
					<Typography variant="h5" sx={{ fontWeight: "bolder", pt: 1 }}>
						BOOKME
					</Typography>
					<Tab label="Find" sx={{ color: "black" }} />
					<Tab label="Book" sx={{ color: "black" }} />
					{isLoggedIn &&
					<Tab label="Become supplier" sx={{ color: "black" }} />
					}
				</Tabs>
				{location.pathname === "/" && (
					<>
						{!isLoggedIn ? (
							<Box id="signInDiv" sx={{ mr: 1 }}>
								<Button variant="contained" onClick={handleSignUp}>
									Sign Up / Sign In
								</Button>
							</Box>
						) : (
							<>
								<Button
									variant="outlined"
									onClick={() => navigate("/dashboard")}
								>
									Dashboard
								</Button>
								<Button variant="contained" onClick={handleSignOut}>
									Sign Out
								</Button>
							</>
						)}
					</>
				)}
				{location.pathname === "/dashboard" && (
					<>
						<Button variant="outlined" onClick={() => navigate("/")}>
							Home
						</Button>
						<Button variant="contained" onClick={handleSignOut}>
							Sign Out
						</Button>
					</>
				)}
			</Box>
		</AppBar>
	);
};

export default Header;
