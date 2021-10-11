import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Typography, Grid, Paper, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const SidebarContainer = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  flex: 0.2,
  border: `1px solid ${theme.palette.background.paper}`,
  borderRadius: "1rem 1rem 0 0",
  overflow: "hidden",
  marginTop: "2vh",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Cover = styled("img")(({ theme }) => ({
  width: "100%",
  height: "5rem",
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  left: "50%",
  transform: "translate(-50%,-50%)",
  border: `2px solid ${theme.palette.background.paper}`,
}));

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = [
    "reactjs",
    "programing",
    "softwareengineering",
    "design",
    "developer",
  ];

  return (
    <SidebarContainer>
      <Paper elevation={0}>
        <Cover alt="cover img" src="/bg.jpeg" />
        <ProfileImage
          alt="me"
          src={user.photoUrl && user.photoUrl[0]}
          sx={{ width: 60, height: 60 }}
        >
          {user.displayName && user.displayName[0]}
        </ProfileImage>
        <Grid container alignItems="center" justifyContent="center">
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {user.displayName}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              {user.email}
            </Typography>
          </Box>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          mt={3}
          px={2}
        >
          <Typography variant="caption">Who viewed you</Typography>
          <Typography
            variant="caption"
            color="secondary"
            sx={{ fontWeight: "bold" }}
          >
            2343
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          px={2}
          py={1}
        >
          <Typography variant="caption">Views on post</Typography>
          <Typography
            variant="caption"
            color="secondary"
            sx={{ fontWeight: "bold" }}
          >
            243
          </Typography>
        </Grid>
      </Paper>

      <Paper elevation={0} sx={{ marginTop: "1rem" }}>
        <Grid container alignItems="center" px={2} py={1}>
          <Typography
            variant="subtitle2"
            mb={1}
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Recent
          </Typography>
          {recentItem.map((item) => (
            <Grid container item alignItems="center" py={1}>
              <Typography
                color="textSecondary"
                variant="caption"
                mr={1}
                sx={{ fontWeight: "bold", cursor: "pointer" }}
              >
                #
              </Typography>
              <Typography
                color="textSecondary"
                variant="caption"
                sx={{ fontWeight: "bold", cursor: "pointer" }}
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </SidebarContainer>
  );
}

export default Sidebar;
