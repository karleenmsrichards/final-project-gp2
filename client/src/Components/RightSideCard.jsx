import { Box, Button } from "@mui/material";
import Typography from "../Mui-Components/Typography";
import { AppContext } from "../App";
import { useContext } from "react";

const RightSideCard = ({ eachProvider, noButton }) => {
	const { isLoggedIn }=useContext(AppContext);

	const handleCalendar = () => {
		if(isLoggedIn){
			const url = eachProvider?.Calendar?.calendar_link;
			if (url) {
				window.open(url, "_blank", "width=800,height=600,left=200,top=100");
			} else {
				alert("No calendar link available for this provider.");
			}
		}else{
			alert("You need to login first!");
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				minWidth: 200,
				pt: { xs: 3, sm: 0 },
				direction: "rtl",
			}}
		>
			<Box sx={{ display: "flex" }}>
				<Typography
					variant="subtitle2"
					sx={{
						px: 2,
						py: 1,
						backgroundColor: "#F3263B",
						color: "#fff",
						borderRadius: "15px",
					}}
				>
					96
				</Typography>
				<Typography component="div" variant="body1" sx={{ pr: 2 }}>
					{eachProvider.businessName}
				</Typography>
			</Box>
			<Box>
				<Typography
					component="div"
					variant="h5"
					sx={{ direction: "ltr", textAlign: "right" }}
				>
					£{eachProvider.hourlyRate}/hr
				</Typography>
				{!noButton && (
					<Button
						variant="contained"
						onClick={handleCalendar}
						sx={{
							backgroundColor: "#F3263B",
							color: "#fff",
							px: 3,
							py: 1,
							borderRadius: "15px",
							"&:hover": {
								backgroundColor: "#cc0000",
							},
						}}
					>
						See booking options
					</Button>
				)}
				<Box id="scheduling-button-container"></Box>
			</Box>
		</Box>
	);
};

export default RightSideCard;