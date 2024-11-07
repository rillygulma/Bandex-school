import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import { ModernScienceGrid } from "../../components/Curriculum/styles";
import Text from "../common/Text";

const ModernSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const squares = [
    {
      bgColor: theme.palette.brown.main,
      radius: {
        mobile: ["2vw", "1.1.0.1"],
        desktop: ["1.5vw", "1.1.0.1"],
      },
      sx: {
        gridRow: "1 / 5",
        gridColumn: "3 / 7",
      },
      fontSize: {
        xs: "2vw",
        md: "1vw",
      },
      textColor: theme.palette.basic.light,
      text: t("Academics.Curriculum.Modern.Math"),
    },
    {
      bgColor: theme.palette.orange.main,
      radius: {
        mobile: ["5vw", "1.0.1.1"],
        desktop: ["3vw", "1.0.1.1"],
      },
      sx: {
        gridRow: "5 / 11",
        gridColumn: "1 / 7",
      },
      fontSize: {
        xs: "4.5vw",
        md: "1.75vw",
      },
      textColor: theme.palette.basic.light,
      text: t("Academics.Curriculum.Modern.Science"),
    },
    {
      bgColor: theme.palette.basic.light,
      radius: {
        mobile: ["7vw", "0.1.1.1"],
        desktop: ["4vw", "0.1.1.1"],
      },
      sx: {
        gridRow: "5 / 16",
        gridColumn: "7 / 17",
      },
      fontSize: {
        xs: "5vw",
        md: "2vw",
      },
      textColor: theme.palette.brown.main,
      text: t("Academics.Curriculum.Modern.ComputerScience"),
    },
    {
      bgColor: theme.palette.orange.main,
      radius: {
        mobile: ["2vw", "1.1.1.0"],
        desktop: ["1.5vw", "1.1.1.0"],
      },
      sx: {
        gridRow: "2 / 5",
        gridColumn: "7 / 10",
      },
      fontSize: {
        xs: "2vw",
        md: "1vw",
      },
      textColor: theme.palette.basic.light,
      text: t("Academics.Curriculum.Modern.Sports"),
    },
    {
      bgColor: theme.palette.brown.main,
      radius: {
        mobile: ["1vw", "1.0.1.1"],
        desktop: ["1vw", "1.0.1.1"],
      },
      sx: {
        gridRow: "11 / 15",
        gridColumn: "4 / 7",
      },
      fontSize: {
        xs: "2vw",
        md: "1vw",
      },
      textColor: theme.palette.basic.light,
      text: t("Academics.Curriculum.Modern.Arts"),
    },
  ];

  return (
    <PageSection bg={theme.palette.blue.dark}>
      <PageSectionColumn md={4}>
        <Box sx={ModernScienceGrid}>
          {squares?.map(
            ({ bgColor, radius, sx, fontSize, textColor, text }, i) => (
              <Square bgcolor={bgColor} radius={radius} sx={sx} key={i}>
                {text && (
                  <Typography
                    fontSize={fontSize}
                    fontWeight="bold"
                    color={textColor}
                    textAlign="center"
                  >
                    {text}
                  </Typography>
                )}
              </Square>
            )
          )}
        </Box>
      </PageSectionColumn>

      <PageSectionColumn md={8}>
        <Text color={theme.palette.basic.light} variant="title" bold>
          {t("Academics.Curriculum.Modern.Title")}
        </Text>

        <Text color={theme.palette.basic.light} justify doubleHeight bold>
          {t("Academics.Curriculum.Modern.Description")}
        </Text>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ModernSection;
