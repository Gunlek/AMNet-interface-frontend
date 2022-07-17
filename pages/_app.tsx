import axios from "axios";
import Head from "next/head";
import { CookiesProvider, useCookies } from "react-cookie";
import 'regenerator-runtime/runtime'
import { GlobalStyle } from "../styles/global";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;
  const [cookie] = useCookies(["access_token"]);

  if (cookie.access_token) axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.access_token}`;

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
