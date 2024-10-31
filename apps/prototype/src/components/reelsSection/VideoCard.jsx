import React from "react";
import { Box } from "@mui/material";
import VideoActionBar from "./VideoActionBar";
import VideoDetails from "./VideoDetails";

const VideoCard = ({ video, index, currentIndex, isMuted, videoRefs }) => {
  return (
    <Box
      className="video-container"
      data-index={index}
      sx={{
        position: "relative",
        height: "90vh",
        width: "100%",
        maxWidth: "md",
        scrollSnapAlign: "start",
        overflow: "hidden",
        mb: 2,
      }}
    >
      {/* Video Element */}
      <video
        ref={(el) => (videoRefs.current[index] = el)}
        loop
        playsInline
        muted={isMuted}
        src={video.videoUrl}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Overlay for Dim Effect */}
      <Box
        sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.3)" }}
      />

      {/* Action Bar with Like, Comment, Share Buttons */}
      <VideoActionBar video={video} />

      {/* Video Details with Title, Location, Price, and Description */}
      <VideoDetails video={video} />
    </Box>
  );
};

export default VideoCard;
