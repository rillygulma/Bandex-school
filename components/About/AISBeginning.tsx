import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Text from "../common/Text";

const AISBeginning = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const paragraphs = [
    t(`About.Beginnings.Para1`),
    t(`About.Beginnings.Para2`),
    t(`About.Beginnings.Para3`),
  ];

  return (
    <PageSection bg="">
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="title">
          {t("About.Beginnings.Title")}
        </Text>
      </PageSectionColumn>

      {paragraphs.map((text, i) => (
        <PageSectionColumn key={i}>
          <Text color={theme.palette.basic.dark} justify doubleHeight bold>
            {text}
          </Text>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default AISBeginning;
