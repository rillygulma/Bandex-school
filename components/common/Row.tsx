import { Grid } from "@mui/material";

const Row = ({
  children,
  sx = {},
  justify = "center",
  align = "center",
  p = 2,
  ...rest
}) => {
  return (
    <Grid
      container
      p={p}
      sx={{
        width: "100%",
        alignItems: align,
        justifyContent: justify,
        justifyItems: justify,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Row;
