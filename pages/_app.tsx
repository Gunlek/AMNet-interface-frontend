import Head from "next/head";
import 'regenerator-runtime/runtime'
import { GlobalStyle } from "../styles/global";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <>
          <Head>
            <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
            <link rel="manifest" href="/favicons/site.webmanifest"/>
            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#79c45d"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="viewport" content="width=device-width, user-scalable=no"/>
          </Head>
          <GlobalStyle/>
          <Component {...pageProps} />
        </>
}

export default MyApp;
