import { AppBar, Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const Header = () => {
	const navigate = useNavigate();
	const { user, handleSignUp } = useAuth();
  return (
    <AppBar sx={{ background: "white" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", py: 2, px: 5, gap: 5 }}>
        { !user && (
          <Box>
            <Button variant="outlined" onClick={handleSignUp}>
              Sign Up
            </Button>
            <Button variant="outlined" onClick={handleSignUp}>
              Sign In
            </Button>
          </Box>
        )}
        <Box id="signInDiv"></Box>
        {user && (
          <Button variant="outlined" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
        )}
      </Box>
    </AppBar>
  );
};

export default Header;
