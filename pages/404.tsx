import { Box, Typography } from "@mui/material";
import theme from "@/styles/theme";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Box
      sx={{
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
        bgcolor: theme.palette.blue.dark,
      }}
    >
      <Typography
        fontSize={{ xs: "5vw", md: "3vw" }}
        color={theme.palette.basic.light}
        textAlign="center"
      >
        {t("Errors.404")}
      </Typography>
    </Box>
  );
}
