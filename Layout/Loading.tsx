import theme from "@/styles/theme";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const Loading = () => {
  return (
    <Container
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: theme.palette.blue.dark,
        zIndex: 99999999999,
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontFamily: "fantasy",
      }}
    >
      <Typography textAlign="center">Loading ...</Typography>
    </Container>
  );
};

export default Loading;
