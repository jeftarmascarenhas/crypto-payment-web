import "../styles/global.css";
import { ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { LayoutAppProps } from "next/app";
import theme from "@global-styles/theme";
import Default from "@layouts/Default";

const getLayoutDefault = (page: ReactElement) => {
  return <Default>{page}</Default>;
};

export default function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? getLayoutDefault;
  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
