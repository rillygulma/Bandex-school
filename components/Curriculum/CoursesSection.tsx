import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import Column from "../common/Column";
import Row from "../common/Row";
import Text from "../common/Text";

const CoursesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const courseSquares = [
    {
      text: t("Academics.Curriculum.Languages.Title"),
      edges: "1.0.0.1",
    },
    {
      text: t("Academics.Curriculum.Islamic.Islamic"),
      edges: "0.0.0.0",
    },
    {
      text: t("Academics.Curriculum.Modern.Modern"),
      edges: "0.1.1.0",
    },
  ];

  return (
    <PageSection>
      <PageSectionColumn>
        <Text color={theme.palette.blue.dark} variant="subtitle">
          {t("Academics.Curriculum.Description")}
        </Text>
      </PageSectionColumn>

      {courseSquares.map((item, i) => (
        <Column md={3} key={i}>
          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["10vw", "1.1.1.1"],
              desktop: ["3vw", item.edges],
            }}
            sx={{
              margin: 0,
              width: { xs: "60vw", md: "15vw" },
              height: { xs: "60vw", md: "15vw" },
            }}
          >
            <Text color={theme.palette.basic.light} variant="subtitle" bold>
              {item.text}
            </Text>
          </Square>
        </Column>
      ))}
    </PageSection>
  );
};

export default CoursesSection;
