// src/components/PostCard.jsx
import React from "react";
import { Paper, Typography } from "@mui/material";

const PostCard = ({ imageUrl, caption }) => {
  return (
    <Paper style={{ padding: "8px", position: "relative" }}>
      <img
        src={imageUrl}
        alt={caption}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <Typography
        variant="caption"
        style={{
          position: "absolute",
          bottom: "8px",
          left: "8px",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "4px",
          padding: "4px",
        }}
      >
        {caption}
      </Typography>
    </Paper>
  );
};

export default PostCard;
