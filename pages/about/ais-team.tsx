import Column from "@/components/common/Column";
import PageHeader from "@/components/common/PageHeader";
import PageSection from "@/components/common/PageSection";
import Row from "@/components/common/Row";
import Text from "@/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function AISTeam() {
  const router = useRouter();
  const { t } = useTranslation(router);

  const team = [
    {
      name: "Mohammad Shobaki",
      img: "/images/Char-3-Color.png",
      position: "Principal",
    },
    {
      name: "Yara Ali",
      img: "/images/Char-3-Color.png",
      position: "Vice Principal",
    },
    {
      name: "Ahmad Yaser",
      img: "/images/Char-3-Color.png",
      position: "Academic Counselor",
    },
    {
      name: "Alaa Abdul Rahman",
      img: "/images/Char-3-Color.png",
      position: "Secretary",
    },
    {
      name: "Rizq Salem",
      img: "/images/Char-3-Color.png",
      position: "Accountant",
    },
    {
      name: "Hind Suhaib",
      img: "/images/Char-3-Color.png",
      position: "Teacher",
    },
    {
      name: "Rabee Jamal",
      img: "/images/Char-3-Color.png",
      position: "Teacher",
    },
    {
      name: "Leena Fouad",
      img: "/images/Char-3-Color.png",
      position: "Teacher",
    },
    {
      name: "Samer Abdul Kabeer",
      img: "/images/Char-3-Color.png",
      position: "Teacher",
    },
  ];

  return (
    <Stack>
      <PageHeader bg={departmentColors.about} title={t("About.Team.Title")} />
      <PageSection>
        <Row>
          {team.map(({ name, img, position }, i) => (
            <Column md={2} key={i}>
              <Card>
                <CardMedia sx={{ height: 150 }} image={img} title={name} />

                <CardContent>
                  <Text>{name}</Text>

                  <Text variant="p">{position}</Text>
                </CardContent>
              </Card>
            </Column>
          ))}
        </Row>
      </PageSection>
    </Stack>
  );
}
