import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Text from "../common/Text";
import Consents, { data } from "./Consents";

const WebsitePrivacy = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const contents: data[] = [
    {
      title: t("WebsitePrivacy.Point1.Title"),
      start: t("WebsitePrivacy.Point1.Start"),
      points: [
        t("WebsitePrivacy.Point1.PointA"),
        t("WebsitePrivacy.Point1.PointB"),
      ],
      end: t("WebsitePrivacy.Point1.End"),
    },
    {
      title: t("WebsitePrivacy.Point2.Title"),
      start: t("WebsitePrivacy.Point2.Start"),
      points: [
        t("WebsitePrivacy.Point2.PointA"),
        t("WebsitePrivacy.Point2.PointB"),
        t("WebsitePrivacy.Point2.PointC"),
        t("WebsitePrivacy.Point2.PointD"),
        t("WebsitePrivacy.Point2.PointE"),
        t("WebsitePrivacy.Point2.PointF"),
      ],
      end: t("WebsitePrivacy.Point2.End"),
    },
    {
      title: t("WebsitePrivacy.Point3.Title"),
      start: t("WebsitePrivacy.Point3.Start"),
    },
    {
      title: t("WebsitePrivacy.Point4.Title"),
      start: t("WebsitePrivacy.Point4.Start"),
    },
    {
      title: t("WebsitePrivacy.Point5.Title"),
      start: t("WebsitePrivacy.Point5.Start"),
      end: t("WebsitePrivacy.Point5.End"),
    },
    {
      title: t("WebsitePrivacy.Point6.Title"),
      start: t("WebsitePrivacy.Point6.Start"),
      end: t("WebsitePrivacy.Point6.End"),
    },
    {
      title: t("WebsitePrivacy.Point7.Title"),
      start: t("WebsitePrivacy.Point7.Start"),
      end: t("WebsitePrivacy.Point7.End"),
    },
    {
      title: t("WebsitePrivacy.Point8.Title"),
      start: t("WebsitePrivacy.Point8.Start"),
    },
    {
      title: t("WebsitePrivacy.Point9.Title"),
      start: t("WebsitePrivacy.Point9.Start"),
    },
    {
      title: t("WebsitePrivacy.Point10.Title"),
      start: t("WebsitePrivacy.Point10.Start"),
      end: t("WebsitePrivacy.Point10.End"),
    },
    {
      title: t("WebsitePrivacy.Point11.Title"),
      start: t("WebsitePrivacy.Point11.Start"),
    },
    {
      title: t("WebsitePrivacy.Point12.Title"),
      start: t("WebsitePrivacy.Point12.Start"),
    },
    {
      title: t("WebsitePrivacy.Point13.Title"),
      start: t("WebsitePrivacy.Point13.Start"),
    },
    {
      title: t("WebsitePrivacy.Point14.Title"),
      start: t("WebsitePrivacy.Point14.Start"),
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

        <Text color={theme.palette.blue.dark} justify doubleHeight>
          {t("WebsitePrivacy.Intro")}
        </Text>
      </PageSectionColumn>

      <Consents contents={contents} />
    </PageSection>
  );
};

export default WebsitePrivacy;
