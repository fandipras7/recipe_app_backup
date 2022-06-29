import Head from "next/head";
import "../styles/globals.css";
// import { wrapper, store } from "./redux/store";
// import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
