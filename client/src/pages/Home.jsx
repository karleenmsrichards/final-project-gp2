import { Box } from "@mui/material";
import StaticGrid from "../Components/StaticGrid";
import HomeCardGrid from "../Components/HomeCardGrid";
import Hero from "../Components/Hero";
import NewsLetter from "../Components/Newsletter";

export function Home() {
	return (
		<Box sx={{ py: 2 }}>
			<Hero />
		</Box>
	);
}

export default Home;
