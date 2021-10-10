import React from "react";
import { styled } from "@mui/material/styles";

const WidgetContainer = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  flex: 0.2,
}));

function Widget() {
  return <WidgetContainer>Widget</WidgetContainer>;
}

export default Widget;
