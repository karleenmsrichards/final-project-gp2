import * as React from "react";
import Typography from "../Mui-Components/Typography";
import ProductHeroLayout from "../Mui-Components/ProductHeroLayout";
import Button from "../Mui-Components/Buttons";
import useAuth from "../customHooks/useAuth";

const backgroundImage =
	"https://images.unsplash.com/photo-1553484771-11998c592b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80";
export default function ProductHero() {
	const { handleSignUp } = useAuth();

	return (
		<ProductHeroLayout
			sxBackground={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundColor: "#7FC7D9",
				backgroundPosition: "center",
			}}
		>

			<img
				style={{ display: "none" }}
				src={backgroundImage}
				alt="increase priority"
			/>
			<Typography color="inherit" align="center" variant="h2" marked="center">
				Book Your Expert.
			</Typography>
			<Typography
				color="inherit"
				align="center"
				variant="h5"
				sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
			>
				Specialists in All Areas
			</Typography>
			<Button
				color="secondary"
				variant="contained"
				size="large"
				component="a"
				onClick={handleSignUp}
				sx={{ minWidth: 200 }}
			>
				Register
			</Button>
			<Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
				Discover the BookMe experience
			</Typography>
		</ProductHeroLayout>
	);
}
