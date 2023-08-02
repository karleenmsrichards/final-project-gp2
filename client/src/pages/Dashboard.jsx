import { Container, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const Dashboard = () => {
	const navigate = useNavigate();
	const { user, handleSignUp, handleSignOut, isLoggedIn, setIsLoggedIn } = useAuth();

	function getJwtToken() {
		return localStorage.getItem("jwtToken");
	}

const sendingToken=async(token)=>{
		const response =await fetch("/api/validation", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token,
				}),
			});
			const data=await response.json();
			console.log(data);
};

	useEffect(() => {
		const token = getJwtToken();
		if (token) {
			sendingToken(token);
			setIsLoggedIn(true);
		} else {
			console.log("Token not found");
		}
	}, [isLoggedIn,user]);

	return (
		<Container sx={{ width: "400px", height: "200px", marginTop: "200px" }}>
			{isLoggedIn ? (
				<>
					<Typography> Hello {user.name}</Typography>
					<Button onClick={() => navigate("/")}>Home</Button>
					<Button onClick={handleSignOut}>Sign Out</Button>
				</>
			) : (
				<>
					<Typography>You need Log In</Typography>
					<Button onClick=
					{handleSignUp}>Log in</Button>
				</>
			)}
		</Container>
	);
};

export default Dashboard;