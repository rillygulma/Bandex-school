import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import BrushIcon from "@mui/icons-material/Brush";
import CalculateIcon from "@mui/icons-material/Calculate";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import StaticList from "../common/StaticList";
import Text from "../common/Text";
import {
  Checkroom,
  Construction,
  Science,
  SoupKitchen,
  SportsMartialArts,
  Stadium,
} from "@mui/icons-material";

const ClubsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const clubsItems = (size: string, color: string) => [
    {
      text: t("Academics.CoCurriculum.Clubs.Art"),
      icon: <BrushIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Clubs.Arabic"),
      icon: (
        <MenuBookSharpIcon sx={{ width: size, height: size, color: color }} />
      ),
    },
    {
      text: t("Academics.CoCurriculum.Clubs.French"),
      icon: <GTranslateIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Clubs.Science"),
      icon: <Science sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Clubs.Taekwondo"),
      icon: (
        <SportsMartialArts sx={{ width: size, height: size, color: color }} />
      ),
    },
    {
      text: t("Academics.CoCurriculum.Clubs.Cooking"),
      icon: <SoupKitchen sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Clubs.Math"),
      icon: <CalculateIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Clubs.Chess"),
      icon: <PsychologyIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Clubs.Crafts"),
      icon: <Construction sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Clubs.Debating"),
      icon: <Stadium sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Clubs.Knit"),
      icon: <Checkroom sx={{ width: size, height: size, color: color }} />,
    },
  ];

  return (
    <PageSection bg={theme.palette.blue.dark}>
      <PageSectionColumn>
        <Text color={theme.palette.basic.light} variant="title">
          {t("Academics.CoCurriculum.Clubs.Title")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn>
        <StaticList items={clubsItems("50%", theme.palette.basic.light)} />
      </PageSectionColumn>
    </PageSection>
  );
};

export default ClubsSection;
