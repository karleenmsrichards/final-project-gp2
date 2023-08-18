import { Button, Snackbar, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SvgIcon from "@mui/material/SvgIcon";
import { useState } from "react";

function NewsletterSignup() {
	const [open, setOpen] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container component="section" sx={{ mt: 5, mb: 5 }}>
			<Box
				sx={{
					display: "flex",
					p: 3,
					justifyContent: "space-between",
					border: "1px solid #ccc",
					borderRadius: "20px",
				}}
			>
				<Box sx={{ flex: 1, p: 2 }}>
					<Typography variant="h5" gutterBottom>
						Receive offers
						<SvgIcon
							component={(props) => (
								<svg {...props} width="1em" height="1em" viewBox="0 0 24 24">
									<path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
								</svg>
							)}
							sx={{ mr: 5, ml: 8, fontSize: "2rem", verticalAlign: "middle" }}
						/>
					</Typography>
					<Typography variant="body1" align="left" sx={{ mb: 2 }}>
						Get the Best Offers Straight into your Mail-box weekly.
					</Typography>
				</Box>

				<Box
					sx={{
						borderLeft: "1px solid #ccc",
						pl: 2,
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<TextField
						placeholder="Your email"
						variant="standard"
						sx={{ flex: 1, mr: 2 }}
					/>
					<Button
						type="submit"
						color="primary"
						variant="contained"
						sx={{
							backgroundColor: "#F3263B",
							borderRadius: "20px",
							"&:hover": {
								backgroundColor: "#cc0000",
							},
						}}
						onClick={handleSubmit}
					>
						Keep me updated
					</Button>
				</Box>
			</Box>
			<Snackbar
				open={open}
				closeFunc={handleClose}
				message="We Send only 1 email a week with relevant suppliers"
			/>
		</Container>
	);
}

export default NewsletterSignup;
