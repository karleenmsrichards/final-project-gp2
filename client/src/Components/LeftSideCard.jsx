import { Box, CardMedia } from "@mui/material";
import React from "react";
import Typography from "../Mui-Components/Typography";

const LeftSideCard = ({ eachProvider }) => {

const fullAddress=(eachProvider)=>{
return `${eachProvider.country} - ${eachProvider.city} - ${eachProvider.address} - ${eachProvider.phoneNumber}`;
};

	return (
		<Box
			sx={{ display: "flex", alignItems: "center" }}
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
						{fullAddress(eachProvider)}
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
	);
};

export default LeftSideCard;
