import React, { useState } from "react";
import { Box } from "@mui/material"; // Import Box from Material UI
import ReelSection from "../../components/reelsSection/ReelSection";
import Filter from "../../components/reelsSection/Filter";

const AutoParts = () => {
  const [filter, setFilter] = useState("new"); // Default filter

  return (
    <Box bgcolor="#fafafa" p={2}>
      {" "}
      {/* Added Box with bgcolor and padding */}
      <Filter filter={filter} setFilter={setFilter} />
      <ReelSection filter={filter} />
    </Box>
  );
};

export default AutoParts;
