import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import SignOutIcon from "@mui/icons-material/ExitToApp";
import Avatar from "@mui/material/Avatar";
import {useNavigate} from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import {useContext, useState} from "react";
import {AppContext} from "../App";

export default function TemporaryDrawer() {
    const navigate = useNavigate();
    const {handleSignOut} = useAuth();
    const {user} = useContext(AppContext);
    const [right, setRight] = useState(false);

    function toggleDrawer(open) {
        return (event) => {
            if (
                event.type === "keydown" &&
                (event.key === "Tab" || event.key === "Shift")
            ) {
                return;
            }
            setRight(open);
        };
    }

    const getIconByLabel = (label) => {
        switch (label) {
            case "Dashboard":
                return <DashboardIcon/>;
            case "Home":
                return <HomeIcon/>;
            case "Delete Account":
                return <DeleteIcon/>;
            case "Sign Out":
                return <SignOutIcon/>;
            default:
                return null;
        }
    };

    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Divider/>
            <List>
                <ListItem key="Home" disablePadding>
                    <ListItemButton onClick={() => navigate("/")}>
                        <ListItemIcon>{getIconByLabel("Home")}</ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItemButton>
                </ListItem>
                <ListItem key="MyProfile" disablePadding>
                    <ListItemButton onClick={() => navigate("/profile")}>
                        <ListItemIcon>{getIconByLabel("Dashboard")}</ListItemIcon>
                        <ListItemText primary={"Profile"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key="Sign Out" disablePadding>
                    <ListItemButton onClick={handleSignOut}>
                        <ListItemIcon>{getIconByLabel("Sign Out")}</ListItemIcon>
                        <ListItemText primary="Sign Out"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <Avatar
                onClick={toggleDrawer(true)}
                alt="profile picture"
                sx={{
                    cursor: "pointer",
                    width: 50,
                    height: 50,
                    "&:hover": {
                        boxShadow: "0 0 0 5px #D3D3D3",
                    },
                }}
                src={user?.picture}
            />
            <Drawer anchor="right" open={right} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </>
    );
}
