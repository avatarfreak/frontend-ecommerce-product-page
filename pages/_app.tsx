import "../styles/globals.css";
import type { AppProps } from "next/app";
import "windi.css";
import Head from "next/head";
import { DataProvider } from "@/context/dataContext";
import { CartProvider } from "provider/CartProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Mentor | E-commerce product page</title>
     </Head>
      <CartProvider>
        <DataProvider>
          <Component {...pageProps} />
        </DataProvider>
      </CartProvider>
    </>
  );
}
export default MyApp;
