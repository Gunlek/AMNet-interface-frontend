import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <>
    <style>
      {`body{
        margin: 0 0;
        padding:0 0;
        min-height: 100vh; 
      }

      #__next{
        margin: 0 0;
        padding:0 0;
        min-height: 100vh; 
      }
      `}
    </style>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
