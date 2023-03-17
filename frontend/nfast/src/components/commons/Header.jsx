import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ReceiptIcon from "@mui/icons-material/Receipt";
// import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";
import ListItemIcon from "@mui/material/ListItemIcon";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import Logout from "@mui/icons-material/Logout";
import { styled, alpha } from "@mui/material/styles";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = [
//   "사용한 NFT",
//   "거래 내역",
//   "나의 북마크",
//   "정보 수정",
//   "로그아웃",
// ];
function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFCB45",
        height: "80px",
        width: "100%",
        position: "fixed",
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ height: "80px", display: "flex", alignItems: "center" }}
        >
          {/* 웹 로고 */}
          <Link to="/login">
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Link>
          {/* 모바일화면 */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            component={Link}
            to="/"
          >
            {/* 로고이미지가 나와야되는데? */}
            <Link to="/login">
              <img src="logo.png" alt="logo" height="60px" />
            </Link>
          </Box>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleClick} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="cat.png" />
              </IconButton>
            </Tooltip>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/mynft"
                disableRipple
              >
                <ListItemIcon>
                  <MonetizationOnIcon fontSize="small" />
                </ListItemIcon>
                나의 NFT
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/mytrans"
                disableRipple
              >
                <ListItemIcon>
                  <ReceiptIcon fontSize="small" />
                </ListItemIcon>
                거래 내역
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/mybookmark"
                disableRipple
              >
                <ListItemIcon>
                  <BookmarkAddIcon fontSize="small" />
                </ListItemIcon>
                나의 북마크
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/myinfo"
                disableRipple
              >
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                정보수정
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                로그아웃
              </MenuItem>
            </StyledMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
