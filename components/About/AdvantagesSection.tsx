import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import { Fragment } from "react";

import CardComp from "../common/Card";
import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";

const AdvantagesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const whyAIScards = [
    {
      src: "/images/Islamic.png",
      alt: "islamic-icon",
      text: t("About.WhyAIS.Islamic.Title"),
      longText: t("About.WhyAIS.Islamic.Description"),
    },
    {
      src: "/images/Cambridge.png",
      alt: "cambridge-icon",
      text: t("About.WhyAIS.Cambridge.Title"),
      longText: t("About.WhyAIS.Cambridge.Description"),
    },
    {
      src: "/images/Cheap.png",
      alt: "cheap-zone-icon",
      text: t("About.WhyAIS.Reasonable.Title"),
      longText: t("About.WhyAIS.Reasonable.Description"),
    },
  ];

  return (
    <PageSection bg={theme.palette.basic.light}>
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="title">
          {t("About.WhyAIS.Title")}
        </Text>
      </PageSectionColumn>

      {whyAIScards.map((item, i) => (
        <Fragment key={i}>
          <PageSectionColumn md={4}>
            <CardComp bg={theme.palette.orange.main}>
              <Avatar
                variant="square"
                alt={item.alt}
                src={item.src}
                sx={{
                  width: {
                    xs: "35vw",
                    md: "auto",
                  },
                  height: {
                    xs: "35vw",
                    md: "auto",
                  },
                  margin: "auto auto",
                  maxWidth: { md: "12vw" },
                }}
              />

              <Text
                color={theme.palette.basic.light}
                variant="cardtitle"
                center
                bold
                mt={4}
              >
                {item.text}
              </Text>
            </CardComp>
          </PageSectionColumn>

          <PageSectionColumn md={8}>
            <Text color={theme.palette.blue.dark} justify doubleHeight bold>
              {item.longText}
            </Text>
          </PageSectionColumn>
        </Fragment>
      ))}
    </PageSection>
  );
};

export default AdvantagesSection;
