import { Container, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn]= useState(false);

    function userIsLoggedIn(){
      // const value = get from localstorage or cookies
     setIsLoggedIn(true);
    }
    userIsLoggedIn();

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