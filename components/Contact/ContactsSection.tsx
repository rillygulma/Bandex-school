import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

import CardComp from "../../components/common/Card";
import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Column from "../common/Column";
import Row from "../common/Row";
import Text from "../common/Text";

const ContactsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg="">
      <PageSectionColumn>
        <CardComp bg={theme.palette.basic.light}>
          <Row>
            <Column>
              <Text color={theme.palette.brown.main} variant="subtitle" center>
                {t("Contact.Contacts.Title")}
              </Text>
            </Column>

            <Column md={4}>
              <LocalPhoneIcon
                sx={{
                  color: theme.palette.brown.main,
                  width: { xs: "8vw", md: "6vw" },
                  height: "auto",
                }}
              />
              <Text color={theme.palette.brown.main} variant="cardtitle" center>
                {t("Contact.Contacts.Call.Title")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Call.Description1")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Call.Description2")}
              </Text>
            </Column>

            <Column md={4}>
              <EmailIcon
                sx={{
                  color: theme.palette.brown.main,
                  width: { xs: "8vw", md: "6vw" },
                  height: "auto",
                }}
              />

              <Text color={theme.palette.brown.main} variant="cardtitle" center>
                {t("Contact.Contacts.Email.Title")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Email.Description1")}
              </Text>
            </Column>

            <Column md={4}>
              <PushPinIcon
                sx={{
                  color: theme.palette.brown.main,
                  width: { xs: "8vw", md: "6vw" },
                  height: "auto",
                }}
              />

              <Text color={theme.palette.brown.main} variant="cardtitle" center>
                {t("Contact.Contacts.Meeting.Title")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Meeting.Description1")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {t("Contact.Contacts.Meeting.Description2")}
              </Text>
            </Column>
          </Row>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.784001361683!2d101.70160315987847!3d3.1811413772820534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc496ec68f95b9%3A0x700d8de6e4eb4ef6!2sAl-Aqsa%20Integrated%20School!5e0!3m2!1sen!2sjo!4v1693287795800!5m2!1sen!2sjo"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          />

          <Text color={theme.palette.brown.main} center>
            {t("Contact.Contacts.Meeting.Description3")}
          </Text>
        </CardComp>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactsSection;
