import "../styles/globals.css";
import type { AppProps } from "next/app";
import "windi.css";
import Head from "next/head";
import { DataProvider } from "@/context/dataContext";
import { CartProvider } from "provider/CartProvider";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="E-commerce product page challenged by avatarfreak" />
        <link
          rel="shortcut icon"
          href={`${prefix}/images/favicon-32x32.icon`}
          type="image/x-icon"
        />

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
