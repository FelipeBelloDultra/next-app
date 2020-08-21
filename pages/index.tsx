import Head from 'next/head';

import GlobalStyles from '../styles/GlobalStyles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Felipe Bello Dultra</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <h1>Olá</h1>
        <GlobalStyles />
      </main>
    </>
  )
}
