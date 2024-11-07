import PageHeader from "@/components/common/PageHeader";
import LatestNews from "@/components/Community/NewsSection";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function News() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader bg={departmentColors.community} title={t("News.Title")} />
      <LatestNews />
    </Stack>
  );
}
