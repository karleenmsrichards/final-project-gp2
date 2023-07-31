import { AppBar, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
  const [hideSignUpButton, setHideSignUpButton] = useState(false);
  const [clientId, setClientId] = useState("");

  function handleSignUp() {
	setHideSignUpButton(true);
    /* global google */
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }

  function handleCallbackResponse(response) {
    response && console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwtDecode(response.credential);
    console.log(userObject);
	navigate("/dashboard");
  }

  useEffect(() => {
    async function fetchClientId() {
      try {
        const response = await axios.get("/api/clientId");
        const { clientId } = response.data;
        setClientId(clientId);
	} catch (error) {
        console.error("Error fetching client ID:", error);
      }
    }
    fetchClientId();
  }, []);

  return (
    <AppBar sx={{ background: "white" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", py: 2, px: 5, gap: 5 }}>
        {!hideSignUpButton ? (
			<Box>
          <Button variant="outlined" onClick={handleSignUp}>
            Sign Up
          </Button>
		<Button variant="outlined" onClick={handleSignUp}>Sign In</Button>
		</Box>
        ) : <></>}
    <Box id="signInDiv"></Box>
      </Box>
    </AppBar>
  );
};

export default Header;
