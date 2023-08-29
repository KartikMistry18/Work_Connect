import Hero from "../components/Hero";
import Works from "../components/Works";
import Services from "../components/services";
import Head from "next/head";
import styles from "./index.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Work-connect</title>
        <meta
          name="description"
          content="This is a app that connect clients to workers"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />
      <Works />
      <Services />
    </div>
  );
}
