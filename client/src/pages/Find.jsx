import { Box, Grid, Paper } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../App";
import LeftSideCard from "../Components/LeftSideCard";
import RightSideCard from "../Components/RightSideCard";

const Find = () => {
	const { providers } = useContext(AppContext);

	return (
		<Box sx={{ marginX: { xs: 1, sm: 5, md: 10, lg: 15, xl: 20 }, my: 5 }}>
			<Grid container spacing={3}>
				{providers.map((eachProvider, index) => (
					<Grid id={eachProvider.id} key={index} item xs={12}>
						<Paper
							sx={{
								display: "flex",
								borderRadius: "20px",
								justifyContent: "space-between",
								px: 5,
								border: 1,
								borderColor: "gray",
								boxShadow: "5px 5px 5px lightgray",
								py: 3,
								"&:hover": {
									backgroundColor: "#f2f2f2",
								},
							}}
							flex-direction={{ xs: "column", md: "row" }}
							padding-x={{ xs: 1, sm: 3, md: 5, lg: 5, xl: 10 }}
						>
							<LeftSideCard eachProvider={eachProvider} />
							<RightSideCard eachProvider={eachProvider} />
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Find;
