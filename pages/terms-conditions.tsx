import PageHeader from "@/components/common/PageHeader";
import TermsConditions from "@/components/Consents/TermsConditions";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function TermsConditionsPage() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader
        bg={departmentColors.about}
        title={t("TermsConditions.Title")}
      />
      <TermsConditions />
    </Stack>
  );
}
