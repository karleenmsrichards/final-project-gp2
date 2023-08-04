import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./Home.css";
import StaticGrid from "./StaticGrid";
import HomeCardGrid from "../Mui-Components/HomeCardGrid";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<Box sx={{ py: 10 }}>
			<StaticGrid />
			<HomeCardGrid />
		</Box>
	);
}

export default Home;
