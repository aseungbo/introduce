import Head from "next/head";
import Header from "@/components/Header";
import Introduce from "@/components/Introduce";
import Stack from "@/components/Stack";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen pt-20 pb-40 text-white bg-gray-900">
        <Header />
        <Introduce />
        <Stack />
        <Project />
        <Contact />
      </main>
    </>
  );
}
