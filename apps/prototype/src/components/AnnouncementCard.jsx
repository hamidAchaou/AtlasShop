// src/components/AnnouncementCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const AnnouncementCard = ({ title, description, price, city }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150" // Placeholder for video thumbnail
        alt="Announcement Image"
      />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography color="textSecondary">{description}</Typography>
        <Typography variant="body2">Price: ${price}</Typography>
        <Typography variant="body2">Location: {city}</Typography>
        <Button variant="contained" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
