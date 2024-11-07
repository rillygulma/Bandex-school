import "@/styles/globals.css";

import Layout from "@/Layout";
import Loading from "@/Layout/Loading";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Component {...pageProps} />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}
