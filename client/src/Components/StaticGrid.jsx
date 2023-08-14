import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const CategoryCard = ({ title, imageSrc }) => (
  <Box
    sx={{
      position: "relative",
      width: "auto",
      height: "100%",
      borderRadius: "15px",
    }}
  >
    <Typography
      sx={{
        position: "absolute",
        bottom: "5px",
        left: "10px",
        backgroundColor: "white",
        p: "5px 20px",
        borderRadius: "50px",
        border: "1px solid black",
        fontSize: "15px",
      }}
    >
      {title}
    </Typography>
    <CardMedia
      component="img"
      sx={{ borderRadius: "15px", height: "100%", width: "100%" }}
      image={imageSrc}
      alt=""
    />
  </Box>
);

const Home = () => {
  return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: {
					xs: "1fr",
					sm: "repeat(2, 1fr)",
					md: "repeat(4, 1fr)",
				},
				gridTemplateRows: {
					xs: "repeat(12, 150px)",
					sm: "repeat(6, 150px)",
					md: "repeat(3, 150px)",
				},
				p: { xs: "20px", sm: "40px", md: "70px" },
				my: { xs: "50px", md: 0 },
				gap: "20px",
			}}
		>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "1 / span 1", md: "1 / span 1" },
					gridRow: { xs: "1 / span 3", sm: "1 / span 3", md: "1 / span 3" },
				}}
				s
			>
				<CategoryCard
					title="Makeup"
					imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdb3tqETTXFY3ZtrBhAH4Psat7uB-vL9J5Q&usqp=CAU"
				/>
			</Box>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "2 / span 1", md: "2 / span 1" },
					gridRow: { xs: "4 / span 1", sm: "1 / span 1", md: "1 / span 1" },
				}}
			>
				<CategoryCard
					title="Tutor"
					imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGAHIawIX8iiPNUWk10u_tIMA7lsOvDjrSQ&usqp=CAU"
				/>
			</Box>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "2 / span 1", md: "2 / span 1" },
					gridRow: { xs: "5 / span 2", sm: "2 / span 2", md: "2 / span 2" },
				}}
			>
				<CategoryCard
					title="Mechanic"
					imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJTd75laxbm7xGUkvuw-NRmHXwUlFzFBYhQ&usqp=CAU"
				/>
			</Box>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "2 / span 1", md: "3 / span 1" },
					gridRow: { xs: "7 / span 3", sm: "4 / span 3", md: "1 / span 3" },
				}}
			>
				<CategoryCard
					title="Cleaner"
					imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xIvQYejYu_TCg8Q2M6PdDMcmDbEhvB4neA&usqp=CAU"
				/>
			</Box>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "1 / span 1", md: "4 / span 1" },
					gridRow: { xs: "10 / span 2", sm: "4 / span 2", md: "1 / span 2" },
				}}
			>
				<CategoryCard
					title="Chef"
					imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHIqHWdig3tyYm7BOlIQjy4i2wFGJsr5uAg&usqp=CAU"
				/>
			</Box>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "1 / span 1", md: "4 / span 1" },
					gridRow: { xs: "12 / span 1", sm: "6 / span 1", md: "3 / span 1" },
				}}
			>
				<CategoryCard
					title="Photograph"
					imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1O__fsQeoJPQM6hVRIlViN6SF3tnqHo_W4w&usqp=CAU"
				/>
			</Box>
		</Box>
	);
};

export default Home;
