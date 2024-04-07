import Head from "next/head";
import Link from "../src/components/Link";

// Modelo de chamada de API com getServerSideProps

export async function getStaticProps() {
  const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
  const responseFromServer = await fetch(FAQ_API_URL);
  const response = await responseFromServer.json();
  return {
    props: {
      faq: response
    }
  }
}

// Modelo de chamada de API com getServerSideProps

// export async function getServerSideProps() {
//   const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
//   const responseFromServer = await fetch(FAQ_API_URL);
//   const response = await responseFromServer.json();
//   return {
//     props: {
//       faq: response
//     }
//   }
// }

export default function FAQPage({faq}){
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases</title>
      </Head>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <Link href="/">
        Ir para Home
      </Link>
      <ul>
        {faq.map(({answer, question}, index) => {
          return (
            <li key={index}>
              <article>
                <h2>{question}</h2>
                <p>{answer}</p>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}