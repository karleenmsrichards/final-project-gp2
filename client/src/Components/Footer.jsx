import React from "react";
import {Box, Link as MaterialLink, Typography} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
    const defaultSxStyle = {color: "black"};

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: 1,
                borderColor: "lightgray",
                py: 3,
            }}
            paddingRight={{xs: 0, sm: 5, md: 10, lg: 12}}
            paddingLeft={{xs: 3, sm: 5, md: 10, lg: 12}}
            flexDirection={{xs: "column", sm: "row"}}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    maxWidth: "250px",
                }}>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    lineHeight: 2,
                }}
                textAlign={{xs: "left", sm: "right"}}>
                <MaterialLink
                    href="#"
                    underline="none"
                    sx={{color: "black", fontWeight: "bold"}}
                >Link</MaterialLink>
            </Box>
        </Box>
    );
};

export default Footer;
