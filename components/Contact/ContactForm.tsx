import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import Column from "../common/Column";
import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Row from "../common/Row";
import Text from "../common/Text";

const ContactForm = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const [formValues, setFormValues] = useState({ sent: false });

  const formInput = [
    { title: t(`Contact.Name`), name: "name", required: true },
    {
      title: t(`Contact.Email`),
      name: "email",
      type: "email",
      required: true,
    },
    {
      title: t(`Contact.PhoneNumber`),
      name: "phone",
      type: "number",
      required: true,
    },
    { title: t(`Contact.Age`), name: "age", type: "number" },
    {
      title: t(`Contact.Msg`),
      name: "msg",
      required: true,
      multiline: true,
      rows: 3,
    },
  ];

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const url =
      "https://semesteer-mailing-list-default-rtdb.europe-west1.firebasedatabase.app/ais-landing.json";

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    setFormValues({
      sent: true,
      ...formInput.reduce(
        (final, current) => ({ ...final, [current.name]: "" }),
        {}
      ),
    });
  };

  return (
    <PageSection>
      <PageSectionColumn>
        <Text color={theme.palette.brown.main} variant="subtitle" center>
          {t("Contact.FormTitle")}
        </Text>

        <form onSubmit={onSubmit}>
          <Row py={5} px={{ xs: 0, md: 20 }}>
            {formInput.map(({ title, ...rest }, i) => (
              <Column md={12} py={2} key={i}>
                <TextField
                  variant="filled"
                  label={title}
                  fullWidth
                  value={(formValues as any)[rest.name]}
                  onChange={(e) =>
                    setFormValues((current) => ({
                      ...current,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  {...rest}
                />
              </Column>
            ))}

            <Column md={12} pt={5}>
              <Button
                size="large"
                fullWidth
                color="info"
                variant="contained"
                type="submit"
              >
                {t("Contact.FormButton")}
              </Button>
            </Column>

            {formValues.sent ? (
              <Column md={12} pt={5}>
                <Alert severity="success" sx={{ width: "100%" }}>
                  {t("Contact.MsgSent")}
                </Alert>
              </Column>
            ) : (
              ""
            )}
          </Row>
        </form>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactForm;
