import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

interface BoxProps {
  bgcolor?: string;
}

interface SquareProps {
  children?: React.ReactNode;
  sx?: Object;
  radius: {
    mobile: string[];
    desktop: string[];
  };
  bgcolor?: string;
}

const SquareBox = styled(Box)(({ bgcolor }: BoxProps) => ({
  background: bgcolor || "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  transition: "0.3s ease",
  boxShadow: `0px 0px 15px ${bgcolor || "gray"}`,

  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const Square = ({ children, radius, bgcolor, sx }: SquareProps) => {
  const borderRadius = (screen: string[]) =>
    screen[1]
      .split(".")
      .map((edge) => (edge === "0" ? "0" : `${screen[0]}`))
      .join(" ");

  return (
    <SquareBox
      bgcolor={bgcolor}
      sx={{
        paddingTop: children ? "0" : "100%",
        borderRadius: {
          xs: borderRadius(radius.mobile),
          md: borderRadius(radius.desktop),
        },
        ...sx,
      }}
    >
      {children}
    </SquareBox>
  );
};

export default Square;
