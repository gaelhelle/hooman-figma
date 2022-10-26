import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ArticleForm from "../components/ArticleForm";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hooman - Figma Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-start min-h-[600px] h-screen gap-10 p-10">
        <div className="h-full w-[283px] shadow-theme-main rounded-theme-main hidden lg:block">
          <Sidebar />
        </div>
        <section className="shadow-theme-main flex-1 h-full rounded-theme-main">
          <ArticleForm />
        </section>
      </main>
    </>
  );
};

export default Home;
