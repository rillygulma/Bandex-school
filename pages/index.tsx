import AcademicSection from "@/components/Landing/Academic";
import NewsSection from "@/components/Landing/News";
import RegisterSection from "@/components/Landing/Register";
import WelcomeSection from "@/components/Landing/Welcome";
import WhyAISSection from "@/components/Landing/Why";
import { Stack } from "@mui/material";

export default function LandingPage() {
  return (
    <Stack>
      <WelcomeSection />
      <WhyAISSection />
      <AcademicSection />
      <RegisterSection />
      <NewsSection />
    </Stack>
  );
}
