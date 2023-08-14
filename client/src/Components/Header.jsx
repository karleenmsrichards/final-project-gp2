import { AppBar, Box, Button, MenuItem } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import Sidebar from "./Sidebar";
import { AppContext } from "../App";
import Typography from "../Mui-Components/Typography";

const Header = () => {

	const { user, isLoggedIn, isProvider, setIsProvider, providers,isProvidersLoading } =
		useContext(AppContext);
	const { handleSignUp } = useAuth();

	useEffect(() => {
		if (isLoggedIn && isProvidersLoading) {
			if (providers.some((provider)=>provider?.email===user?.email)){
				setIsProvider(true);
			} else {
				setIsProvider(false);
			}
		}
	}, [user, isLoggedIn, setIsProvider, isProvidersLoading, providers]);

	return (
		<AppBar sx={{ background: "white", color: "black", position: "static" }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: 5,
					py: 2,
				}}
				px={{ xs: 2, md: 5 }}
			>
				<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
					<MenuItem component={Link} to="/">
						<Typography
							variant="h5"
							sx={{
								fontWeight: "bolder",
								cursor: "pointer",
							}}
						>
							BOOKME
						</Typography>
					</MenuItem>
					<MenuItem component={Link} to="/find" fontWeight="bold">
						<Typography fontWeight="bolder">Find</Typography>
					</MenuItem>
					<MenuItem component={Link} to="/find" fontWeight="bold">
						<Typography fontWeight="bolder">Book</Typography>
					</MenuItem>
					{isLoggedIn && (
						<MenuItem
							component={Link}
							to={isProvider ? "/edit" : "/sign-up"}
							fontWeight="bolder"
						>
							<Typography fontWeight="bolder">
								{isProvider ? "Update Profile" : "Become a Provider"}
							</Typography>
						</MenuItem>
					)}
				</Box>

				{!isLoggedIn ? (
					<Box id="signInDiv" sx={{ mr: 1 }}>
						<Button variant="contained" onClick={handleSignUp}>
							Sign Up / Sign In
						</Button>
					</Box>
				) : (
					<Sidebar />
				)}
			</Box>
		</AppBar>
	);
};

export default Header;
