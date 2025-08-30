import axios from "axios";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { GlobalStyle } from "../styles/global";
import "../styles/globals.css";
import NProgressStyle from "../styles/nprogress";
import Router from "next/router";
import nProgress from "nprogress";
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps, router }) {
  axios.defaults.baseURL = '/api';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <GlobalStyle />
      <NProgressStyle />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default MyApp;
