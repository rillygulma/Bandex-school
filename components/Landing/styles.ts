import theme from "@/styles/theme";
import { Box, Container, Stack } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import style from 'styled-components';

// Welcome Section ------------------------------------------

export const SquaresShape = styled(Container)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const GridLayoutStyles = {
  direction: "ltr",
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(25, 1.5vw)",
    md: "repeat(25, 0.5vw)",
  },
  gridTemplateRows: {
    xs: "repeat(25, 1.5vw)",
    md: "repeat(25, 0.5vw)",
  },
  gap: { xs: 1, md: 2 },
};

// News Section ------------------------------------------

export const NewsGridStyles = {
  direction: "ltr",
  display: "grid",
  justifyContent: "center",
  margin: 5,
  gridTemplateColumns: {
    xs: "repeat(37, 1vw)",
    md: "repeat(37, 0.5vw)",
  },
  gridTemplateRows: {
    xs: "repeat(20, 1vw)",
    md: "repeat(20, 0.5vw)",
  },
  gap: { xs: 0.7, md: 2 },
};

export const PageFlipComponent = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alighnItems: "center",
}));

export const NewsArrowStyles = {
  position: "absolute",
  width: { xs: "15vw", md: "5vw" },
  height: { xs: "15vw", md: "5vw" },
  top: "50%",
  transition: "0.4s ease",
  transform: "translateY(-50%)",
  zIndex: "5",
  opacity: 0.3,
  color: theme.palette.basic.light,
  cursor: "pointer",

  "&:hover": {
    opacity: 1,
  },
};

//Login Style
export const PageContainer = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f4f6;
`;

export const Card = style.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 24rem;
`;

export const IconContainer = style.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Icon = style.div`
  color: #3b82f6;
  font-size: 2rem;
`;

export const Title = style.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Label = style.label`
  display: block;
  color: #4a5568;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = style.input`
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: #4a5568;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const TogglePassword = style.button`
  color: #4a5568;
  font-size: 0.875rem;
  cursor: pointer;
  background: none;
  border: none;
`;

export const Button = style.button`
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: none;
`;

export const NewsAnimation = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;
