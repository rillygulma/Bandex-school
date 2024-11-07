import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Text from "../common/Text";
import Consents, { data } from "./Consents";

const TermsConditions = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const contents: data[] = [
    {
      title: t("TermsConditions.Point1.Title"),
      start: t("TermsConditions.Point1.Start"),
    },
    {
      title: t("TermsConditions.Point2.Title"),
      points: [
        t("TermsConditions.Point2.PointA"),
        t("TermsConditions.Point2.PointB"),
        t("TermsConditions.Point2.PointC"),
        t("TermsConditions.Point2.PointD"),
        t("TermsConditions.Point2.PointE"),
      ],
    },
    {
      title: t("TermsConditions.Point3.Title"),
      points: [
        t("TermsConditions.Point3.PointA"),
        t("TermsConditions.Point3.PointB"),
        t("TermsConditions.Point3.PointC"),
        t("TermsConditions.Point3.PointD"),
      ],
    },
    {
      title: t("TermsConditions.Point4.Title"),
      start: t("TermsConditions.Point4.Start"),
    },
    {
      title: t("TermsConditions.Point5.Title"),
      start: t("TermsConditions.Point5.Start"),
    },
    {
      title: t("TermsConditions.Point6.Title"),
      points: [
        t("TermsConditions.Point6.PointA"),
        t("TermsConditions.Point6.PointB"),
        t("TermsConditions.Point6.PointC"),
        t("TermsConditions.Point6.PointD"),
        t("TermsConditions.Point6.PointE"),
        t("TermsConditions.Point6.PointF"),
        t("TermsConditions.Point6.PointG"),
        t("TermsConditions.Point6.PointH"),
      ],
    },
    {
      title: t("TermsConditions.Point7.Title"),
      start: t("TermsConditions.Point7.Start"),
    },
  ];

  const lastUpdates = "22 July 2020";

  return (
    <PageSection>
      <PageSectionColumn>
        <Text
          color={theme.palette.blue.dark}
          justify
          doubleHeight
          bold
          variant="sm"
        >
          {t("LastUpdated") + lastUpdates}
        </Text>
      </PageSectionColumn>

      <Consents contents={contents} />
    </PageSection>
  );
};

export default TermsConditions;
