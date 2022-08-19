import axios from "axios";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import 'regenerator-runtime/runtime'
import { GlobalStyle } from "../styles/global";
import "../styles/globals.css";


function MyApp({ Component, pageProps, router }) {
  axios.defaults.baseURL = '/api';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <GlobalStyle />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </>
  )
}

export default MyApp;
