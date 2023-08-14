import { AppBar, Box, Button, Tab, Tabs } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import Sidebar from "./Sidebar";
import { AppContext } from "../App";

const Header = () => {
	const navigate = useNavigate();
	const { user, isLoggedIn, isProvider, setIsProvider, providers } =
		useContext(AppContext);
	const { handleSignUp } = useAuth();
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (user && providers.filter((provider) => provider.id === user.id)) {
			console.log(user.id);
			setIsProvider(true);
		} else {
			setIsProvider(false);
		}
	}, [user, providers, setIsProvider]);

	const homePageCode = 0;
	const findPageCode = 1;
	const updateProfileCode = 3;

	const handleChange = (e, value) => {
		if (value === homePageCode) {
			navigate("/");
		} else if (value === findPageCode) {
			navigate("/find");
		} else if (value === updateProfileCode) {
			navigate("/update-profile");
		} else if (value === "becomeProvider" && !isLoggedIn) {
			alert("Please sign in to become a provider.");
		} else if (value === "becomeProvider" && isLoggedIn) {
			navigate("/sign-up");
		}

		setValue(value);
	};

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
				<Tabs
					value={value}
					onChange={handleChange}
					sx={{
						display: "flex",
						justifyContent: "space-evenly",
						borderColor: "divider",
						flexGrow: 1,
					}}
					TabIndicatorProps={{ style: { backgroundColor: "#fff" } }}
					selectionFollowsFocus
				>
					<Tab
						label="BOOKME"
						sx={{
							fontWeight: "bolder",
							fontSize: 25,
							color: "#000",
						}}
					/>
					<Tab label="Find" sx={{ color: "#000" }} />
					<Tab label="Book" sx={{ color: "#000" }} />

					<Tab
						label={
							isLoggedIn && isProvider ? "Update Profile" : "Become a Provider"
						}
						component="a"
						sx={{ color: "black" }}
						value={
							isLoggedIn && isProvider ? updateProfileCode : "becomeProvider"
						}
					/>
				</Tabs>
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
