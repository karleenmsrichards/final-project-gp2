import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography, Link } from "@mui/material";
import axios from "axios";

const GoogleCalendarForm = ({ userId }) => {
    const [userEmbedCode, setUserEmbedCode] = useState("");

    const handleEmbedCodeChange = (event) => {
        setUserEmbedCode(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/api/create-calendar", {
                userId: userId,
                userEmbedCode: userEmbedCode,
            });

            if (response.status === 200) {
                setUserEmbedCode("");
                alert("You have successfully added your Google Calendar Booking Page");
            }
        } catch (error) {
            const errorMessage = error?.response?.data?.error || "An error occurred while submitting the form.";
            alert(`Error: ${errorMessage}`);
            console.error("Error submitting form:", error);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ margin: "0 auto 100px auto" }}>
            <Typography variant="h5" align="left" gutterBottom>
                Add Your Google Calendar Booking Page
            </Typography>
            <Box mt={2}>
                <Typography variant="subtitle1" gutterBottom>
                    Step 1: Create a Google Appointment Schedule
                </Typography>
                <Link
                    href="https://support.google.com/calendar/answer/10733297?hl=en&co=GENIE.Platform%3DDesktop"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn how to create your Google Appointment Schedule
                </Link>
            </Box>
            <Box mt={4}>
                <Typography variant="subtitle1" gutterBottom>
                    Step 2: Find your Booking Page Embed Code
                </Typography>
                <Link
                    href="https://support.google.com/calendar/answer/10729749?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn how to find your Booking Page Embed Code
                </Link>
            </Box>
            <Box mt={4}>
                <Typography variant="subtitle1" gutterBottom>
                    Step 3: Add your Booking Page Embed Code
                </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box mt={3}>
                    <TextField
                        label="Booking Page Embed Code"
                        variant="outlined"
                        name="userEmbedCode"
                        value={userEmbedCode}
                        onChange={handleEmbedCodeChange}
                        fullWidth
                        multiline
                        rows={4}
                        required
                        aria-label="Booking Page Embed Code"
                    />
                </Box>
                <Box mt={2}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ backgroundColor: "#F3263B" }}
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default GoogleCalendarForm;
