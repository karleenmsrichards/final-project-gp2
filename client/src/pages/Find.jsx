import { Box, Button, CardMedia, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Typography from "../Mui-Components/Typography";
import useAuth from "../customHooks/useAuth";
import { AppContext } from "../App";

const Find = () => {
	const { isLoggedIn, providers, setProviders } = useContext(AppContext);

	///////not sure why this is here
	const { handleDeleteProfile } = useAuth();

	useEffect(() => {
		fetch("/api/find")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.message);
				}
				return res.json();
			})
			.then((data) => {
				setProviders(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [isLoggedIn, setProviders]);

	return (
		<Box sx={{ marginX: { xs: 1, sm: 5, md: 10, lg: 15, xl: 20 }, my: 5 }}>
			<Grid container spacing={3}>
				{providers.map((eachProvider, index) => (
					<Grid key={index} item xs={12}>
						<Box
							sx={{
								display: "flex",
								borderRadius: "20px",
								justifyContent: "space-between",
								border: 1,
								borderColor: "gray",
								boxShadow: "5px 5px 5px lightgray",
								py: 3,
								"&:hover": {
									backgroundColor: "#f2f2f2",
								},
							}}
							flexDirection={{ xs: "column", md: "row" }}
							paddingX={{ xs: 1, sm: 3, md: 5, lg: 5, xl: 10 }}
						>
							<Box
								sx={{ display: "flex" }}
								flexDirection={{ xs: "column", sm: "row" }}
							>
								<CardMedia
									component="img"
									sx={{ width: 200, height: 200, borderRadius: "20px" }}
									image={eachProvider.profileImage}
									alt={eachProvider.profession}
								/>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										pl: { xs: 1, sm: 3, md: 5 },
										pt: { xs: 5, sm: 0 },
									}}
								>
									<Box>
										<Typography component="div" variant="h6">
											Provider {eachProvider.firstName} {eachProvider.lastName}
										</Typography>
										<Typography
											variant="subtitle2"
											color="text.secondary"
											component="div"
										>
											{eachProvider.country} - {eachProvider.city} -{" "}
											{eachProvider.address} - {eachProvider.phoneNumber}
										</Typography>
										<Typography
											variant="subtitle2"
											color="text.secondary"
											component="div"
										>
											Language: {eachProvider.language}
										</Typography>
									</Box>
									<Box>
										<Typography component="div" variant="body1">
											Expertise: {eachProvider.profession}
										</Typography>
										<Typography
											component="div"
											variant="subtitle2"
											color="text.secondary"
										>
											Experience: +{eachProvider.yearsOfExperience} years
										</Typography>
									</Box>
									<Box>
										<Box sx={{ display: "flex" }}>
											<Typography
												variant="subtitle2"
												sx={{
													p: 1,
													border: 1,
													borderRadius: "15px",
													mr: 2,
												}}
											>
												#Hot Deal
											</Typography>
											<Typography
												variant="subtitle2"
												sx={{
													p: 1,
													border: 1,
													borderRadius: "15px",
												}}
											>
												#Popular
											</Typography>
										</Box>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									minWidth: 200,
									pt: { xs: 3, sm: 0 },
									direction: "rtl",
								}}
							>
								<Box sx={{ display: "flex" }}>
									<Typography
										variant="subtitle2"
										sx={{
											px: 2,
											py: 1,
											backgroundColor: "#F3263B",
											color: "#fff",
											borderRadius: "15px",
										}}
									>
										96
									</Typography>
									<Typography component="div" variant="body1" sx={{ pr: 2 }}>
										{eachProvider.businessName}
									</Typography>
								</Box>
								<Box>
									<Typography
										component="div"
										variant="h5"
										sx={{ direction: "ltr", textAlign: "right" }}
									>
										£{eachProvider.hourlyRate}/hr
									</Typography>
									<Button
										variant="contained"
										sx={{
											backgroundColor: "#F3263B",
											color: "#fff",
											px: 3,
											py: 1,
											borderRadius: "15px",
											"&:hover": {
												backgroundColor: "#cc0000",
											},
										}}
									>
										See booking options
									</Button>
								</Box>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Find;
