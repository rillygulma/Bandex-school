import Footer from "@/Layout/Footer";
import HeadElement from "@/Layout/Head";
import Header from "@/Layout/Header";
import Main from "@/Layout/Main";
import Widgets from "@/Layout/Widgets";
import React from "react";

import { LayoutBox } from "./styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutBox>
      <HeadElement />
      <Header />
      <Main>{children}</Main>
      <Widgets />
      <Footer />
    </LayoutBox>
  );
};

export default Layout;
