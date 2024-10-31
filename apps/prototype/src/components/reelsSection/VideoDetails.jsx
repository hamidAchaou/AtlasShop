import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { LocationOn, AttachMoney } from "@mui/icons-material";

const VideoDetails = ({ video }) => {
  return (
    <Card
      sx={{
        position: "absolute",
        bottom: 3,
        left: 2,
        maxWidth: "calc(100% - 100px)",
        bgcolor: "rgba(0,0,0,0.7)",
        color: "white",
        backdropFilter: "blur(8px)",
      }}
    >
      <CardContent>
        {/* Video Title */}
        <Typography variant="h6">{video.title}</Typography>

        {/* Location */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body2">{video.location}</Typography>
        </Box>

        {/* Price */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <AttachMoney sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body2">{video.price}</Typography>
        </Box>

        {/* Description */}
        <Typography variant="body2" sx={{ mt: 1 }}>
          {video.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoDetails;
