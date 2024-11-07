import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";
import FeeCards from "./FeeCards";

const DiscountsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const discountSection = [
    {
      title: t("Engage.Discounts.Parent.Title"),
      items: [
        {
          title: t("Engage.Discounts.Parent.Details.Title"),
          price: t("Engage.Discounts.Parent.Details.Price"),
          description: t("Engage.Discounts.Parent.Details.Description"),
        },
      ],
    },
    {
      title: t("Engage.Discounts.Siblings.Title"),
      items: [
        {
          title: t("Engage.Discounts.Siblings.Sibling1.Title"),
          price: t("Engage.Discounts.Siblings.Sibling1.Price"),
          description: t("Engage.Discounts.Siblings.Sibling1.Description"),
        },
        {
          title: t("Engage.Discounts.Siblings.Sibling2.Title"),
          price: t("Engage.Discounts.Siblings.Sibling2.Price"),
          description: t("Engage.Discounts.Siblings.Sibling2.Description"),
        },
        {
          title: t("Engage.Discounts.Siblings.Sibling3.Title"),
          price: t("Engage.Discounts.Siblings.Sibling3.Price"),
          description: t("Engage.Discounts.Siblings.Sibling3.Description"),
        },
      ],
    },
    {
      title: t("Engage.Discounts.AdvancePayment.Title"),
      items: [
        {
          title: t("Engage.Discounts.AdvancePayment.Details.Title"),
          price: t("Engage.Discounts.AdvancePayment.Details.Price"),
          description: t("Engage.Discounts.AdvancePayment.Details.Description"),
        },
      ],
    },
  ];

  return (
    <PageSection>
      <PageSectionColumn md={6}>
        <Text color={theme.palette.orange.main} variant="title" center>
          {t("Engage.Discounts.Title")}
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

      <FeeCards
        templateId="discount section"
        isSubStack={true}
        boxes={discountSection}
      />
    </PageSection>
  );
};

export default DiscountsSection;
