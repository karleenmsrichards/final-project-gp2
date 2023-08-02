import { AppBar, Box, Button } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { handleSignUp, handleSignOut, isLoggedIn } = useAuth();

	return (
		<AppBar sx={{ background: "white" }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
					py: 2,
					px: 5,
					gap: 5,
				}}
			>
				{location.pathname === "/" && (
					<>
						{!isLoggedIn ? (
							<Box id="signInDiv">
								<Button variant="outlined" onClick={handleSignUp}>
									Sign In
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
								<Button variant="outlined" onClick={handleSignOut}>
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
						<Button variant="outlined" onClick={handleSignOut}>
							Sign Out
						</Button>
					</>
				)}
			</Box>
		</AppBar>
	);
};

export default Header;
