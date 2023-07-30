import { AppBar, Box, Button } from "@mui/material";
import React from "react";

const Header = () => {
  return (
		<AppBar sx={{ background: "white" }}>
			<Box sx={{ display: "flex", justifyContent: "flex-end", py: 2, px: 5, gap: 5 }}>
				<Button variant="outlined">Sign Up</Button>
				<Button variant="contained" >Log in</Button>
			</Box>
		</AppBar>
	);
};

export default Header;