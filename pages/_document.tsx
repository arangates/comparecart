import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
      <Head>
        <title>CompareCart</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='theme-color' content='#4553F0' />
        <meta
          name='description'
          content='The compare cart will show the difference between the sellers, rating and price.'
        />
        <link rel="apple-touch-icon" href="/maskable_logo1024.png"></link>
        <link rel="manifest" href="/manifest.webmanifest"></link>
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
