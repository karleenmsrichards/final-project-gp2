import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import Footer from "../Components/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Home.css";

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
		<Box sx={{ py:10 }}>
			<h1 className="message" data-qa="message">
					{message}
			</h1>
			<Box>
				<IconButton
					component="a"
					href="https://mui.com/material-ui/react-image-list/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FacebookIcon style={{ fontSize: 40, color: "black" }} />
				</IconButton>
			</Box>
			<Footer />
		</Box>
	);
}

export default Home;