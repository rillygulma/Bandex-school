import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Text from "../common/Text";
import Consents, { data } from "./Consents";

const DataProtection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const contents: data[] = [
    {
      title: t("DataProtection.Point1.Title"),
      start: t("DataProtection.Point1.Start"),
    },
    {
      title: t("DataProtection.Point2.Title"),
      start: t("DataProtection.Point2.Start"),
      points: [
        t("DataProtection.Point2.PointA"),
        t("DataProtection.Point2.PointB"),
        t("DataProtection.Point2.PointC"),
        t("DataProtection.Point2.PointD"),
        t("DataProtection.Point2.PointE"),
        t("DataProtection.Point2.PointF"),
        t("DataProtection.Point2.PointG"),
      ],
      end: t("DataProtection.Point2.End"),
    },
    {
      title: t("DataProtection.Point3.Title"),
      start: t("DataProtection.Point3.Start"),
      points: [
        t("DataProtection.Point3.PointA"),
        t("DataProtection.Point3.PointB"),
        t("DataProtection.Point3.PointC"),
        t("DataProtection.Point3.PointD"),
        t("DataProtection.Point3.PointE"),
        t("DataProtection.Point3.PointF"),
      ],
      end: t("DataProtection.Point3.End"),
    },
    {
      title: t("DataProtection.Point4.Title"),
      start: t("DataProtection.Point4.Start"),
      points: [
        t("DataProtection.Point4.PointA"),
        t("DataProtection.Point4.PointB"),
        t("DataProtection.Point4.PointC"),
      ],
      end: t("DataProtection.Point4.End"),
    },
    {
      title: t("DataProtection.Point5.Title"),
      start: t("DataProtection.Point5.Start"),
      points: [
        t("DataProtection.Point5.PointA"),
        t("DataProtection.Point5.PointB"),
        t("DataProtection.Point5.PointC"),
        t("DataProtection.Point5.PointD"),
        t("DataProtection.Point5.PointE"),
        t("DataProtection.Point5.PointF"),
        t("DataProtection.Point5.PointG"),
        t("DataProtection.Point5.PointH"),
        t("DataProtection.Point5.PointI"),
        t("DataProtection.Point5.PointJ"),
        t("DataProtection.Point5.PointK"),
        t("DataProtection.Point5.PointL"),
        t("DataProtection.Point5.PointM"),
        t("DataProtection.Point5.PointN"),
        t("DataProtection.Point5.PointO"),
        t("DataProtection.Point5.PointP"),
        t("DataProtection.Point5.PointQ"),
      ],
    },
    {
      title: t("DataProtection.Point6.Title"),
      start: t("DataProtection.Point6.Start"),
      end: t("DataProtection.Point6.End"),
    },
    {
      title: t("DataProtection.Point7.Title"),
      start: t("DataProtection.Point7.Start"),
      points: [
        t("DataProtection.Point7.PointA"),
        t("DataProtection.Point7.PointB"),
        t("DataProtection.Point7.PointC"),
        t("DataProtection.Point7.PointD"),
        t("DataProtection.Point7.PointE"),
        t("DataProtection.Point7.PointF"),
        t("DataProtection.Point7.PointG"),
      ],
    },
    {
      title: t("DataProtection.Point8.Title"),
      start: t("DataProtection.Point8.Start"),
      points: [
        t("DataProtection.Point8.PointA"),
        t("DataProtection.Point8.PointB"),
        t("DataProtection.Point8.PointC"),
      ],
      end: t("DataProtection.Point8.End"),
    },
    {
      title: t("DataProtection.Point9.Title"),
      start: t("DataProtection.Point9.Start"),
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

export default DataProtection;
