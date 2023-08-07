import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Box, Link, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function HomeCardGrid() {
  const cardsData = [
    {
      name: "John Doe",
      rating: 9.6,
      location: "London",
      image:
				"https://cdn.pixabay.com/photo/2016/11/14/05/22/adult-1822690_1280.jpg",
      link: "#",
      session: "1hr max session",
    },
    {
      name: "John Doe",
      rating: 9.3,
      location: "Swindon",
      image:
				"https://cdn.pixabay.com/photo/2020/05/14/12/37/barber-5194406_1280.jpg",
      link: "#",
      session: "3hr max session",
    },
    {
      name: "John Doe",
      rating: 9.1,
      location: "Manchester",
      image:
				"https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
      link: "#",
      session: "2hr max session",
    },
    {
      name: "John Doe",
      rating: 8.7,
      location: "London",
      image:
				"https://cdn.pixabay.com/photo/2015/07/31/22/12/phone-869669_1280.jpg",
      link: "#",
      session: "1hr max session",
    },
    {
      name: "John Doe",
      rating: 8.3,
      location: "Bermingham",
      image:
				"https://cdn.pixabay.com/photo/2016/08/05/11/05/business-people-1572059_1280.jpg",
      link: "#",
      session: "2hr max session",
    },
  ];

  return (
    <Container>
      <Typography gutterBottom variant="h5" sx={{ fontSize: "18px" }}>
				Experts loved by customers
      </Typography>
      <Grid container spacing={2}>
        {cardsData.map((data, index) => (
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
                    {data.rating}
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
                    transform: "translate(-50%, -50%)", // Center the heart icon
                  }}
                >
                  <FavoriteIcon fontSize="small" sx={{ color: "black" }} />{" "}
                  {/* Heart icon */}
                </Box>
                <CardMedia
                  sx={{ borderRadius: "20px" }}
                  component="img"
                  height="140"
                  image={data.image}
                  alt="painter"
                />
                <CardContent sx={{ padding: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ marginBottom: "0px" }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: "10px", marginTop: "0px" }}
                  >
                    {data.location}
                  </Typography>
                  <Link
                    href={data.link}
                    underline="none"
                    sx={{ color: "black" }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      py={1}
                      borderRadius={1}
                      sx={{
                        transition: "background-color 0.2s",
                        "&:hover": {
                          bgcolor: "#e0e0e0",
                        },
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{ fontSize: "18px" }}
                      >
                        {data.session}
                      </Typography>
                      <Box flexGrow={1} textAlign="right">
                        <ArrowForwardIosIcon />
                      </Box>
                    </Box>
                  </Link>
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
