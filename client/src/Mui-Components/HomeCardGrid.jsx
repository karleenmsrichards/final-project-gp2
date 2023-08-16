import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardActionArea, Container, Box, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppContext } from "../App";

export function HomeCardGrid() {
	const { providers } = useContext(AppContext);
	const navigate = useNavigate();
	const experts = providers?.slice(0,5);

	return (
		<Container>
			<Typography gutterBottom variant="h5" sx={{ fontSize: "18px" }}>
				Experts loved by customers
			</Typography>
			<Grid container spacing={2}>
				{experts.map((eachProvider, index) => (
					<Grid key={index} item xs={12} sm={6} md={3} lg={2.4} xl={2}>
						<Card sx={{ maxWidth: 300, borderRadius: "20px" }}>
							<CardActionArea sx={{ padding: "10px" }}>
								<Box
									sx={{
										position: "absolute",
										top: "20px",
										left: "20px",
										zIndex: 1,
										backgroundColor: "#F3263B",
										padding: "3px 10px",
										borderRadius: "15px",
									}}
								>
									<Typography
										variant="body1"
										component="div"
										sx={{ color: "white" }}
									>
										9.3
									</Typography>
								</Box>
								<Box
									sx={{
										position: "absolute",
										bottom: "202px",
										right: "5px",
										zIndex: 1,
										backgroundColor: "white",
										border: "1px solid black",
										padding: "5px 5px 1px 5px",
										borderRadius: "50%",
										transform: "translate(-50%, -50%)",
									}}
								>
									<FavoriteIcon fontSize="small" sx={{ color: "black" }} />{" "}
								</Box>
								<CardMedia
									sx={{ borderRadius: "20px" }}
									component="img"
									height="140"
									image={
										eachProvider.profileImage === null
											? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
											: eachProvider.profileImage
									}
									alt={eachProvider.profession}
								/>
								<CardContent sx={{ padding: 0 }}>
									<Typography
										gutterBottom
										variant="h6"
										component="div"
										sx={{ marginBottom: "0px" }}
									>
										{eachProvider.firstName} {eachProvider.lastName}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ marginBottom: "10px", marginTop: "0px" }}
									>
										{eachProvider.city}
									</Typography>
									<Box
										display="flex"
										alignItems="center"
										py={1}
										borderRadius={1}
										sx={{
											transition: "background-color 0.2s",
											"&:hover": {
												bgcolor: "#e0e0e0",
												"& a": {
													color: "black",
												},
											},
										}}
									>
										<Typography
											gutterBottom
											variant="p"
											component="div"
											sx={{ fontSize: "18px" }}
											onClick={() => navigate(`/find#${eachProvider.id}`)}
										>
											from £{eachProvider?.hourlyRate}/hour
										</Typography>
										<Box flexGrow={1} textAlign="right">
											<ArrowForwardIosIcon />
										</Box>
									</Box>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default HomeCardGrid;
