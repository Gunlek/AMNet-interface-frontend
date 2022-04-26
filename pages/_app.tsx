import Head from "next/head";
import { useRouter } from "next/router";
import 'regenerator-runtime/runtime'
import { GlobalStyle } from "../styles/global";
import "../styles/globals.css";
import Homepage from "./homepage";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const pathname = router.pathname.split('/')[1]

  const isLogged = true;
  const isRedirected = !isLogged && (pathname !== "homepage")

  if (isRedirected) { typeof window !== 'undefined' && router.replace('/homepage') }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <GlobalStyle />
      {isRedirected ? <Homepage /> : <Component {...pageProps} />}
    </>
  )
}

export default MyApp;
