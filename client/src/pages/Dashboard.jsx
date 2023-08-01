import { Container, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// KHOoDam

const Dashboard = () => {
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn]= useState(false);

    useEffect(() => {
      // Retrieve the token from local storage
      const token = localStorage.getItem("jwtToken");
      // Check if the token exists in local storage
      if (token) {
        // The token exists, set the isLoggedIn state to true
        setIsLoggedIn(true);
      } else {
        // The token doesn't exist in local storage
        console.log("Token not found");
      }
    }, []);


// KHOdaM


  return (
    <Container sx={{ width: "400px", height: "200px", marginTop: "200px" }}>
        <Button onClick={() => navigate("/")}>Home</Button>
      <Typography>
        Dashboard
      </Typography>
      {isLoggedIn ? <p> You are Logged in</p>: <p>Log In</p>}
    </Container>
  );
};



export default Dashboard;