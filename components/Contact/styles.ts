export const WelcomeGrid = {
  width: { xs: "100%", md: "50%" },
  position: "relative",
  display: "grid",
  alignSelf: "end",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "repeat(12, 3vw)",
    md: "repeat(12, 2.5vw)",
  },
  gridTemplateRows: {
    xs: "repeat(7, 3vw)",
    md: "repeat(7, 2.5vw)",
  },
  gap: { xs: 1.5, md: 1 },
};

export const AvatarStyles = {
  width: { xs: "50%", md: "25vw" },
  height: "auto",
  position: "absolute",
  bottom: "0px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: "15",
};
