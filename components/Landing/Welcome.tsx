import { keyframes } from "@mui/system"; // Import keyframes for animation
import { GridLayoutStyles, SquaresShape } from "@/components/Landing/styles";
import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import Square from "@/components/common/Square";
import Text from "@/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import React from "react";

// Define rotation animation keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Define typewriter animation keyframes with clearing effect
const typewriter = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  60% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

// Define a blink effect for the cursor
const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const WelcomeSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const theme = useTheme();

  const squares = [
    {
      radiusMobile: ["1.5vw", "1.1.1.0"],
      radiusDesktop: ["0.5vw", "1.1.1.0"],
      bgcolor: theme.palette.orange.main,
      rows: "10 / 12",
      cols: "20 /22",
    },
    //... other square items
  ];

  return (
    <PageSection>
      <PageSectionColumn xs={12} lg={6}>
        <Stack spacing={3} alignItems="center" justifyContent="center">
          <Avatar
            alt="Main Logo"
            src="/images/welcome-logo.jpg"
            sx={{
              width: { xs: "20vw", md: "12vw" },
              height: { xs: "20vw", md: "12vw" },
              animation: `${rotate} 10s linear infinite`, // Add rotation animation
            }}
          />

          <Text
            color={theme.palette.blue.dark}
            variant="subTitle"
            center
            sx={{
              overflow: "hidden", // Hide overflow for typewriter effect
              whiteSpace: "nowrap",
              borderRight: "2px solid", // Cursor effect
              width: "fit-content",
              animation: `${typewriter} 4s steps(30) infinite alternate, ${blink} 0.75s step-end infinite`, // Typewriter with clear-and-restart effect
            }}
          >
            {t("SchoolName")}
          </Text>
        </Stack>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <SquaresShape sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box sx={GridLayoutStyles}>
            <Square
              radius={{
                mobile: ["4vw", "1.1.0.1"],
                desktop: ["2vw", "1.1.0.1"],
              }}
              sx={{
                gridRow: "1 / 16",
                gridColumn: "1 / 20",
              }}
            >
              <Avatar
                variant="square"
                alt="Main Image"
                src={"/images/Bandex-1.jpg"}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Square>

            {squares.map((block, i) => (
              <React.Fragment key={i}>
                <Square
                  bgcolor={block.bgcolor}
                  radius={{
                    mobile: block.radiusMobile,
                    desktop: block.radiusDesktop,
                  }}
                  sx={{
                    gridRow: block.rows,
                    gridColumn: block.cols,
                  }}
                />
              </React.Fragment>
            ))}
          </Box>
        </SquaresShape>
      </PageSectionColumn>
    </PageSection>
  );
};

export default WelcomeSection;
