import axios from "axios";
import Head from "next/head";
import 'regenerator-runtime/runtime'
import { GlobalStyle } from "../styles/global";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = '/api'
  
  return (
    <>
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp;
