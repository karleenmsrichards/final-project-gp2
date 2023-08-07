import { Box } from "@mui/material";
import "./StaticGrid.css";

const Home = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "1fr 1fr",
        padding: "70px",
      }}
    >
      <Box sx={{ gridColumn: "1 / span 1", gridRow: "1 / span 2" }}>
        <div className="grid-img-container">
          <p className="grid-tag">Makeup</p>
          <img
            className="grid-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdb3tqETTXFY3ZtrBhAH4Psat7uB-vL9J5Q&usqp=CAU"
            alt=""
          />
        </div>
      </Box>
      <Box sx={{ gridColumn: "2 / span 2", gridRow: "1 / span 2" }}>
        <div className="grid-img-container-1">
          <p className="grid-tag">Turor</p>
          <img
            className="grid-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGAHIawIX8iiPNUWk10u_tIMA7lsOvDjrSQ&usqp=CAU"
            alt=""
          />
        </div>
      </Box>
      <Box sx={{ gridColumn: "2 / span 2", gridRow: "2 / span 2" }}>
        <div className="grid-img-container">
          <p className="grid-tag">Mechanic</p>
          <img
            className="grid-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJTd75laxbm7xGUkvuw-NRmHXwUlFzFBYhQ&usqp=CAU"
            alt=""
          />
        </div>
      </Box>
      <Box sx={{ gridColumn: "3 / span 1", gridRow: "1 / span 2" }}>
        <div className="grid-img-container">
          <p className="grid-tag">Cleaner</p>
          <img
            className="grid-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xIvQYejYu_TCg8Q2M6PdDMcmDbEhvB4neA&usqp=CAU"
            alt=""
          />
        </div>
      </Box>
      <Box sx={{ gridColumn: "4 / span 2", gridRow: "1 / span 2" }}>
        <div className="grid-img-container-1">
          <p className="grid-tag">Chef</p>
          <img
            className="grid-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHIqHWdig3tyYm7BOlIQjy4i2wFGJsr5uAg&usqp=CAU"
            alt=""
          />
        </div>
      </Box>
      <Box sx={{ gridColumn: "4 / span 2", gridRow: "2 / span 2" }}>
        <div className="grid-img-container">
          <p className="grid-tag">Photograph</p>
          <img
            className="grid-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1O__fsQeoJPQM6hVRIlViN6SF3tnqHo_W4w&usqp=CAU"
            alt=""
          />
        </div>
      </Box>
    </Box>
  );
};

export default Home;
