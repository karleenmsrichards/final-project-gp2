import { AppBar, Box, Button, LinearProgress, MenuItem, MenuList } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import Sidebar from "./Sidebar";
import { AppContext } from "../App";
import Typography from "../Mui-Components/Typography";

const Header = () => {
	const {
		user,
		isLoggedIn,
		isProvider,
		setIsProvider,
		providers,
		isProvidersLoading,
	} = useContext(AppContext);
	const { handleSignUp } = useAuth();

	useEffect(() => {
		if (isLoggedIn && isProvidersLoading) {
				setIsProvider(providers.some((provider) => provider?.email === user?.email));
		}
	}, [user, isLoggedIn, setIsProvider, isProvidersLoading, providers]);

const updateProfile = (
	<MenuItem component={Link} to="/edit" fontWeight="bolder">
		<Typography fontWeight="bolder">Update Profile</Typography>
	</MenuItem>
);

const becomeProfile = (
	<MenuItem component={Link} to="/sign-up" fontWeight="bolder">
		<Typography fontWeight="bolder">Become a Provider</Typography>
	</MenuItem>
);

	return (
		<AppBar sx={{ background: "white", color: "black", position: "static" }}>
			{!isProvidersLoading ? (
				<LinearProgress />
			) : (
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						alignItems: "center",
						gap: 5,
						py: 2,
					}}
					px={{ xs: 2, md: 5 }}
				>
					<MenuList sx={{ display: "flex", justifyContent: "space-evenly" }}>
						<MenuItem
							component={Link}
							to="/"
							style={{ backgroundColor: "transparent" }}
							disableRipple
						>
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
						{isLoggedIn && isProvider ? updateProfile : becomeProfile}
					</MenuList>
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
			)}
		</AppBar>
	);
};

export default Header;
