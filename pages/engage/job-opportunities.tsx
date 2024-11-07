import PageHeader from "@/components/common/PageHeader";
import JobsSection from "@/components/Engage/JobsSection";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function JobOpportunities() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader bg={departmentColors.engage} title={t("Engage.Jobs.Title")} />
      <JobsSection />
    </Stack>
  );
}
