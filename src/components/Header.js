import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  boxShadow: theme.shadows[1],
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const Logo = styled("img")(({ theme }) => ({
  objectFit: "contain",
  height: "4rem",
  padding: ".5rem",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1.2em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    backgroundColor: theme.palette.grey[200],
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledMenuItem = styled(IconButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "4px 8px",
  transition: "all .3s",

  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutApp = () => {
    handleMenuClose();
    dispatch(logout());
    auth.signOut();
  };

  const MenuItems = [
    {
      icon: HomeIcon,
      title: "Home",
      badge: 0,
      onclick: () => history.push("/"),
    },
    {
      icon: GroupIcon,
      title: "My Network",
      badge: 0,
      onclick: () => history.push("/mynetwork"),
    },
    {
      icon: WorkIcon,
      title: "Jobs",
      badge: 0,
      onclick: () => history.push("/jobs"),
    },
    {
      icon: TextsmsIcon,
      title: "Messaging",
      badge: 0,
      onclick: () => history.push("/message"),
    },
    {
      icon: NotificationsIcon,
      title: "Notifications",
      badge: 2,
      onclick: () => history.push("/notifications"),
    },
  ];

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={logoutApp}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {MenuItems.map((item, idx) => (
        <MenuItem key={idx}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={item.badge} color="error">
              <item.icon />
            </Badge>
          </IconButton>
          <Typography variant="caption">{item.title}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppbar position="sticky">
        <Toolbar variant="dense">
          <Logo src="./logo.png" alt="linkedin logo" />
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="default" size={10} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {MenuItems.map((item, i) => (
              <StyledMenuItem
                size="medium"
                color="default"
                key={i}
                disableRipple
                style={{
                  backgroundColor: "transparent",
                  paddingBottom: "none",
                }}
                onClick={item.onclick}
              >
                <Badge badgeContent={item.badge} color="error">
                  <item.icon sx={{ height: 20, width: 20 }} />
                </Badge>
                <Typography variant="caption">{item.title}</Typography>
              </StyledMenuItem>
            ))}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                alt="me"
                src={user.photoUrl && user.photoUrl}
                sx={{ width: 40, height: 40 }}
              >
                {user.displayName && user.displayName[0]}
              </Avatar>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppbar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
