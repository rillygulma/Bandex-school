import CardComp from "@/components/common/Card";
import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import Text from "@/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import BarChartIcon from "@mui/icons-material/BarChart";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useRouter } from "next/router";

const VisionMissionObjectives = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const objectives = [
    {
      title: t("About.Objectives.MoralCompass.Title"),
      text: t("About.Objectives.MoralCompass.Description"),
      icon: (
        <ExploreIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("About.Objectives.CharacterBuilding.Title"),
      text: t("About.Objectives.CharacterBuilding.Description"),
      icon: (
        <PersonIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("About.Objectives.Creativity.Title"),
      text: t("About.Objectives.Creativity.Description"),
      icon: (
        <PsychologyIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("About.Objectives.ApplicableKnowledge.Title"),
      text: t("About.Objectives.ApplicableKnowledge.Description"),
      icon: (
        <BarChartIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("About.Objectives.QuranReservation.Title"),
      text: t("About.Objectives.QuranReservation.Description"),
      icon: (
        <Brightness3Icon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("About.Objectives.Palestine.Title"),
      text: t("About.Objectives.Palestine.Description"),
      icon: (
        <HomeIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
  ];

  const visionMission = [
    {
      title: t("About.Vision.Title"),
      desc: t("About.Vision.Description"),
    },
    {
      title: t("About.Mission.Title"),
      desc: t("About.Mission.Description"),
    },
  ];

  return (
    <PageSection>
      {visionMission.map(({ title, desc }, i) => (
        <PageSectionColumn md={6} key={i}>
          <CardComp bg={theme.palette.blue.dark}>
            <Text
              color={theme.palette.basic.light}
              variant="subTitle"
              center
              bold
            >
              {title}
            </Text>

            <Text color={theme.palette.basic.light} justify doubleHeight>
              {desc}
            </Text>
          </CardComp>
        </PageSectionColumn>
      ))}

      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="subtitle">
          {t("About.Objectives.Title")}
        </Text>
      </PageSectionColumn>

      {objectives.map((item, i) => (
        <PageSectionColumn md={4} key={i}>
          <CardComp bg={theme.palette.blue.dark}>
            {item.icon}

            <Text
              color={theme.palette.basic.light}
              variant="cardTitle"
              center
              bold
            >
              {item.title}
            </Text>

            <Text color={theme.palette.basic.light} justify doubleHeight>
              {item.text}
            </Text>
          </CardComp>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default VisionMissionObjectives;
