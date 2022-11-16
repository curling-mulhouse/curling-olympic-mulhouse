import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="antialiased [font-feature-settings:'ss01']"
      lang="fr"
      data-theme="light"
    >
      <Head></Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
