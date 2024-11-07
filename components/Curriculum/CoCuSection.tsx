import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import { CoCurriculumGrid } from "../../components/Curriculum/styles";
import Text from "../common/Text";

const CoCorriculumSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const squares = [
    {
      bgColor: theme.palette.orange.main,
      radius: {
        mobile: ["6vw", "1.1.1.1"],
        desktop: ["2vw", "1.1.1.1"],
      },
      sx: {
        gridRow: "1 / 2",
        gridColumn: "1 / 2",
      },
      img: "/images/contact_banner-2.jpg",
    },
    {
      bgColor: theme.palette.orange.main,
      radius: {
        mobile: ["6vw", "1.1.1.1"],
        desktop: ["2vw", "1.1.1.1"],
      },
      sx: {
        gridRow: "2 / 3",
        gridColumn: "1 / 2",
      },
      img: "/images/blog-6-featured.jpg",
    },
    {
      bgColor: theme.palette.orange.main,
      radius: {
        mobile: ["6vw", "1.1.1.1"],
        desktop: ["2vw", "1.1.1.1"],
      },
      sx: {
        gridRow: "1 / 3",
        gridColumn: "2 / 3",
      },
      img: "/images/blog-7-featured.jpg",
    },
  ];

  return (
    <PageSection>
      <PageSectionColumn md={8}>
        <Text color={theme.palette.blue.dark} justify doubleHeight>
          {t("Academics.CoCurriculum.Description")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn md={4}>
        <Box sx={CoCurriculumGrid}>
          {squares.map(({ bgColor, radius, sx, img }, i) => (
            <Square bgcolor={bgColor} radius={radius} sx={sx} key={i}>
              <img src={img} width="auto" height="100%" />
            </Square>
          ))}
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default CoCorriculumSection;
