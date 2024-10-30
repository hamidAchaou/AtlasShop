// src/components/Sidebar.jsx
import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BusinessIcon from "@mui/icons-material/Business";
import BuildIcon from "@mui/icons-material/Build";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
import { useLocation, Link } from "react-router-dom";
import ProfileImage from "../../assets/images/me.png";

const SidebarContainer = styled(Box)(({ theme, open, isMobile }) => ({
  width: open && !isMobile ? 250 : isMobile ? "100vw" : 70,
  height: isMobile ? "auto" : "100vh",
  backgroundColor: "#ffffff",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  position: "fixed",
  top: isMobile ? "auto" : 0,
  left: isMobile ? 0 : 0,
  bottom: isMobile ? 0 : "auto",
  display: "flex",
  flexDirection: isMobile ? "row" : "column",
  justifyContent: isMobile ? "space-around" : "space-between",
  transition: "width 0.3s ease",
  zIndex: 1300,
}));

const SidebarHeader = styled(Box)(({ theme, open, isMobile }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  fontSize: open && !isMobile ? "1.5rem" : "1rem",
  fontWeight: "bold",
  color: "#3f51b5",
}));

const StyledListItem = styled(ListItem)(({ theme, active, isMobile }) => ({
  borderRadius: "8px",
  transition: "background-color 0.2s ease, transform 0.2s ease",
  backgroundColor: active ? "#e0e0e0" : "transparent",
  color: active ? "#000" : "#333",
  justifyContent: isMobile ? "center" : "flex-start",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    transform: "scale(1.02)",
  },
}));

const StyledListItemIcon = styled(ListItemIcon)({
  color: "#555",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "Search", icon: <SearchIcon />, path: "/search" },
  { text: "Real Estate", icon: <BusinessIcon />, path: "/real-estate" },
  { text: "Auto Parts", icon: <BuildIcon />, path: "/auto-parts" },
  { text: "Messages", icon: <ChatIcon />, path: "/messages" },
  {
    text: "Notifications",
    icon: <NotificationsIcon />,
    path: "/notifications",
  },
  { text: "Create", icon: <AddBoxIcon />, path: "/create" },
  {
    text: "Profile",
    icon: (
      <img
        src={ProfileImage}
        alt="Profile"
        style={{ width: 24, height: 24, borderRadius: "50%" }}
        onError={(e) => {
          e.target.src = "defaultIconPath";
        }}
      />
    ),
    path: "/profile",
  },
  { text: "More", icon: <MoreHorizIcon />, path: "/more" },
];

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <SidebarContainer open={open} isMobile={isMobile}>
      {!isMobile && <SidebarHeader open={open}>AtlasShop</SidebarHeader>}
      <List
        sx={{ display: "flex", flexDirection: isMobile ? "row" : "column" }}
      >
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <StyledListItem
              button
              active={location.pathname === item.path}
              isMobile={isMobile}
            >
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              {!isMobile && open && <ListItemText primary={item.text} />}
            </StyledListItem>
          </Link>
        ))}
      </List>
      {isMobile && (
        <Box sx={{ padding: 1, display: "flex", justifyContent: "center" }}>
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
        </Box>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
