import React from "react";
import { Box, IconButton, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Favorite as FavoriteIcon,
  ChatBubble as CommentIcon,
  Share as ShareIcon,
  MoreHoriz as MoreHorizIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

const actionButtonStyles = {
  bgcolor: "rgba(255,255,255,0.1)",
  "&:hover": { bgcolor: "rgba(255,255,255,0.2)", transform: "scale(1.1)" },
  transition: "transform 0.2s",
  mb: 0.5,
};

const VideoActionBar = (video) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: { xs: "15px", md: "10px" },
        bottom: { xs: "80px", md: "auto" },
        top: { md: "50%" },
        transform: { md: "translateY(-50%)" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 3,
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Link to="/profile">
          <Avatar
            src={video.userAvatar || null}
            sx={{ width: 48, height: 48, mb: 1, border: "2px solid white" }}
          >
            <PersonIcon />
          </Avatar>
        </Link>
      </Box>
      {["Like", "Comment", "Share"].map((action, index) => (
        <Box key={index} sx={{ textAlign: "center" }}>
          <IconButton sx={actionButtonStyles}>
            {action === "Like" && <FavoriteIcon sx={{ color: "white" }} />}
            {action === "Comment" && <CommentIcon sx={{ color: "white" }} />}
            {action === "Share" && <ShareIcon sx={{ color: "white" }} />}
          </IconButton>
          <Typography
            variant="caption"
            sx={{
              color: "white",
              display: "block",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            {action === "Like"
              ? "7.8K"
              : action === "Comment"
              ? "231"
              : "Share"}
          </Typography>
        </Box>
      ))}
      <IconButton sx={actionButtonStyles}>
        <MoreHorizIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

export default VideoActionBar;
