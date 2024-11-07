import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import CardComp from "../common/Card";
import Text from "../common/Text";
import Link from "next/link";

const JobsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const JobDetails = ({ title = "", items = [] }) => (
    <Stack width="100%">
      <Text color={theme.palette.blue.dark} variant="cardTitle">
        {title}
      </Text>

      <Text>
        {items?.map((bullet, i) => (
          <span key={i} style={{ lineHeight: 2 }}>
            {bullet}
            <br />
          </span>
        ))}
      </Text>
    </Stack>
  );

  const JobSection = ({
    item = { title: "", jobDescription: [], qualifications: [], documents: [] },
  }) => (
    <CardComp>
      <Text color={theme.palette.blue.dark} variant="subtitle">
        {item.title}
      </Text>

      <JobDetails
        title={t("Engage.Jobs.JobDescription")}
        items={item.jobDescription}
      />

      <JobDetails
        title={t("Engage.Jobs.Qualifications")}
        items={item.qualifications}
      />

      <JobDetails title={t("Engage.Jobs.Documents")} items={item.documents} />

      <Link target="_blank" href="mailto:Principal@aqsa.edu.my">
        <Button
          size="large"
          sx={{
            fontWeight: "bold",
            width: "50%",
            bgcolor: theme.palette.blue.dark,
            color: theme.palette.basic.light,
            borderRadius: "1vw",
            "&:hover": {
              color: theme.palette.blue.dark,
              bgcolor: theme.palette.basic.light,
            },
          }}
        >
          {t("Engage.Jobs.Apply")}
        </Button>
      </Link>
    </CardComp>
  );

  const jobsList = [
    // {
    //   title: t("Engage.Jobs.Opportunity1.Title"),
    //   jobDescription: [
    //     t("Engage.Jobs.Opportunity1.Description.Point1"),
    //     t("Engage.Jobs.Opportunity1.Description.Point2"),
    //   ],
    //   qualifications: [
    //     t("Engage.Jobs.Opportunity1.Qualifications.Point1"),
    //     t("Engage.Jobs.Opportunity1.Qualifications.Point2"),
    //     t("Engage.Jobs.Opportunity1.Qualifications.Point3"),
    //     t("Engage.Jobs.Opportunity1.Qualifications.Point4"),
    //     t("Engage.Jobs.Opportunity1.Qualifications.Point5"),
    //     t("Engage.Jobs.Opportunity1.Qualifications.Point6"),
    //     t("Engage.Jobs.Opportunity1.Qualifications.Point7"),
    //     t("Engage.Jobs.Opportunity1.Qualifications.Point8"),
    //   ],
    //   documents: [
    //     t("Engage.Jobs.Opportunity1.Documents.Point1"),
    //     t("Engage.Jobs.Opportunity1.Documents.Point2"),
    //     t("Engage.Jobs.Opportunity1.Documents.Point3"),
    //     t("Engage.Jobs.Opportunity1.Documents.Point4"),
    //     t("Engage.Jobs.Opportunity1.Documents.Point5"),
    //   ],
    // },
  ];

  return (
    <PageSection bg="">
      {jobsList.length ? (
        jobsList?.map((item, i) => (
          <PageSectionColumn md={6} key={i}>
            <JobSection item={item} />
          </PageSectionColumn>
        ))
      ) : (
        <PageSectionColumn md={12}>
          <Text center variant="cardtitle">
            {t("Engage.Jobs.NoJobs")}
          </Text>

          <Text center variant="subtitle">
            {t("Engage.Jobs.Email")}
          </Text>
        </PageSectionColumn>
      )}
    </PageSection>
  );
};

export default JobsSection;
