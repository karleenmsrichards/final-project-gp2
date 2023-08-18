import { Box, Button, Container, Typography } from "@mui/material";
import useAuth from "../customHooks/useAuth";

const backgroundImage =
	"https://images.unsplash.com/photo-1553484771-11998c592b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80";

export default function ProductHero() {
	const { handleSignUp } = useAuth();

	return (
		<Box
			sx={{
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				backgroundRepeat: "no-repeat",
				zIndex: -2,
				color: "white",
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "80vh",
				maxHeight: 1300,
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundColor: "#7FC7D9",
				overflow: "hidden",
			}}
		>
			<Container
				sx={{
					mt: 0,
					mb: 14,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
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

				<Box
					sx={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						backgroundColor: "common.black",
						opacity: 0.5,
						zIndex: -1,
					}}
				/>

				<Box
					sx={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						zIndex: -2,
					}}
				></Box>
				{/* <Background sx={sxBackground} /> */}
				<Box
					component="img"
					src="#"
					height="16"
					width="12"
					alt=""
					sx={{ position: "absolute", bottom: 32 }}
				/>
			</Container>
		</Box>
	);
}
