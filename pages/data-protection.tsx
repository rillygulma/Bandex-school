import PageHeader from "@/components/common/PageHeader";
import DataProtection from "@/components/Consents/DataProtection";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function DataProtectionPage() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader
        bg={departmentColors.about}
        title={t("DataProtection.Title")}
      />
      <DataProtection />
    </Stack>
  );
}
