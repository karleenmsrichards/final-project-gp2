import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../Mui-Components/Typography";
import Snackbar from "../Mui-Components/Snackbar";
import Button from "../Mui-Components/Buttons";
import TextField from "../Mui-Components/TextField";

function NewsletterSignup() {
	const [open, setOpen] = React.useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Container component="section" sx={{ mt: 10, display: "flex", mb: 5 }}>
			<Grid container>
				<Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							bgcolor: "warning.main",
							py: 8,
							px: 3,
						}}
					>
						<Box
							component="form"
							onSubmit={handleSubmit}
							sx={{ maxWidth: 400 }}
						>
							<Typography variant="h2" component="h2" gutterBottom>
								Receive offers
							</Typography>
							<Typography variant="h5">
								Get the Best Offers Straight into your Mail-box weekly.
							</Typography>
							<TextField
								noBorder
								placeholder="Your email"
								variant="standard"
								sx={{ width: "100%", mt: 3, mb: 2 }}
							/>
							<Button
								type="submit"
								color="primary"
								variant="contained"
								sx={{ width: "100%" }}
							>
								Keep me updated
							</Button>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
				>
					<Box
						sx={{
							position: "absolute",
							top: -67,
							left: -67,
							right: 0,
							bottom: 0,
							width: "100%",
							background: "",
						}}
					/>
					<Box
						component="img"
						src="https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
						alt="call to action"
						sx={{
							position: "absolute",
							top: -28,
							left: -28,
							right: 0,
							bottom: 0,
							width: "100%",
							maxWidth: 600,
						}}
					/>
				</Grid>
			</Grid>
			<Snackbar
				open={open}
				closeFunc={handleClose}
				message="We Send only 1 email a week with relevant suppliers"
			/>
		</Container>
	);
}

export default NewsletterSignup;
