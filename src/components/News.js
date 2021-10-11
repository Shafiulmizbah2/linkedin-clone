import React from "react";
import { styled } from "@mui/material/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Typography, Box } from "@mui/material";

const NewsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  padding: ".5rem",
  cursor: "pointer",
}));
function News({ title, description }) {
  return (
    <NewsWrapper>
      <FiberManualRecordIcon color="secondary" />
      <Box sx={{ marginLeft: ".3rem" }}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="caption">{description}</Typography>
      </Box>
    </NewsWrapper>
  );
}

export default News;
