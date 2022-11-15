import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      Curling Olympic Mulhouse. Club de Curling à Mulhouse. Entrainements les
      lundi soirs de 20h30 à 22h30 à la patinoire de l'Iceberg, 47 Bd Charles
      Stoessel, 68200 Mulhouse. Venez essayer gratuitement!
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Curling Olympic Mulhouse. Club de Curling à Mulhouse, France.</title>
);
