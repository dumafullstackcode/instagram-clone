import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray-50 max-h-screen overflow-y-scroll scrollbar-hidden">
      <Head>
        <title>Dumistagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
