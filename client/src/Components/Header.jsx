import { AppBar, Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import Sidebar from "./Sidebar";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { handleSignUp, isLoggedIn } = useAuth();
	const [value, setValue] = useState(0);

	const homePageCode = 0;
	const findPageCode = 1;
	const subscriptionPageCode = 3;
	const handleChange = (e, value) => {
		if (value === homePageCode) {
			navigate("/");
		} else if (value === findPageCode) {
			navigate("/find");
		} else if (value === subscriptionPageCode) {
			navigate("/subscription");
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
					TabIndicatorProps={{ style: { backgroundColor: "white" } }}
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
					{isLoggedIn && <Tab label="Become supplier" sx={{ color: "#000" }} />}
					{/* pending appContext decision */}
					{/* {isLoggedIn && !isProvider && (
            <Tab
              label="Become a Provider"
              component="a"

              sx={{ color: "black" }}
            />
          )}

          {isLoggedIn && isProvider && (
            <Tab
              label="Update Provider Profile"
              component="a"
              href="/update-profile"
              sx={{ color: "black" }}
            />
          )} */}
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
