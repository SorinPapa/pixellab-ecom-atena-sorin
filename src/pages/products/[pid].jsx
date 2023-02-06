// /products/2  /products/5  products/22

import { CartControls } from '@/components/cart';
import { useProduct } from '@/hooks';
import { Layout } from '@/layouts';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { product, httpStatus, loading } = useProduct(pid);

  return (
    <>
      <Head>
        <title>Product - Pixellab Ecom App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-end">
            <div className="border-l border-zinc-200">
              <CartControls></CartControls>
            </div>
          </header>

          <section className="mt-16">
            {loading ? (
              '...loading'
            ) : (
              <>
                {httpStatus === 404 ? (
                  'product not found'
                ) : (
                  <>
                    Product Page for {pid}
                    <div>{JSON.stringify(product)}</div>
                  </>
                )}
              </>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
