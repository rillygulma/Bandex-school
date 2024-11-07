import useTranslation from "@/hooks/useTranslation";
import { FooterContainer } from "@/Layout/styles";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <FooterContainer>
      <Container sx={{ padding: 2 }}>
        <Typography textAlign="center" fontSize={{ xs: "2.5vw", md: "1vw" }}>
          {t("Layout.Footer.CopyRights") + new Date().getFullYear()}
          {" | "}
          {t("Layout.Footer.By")}{" "}
          <a
            href="https://www.semesteer.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            {t("Layout.Footer.Developer")}
          </a>
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
