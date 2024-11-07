import useWindowSize from "@/hooks/useWindowSize";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Stack, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import Text from "./Text";

interface ScrollableListProps {
  items: {
    text: string;
    icon: JSX.Element;
  }[];

  textColor: string;
  arrowColor: string;
  uniqueId: string;

  mobile: {
    width: number;
    height: string;
    arrowSize: string;
    iconSize: number;
    marginSize: number;
  };
  desktop: {
    width: number;
    height: string;
    arrowSize: string;
    iconSize: number;
    marginSize: number;
  };

  t(word: string): string;
}

const OuterWrapper = styled(Box)(() => ({
  direction: "ltr",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  borderRadius: "2vw",
  background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
}));

const ArrowWrapper = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  padding: "1vw",
  borderRadius: "2vw",
  background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
  cursor: "pointer",
  transition: "0.15s ease-in-out",

  "&:hover": {
    opacity: 0.5,
  },
}));

const MiddleContent = styled(Box)(() => ({
  display: "flex",
  transition: "0.4s ease-in-out",
  width: "auto",
  position: "relative",
}));

/**
 * the scrollable icons viewer
 *
 */
const ScrollableList = ({
  items,
  textColor,
  arrowColor,
  uniqueId,
  mobile,
  desktop,
  t,
}: ScrollableListProps) => {
  const [windowWidth] = useWindowSize();

  const shiftFactor =
    desktop.iconSize + desktop.marginSize + desktop.marginSize;
  const mobileShiftFactor =
    mobile.iconSize + mobile.marginSize + mobile.marginSize;

  const containerRef = useRef<HTMLElement>(null);
  const arrowRef = useRef<HTMLElement>(null);

  const [maxSteps, setMaxSteps] = useState(1);
  const [mobileMaxSteps, setMobileMaxSteps] = useState(1);

  const [position, setPosition] = useState(0 * shiftFactor * -1);
  const [mobilePosition, setMobilePosition] = useState(
    0 * mobileShiftFactor * -1
  );
  const [step, setStep] = useState(0);

  const getVisibleItems = (widthRate: number, isMobile: boolean) => {
    // visibleWidth / itemWidth
    return (
      Math.floor(
        (windowWidth * widthRate - 2 * arrowRef.current!.offsetWidth) /
          (containerRef.current!.offsetWidth / items.length)
      ) + (isMobile ? 1 : 0)
    );
  };

  useEffect(() => {
    setMaxSteps(items.length - getVisibleItems(desktop.width, false));
    setMobileMaxSteps(items.length - getVisibleItems(mobile.width, true));
  }, [getVisibleItems, maxSteps, items.length, windowWidth]);

  const handleButton = (button: string) => {
    if (button === "left") {
      // mobile
      if (windowWidth < 900) {
        if (step > 0) {
          setMobilePosition((prev) => prev - mobileShiftFactor * -1);
          setStep((prev) => prev - 1);
        }
        // desktop
      } else {
        if (step > 0) {
          setPosition((prev) => prev - shiftFactor * -1);
          setStep((prev) => prev - 1);
        }
      }
    } else {
      // mobile
      if (windowWidth < 900) {
        if (step <= mobileMaxSteps) {
          setMobilePosition((prev) => prev + mobileShiftFactor * -1);
          setStep((prev) => prev + 1);
        }
      }
      // desktop
      else {
        if (step < maxSteps) {
          setPosition((prev) => prev + shiftFactor * -1);
          setStep((prev) => prev + 1);
        }
      }
    }
  };

  return (
    <OuterWrapper
      width={{
        xs: `${mobile.width * 100}vw`,
        md: `${desktop.width * 100}vw`,
      }}
      height={{ xs: mobile.height, md: desktop.height }}
    >
      <ArrowWrapper
        width={{ xs: "9vw", md: "4vw" }}
        ref={arrowRef}
        onClick={() => handleButton("left")}
      >
        <ArrowBackIosRoundedIcon
          sx={{
            width: "100%",
            height: "auto",
            color: arrowColor,
          }}
        />
      </ArrowWrapper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <MiddleContent
          id={uniqueId}
          ref={containerRef}
          sx={{
            left: {
              xs: `${mobilePosition.toString()}vw`,
              md: `${position.toString()}vw`,
            },
          }}
        >
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <Stack
                direction="column"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: {
                    xs: `${mobile.iconSize.toString()}vw`,
                    md: `${desktop.iconSize.toString()}vw`,
                  },
                  margin: {
                    xs: `${mobile.marginSize.toString()}vw`,
                    md: `${desktop.marginSize.toString()}vw`,
                  },
                }}
              >
                <Box>{item.icon}</Box>

                <Text color={textColor} variant="cardTitle" center>
                  {item.text}
                </Text>
              </Stack>
            </React.Fragment>
          ))}
        </MiddleContent>
      </Box>

      <ArrowWrapper
        width={{ xs: "9vw", md: "4vw" }}
        ref={arrowRef}
        onClick={() => handleButton("right")}
      >
        <ArrowForwardIosRoundedIcon
          sx={{
            width: "100%",
            height: "auto",
            color: arrowColor,
          }}
        />
      </ArrowWrapper>
    </OuterWrapper>
  );
};

export default ScrollableList;
