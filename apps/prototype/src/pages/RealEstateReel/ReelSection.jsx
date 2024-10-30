import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
  Button,
} from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  VolumeOff,
  VolumeUp,
  Info,
  LocationOn,
  AttachMoney,
  Favorite as FavoriteIcon,
  ChatBubble as CommentIcon,
  Share as ShareIcon,
  MoreHoriz as MoreHorizIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import videosData from "../../data/videos";

const ReelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const videoRefs = useRef({});

  const handleVideoIntersection = (entries) => {
    entries.forEach((entry) => {
      const videoIndex = parseInt(entry.target.dataset.index);
      if (entry.isIntersecting) {
        setCurrentIndex(videoIndex);
        setShowDetails(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleVideoIntersection, {
      threshold: 0.5,
    });

    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) {
        observer.observe(videoEl.parentElement);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([index, videoEl]) => {
      if (videoEl) {
        if (parseInt(index) === currentIndex) {
          videoEl.play().catch((err) => console.log("Playback failed:", err));
        } else {
          videoEl.pause();
        }
      }
    });
  }, [currentIndex]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        navigateVideo("prev");
        break;
      case "ArrowDown":
        e.preventDefault();
        navigateVideo("next");
        break;
      case "m":
        toggleMute();
        break;
      case "i":
        setShowDetails((prev) => !prev);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const navigateVideo = (direction) => {
    setShowDetails(false);
    setCurrentIndex((prev) => {
      const nextIndex =
        direction === "next"
          ? (prev + 1) % videosData.length
          : (prev - 1 + videosData.length) % videosData.length;

      const videoElement = videoRefs.current[nextIndex];
      if (videoElement) {
        videoElement.parentElement.scrollIntoView({ behavior: "smooth" });
      }
      return nextIndex;
    });
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) {
        videoEl.muted = !isMuted;
      }
    });
  };

  const renderDetails = (video) => {
    if (video.category === "Real Estate") {
      return (
        <Box sx={{ mt: 2 }}>
          <Chip label={video.type} size="small" sx={{ mb: 1 }} />
          <Typography variant="subtitle2" sx={{ mt: 1 }}>
            <strong>Amenities:</strong>
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 1, flexWrap: "wrap", gap: 1 }}
          >
            {video.amenities.map((amenity) => (
              <Chip
                key={amenity}
                label={amenity}
                size="small"
                variant="outlined"
                sx={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
              />
            ))}
          </Stack>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Agent:</strong> {video.agent}
          </Typography>
          <Typography variant="body2">
            <strong>Contact:</strong> {video.contactNumber}
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box sx={{ mt: 2 }}>
          <Chip label={video.brand} size="small" sx={{ mb: 1 }} />
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Condition:</strong> {video.condition}
          </Typography>
          <Typography variant="body2">
            <strong>Warranty:</strong> {video.warranty}
          </Typography>
        </Box>
      );
    }
  };

  const renderActionBar = (video) => (
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
      {/* Profile Section */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar
          sx={{
            width: 48,
            height: 48,
            mb: 1,
            border: "2px solid white",
          }}
          src={video.userAvatar || null}
        >
          <PersonIcon />
        </Avatar>
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            minWidth: "32px",
            height: "32px",
            borderRadius: "16px",
          }}
        >
          +
        </Button>
      </Box>

      {/* Like Button */}
      <Box sx={{ textAlign: "center" }}>
        <IconButton
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
              transform: "scale(1.1)",
            },
            transition: "transform 0.2s",
            mb: 0.5,
          }}
        >
          <FavoriteIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography
          variant="caption"
          sx={{
            color: "white",
            display: "block",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          7.8K
        </Typography>
      </Box>

      {/* Comment Button */}
      <Box sx={{ textAlign: "center" }}>
        <IconButton
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
              transform: "scale(1.1)",
            },
            transition: "transform 0.2s",
            mb: 0.5,
          }}
        >
          <CommentIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography
          variant="caption"
          sx={{
            color: "white",
            display: "block",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          231
        </Typography>
      </Box>

      {/* Share Button */}
      <Box sx={{ textAlign: "center" }}>
        <IconButton
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
              transform: "scale(1.1)",
            },
            transition: "transform 0.2s",
            mb: 0.5,
          }}
        >
          <ShareIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography
          variant="caption"
          sx={{
            color: "white",
            display: "block",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          Share
        </Typography>
      </Box>

      {/* More Options Button */}
      <IconButton
        sx={{
          bgcolor: "rgba(255,255,255,0.1)",
          "&:hover": {
            bgcolor: "rgba(255,255,255,0.2)",
            transform: "scale(1.1)",
          },
          transition: "transform 0.2s",
        }}
      >
        <MoreHorizIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        pl: { xs: 0, sm: 8 },
        bgcolor: "#fafafa",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "90%", sm: "400px" },
          p: 2.5,
        }}
      >
        {videosData.map((video, index) => (
          <Box
            key={video.id}
            className="video-container"
            data-index={index}
            sx={{
              position: "relative",
              marginTop: "10px",
              height: "90vh",
              width: "100%",
              maxWidth: "md",
              scrollSnapAlign: "start",
              scrollSnapType: "y mandatory",
              overflowY: "auto",
            }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              loop
              playsInline
              muted={isMuted}
              src={video.videoUrl}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(0,0,0,0.3)",
              }}
            />

            {/* Action Bar */}
            {renderActionBar(video)}

            {/* Info Card */}
            <Card
              sx={{
                position: "absolute",
                bottom: 3,
                left: 2,
                maxWidth: {
                  xs: "calc(100% - 100px)",
                  md: "calc(100% - 140px)",
                },
                bgcolor: "rgba(0,0,0,0.7)",
                color: "white",
                backdropFilter: "blur(8px)",
              }}
            >
              <CardContent>
                <Typography variant="h6" component="h2">
                  {video.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="body2">{video.location}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <AttachMoney sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="body2">{video.price}</Typography>
                </Box>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {video.description}
                </Typography>

                <Box
                  sx={{
                    height: showDetails ? "auto" : 0,
                    overflow: "hidden",
                    transition: "height 0.3s",
                  }}
                >
                  {renderDetails(video)}
                </Box>
              </CardContent>
            </Card>

            {/* Media Controls */}
            <Box
              sx={{
                position: "absolute",
                bottom: 2,
                right: 2,
                display: "flex",
                gap: 1,
                zIndex: 2,
              }}
            >
              <IconButton
                onClick={() => setShowDetails((prev) => !prev)}
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <Info sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                onClick={toggleMute}
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                {isMuted ? (
                  <VolumeOff sx={{ color: "white" }} />
                ) : (
                  <VolumeUp sx={{ color: "white" }} />
                )}
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReelSection;
