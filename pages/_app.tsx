import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
          <Head>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="alternate icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, user-scalable=no"/>
          </Head>
          <Component {...pageProps} />
        </>
}

export default MyApp;
