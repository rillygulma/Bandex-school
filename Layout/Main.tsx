import { MainContainer } from "@/Layout/styles";
import { useRouter } from "next/router";

const Main = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <MainContainer
      sx={{
        direction: locale === "en" ? "ltr" : "rtl",
      }}
    >
      {children}
    </MainContainer>
  );
};

export default Main;
