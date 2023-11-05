import {
    AppBar,
    Box,
    Button,
    LinearProgress,
    MenuItem,
    MenuList,
    Typography,
} from "@mui/material";
import {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import Sidebar from "./Sidebar";
import {AppContext} from "../App";

const Header = () => {
    const {
        isLoggedIn,
    } = useContext(AppContext);
    const {handleSignUp} = useAuth();

    return (
        <AppBar sx={{background: "white", color: "black", position: "static"}}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 5,
                    py: 2,
                }}
                px={{xs: 2, md: 5}}
            >
                <MenuList sx={{display: "flex", justifyContent: "space-evenly"}}>
                    <MenuItem
                        component={Link}
                        to="/"
                        style={{backgroundColor: "transparent"}}
                        disableRipple
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bolder",
                                cursor: "pointer",
                            }}
                        >
                            My App
                        </Typography>
                    </MenuItem>
                </MenuList>

                {!isLoggedIn ? (
                    <Box id="signInDiv" sx={{mr: 1}}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#F3263B",
                                color: "#fff",
                                px: 3,
                                py: 1,
                                borderRadius: "10px",
                                "&:hover": {
                                    backgroundColor: "#cc0000",
                                },
                            }}
                            onClick={handleSignUp}
                        >
                            Sign Up / Sign In
                        </Button>
                    </Box>
                ) : (
                    <Sidebar/>
                )}
            </Box>
        </AppBar>
    );
};

export default Header;
