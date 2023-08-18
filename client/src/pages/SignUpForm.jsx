import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
	TextField,
	Button,
	Container,
	Typography,
	Box,
	FormHelperText,
} from "@mui/material";
import { AppContext } from "../App";

const SignUpForm = () => {
	const navigate = useNavigate();
	const { user, setProviders, isProvider } = useContext(AppContext);
	const [formErrors, setFormErrors] = useState({});
	const [signUpData, setSignUpData] = useState({
		firstName: "",
		lastName: "",
		email: user.email,
		businessName: "",
		phoneNumber: "",
		address: "",
		city: "",
		country: "",
		profession: "",
		yearsOfExperience: "",
		hourlyRate: 0,
		language: "",
	});

	const validateNumber = (number) => {
		return /^\d{11}$/.test(number);
	};
	const validateText = (address) => {
		return address.length >= 5;
	};

	const validateForm = () => {
		const errors = {};
		if (!signUpData.phoneNumber || !validateNumber(signUpData.phoneNumber)) {
			errors.phoneNumber = "Invalid phone number format";
		}
		if (!signUpData.address || !validateText(signUpData.address)) {
			errors.address = "Address must be at least 5 characters";
		}
		return errors;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const errors = validateForm();
		if (Object.keys(errors).length === 0) {
			try {
				const response = await axios.post("/api/provider", signUpData);
				if (response) {
					setSignUpData({
						firstName: "",
						lastName: "",
						email: user.email,
						businessName: "",
						phoneNumber: "",
						address: "",
						city: "",
						country: "",
						profession: "",
						yearsOfExperience: 0,
						hourlyRate: 0,
						language: "",
					});
					setProviders((prevProviders) => [
						...prevProviders,
						response.data.provider,
					]);
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
		} else {
			setFormErrors(errors);
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
				email: user.email,
				hourlyRate: 0,
			}));
		}
	}, [user]);

	return (
		<Container maxWidth="sm" style={{ margin: "100px auto" }}>
			{!isProvider ? (
				<form onSubmit={handleSubmit}>
					<fieldset>
						<Typography variant="h5" gutterBottom>
							Sign Up as a Provider
						</Typography>
						<Box mt={2}>
							<TextField
								variant="outlined"
								name="firstName"
								label="First Name *"
								value={signUpData.firstName}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								variant="outlined"
								name="lastName"
								label="	Surname *"
								value={signUpData.lastName}
								onChange={handleChange}
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
								fullWidth
							/>
						</Box>
						{Object.keys(formErrors).map((fieldName) => (
							<FormHelperText key={fieldName} error>
								{formErrors[fieldName]}
							</FormHelperText>
						))}
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
			) : (
				navigate("/*")
			)}
		</Container>
	);
};

export default SignUpForm;
