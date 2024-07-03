import { useState, FC } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import SvgIcon from "@mui/material/SvgIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ButtonSignIn from "../Button/ButtonSignIn";
import ButtonExit from "../Button/ButtonExit";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../store/action";
import { Tooltip } from "@mui/joy";
import { UserType } from "../../../types/common";
import { IHomeIcon } from "../../../interfaces/commonInterfaces";

const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.auth.user) as UserType | {};

  const handleClickExit = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  const HomeIcon: FC<IHomeIcon> = (props) => {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  };

  const handleClick = () => {
    navigate("/signin");
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
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
      <MenuItem onClick={handleMenuClose}>
        {!token && <HomeIcon color="success" onClick={handleClick} />}
        {token && <LogoutIcon onClick={handleClickExit} />}
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <DashboardIcon sx={{ color: "brown" }} />
          </Badge>
        </IconButton>
        <p>Dashboard</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <InfoIcon sx={{ color: "blue" }} />
          </Badge>
        </IconButton>
        <p>Info</p>
      </MenuItem>
      {token && (
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <PersonIcon sx={{ color: "pink" }} />
            </Badge>
          </IconButton>
          <p>{profile && "user" in profile ? profile.user.name : ""}</p>
        </MenuItem>
      )}
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            {!token && <HomeIcon color="success" onClick={handleClick} />}
            {token && <LogoutIcon color="success" onClick={handleClickExit} />}
          </Badge>
        </IconButton>
        {!token && <p>Sign In</p>}
        {token && <p>Log out</p>}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgb(31, 37, 61)" }}
        color="default"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, color: "white" }}
          >
            Cryptocurrency Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
              },
            }}
          >
            <IconButton size="large" sx={{ color: "white" }}>
              <Badge sx={{ color: "white" }}>
                <DashboardIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" sx={{ color: "white" }}>
              <Badge sx={{ color: "white" }}>
                <InfoIcon />
              </Badge>
            </IconButton>
            {token && (
              <IconButton size="large" sx={{ color: "white" }}>
                <Badge sx={{ color: "white" }}>
                  <Tooltip
                    title={
                      profile && "user" in profile ? profile.user.name : ""
                    }
                  >
                    <PersonIcon />
                  </Tooltip>
                </Badge>
              </IconButton>
            )}
            {!token && <ButtonSignIn />}
            {token && <ButtonExit onClick={() => handleClickExit()} />}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, color: "white" }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{ color: "white" }}
            >
              <MoreIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Header;
