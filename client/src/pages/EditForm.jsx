import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

import { AppContext } from "../App";

const EditForm = () => {
  const [editData, setEditData] = useState({});
	const navigate = useNavigate();
	const { handleSignOut, getJwtToken } = useAuth();
	const { user, setIsLoggedIn, isProvider } = useContext(AppContext);

	const editHandler = async () => {
		const token = getJwtToken();
		if (token) {
			if (isProvider) {
				try {
					const response = await fetch("/api/edit", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: user.email,
						}),
					});
					const data = await response.json();
					if (response.ok) {
            setEditData(data);
					}else{
							throw new Error("Failed to update");
          }
				} catch (error) {
					console.error(error);
				}
			}
		} else {
			setIsLoggedIn(false);
			handleSignOut();
			navigate("/");
		}
	};



	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("/api/edit", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(editData),
			});
			const data = await response.json();
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
        editHandler();
	}, [user]);

	return (
		<Container maxWidth="sm" style={{ margin: "100px auto" }}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<Typography variant="h5" gutterBottom>
						Edit Your Information.
					</Typography>
					<Box mt={2}>
						<Typography variant="p" gutterBottom>
							First Name
						</Typography>
						<TextField
							variant="outlined"
							name="firstName"
							value={editData.firstName}
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
							value={editData.lastName}
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
		</Container>
	);
};

export default EditForm;
