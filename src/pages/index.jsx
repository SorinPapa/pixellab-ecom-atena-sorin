import { ProductGrid } from '@/components/catalog/ProductGrid';
import { Layout } from '@/layouts';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <section>
            <ProductGrid></ProductGrid>
          </section>
        </main>
      </Layout>
    </>
  );
}
