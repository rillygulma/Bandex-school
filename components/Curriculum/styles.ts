import theme from "@/styles/theme";

export const UpperSquaresStyles = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  width: "100%",
};

export const UpperSquaresGrid = {
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "repeat(5, 3vw)",
    md: "repeat(5, 2vw)",
  },
  gridTemplateRows: {
    xs: "repeat(6, 3vw)",
    md: "repeat(6, 2vw)",
  },
  gap: { xs: 2, md: 2 },
};

export const LowerSquaresStyles = {
  display: "flex",
  justifyContent: { md: "space-between" },
  alignItems: { xs: "flex-start", md: "flex-end" },
  width: "100%",
};

export const LowerSquaresGrid = {
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "repeat(3, 3vw)",
    md: "repeat(3, 2vw)",
  },
  gridTemplateRows: {
    xs: "repeat(5, 3vw)",
    md: "repeat(5, 2vw)",
  },
  gap: { xs: 2, md: 2 },
};

// Courses Section ------------------------------------------

export const CoursesContainerStyles = {
  display: "flex",
  width: "100%",
  padding: 5,
  justifyContent: { md: "space-evenly" },
  alignItems: "center",
};

// Languages Section ------------------------------------------

export const LanguagesGrid = {
  direction: "ltr",
  width: "100%",
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "repeat(14, 1vw)",
    md: "repeat(14, 1.3vw)",
  },
  gridTemplateRows: {
    xs: "repeat(11, 1vw)",
    md: "repeat(11, 1.3vw)",
  },
  gap: { xs: 2, md: 1.5 },
};

export const TitleStyles = {
  color: theme.palette.blue.dark,
  fontWeight: "bold",
  fontSize: { xs: "6vw", md: "3vw" },
  gridRow: "1 / 5",
  gridColumn: "6 / 15",
  textAlign: "center",
  alignSelf: "center",
};

// Islamic Section ------------------------------------------

export const IslamicStudiesGrid = {
  direction: "ltr",
  width: "100%",
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "repeat(14, 1vw)",
    md: "repeat(14, 1vw)",
  },
  gridTemplateRows: {
    xs: "repeat(12, 1vw)",
    md: "repeat(12, 1vw)",
  },
  gap: { xs: 2, md: 2 },
};

// Modern Section ------------------------------------------

export const ModernScienceContainer = {
  bgcolor: theme.palette.orange.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const ModernScienceGrid = {
  direction: "ltr",
  width: "100%",
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "repeat(17, 0.1vw)",
    md: "repeat(17, 0.7vw)",
  },
  gridTemplateRows: {
    xs: "repeat(12, 0.1vw)",
    md: "repeat(12, 0.7vw)",
  },
  gap: { xs: 1.5, md: 2 },
};

// Co curreculum section

export const CoCurriculumGrid = {
  direction: "ltr",
  position: "relative",
  width: "100%",
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "repeat(2, 35vw)",
    md: "repeat(2, 12vw)",
  },
  gridTemplateRows: {
    xs: "repeat(2, 35vw)",
    md: "repeat(2, 12vw)",
  },
  gap: 2,
};

export const AvatarStyles = {
  width: "100%",
  height: "auto",
  position: "absolute",
  bottom: "0px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: "15",
};

// Levels section

export const WelcomeGrid = {
  width: "100%",
  position: "relative",
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "repeat(12, 3vw)",
    md: "repeat(12, 2.5vw)",
  },
  gridTemplateRows: {
    xs: "repeat(12, 3vw)",
    md: "repeat(12, 2.5vw)",
  },
  gap: { xs: 1.5, md: 1 },
};
