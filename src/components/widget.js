import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import News from "./News";

const WidgetContainer = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  flex: 0.2,
  backgroundColor: theme.palette.background.paper,
  borderRadius: ".7rem",
  marginTop: "2vh",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const newsArray = [
  {
    title: "Hey this is react project",
    description: "Build with react,redux,firebase",
  },
  {
    title: "Linkedin offer.",
    description:
      "Invite friends to to connect with you and build a large community & get job.",
  },
  {
    title: "Another news is here",
    description: "Material ui is great...",
  },
  {
    title: "Hey this is react project",
    description: "Build with react,redux,firebase",
  },
  {
    title: "Linkedin offer.",
    description:
      "Invite friends to to connect with you and build a large community & get job.",
  },
  {
    title: "Another news is here",
    description: "Material ui is great...",
  },
  {
    title: "Linkedin offer.",
    description:
      "Invite friends to to connect with you and build a large community & get job.",
  },
];

function Widget() {
  return (
    <WidgetContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Typography variant="paragraph" color="textPrimary">
          Linkedin News
        </Typography>
        <InfoIcon />
      </Box>
      {newsArray.map((news, i) => (
        <News key={i} description={news.description} title={news.title} />
      ))}
    </WidgetContainer>
  );
}

export default Widget;
