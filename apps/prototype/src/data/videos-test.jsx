import React, { useEffect, useRef, useState } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import videos from "../../data/videos"; // Import the videos array

const ReelSection = () => {
  const videoRefs = useRef([]); // Create a ref array to hold video references
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current video index

  const handleNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleNextVideo(); // Go to the next video on right arrow press
    }
  };

  useEffect(() => {
    const currentVideoElement = videoRefs.current[currentIndex];

    if (currentVideoElement) {
      currentVideoElement.play(); // Play the current video
    }

    // Pause all other videos
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex && video) {
        video.pause();
      }
    });
  }, [currentIndex]); // Update when currentIndex changes

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown); // Add event listener for keydown

    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Clean up the event listener
    };
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        paddingLeft: { xs: 0, sm: "250px" },
        backgroundColor: "#fafafa",
      }}
    >
      {videos.map((video, index) => (
        <Box
          key={video.id}
          sx={{
            position: "relative",
            width: { xs: "90%", sm: "400px" },
            height: "90%",
            backgroundColor: "#000",
            borderRadius: "10px",
            overflow: "hidden",
            display: currentIndex === index ? "flex" : "none", // Show only the current video
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)} // Store each video element in the ref array
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            muted
            onEnded={handleNextVideo} // Move to the next video when the current one ends
          >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 2,
            }}
          />

          {/* Action Bar */}
          <Box
            sx={{
              position: "absolute",
              right: "15px",
              bottom: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
              <IconButton color="error" size="large">
                <FavoriteIcon sx={{ color: "white" }} />
              </IconButton>
              <Typography variant="body2" color="white">
                7,897
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
              <IconButton color="default" size="large">
                <CommentIcon sx={{ color: "white" }} />
              </IconButton>
              <Typography variant="body2" color="white">
                231
              </Typography>
            </Box>
            <IconButton color="default" size="large">
              <ShareIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton color="default" size="large">
              <MoreHorizIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          {/* User Info and Caption */}
          <Box
            sx={{
              position: "absolute",
              left: "15px",
              bottom: "30px",
              color: "#fff",
              zIndex: 3,
            }}
          >
            <Typography variant="h6" component="span">
              {video.agent} {/* Display agent name from the current video object */}
              <Typography
                component="span"
                sx={{
                  color: "#0095f6",
                  ml: 1,
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Follow
              </Typography>
            </Typography>
            <Typography variant="body2" color="#ddd">
              {video.description} {/* Display description from the current video object */}
            </Typography>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default ReelSection;
