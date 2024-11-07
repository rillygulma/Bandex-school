// Welcome Section ------------------------------------------

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
        xs: "repeat(3, 3vw)",
        md: "repeat(3, 2vw)",
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
