import theme from "@/styles/theme";
import { Grid } from "@mui/material";

const PageSection = ({
  bg = theme.palette.basic.light,
  children,
  sx = {},
  justify = "center",
  align = "center",
  p = 7,
  ...rest
}) => {
  return (
    <Grid
      container
      p={p}
      px={5}
      bgcolor={bg}
      sx={{
        width: "100%",
        alignItems: align,
        justifyContent: justify,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default PageSection;
