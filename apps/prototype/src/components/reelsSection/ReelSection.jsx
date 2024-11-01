import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import videosData from "../../data/videos";
import VideoCard from "./VideoCard";

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
    Object.values(videoRefs.current).forEach((videoEl) =>
      observer.observe(videoEl.parentElement)
    );
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([index, videoEl]) => {
      if (parseInt(index) === currentIndex) {
        videoEl?.play().catch((err) => console.log("Playback failed:", err));
      } else {
        videoEl?.pause();
      }
    });
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          navigateVideo("prev");
          break;
        case "ArrowDown":
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
      videoRefs.current[nextIndex]?.parentElement.scrollIntoView({
        behavior: "smooth",
      });
      return nextIndex;
    });
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    Object.values(videoRefs.current).forEach(
      (videoEl) => (videoEl.muted = !isMuted)
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#fafafa",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "90%", sm: "400px" },
          p: 2.5,
        }}
      >
        {videosData.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            index={index}
            currentIndex={currentIndex}
            isMuted={isMuted}
            showDetails={showDetails}
            videoRefs={videoRefs}
            navigateVideo={navigateVideo} // Pass navigateVideo function
          />
        ))}
      </Box>
    </Box>
  );
};

export default ReelSection;
