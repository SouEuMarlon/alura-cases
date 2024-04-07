import Head from "next/head";
import Script from "next/script";
import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async src={`https://www.googletagmanager.com/gtag/js?id=G-0MRGDLEBLG`}
        />
        <Script          
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0MRGDLEBLG');
            `
          }}
        />
        
      <Head>        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()}/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp