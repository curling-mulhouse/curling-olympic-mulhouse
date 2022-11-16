import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Curling Olympic Mulhouse, France</title>
        <meta name="description" content="Curling a Mulhouse" />
      </Head>

      <main>
        Curling Olympic Mulhouse. <br />
        Club de Curling à Mulhouse. <br />
        Entrainements les lundi soirs de 20h30 à 22h30 à la patinoire de
        l'Iceberg, 47 Bd Charles Stoessel, 68200 Mulhouse. <br />
        Venez essayer gratuitement!
      </main>
    </div>
  );
}
