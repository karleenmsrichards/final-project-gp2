import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { AppContext } from "../App";

const tiers = [
	{
		title: "Free",
		price: "0",
		description: [
			"10 bookings included",
			"Help center access",
			"Email support",
		],
		buttonText: "Sign up for free",
		buttonVariant: "outlined",
	},
	{
		title: "Pro",
		subheader: "Most popular",
		price: "0",
		description: [
			"10 bookings included",
			"Help center access",
			"Email support",
		],
		buttonText: "Get started",
		buttonVariant: "contained",
	},
	{
		title: "Enterprise",
		price: "0",
		description: [
			"10 bookings included",
			"Help center access",
			"Email support",
		],
		buttonText: "Sign Up",
		buttonVariant: "outlined",
	},
];

const defaultTheme = createTheme();

export default function Pricing() {
	const { isProvider }=useContext(AppContext);
	const navigate = useNavigate();

	return (
		<>
			{!isProvider ? (
				<ThemeProvider theme={defaultTheme}>
					<GlobalStyles
						styles={{ ul: { margin: 2, padding: 4, listStyle: "none" } }}
					/>
					<CssBaseline />
					<Container
						disableGutters
						maxWidth="sm"
						component="main"
						sx={{ pt: 8, pb: 6 }}
					>
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="text.primary"
							gutterBottom
						>
							Pricing
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="text.secondary"
							component="p"
						>
							We have worked on giving the maximum value at a low price point.
							Choose a Subscription that fits your business.
						</Typography>
					</Container>
					{/* End hero unit */}
					<Container maxWidth="md" component="main" sx={{ mb: 5 }}>
						<Grid container spacing={5} alignItems="flex-end">
							{tiers.map((tier) => (
								// Enterprise card is full width at sm breakpoint
								<Grid
									item
									key={tier.title}
									xs={12}
									sm={tier.title === "Enterprise" ? 12 : 6}
									md={4}
								>
									<Card>
										<CardHeader
											title={tier.title}
											subheader={tier.subheader}
											titleTypographyProps={{ align: "center" }}
											action={tier.title === "Pro" ? <StarIcon /> : null}
											subheaderTypographyProps={{
												align: "center",
											}}
											sx={{
												backgroundColor: (theme) =>
													theme.palette.mode === "light"
														? theme.palette.grey[200]
														: theme.palette.grey[700],
											}}
										/>
										<CardContent>
											<Box
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "baseline",
													mb: 2,
												}}
											>
												<Typography
													component="h2"
													variant="h3"
													color="text.primary"
												>
													£{tier.price}
												</Typography>
												<Typography variant="h6" color="text.secondary">
													/mo
												</Typography>
											</Box>
											<ul>
												{tier.description.map((line) => (
													<Typography
														component="li"
														variant="subtitle1"
														align="center"
														key={line}
													>
														{line}
													</Typography>
												))}
											</ul>
										</CardContent>
										<CardActions>
											<Button
												fullWidth
												variant={tier.buttonVariant}
												onClick={() => navigate("/sign-up")}
											>
												{tier.buttonText}
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</ThemeProvider>
			) : (
				navigate("/*")
			)}
		</>
	);
}
