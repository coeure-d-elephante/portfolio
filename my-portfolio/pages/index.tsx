/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Javi's Portfolio</title>
      </Head>
      <h1 className="p-10 text-red-500 bg-gray-50">Portfolio</h1>

      <Header />
    </div>
  );
}
