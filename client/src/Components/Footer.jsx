import React from "react";
import { Box, Link as MaterialLink } from "@mui/material";

const Footer = () => {
	return (
		<Box sx={{ borderTop: 1 }}>
			<MaterialLink href="/contact-us" underline="none">
				Contact Us
			</MaterialLink>
		</Box>
	);
};

export default Footer;
