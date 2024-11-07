import AdvantagesSection from "@/components/About/AdvantagesSection";
import AISBeginning from "@/components/About/AISBeginning";
import VisionMissionObjectives from "@/components/About/VisionMissionObjectives";
import PageHeader from "@/components/common/PageHeader";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function WhyAIS() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader bg={departmentColors.about} title={t("About.Title")} />
      <AdvantagesSection />
      <AISBeginning />
      <VisionMissionObjectives />
    </Stack>
  );
}
