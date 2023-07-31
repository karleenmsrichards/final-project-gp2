import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <Container sx={{ width: "400px", height: "200px", marginTop: "200px" }}>
        <Button onClick={() => navigate("/")}>Home</Button>
      <Typography>
        Dashboard
      </Typography>
    </Container>
  );
};



export default Dashboard;