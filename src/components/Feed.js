import React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const FeedContainer = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  flex: 0.6,
}));

function Feed() {
  return (
    <FeedContainer>
      <Paper></Paper>
    </FeedContainer>
  );
}

export default Feed;
