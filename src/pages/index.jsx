import { Layout } from '@/layouts';

import Head from 'next/head';
import { FaApple } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>This is main</main>
      </Layout>

    </>
  );
}
