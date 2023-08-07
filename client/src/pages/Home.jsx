import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import StaticGrid from "../Components/StaticGrid";
import HomeCardGrid from "../Mui-Components/HomeCardGrid";
import Hero from "../Components/Hero";

export function Home() {
  /* eslint-disable-next-line */
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((body) => {
        setMessage(body.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Box sx={{ py: 2 }}>
      <Hero />
      <StaticGrid />
      <HomeCardGrid />
    </Box>
  );
}

export default Home;
