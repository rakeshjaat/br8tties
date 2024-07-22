import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Br8tties - Back in 80's</title>
        <meta property="og:title" content="Br8tties - Back in 80's" />
        <meta property="og:description" content="Dive into the vibrant world of Br8tties! Collect unique, nostalgia-infused NFTs inspired by the 80's." />
        <meta property="og:image" content="/images/og.png" />
        <meta property="og:url" content="https://br8tties.art" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Br8tties - TBack in 80's" />
        <meta name="twitter:description" content="Dive into the vibrant world of Br8tties! Collect unique, nostalgia-infused NFTs inspired by the 80's." />
        <meta name="twitter:image" content="/images/og.png" />
        <meta name="twitter:url" content="https://br8tties.art" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
