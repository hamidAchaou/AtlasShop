// src/components/Sidebar.jsx
import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BusinessIcon from "@mui/icons-material/Business"; // For Real Estate
import BuildIcon from "@mui/icons-material/Build"; // For Auto Parts
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddBoxIcon from "@mui/icons-material/AddBox"; // Updated Create icon
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"; // For More
import { styled } from "@mui/material/styles";
import { useLocation, Link } from "react-router-dom"; // Import useLocation and Link
import ProfileImage from "../../assets/images/me.png"; // Update this path as needed

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 250,
  height: "100vh",
  backgroundColor: "#ffffff",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#3f51b5",
}));

// Styled ListItem with hover effect
const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  borderRadius: "8px", // Rounded corners
  transition: "background-color 0.2s ease, transform 0.2s ease", // Smooth background transition
  backgroundColor: active ? "#e0e0e0" : "transparent",
  color: active ? "#000" : "#333",
  "&:hover": {
    backgroundColor: "#f0f0f0", // Light gray background on hover
    transform: "scale(1.02)", // Slight scale effect
  },
}));

// Styled ListItemIcon for black color
const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: "#555", // Set icon color to black
  transition: "transform 0.2s ease", // Smooth transition for scaling
  "&:hover": {
    transform: "scale(1.1)", // Scale up icon on hover
  },
}));

// Updated array of menu items with corresponding routes
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
  { text: "Create", icon: <AddBoxIcon />, path: "/create" }, // Changed to AddBox icon
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
  }, // Fallback icon if the image fails to load
  { text: "More", icon: <MoreHorizIcon />, path: "/more" },
];

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  return (
    <SidebarContainer>
      <SidebarHeader>AtlasShop</SidebarHeader>
      <List>
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <StyledListItem button active={location.pathname === item.path}>
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </SidebarContainer>
  );
};

export default Sidebar;
