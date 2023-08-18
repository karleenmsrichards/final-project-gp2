import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { AppContext } from "../App";

const EditForm = () => {
	const [providerIndex, setProviderIndex] = useState(null);
	const navigate = useNavigate();
	const { user, isProvider, providers, setProviders, isLoggedIn } =useContext(AppContext);

	const [editData, setEditData] = useState({
		firstName: "",
		lastName: "",
		email: user?.email,
		businessName: "",
		phoneNumber: "",
		address: "",
		city: "",
		country: "",
		profession: "",
		yearsOfExperience: "",
		language: "",
		hourlyRate: 0,
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("/api/provider", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(editData),
			});
			const data = await response.json();

			const updatedProviders = [...providers];
			updatedProviders[providerIndex] = editData;
			setProviders(updatedProviders);
			setEditData({});
			alert(data.message);
			navigate("/dashboard");
		} catch (error) {
			alert(error);
			navigate("/dashboard");
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setEditData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	useEffect(() => {
	const editHandler = async () => {
		if (isLoggedIn && isProvider) {
			const providerInfo = providers.find((provider, index) => {
				setProviderIndex(index);
				return provider.email === user?.email;
			});
			setEditData(providerInfo);
		}
	};
		editHandler();
	}, [user, isLoggedIn, isProvider, providers]);

	return (
		<Container maxWidth="sm" style={{ margin: "100px auto" }}>
			{isProvider ? (
				<form onSubmit={handleSubmit}>
					<fieldset>
						<Typography variant="h5" gutterBottom>
							Edit Your Information.
						</Typography>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="First Name"
								variant="outlined"
								name="firstName"
								value={editData.firstName}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Surname"
								variant="outlined"
								name="lastName"
								value={editData.lastName}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Email"
								variant="outlined"
								name="email"
								value={editData.email}
								onChange={handleChange}
								disabled
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Business Name"
								variant="outlined"
								name="businessName"
								value={editData.businessName}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Language *"
								variant="outlined"
								name="language"
								value={editData.language}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Profile Image"
								variant="outlined"
								name="profileImage"
								value={editData.profileImage}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Phone Number *"
								variant="outlined"
								name="phoneNumber"
								value={editData.phoneNumber}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Address *"
								variant="outlined"
								name="address"
								value={editData.address}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="City *"
								variant="outlined"
								name="city"
								value={editData.city}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Country *"
								variant="outlined"
								name="country"
								value={editData.country}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Profession *"
								variant="outlined"
								name="profession"
								value={editData.profession}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								label="Years of Experience *"
								variant="outlined"
								name="yearsOfExperience"
								value={editData.yearsOfExperience}
								onChange={handleChange}
								fullWidth
							/>
						</Box>
						<Box mt={2}>
							<TextField
								InputLabelProps={{ shrink: true }}
								variant="outlined"
								label="hourlyRate"
								value={editData.hourlyRate}
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
			) : (
				navigate("/*")
			)}
		</Container>
	);
};

export default EditForm;
