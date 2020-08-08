import '../styles/index.css';
import Head from 'next/head';

import { AppProps } from 'next/app';

function CompareCart({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CompareCart</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
        <meta name='theme-color' content='#4553F0' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CompareCart;
