import PageHeader from "@/components/common/PageHeader";
import WebsitePrivacy from "@/components/Consents/WebsitePrivacy";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function WebsitePrivacyPage() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader
        bg={departmentColors.about}
        title={t("WebsitePrivacy.Title")}
      />
      <WebsitePrivacy/>
    </Stack>
  );
}
