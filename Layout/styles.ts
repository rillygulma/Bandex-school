import { Container, Stack } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import CSS from "csstype";
import Avatar from "@mui/material/Avatar";
import { ReactNode } from "react";
import theme from "@/styles/theme";

// Interfaces ------------------------------------------
export interface LinkElementProps {
  data: string | JSX.Element;
  icon: ReactNode;
  href?: string;
  itemLocale?: string;
  onClick?(): void;
  color: string;
}

// Layout components ------------------------------------------

export const LayoutBox = styled(Stack)(({ theme }) => ({
  width: "100%",
  background: theme.palette.blue.main,
}));

// Main components ------------------------------------------

export const MainContainer = styled("main")(() => ({
  overflowX: "hidden",
  width: "100%",
}));

// Header components ------------------------------------------

export const HeaderAnimation = {
  HeaderOpenningDesktop: keyframes`
        0% {width: 5.5rem;}
        100% {width: max(15%, 18rem);}
    `,
  HeaderClosingDesktop: keyframes`
        0% {width: max(15%, 18rem);}
        100% {width: 5.5rem;}
    `,
  HeaderOpenningMobile: keyframes`
        0% {height: 5rem;}
        100% {height: 30rem;}
    `,
  HeaderClosingMobile: keyframes`
        0% {height: 30rem;}
        100% {height: 5rem;}
    `,
};

export const HeaderButton = styled(Container)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "4rem",
  height: "4rem",
  cursor: "pointer",
  minWidth: "4rem",
  minHeight: "4rem",
}));

// Navbar components ------------------------------------------

export const NavLinkStyles: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

export const NavStackStyles = {
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
};

export const MainLogo = styled(Avatar)(() => ({
  maxHeight: "2rem",
  overflow: "hidden",
}));

// Footer components ------------------------------------------

export const FooterContainer = styled("footer")(() => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.blue.dark,
  color: "white",
  padding: "10px 0px",
}));
