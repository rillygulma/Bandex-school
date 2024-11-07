import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Text from "../common/Text";
import FeeCards from "./FeeCards";

const FeesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const structureSection = [
    {
      title: t("Engage.Fees.FirstTime.Title"),
      items: [
        {
          title: t("Engage.Fees.FirstTime.Reg.Title"),
          price: t("Engage.Fees.FirstTime.Reg.Price"),
          description: t("Engage.Fees.FirstTime.Reg.Description"),
        },
        {
          title: t("Engage.Fees.FirstTime.Placement.Title"),
          price: t("Engage.Fees.FirstTime.Placement.Price"),
          description: t("Engage.Fees.FirstTime.Placement.Description"),
        },
        {
          title: t("Engage.Fees.FirstTime.Deposit1.Title"),
          price: t("Engage.Fees.FirstTime.Deposit1.Price"),
          description: t("Engage.Fees.FirstTime.Deposit1.Description"),
        },
        {
          title: t("Engage.Fees.FirstTime.Deposit2.Title"),
          price: t("Engage.Fees.FirstTime.Deposit2.Price"),
          description: t("Engage.Fees.FirstTime.Deposit2.Description"),
        },
        {
          title: t("Engage.Fees.FirstTime.Visa.Title"),
          price: t("Engage.Fees.FirstTime.Visa.Price"),
          description: t("Engage.Fees.FirstTime.Visa.Description"),
        },
      ],
    },
    {
      title: t("Engage.Fees.Yearly.Title"),
      items: [
        {
          title: t("Engage.Fees.Yearly.Book1.Title"),
          price: t("Engage.Fees.Yearly.Book1.Price"),
          description: t("Engage.Fees.Yearly.Book1.Description"),
        },
        {
          title: t("Engage.Fees.Yearly.Book2.Title"),
          price: t("Engage.Fees.Yearly.Book2.Price"),
          description: t("Engage.Fees.Yearly.Book2.Description"),
        },
        {
          title: t("Engage.Fees.Yearly.Book3.Title"),
          price: t("Engage.Fees.Yearly.Book3.Price"),
          description: t("Engage.Fees.Yearly.Book3.Description"),
        },
        {
          title: t("Engage.Fees.Yearly.Uniform.Title"),
          price: t("Engage.Fees.Yearly.Uniform.Price"),
          description: t("Engage.Fees.Yearly.Uniform.Description"),
        },
        {
          title: t("Engage.Fees.Yearly.Visa.Title"),
          price: t("Engage.Fees.Yearly.Visa.Price"),
          description: t("Engage.Fees.Yearly.Visa.Description"),
        },
      ],
    },
    {
      title: t("Engage.Fees.Bus.Title"),
      items: [
        {
          title: t("Engage.Fees.Bus.KL.Title"),
          price: t("Engage.Fees.Bus.KL.Price"),
          description: t("Engage.Fees.Bus.KL.Description"),
        },
      ],
    },
    {
      title: t("Engage.Fees.Tuition.Title"),
      items: [
        {
          title: t("Engage.Fees.Tuition.KG.Title"),
          price: t("Engage.Fees.Tuition.KG.Price"),
          description: t("Engage.Fees.Tuition.KG.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level1.Title"),
          price: t("Engage.Fees.Tuition.Level1.Price"),
          description: t("Engage.Fees.Tuition.Level1.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level2.Title"),
          price: t("Engage.Fees.Tuition.Level2.Price"),
          description: t("Engage.Fees.Tuition.Level2.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level3.Title"),
          price: t("Engage.Fees.Tuition.Level3.Price"),
          description: t("Engage.Fees.Tuition.Level3.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level4.Title"),
          price: t("Engage.Fees.Tuition.Level4.Price"),
          description: t("Engage.Fees.Tuition.Level4.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level5.Title"),
          price: t("Engage.Fees.Tuition.Level5.Price"),
          description: t("Engage.Fees.Tuition.Level5.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level6.Title"),
          price: t("Engage.Fees.Tuition.Level6.Price"),
          description: t("Engage.Fees.Tuition.Level6.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level7.Title"),
          price: t("Engage.Fees.Tuition.Level7.Price"),
          description: t("Engage.Fees.Tuition.Level7.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level8.Title"),
          price: t("Engage.Fees.Tuition.Level8.Price"),
          description: t("Engage.Fees.Tuition.Level8.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level9.Title"),
          price: t("Engage.Fees.Tuition.Level9.Price"),
          description: t("Engage.Fees.Tuition.Level9.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level10.Title"),
          price: t("Engage.Fees.Tuition.Level10.Price"),
          description: t("Engage.Fees.Tuition.Level10.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level11.Title"),
          price: t("Engage.Fees.Tuition.Level11.Price"),
          description: t("Engage.Fees.Tuition.Level11.Description"),
        },
        {
          title: t("Engage.Fees.Tuition.Level12.Title"),
          price: t("Engage.Fees.Tuition.Level12.Price"),
          description: t("Engage.Fees.Tuition.Level12.Description"),
        },
      ],
    },
  ];

  return (
    <PageSection bg="">
      <PageSectionColumn md={6}>
        <Text color={theme.palette.orange.main} variant="title" center>
          {t("Engage.Fees.Title")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Avatar
          src="/images/Char-1-Color.png"
          variant="square"
          sx={{
            width: "30%",
            height: "auto",
            margin: "auto auto",
          }}
        />
      </PageSectionColumn>

      <PageSectionColumn p={0}>
        <FeeCards
          templateId="structure section"
          isSubStack={false}
          boxes={structureSection}
          bg=""
          cardBg={theme.palette.basic.light}
          currency
        />
      </PageSectionColumn>
    </PageSection>
  );
};

export default FeesSection;
