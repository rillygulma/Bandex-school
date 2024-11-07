import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Column from "../common/Column";
import PageSection from "../common/PageSection";
import Row from "../common/Row";
import Text from "../common/Text";
import { Button } from "@mui/material";

const RegisterSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection py={20} bgcolor={theme.palette.orange.main}>
      <Row spacing={3}>
        <Column>
          <Text color={theme.palette.basic.light} variant="title" bold>
            {t("Engage.Registration.Title")}
          </Text>

          <Text color={theme.palette.basic.light} doubleHeight justify>
            {t("Engage.Registration.Description")}
          </Text>

          <Button
            style={{ backgroundColor: theme.palette.brown.main }}
            variant="contained"
            size="large"
            sx={{ padding: 3, color: "white" }}
            href="/engage/registration-fees"
          >
            {t("Engage.Registration.RegisterNow")}
          </Button>
        </Column>
      </Row>
    </PageSection>
  );
};

export default RegisterSection;
