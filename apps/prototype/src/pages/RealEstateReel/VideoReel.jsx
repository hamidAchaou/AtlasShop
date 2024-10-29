// src/pages/RealEstateReel/VideoReel.jsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";

const VideoReel = ({ video }) => {
  return (
    <Card sx={{ mb: 2, maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="180"
        image={video.videoUrl}
        alt={video.title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.location} - {video.price}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {video.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {video.amenities &&
            video.amenities.map((amenity, index) => (
              <Chip key={index} label={amenity} size="small" sx={{ mr: 0.5 }} />
            ))}
          {video.condition && (
            <Chip
              label={`Condition: ${video.condition}`}
              size="small"
              sx={{ mr: 0.5 }}
            />
          )}
          {video.brand && <Chip label={`Brand: ${video.brand}`} size="small" />}
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoReel;
