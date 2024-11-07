import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import CardComp from "../../components/common/Card";
import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Text from "../common/Text";

const RequirementsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const [trigger, setTrigger] = useState("0");

  const handleClick = (newTrigger: string) => {
    newTrigger === trigger ? setTrigger("0") : setTrigger(newTrigger);
  };

  const requirementsSection = [
    {
      title: t("Engage.Registration.Requirements.Title"),
      lists: [
        {
          title: t("Engage.Registration.Requirements.Id.Title"),
          items: [
            t("Engage.Registration.Requirements.Id.Point1"),
            t("Engage.Registration.Requirements.Id.Point2"),
            t("Engage.Registration.Requirements.Id.Point3"),
            t("Engage.Registration.Requirements.Id.Point4"),
            t("Engage.Registration.Requirements.Id.Point5"),
          ],
          trigger: "1",
        },
        {
          title: t("Engage.Registration.Requirements.LastSchool.Title"),
          items: [
            t("Engage.Registration.Requirements.LastSchool.Point1"),
            t("Engage.Registration.Requirements.LastSchool.Point2"),
          ],
          trigger: "2",
        },
        {
          title: t("Engage.Registration.Requirements.Forms.Title"),
          items: [
            t("Engage.Registration.Requirements.Forms.Point1"),
            t("Engage.Registration.Requirements.Forms.Point2"),
          ],
          trigger: "3",
        },
      ],
    },
    {
      title: t("Engage.Registration.Deadlines.Title"),
      lists: [
        {
          title: t("Engage.Registration.Deadlines.Sem1.Title"),
          items: [t("Engage.Registration.Deadlines.Sem1.Description")],
          trigger: "5",
        },
        {
          title: t("Engage.Registration.Deadlines.Sem2.Title"),
          items: [t("Engage.Registration.Deadlines.Sem2.Description")],
          trigger: "6",
        },
        {
          title: t("Engage.Registration.Deadlines.Sem3.Title"),
          items: [t("Engage.Registration.Deadlines.Sem3.Description")],
          trigger: "7",
        },
      ],
    },
  ];

  return (
    <PageSection>
      {requirementsSection.map((item, i) => (
        <PageSectionColumn md={6} key={i}>
          <CardComp bg={theme.palette.orange.main}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              sx={{ width: "100%" }}
              subheader={
                <Text color={theme.palette.brown.main} variant="cardTitle" bold>
                  {item.title}
                </Text>
              }
            >
              {item.lists.map((list, i) => (
                <React.Fragment key={i}>
                  <ListItemButton
                    sx={{ width: "100%" }}
                    onClick={() => handleClick(list.trigger)}
                    style={{
                      backgroundColor:
                        trigger === list.trigger
                          ? "rgba(0,0,0,0.15)"
                          : "transparent",
                    }}
                  >
                    <Text
                      variant="cardTitle"
                      my={2}
                      me={2}
                      color={
                        trigger === list.trigger
                          ? theme.palette.basic.light
                          : theme.palette.basic.dark
                      }
                    >
                      {list.title}
                    </Text>

                    {trigger === list.trigger ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse
                    in={trigger === list.trigger}
                    timeout="auto"
                    unmountOnExit
                    style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
                  >
                    {list.items.map((text, y) => (
                      <Stack spacing={2} my={2} px={4} key={y}>
                        <Text
                          variant="cardTitle"
                          justify
                          bold
                          color={theme.palette.basic.light}
                        >
                          {text}
                        </Text>
                      </Stack>
                    ))}
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </CardComp>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default RequirementsSection;
