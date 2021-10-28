import Document, { DocumentContext, Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
      return initialProps;
   }
   render() {
      const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
      return (
         <Html lang="en">
            <Head>
               <meta name="description" content="E-commerce product page challenged by avatarfreak" />
               <link
                  rel="shortcut icon"
                  href={`${prefix}/images/favicon-32x32.icon`}
                  type="image/x-icon"
               />
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
                  rel="stylesheet"
               />
            </Head>
            <body>
               <Main />
               <div id="modal"></div>
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
