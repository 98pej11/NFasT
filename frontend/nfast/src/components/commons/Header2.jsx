import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";

// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import LoginBtn from "../loginpage/LoginButton";
import cat from "../../assets/cat.png";
import NFastLogo from "../../assets/NFast_Logo.png";
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
      borderRadius: 10,
      minWidth: 300,
      minHeight: 600,
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
      position="relative"
      style={{
        backgroundColor: "#FFCB45",
        height: "80px",
        boxShadow: "none",
        marginTop: 15,
        marginBottom: 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ height: "80px", display: "flex", alignItems: "center" }}
        >
          {/* 로고 */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex" } }}
            component={Link}
            to="/"
          >
            {/* 로고이미지가 나와야되는데? */}
            <img src={NFastLogo} alt="logo" height="60px" />
          </Box>

          <LoginBtn />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleClick} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={cat} />
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
              <img src={cat} alt="v" style={{ height: "300px" }} />
              <MenuItem
                sx={{ height: 70, fontSize: 20 }}
                onClick={handleClose}
                component={Link}
                to="/mynft"
                disableRipple
                divider
              >
                <EditIcon />
                나의 NFT
              </MenuItem>
              <MenuItem
                sx={{ height: 70, fontSize: 20 }}
                onClick={handleClose}
                component={Link}
                to="/mytrans"
                disableRipple
                divider
              >
                <EditIcon />
                거래 내역
              </MenuItem>

              <MenuItem
                sx={{ height: 70, fontSize: 20 }}
                onClick={handleClose}
                component={Link}
                to="/mybookmark"
                disableRipple
                divider
              >
                <EditIcon />
                나의 북마크
              </MenuItem>
              <MenuItem
                sx={{ height: 70, fontSize: 20 }}
                onClick={handleClose}
                component={Link}
                to="/myinfo"
                disableRipple
                divider
              >
                <EditIcon />
                정보수정
              </MenuItem>
              <MenuItem
                sx={{ height: 70, fontSize: 20 }}
                onClick={handleClose}
                disableRipple
                divider
              >
                <EditIcon />
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
