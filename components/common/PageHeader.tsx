import theme from "@/styles/theme";
import { Box } from "@mui/material";

import { UpperSquaresGrid } from "../Curriculum/styles";
import PageSection from "./PageSection";
import PageSectionColumn from "./PageSectionColumn";
import Square from "./Square";
import Text from "./Text";

const PageHeader = ({ bg = theme.palette.basic.main, title = "" }) => {
  const secondColor = () => {
    switch (bg) {
      case theme.palette.blue.dark:
        return theme.palette.basic.light;
      case theme.palette.brown.main:
        return theme.palette.orange.main;
      case theme.palette.orange.main:
        return theme.palette.brown.main;
      default:
        return theme.palette.blue.dark;
    }
  };

  return (
    <PageSection bgcolor={bg}>
      <PageSectionColumn justify="start" align="end" md={9}>
        <Text variant="title" color={secondColor()}>
          {title}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn justify="end" align="end" md={3}>
        <Box sx={UpperSquaresGrid}>
          <Square
            bgcolor={secondColor()}
            radius={{
              mobile: ["3vw", "1.1.0.1"],
              desktop: ["1vw", "1.1.0.1"],
            }}
            sx={{
              gridRow: "2 / 3",
              gridColumn: "1 / 3",
            }}
          />

          <Square
            bgcolor={secondColor()}
            radius={{
              mobile: ["4vw", "1.1.1.0"],
              desktop: ["1.5vw", "1.1.1.0"],
            }}
            sx={{
              gridRow: "1 / 4",
              gridColumn: "3 / 6",
            }}
          />

          <Square
            bgcolor={secondColor()}
            radius={{
              mobile: ["4vw", "0.1.1.1"],
              desktop: ["1.5vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "4 / 5",
              gridColumn: "3 / 5  ",
            }}
          />
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default PageHeader;
