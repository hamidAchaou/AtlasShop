import React, { useEffect, useRef, useState } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import videosData from "../../data/videos"; // Import your videos data

const ReelSection = () => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current video index

  const handleNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videosData.length);
  };

  useEffect(() => {
    const currentVideo = videoRef.current;

    if (currentVideo) {
      currentVideo.load(); // Load the new video
      currentVideo.play(); // Play the new video
    }
  }, [currentIndex]); // Update when currentIndex changes

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Align items to the top
        height: "100vh",
        paddingLeft: { xs: 0, sm: "250px" },
        backgroundColor: "#fafafa",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center the cards horizontally
          width: { xs: "90%", sm: "400px" },
          padding: "20px",
        }}
      >
        {videosData.map((video, index) => (
          <Box
            key={video.id}
            sx={{
              position: "relative",
              width: "100%",
              backgroundColor: "#000",
              borderRadius: "10px",
              overflow: "hidden",
              marginBottom: "20px", // Space between cards
              height: "90vh"
            }}
          >
            <video
              ref={index === currentIndex ? videoRef : null}
              style={{ width: "100%", height: "90vh", objectFit: "cover" }}
              muted
              onEnded={handleNextVideo} // Go to the next video when the current one ends
            >
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
                {video.title}
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
                {video.description}
              </Typography>
            </Box>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <IconButton color="error" size="large">
                  <FavoriteIcon sx={{ color: "white" }} />
                </IconButton>
                <Typography variant="body2" color="white">
                  7,897
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2,
                }}
              >
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
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ReelSection;
