import React from 'react';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "windi.css";
import Head from "next/head";
import { DataProvider } from "@/context/dataContext";
import { CartProvider } from "provider/CartProvider";

function MyApp({ Component, pageProps }: AppProps) {

   React.useEffect(() => {

      let resizeTimer: any;
      window.addEventListener("resize", () => {
         document.body.classList.add("resize-animation-stopper");

         clearTimeout(resizeTimer);

         resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
         }, 400)
      })

   }, [])
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
