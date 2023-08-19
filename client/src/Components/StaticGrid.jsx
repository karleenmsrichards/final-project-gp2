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
				bottom: "10px",
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
			>
				<CategoryCard
					title="Accountant"
					imageSrc="https://www.theaccountant-online.com/wp-content/uploads/sites/10/2023/02/shutterstock_566737549.jpg"
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
					imageSrc="https://www.greatschools.org/gk/wp-content/uploads/2010/01/Looking-for-a-tutor.jpg"
				/>
			</Box>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "2 / span 1", md: "2 / span 1" },
					gridRow: { xs: "5 / span 2", sm: "2 / span 2", md: "2 / span 2" },
				}}
			>
				<CategoryCard
					title="Doctor"
					imageSrc="https://www.bmj.com/sites/default/files/sites/defautl/files/attachments/bmj-article/2023/08/junior_doctor_apprentice_istock-1279681388.jpg"
				/>
			</Box>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "2 / span 1", md: "3 / span 1" },
					gridRow: { xs: "7 / span 3", sm: "4 / span 3", md: "1 / span 3" },
				}}
			>
				<CategoryCard
					title="Lawyer"
					imageSrc="https://www.yelu.uk/img/cats/lawyers.jpg"
				/>
			</Box>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "1 / span 1", md: "4 / span 1" },
					gridRow: { xs: "10 / span 2", sm: "4 / span 2", md: "1 / span 2" },
				}}
			>
				<CategoryCard
					title="Business Coach"
					imageSrc="https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/06/08085837/business-coach.jpeg"
				/>
			</Box>
			<Box
				sx={{
					gridColumn: { xs: "1 / span 1", sm: "1 / span 1", md: "4 / span 1" },
					gridRow: { xs: "12 / span 1", sm: "6 / span 1", md: "3 / span 1" },
				}}
			>
				<CategoryCard
					title="recruiter"
					imageSrc="https://hrdailyadvisor.blr.com/app/uploads/sites/3/2019/05/Recruiter.jpg"
				/>
			</Box>
		</Box>
	);
};

export default Home;
