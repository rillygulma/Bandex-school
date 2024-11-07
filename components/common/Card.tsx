import { Card, CardContent } from "@mui/material";

const CardComp = ({ bg = "", children, ...rest }) => {
  return (
    <Card
      style={{
        backgroundColor: bg,
        borderRadius: "25px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default CardComp;
