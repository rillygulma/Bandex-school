import Column from "@/components/common/Column";
import Row from "@/components/common/Row";
import Text from "@/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { useRouter } from "next/router";

import Square from "../components/common/Square";

const Widgets = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const widgetLinks = [
    {
      link: "/about/why-ais",
      label: t("About.Title"),
    },
    {
      link: "/academics/study-levels",
      label: t("Academics.StudyLevels.Title"),
    },
    {
      link: "/academics/curriculum",
      label: t("Academics.Curriculum.Title"),
    },
    {
      link: "/engage/registration-fees",
      label: t("Engage.Registration.Title"),
    },
    {
      link: "/engage/job-opportunities",
      label: t("Engage.Jobs.Title"),
    },
    {
      link: "https://students.aqsa.edu.my",
      label: t("StudentPortal"),
      target: "_blank",
    },
    {
      link: "/website-privacy",
      label: t("WebsitePrivacy.Title"),
    },
    {
      link: "/data-protection",
      label: t("DataProtection.Title"),
    },
    {
      link: "/terms-conditions",
      label: t("TermsConditions.Title"),
    },
  ];

  const socialMediaLinks = [
    { icon: <Facebook />, link: "https://www.facebook.com/" },
    { icon: <Instagram />, link: "https://www.instagram.com/" },
    {
      icon: <YouTube />,
      link: "https://www.youtube.com",
    },
    { icon: <Email />, link: "bandex_exclusive@email.com" },
    { icon: <WhatsApp />, link: "http://wasap.my/" },
    { icon: <Phone />, link: "tel:+2341234567" },
  ];

  return (
    <Box p={{ md: 5 }}>
      <Grid container spacing={5} p={{ md: 5 }}>
        <Grid item xs={12} md={6} lg={8}>
          <Stack
            justifyContent="center"
            height="100%"
            px={{ xs: 6, md: 1 }}
            py={{ xs: 3, md: 1 }}
          >
            <Square
              bgcolor={theme.palette.orange.main}
              radius={{
                mobile: ["7vw", "1.1.1.1"],
                desktop: ["3vw", "1.0.1.1"],
              }}
              sx={{
                padding: "1rem",
                height: "100%",
              }}
            >
              <Grid container>
                {widgetLinks.map(({ label, link, ...rest }, i) => (
                  <Grid item xs={12} md={6} lg={4} key={i}>
                    <Typography
                      fontSize={{
                        xs: "3.5vw",
                        sm: "2vw",
                        md: "1.5vw",
                      }}
                      textAlign="center"
                      my={2}
                      color={theme.palette.basic.light}
                      key={`item tagged: ${label}`}
                    >
                      <Link
                        href={link}
                        style={{ color: "inherit", textDecoration: "none" }}
                        {...rest}
                      >
                        {label}
                      </Link>
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Square>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Stack
            justifyContent="center"
            height="100%"
            px={{ xs: 6, md: 1 }}
            py={{ xs: 3, md: 1 }}
          >
            <Square
              bgcolor={theme.palette.blue.dark}
              radius={{
                mobile: ["7vw", "1.1.1.1"],
                desktop: ["3vw", "0.1.1.1"],
              }}
              sx={{
                padding: "1rem",
              }}
            >
              <Row>
                <Column>
                  <Avatar
                    sx={{
                      height: "auto",
                      width: { xs: "25vw", md: "75%" },
                      margin: "0 auto",
                    }}
                    variant="square"
                    src="/images/bandex-logo.jpg"
                    alt="logo 2"
                  />
                </Column>

                {socialMediaLinks.map(({ icon, link }, i) => (
                  <Column xs={4} sm={2} key={i}>
                    <Button
                      href={link}
                      target="_blank"
                      variant="text"
                      sx={{ padding: 0 }}
                      fullWidth
                    >
                      <Text
                        color={theme.palette.basic.light}
                        variant="sm"
                        center
                      >
                        {icon}
                      </Text>
                    </Button>
                  </Column>
                ))}
              </Row>
            </Square>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Widgets;
