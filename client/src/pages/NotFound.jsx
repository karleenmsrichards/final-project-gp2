import { Box } from "@mui/material";
import Typography from "../Mui-Components/Typography";

const NotFound = () => {
	return (
		<Box sx={{ textAlign: "center", p: 15 }}>
			<Typography variant="h1">404</Typography>
			<Typography variant="h2">Page Not Found!</Typography>
		</Box>
	);
};

export default NotFound;
