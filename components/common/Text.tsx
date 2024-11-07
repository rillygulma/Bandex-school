import theme from "@/styles/theme";
import { Typography } from "@mui/material";

const Text = ({
  variant = "",
  color = theme.palette.basic.dark,
  children = "",
  center = false,
  justify = false,
  bold = false,
  doubleHeight = false,
  style = {},
  ...rest
}) => {
  const props = () => {
    switch (variant.toLowerCase()) {
      case "title":
        return { variant: "h3", fontWeight: "bold", lineHeight: 1.5, mb: 4 };
      case "subtitle":
        return { variant: "h4", fontWeight: "bold", my: 2 };
      case "cardtitle":
        return { variant: "h5", fontWeight: "bold", my: 2 };
      case "p":
        return { variant: "p", my: 4, lineHeight: 1.25 };
      case "sm":
        return { variant: "sm", my: 2, lineHeight: 1 };
      default:
        return { variant: "h6", my: 4 };
    }
  };

  return (
    <Typography
      {...props()}
      textAlign={justify ? "justify" : center ? "center" : "start"}
      color={color}
      fontWeight={bold ? "bold" : "regular"}
      style={{ lineHeight: doubleHeight ? 2 : 1, ...style }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Text;
