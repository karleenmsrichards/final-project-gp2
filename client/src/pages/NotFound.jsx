import { Box, Typography } from "@mui/material";

const NotFound = () => {
	return (
		<Box sx={{ textAlign: "center", p: 15 }}>
			<Typography variant="h1">404</Typography>
			<Typography variant="h2">Page Not Found!</Typography>
		</Box>
	);
};

export default NotFound;
