import PageHeader from "@/components/common/PageHeader";
import ActivitiesSection from "@/components/Curriculum/ActivitiesSection";
import ClubsSection from "@/components/Curriculum/ClubsSection";
import CoCorriculumSection from "@/components/Curriculum/CoCuSection";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function CoCorriculum() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader
        bg={departmentColors.academic}
        title={t("Academics.CoCurriculum.Title")}
      />
      <CoCorriculumSection />
      <ClubsSection />
      <ActivitiesSection />
    </Stack>
  );
}
