import Facilities from "@/components/About/Facilities";
import PageHeader from "@/components/common/PageHeader";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function FacilitiesPage() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader
        bg={departmentColors.about}
        title={t("About.Facilities.Title")}
      />
      <Facilities />
    </Stack>
  );
}
