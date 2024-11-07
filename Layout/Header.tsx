import theme from "@/styles/theme";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

function ResponsiveAppBar() {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorSubMenu, setAnchorSubMenu] = React.useState<null | HTMLElement>(null);
  const [submenu, setSubmenu] = React.useState<string>("");

  const links = [
    { title: "Home", link: "/" },
    {
      title: "About",
      link: "/about",
      links: [
        { title: "Why Bandex", link: "/about/why-ais" },
        { title: "Facilities", link: "/about/facilities" },
      ],
    },
    {
      title: "Academics",
      link: "/academics",
      links: [
        { title: "Study Levels", link: "/academics/study-levels" },
        { title: "Curriculum", link: "/academics/curriculum" },
        { title: "Co-Curriculum", link: "/academics/co-curriculum" },
      ],
    },
    {
      title: "Join Bandex",
      link: "/engage",
      links: [
        { title: "Registration Fees", link: "/engage/registration-fees" },
        { title: "Job Opportunities", link: "/engage/job-opportunities" },
      ],
    },
    { title: "Contact", link: "/contact" },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setSubmenu("");
  };

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: theme.palette.blue.dark,
        direction: router.locale === "ar" ? "rtl" : "ltr",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo on the left side */}
          <Link href="/" passHref style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/bandex-logo.jpg"
              alt="Logo"
              style={{
                maxHeight: "100px",
                width: "auto",
                marginRight: "15px",
              }}
            />
          </Link>

          {/* Desktop Links Centered */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {links.map(({ title, link, links }, i) =>
              links ? (
                <React.Fragment key={i}>
                  <Typography
                    aria-haspopup="true"
                    onClick={(e) => {
                      setSubmenu((current) => (current === link ? "" : link));
                      setAnchorSubMenu(e.currentTarget);
                    }}
                    sx={{
                      color: theme.palette.basic.light,
                      margin: "0 10px",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "transform 0.3s, color 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        color: theme.palette.blue.light,
                      },
                    }}
                  >
                    {title}
                  </Typography>
                  <Menu
                    id={`${link}-submenu`}
                    anchorEl={anchorSubMenu}
                    open={submenu === link}
                    onClose={() => setSubmenu("")}
                    MenuListProps={{
                      "aria-labelledby": "submenu-button",
                    }}
                  >
                    {links.map(({ link: sublink, title: subtitle }, y) => (
                      <MenuItem key={y} onClick={() => setSubmenu("")}>
                        <Link href={sublink} passHref>
                          <Typography
                            color={theme.palette.blue.dark}
                            sx={{
                              textDecoration: "none",
                              transition: "transform 0.3s, color 0.3s",
                              "&:hover": {
                                color: theme.palette.blue.light,
                                transform: "scale(1.05)",
                              },
                            }}
                          >
                            {subtitle}
                          </Typography>
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Link key={i} href={link} passHref>
                  <Typography
                    sx={{
                      color: theme.palette.basic.light,
                      margin: "0 10px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "transform 0.3s, color 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        color: theme.palette.blue.light,
                      },
                    }}
                  >
                    {title}
                  </Typography>
                </Link>
              )
            )}
          </Box>

          {/* Login Button for Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}>
            <Link href="/Login" passHref>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  backgroundColor: theme.palette.blue.light,
                  color: theme.palette.basic.light, // Default color for the text
                  "&:hover": {
                    backgroundColor: theme.palette.blue.dark,
                  },
                  // Change text color to white on desktop
                  "@media (min-width: 768px)": {
                    color: "white",
                  },
                }}
              >
                Login
              </Button>
            </Link>
          </Box>

          {/* Mobile Menu Icon on the right side */}
          <Box sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <List component="nav" sx={{ width: "100%", maxWidth: 360 }}>
                {links.map(({ title, link, links }, i) =>
                  links ? (
                    <React.Fragment key={i}>
                      <ListItemButton
                        onClick={() => setSubmenu((current) => (current === link ? "" : link))}
                        sx={{
                          transition: "transform 0.3s, color 0.3s",
                          "&:hover": {
                            transform: "scale(1.05)",
                            color: theme.palette.blue.light,
                          },
                        }}
                      >
                        <ListItemText primary={title} />
                        {submenu === link ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={submenu === link} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {links.map(({ link: sublink, title: subtitle }, y) => (
                            <Link href={sublink} key={y} passHref>
                              <ListItemButton
                                component="a"
                                onClick={handleCloseNavMenu}
                                sx={{
                                  textDecoration: "none",
                                  transition: "transform 0.3s, color 0.3s",
                                  "&:hover": {
                                    transform: "scale(1.05)",
                                    color: theme.palette.blue.light,
                                  },
                                }}
                              >
                                <ListItemText primary={subtitle} />
                              </ListItemButton>
                            </Link>
                          ))}
                        </List>
                      </Collapse>
                      <Divider />
                    </React.Fragment>
                  ) : (
                    <Link href={link} key={i} passHref>
                      <ListItemButton
                        component="a"
                        onClick={handleCloseNavMenu}
                        sx={{
                          textDecoration: "none",
                          transition: "transform 0.3s, color 0.3s",
                          "&:hover": {
                            transform: "scale(1.05)",
                            color: theme.palette.blue.light,
                          },
                        }}
                      >
                        <ListItemText primary={title} />
                      </ListItemButton>
                    </Link>
                  )
                )}

                {/* Login Button for Mobile */}
                <Link href="/Login" passHref>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      color={theme.palette.blue.dark}
                      sx={{
                        textDecoration: "none",
                        transition: "transform 0.3s, color 0.3s",
                        "&:hover": {
                          transform: "scale(1.05)",
                          color: theme.palette.blue.light,
                        },
                      }}
                    >
                      Login
                    </Typography>
                  </MenuItem>
                </Link>
              </List>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
