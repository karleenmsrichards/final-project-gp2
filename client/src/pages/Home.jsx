import { Box } from "@mui/material";
import StaticGrid from "../Components/StaticGrid";
import HomeCardGrid from "../Mui-Components/HomeCardGrid";
import Hero from "../Components/Hero";

export function Home() {

	return (
		<Box sx={{ py: 2 }}>
			<Hero />
			<StaticGrid />
			<HomeCardGrid />
		</Box>
	);
}

export default Home;
