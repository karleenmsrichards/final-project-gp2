import React from "react";
import { Box, Link as MaterialLink, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
	const defaultSxStyle = { color: "black" };

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				borderTop: 1,
				borderColor: "lightgray",
				py: 3,
			}}
			paddingRight={{ xs: 0, sm: 5, md: 10, lg: 12 }}
			paddingLeft={{ xs: 3, sm: 5, md: 10, lg: 12 }}
			flexDirection={{ xs: "column", sm: "row" }}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					maxWidth: "250px",
				}}
			>
				<Typography variant="h5" sx={{ fontWeight: "bolder" }}>
					BOOKME
				</Typography>
				<Typography sx={{ fontSize: 15, pb: 5 }}>
					Your favourite appointnent booking experience since 1997!
				</Typography>
				<Typography sx={{ fontSize: 15 }}>
					BookME <CopyrightIcon sx={{ fontSize: 12 }}></CopyrightIcon> 2022
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-evenly",
					flexDirection: "column",
					lineHeight: 2,
				}}
				textAlign={{ xs: "left", sm: "right" }}
			>
				<MaterialLink
					href="#"
					underline="none"
					sx={{ color: "black", fontWeight: "bold" }}
				>
					Help
				</MaterialLink>
				<MaterialLink href="#" underline="none" sx={defaultSxStyle}>
					FAQ
				</MaterialLink>
				<MaterialLink href="#" underline="none" sx={defaultSxStyle}>
					Customer
				</MaterialLink>
				<MaterialLink href="#" underline="none" sx={defaultSxStyle}>
					How to guide
				</MaterialLink>
				<MaterialLink href="#" underline="none" sx={defaultSxStyle}>
					Contact Us
				</MaterialLink>
			</Box>
		</Box>
	);
};

export default Footer;
