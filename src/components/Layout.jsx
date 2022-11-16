import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Prose } from "@/components/Prose";

// const navigation = [
//   {
//     title: "Qui sommes nous?",
//     links: [
//       { title: "Le club", href: "/" },
//       { title: "Les joueurs", href: "/docs/installation" },
//     ],
//   },
//   {
//     title: "Core concepts",
//     links: [
//       { title: "Understanding caching", href: "/docs/understanding-caching" },
//       {
//         title: "Predicting user behavior",
//         href: "/docs/predicting-user-behavior",
//       },
//       { title: "Basics of time-travel", href: "/docs/basics-of-time-travel" },
//       {
//         title: "Introduction to string theory",
//         href: "/docs/introduction-to-string-theory",
//       },
//       { title: "The butterfly effect", href: "/docs/the-butterfly-effect" },
//     ],
//   },
//   {
//     title: "Advanced guides",
//     links: [
//       { title: "Writing plugins", href: "/docs/writing-plugins" },
//       { title: "Neuralink integration", href: "/docs/neuralink-integration" },
//       { title: "Temporal paradoxes", href: "/docs/temporal-paradoxes" },
//       { title: "Testing", href: "/docs/testing" },
//       { title: "Compile-time caching", href: "/docs/compile-time-caching" },
//       {
//         title: "Predictive data generation",
//         href: "/docs/predictive-data-generation",
//       },
//     ],
//   },
//   {
//     title: "API reference",
//     links: [
//       { title: "CacheAdvance.predict()", href: "/docs/cacheadvance-predict" },
//       { title: "CacheAdvance.flush()", href: "/docs/cacheadvance-flush" },
//       { title: "CacheAdvance.revert()", href: "/docs/cacheadvance-revert" },
//       { title: "CacheAdvance.regret()", href: "/docs/cacheadvance-regret" },
//     ],
//   },
//   {
//     title: "Contributing",
//     links: [
//       { title: "How to contribute", href: "/docs/how-to-contribute" },
//       { title: "Architecture guide", href: "/docs/architecture-guide" },
//       { title: "Design principles", href: "/docs/design-principles" },
//     ],
//   },
// ];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8">
      <div className="relative flex justify-between">
        <div className="flex items-center">
          <Link href="/" aria-label="Home page">
            <h1 className="lg:hidden">COM</h1>
            <h1 className="hidden h-9 w-auto fill-slate-700 dark:fill-sky-100 lg:block">
              Curling Olympic Mulhouse
            </h1>
          </Link>
          <Link
            href="/club"
            aria-label="Mulhouse Olympic Curling Club"
          >
            Le Club
          </Link>
          <Link
            href="/calendrier"
            aria-label="calendrier"
          >
            Calendrier
          </Link>
          <Link
            href="/actualites"
            aria-label="actualites"
          >
            Actus
          </Link>
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8">Contact</div>
      </div>
    </header>
  );
}

export function Layout({ children, title, navigation }) {
  let router = useRouter();
  let isHomePage = router.pathname === "/";
  let allLinks = navigation.flatMap((section) => section.links);
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname);
  let previousPage = allLinks[linkIndex - 1];
  let nextPage = allLinks[linkIndex + 1];
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  );

  return (
    <>
      <Header />

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
          <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
            {navigation.length ? (
              <Navigation
                navigation={navigation}
                className="w-64 pr-8 xl:w-72 xl:pr-16"
              />
            ) : <></>}
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 bg-white">
          <article>
            {(title || section) && (
              <header className="mb-9 space-y-1">
                {section && (
                  <p className="font-display text-sm font-medium text-sky-500">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
          <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
            {previousPage && (
              <div>
                <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link
                    href={previousPage.href}
                    className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <span aria-hidden="true">&larr;</span> {previousPage.title}
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link
                    href={nextPage.href}
                    className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    {nextPage.title} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </>
  );
}
