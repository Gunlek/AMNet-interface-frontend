import Head from "next/head";
import { CookiesProvider } from "react-cookie";
import 'regenerator-runtime/runtime'
import { GlobalStyle } from "../styles/global";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookiesProvider>
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  )
}

export default MyApp;
