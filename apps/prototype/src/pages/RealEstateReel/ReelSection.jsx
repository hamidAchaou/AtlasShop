import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  VolumeOff,
  VolumeUp,
  Info,
  LocationOn,
  AttachMoney,
} from "@mui/icons-material";
import videosData from "../../data/videos";

const ReelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const videoRefs = useRef({});
  const containerRef = useRef(null);

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
            className="video-container"
            data-index={index}
            sx={{
              position: "relative",
              height: "90vh",
              scrollSnapAlign: "start",

              width: "100%",
              maxWidth: "md",
              overflowY: "auto",
              scrollSnapType: "y mandatory",
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

            <Card
              sx={{
                position: "absolute",
                bottom: 24,
                left: 16,
                maxWidth: "80%",
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

            <Box
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                zIndex: 2,
              }}
            >
              <IconButton
                onClick={() => navigateVideo("prev")}
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <KeyboardArrowUp sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                onClick={() => navigateVideo("next")}
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <KeyboardArrowDown sx={{ color: "white" }} />
              </IconButton>
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                right: 16,
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
    </Container>
  );
};

export default ReelSection;
