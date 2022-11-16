import Head from "next/head";

import { Layout } from "@/components/Layout";

import "focus-visible";
import "@/styles/tailwind.css";

export default function App({ Component, pageProps }) {
  const title = pageProps.markdoc?.frontmatter.title;

  const pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Docs`;

  const description = pageProps.markdoc?.frontmatter.description;

  const navigation = pageProps.markdoc?.frontmatter.navigation || [];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout
        title={title}
        navigation={navigation}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
