import { Grid } from "@mui/material";

const Column = ({
  children,
  sx = {},
  xs = 12,
  justify = "center",
  align = "center",
  p = 2,
  ...rest
}) => {
  return (
    <Grid
      item
      p={p}
      xs={xs}
      sx={{
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

export default Column;
