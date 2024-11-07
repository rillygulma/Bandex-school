import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Column from "../common/Column";
import PageSection from "../common/PageSection";
import Row from "../common/Row";
import Text from "../common/Text";
import { Button } from "@mui/material";

const AcademicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const buttons = [
    {
      title: t("Academics.StudyLevels.CheckOut"),
      link: "/academics/study-levels",
    },
    {
      title: t("Academics.Curriculum.CheckOut"),
      link: "/academics/curriculum",
    },
    {
      title: t("Academics.CoCurriculum.CheckOut"),
      link: "/academics/co-curriculum",
    },
  ];

  return (
    <PageSection py={20}>
      <Row spacing={3}>
        <Column>
          <Text color={theme.palette.blue.dark} variant="title">
            {t("Academics.Title")}
          </Text>
        </Column>

        <Column lg={12}>
          <Text doubleHeight justify>
            {t("Academics.StudyLevels.Description")}
          </Text>
        </Column>

        {buttons.map(({ title, link }, i) => (
          <Column lg={4} key={i}>
            <Button
              style={{ backgroundColor: theme.palette.blue.dark }}
              variant="contained"
              size="large"
              sx={{ padding: 3, color: "white" }}
              href={link}
              fullWidth
            >
              {title}
            </Button>
          </Column>
        ))}
      </Row>
    </PageSection>
  );
};

export default AcademicSection;
