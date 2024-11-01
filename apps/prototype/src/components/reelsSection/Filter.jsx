// src/components/Filter.js
import React from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (event, newFilter) => {
    if (newFilter) {
      setFilter(newFilter);
    }
  };

  return (
    <Box sx={{ mb: 2}}> {/* Center the filter */}
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilterChange}
        aria-label="Product Filter"
        sx={{ bgcolor: "#fff", borderRadius: "8px", boxShadow: 2 }} // Background color and styling
      >
        <ToggleButton
          value="new"
          aria-label="New"
          sx={{
            border: "none",
            bgcolor: filter === "new" ? "#1976d2" : "transparent", // Highlight selected button
            color: filter === "new" ? "#fff" : "inherit", // Change text color
            "&:hover": {
              bgcolor: "#1976d2", // Hover color for the new button
              color: "#fff",
            },
          }}
        >
          New
        </ToggleButton>
        <ToggleButton
          value="old"
          aria-label="Old"
          sx={{
            border: "none",
            bgcolor: filter === "old" ? "#1976d2" : "transparent", // Highlight selected button
            color: filter === "old" ? "#fff" : "inherit", // Change text color
            "&:hover": {
              bgcolor: "#1976d2", // Hover color for the old button
              color: "#fff",
            },
          }}
        >
          Old
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default Filter;
