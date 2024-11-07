import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

import PhotoGallery from "../common/PhotoGallery";
import Text from "../common/Text";

const Facilities = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const photos = [
    {
      img: "/images/Photo-41.jpg",
      rows: 4,
      cols: 2,
    },
    {
      img: "/images/Photo-15.jpg",
      rows: 2,
    },
    {
      img: "/images/Photo-23.jpg",
      rows: 2,
    },
    {
      img: "/images/Photo-32.jpg",
      rows: 2,
      cols: 2,
    },
    {
      img: "/images/Photo-36.jpg",
      rows: 2,
    },
    {
      img: "/images/Photo-16.jpg",
      rows: 2,
    },
    {
      img: "/images/Photo-10.jpg",
      rows: 2,
    },
    {
      img: "/images/Photo-19.jpg",
      rows: 6,
    },
    {
      img: "/images/Photo-30.jpg",
      rows: 4,
    },
    {
      img: "/images/Photo-12.jpg",
      rows: 2,
      cols: 2,
    },
    {
      img: "/images/Photo-38.jpg",
      rows: 2,
    },
    {
      img: "/images/Photo-37.jpg",
      rows: 2,
    },
  ];

  return (
    <PageSection>
      {[t("About.Facilities.Para1"), t("About.Facilities.Para2")].map(
        (item, i) => (
          <PageSectionColumn key={i}>
            <Text color={theme.palette.blue.dark} justify doubleHeight bold>
              {item}
            </Text>
          </PageSectionColumn>
        )
      )}

      <PageSectionColumn>
        <PhotoGallery photos={photos} />
      </PageSectionColumn>
    </PageSection>
  );
};

export default Facilities;
