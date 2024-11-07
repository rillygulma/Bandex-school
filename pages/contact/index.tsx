import PageHeader from "@/components/common/PageHeader";
import ContactForm from "@/components/Contact/ContactForm";
import ContactsSection from "@/components/Contact/ContactsSection";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader bg={departmentColors.about} title={t("Contact.Title")} />
      <ContactForm />
      <ContactsSection />
    </Stack>
  );
}
