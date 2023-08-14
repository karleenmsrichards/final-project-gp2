import React, {  useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { AppContext } from "../App";

const SignUpForm = () => {
	const navigate = useNavigate();
	const { user, setProviders, providers } = useContext(AppContext);

	const [signUpData, setSignUpData] = useState({
		firstName: null,
		lastName: null,
		email: null,
		businessName: null,
		phoneNumber: null,
		address: null,
		city: null,
		country: null,
		profession: null,
		yearsOfExperience: null,
		hourlyRate: null,
		language: null,
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post("/api/create-provider", signUpData);

			if (response) {
				setSignUpData({
					firstName: user.given_name,
					lastName: user.family_name,
					email: user.email,
					businessName: null,
					phoneNumber: null,
					address: null,
					city: null,
					country: null,
					profession: null,
					yearsOfExperience: null,
					hourlyRate: 0,
					language: null,
				});
				providers.push(signUpData);
				setProviders(providers);
				alert("You are now a Provider");
				navigate("/dashboard");
			}
		} catch (error) {
			if (error?.response?.data?.error) {
				const errorMessage = error.response.data.error;
				alert(`Error: ${errorMessage}`);
				navigate("/");
			} else {
				alert("An error occurred while submitting the form.");
			}
			console.error("Error submitting form:", error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setSignUpData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	useEffect(() => {
		if (user) {
			setSignUpData((prevData) => ({
				...prevData,
				firstName: user.given_name,
				lastName: user.family_name,
				email: user.email,
				hourlyRate: 0,
			}));
		}
	}, [user]);

	return (
		<Container maxWidth="sm" style={{ margin: "100px auto" }}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<Typography variant="h5" gutterBottom>
						Sign Up as a Provider
					</Typography>
					<Box mt={2}>
						<Typography variant="p" gutterBottom>
							First Name
						</Typography>
						<TextField
							variant="outlined"
							name="firstName"
							value={signUpData.firstName}
							onChange={handleChange}
							disabled
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<Typography variant="p" gutterBottom>
							Surname
						</Typography>
						<TextField
							variant="outlined"
							name="lastName"
							value={signUpData.lastName}
							onChange={handleChange}
							disabled
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<Typography variant="p" gutterBottom>
							Email
						</Typography>
						<TextField
							variant="outlined"
							name="email"
							value={signUpData.email}
							onChange={handleChange}
							disabled
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Business Name"
							variant="outlined"
							name="businessName"
							value={signUpData.businessName}
							onChange={handleChange}
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Language *"
							variant="outlined"
							name="language"
							value={signUpData.language}
							onChange={handleChange}
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Profile Image"
							variant="outlined"
							name="profileImage"
							value={signUpData.profileImage}
							onChange={handleChange}
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Phone Number *"
							variant="outlined"
							name="phoneNumber"
							value={signUpData.phoneNumber}
							onChange={handleChange}
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Address *"
							variant="outlined"
							name="address"
							value={signUpData.address}
							onChange={handleChange}
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="City *"
							variant="outlined"
							name="city"
							value={signUpData.city}
							onChange={handleChange}
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Country *"
							variant="outlined"
							name="country"
							value={signUpData.country}
							onChange={handleChange}
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Profession *"
							variant="outlined"
							name="profession"
							value={signUpData.profession}
							onChange={handleChange}
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Years of Experience *"
							variant="outlined"
							name="yearsOfExperience"
							value={signUpData.yearsOfExperience}
							onChange={handleChange}
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<Typography variant="p" gutterBottom>
							Hourly rate
						</Typography>
						<TextField
							variant="outlined"
							name="hourlyRate"
							value={signUpData.hourlyRate}
							disabled
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							style={{ backgroundColor: "#F3263B" }}
						>
							Submit
						</Button>
					</Box>
				</fieldset>
			</form>
		</Container>
	);
};

export default SignUpForm;
