import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { contentClient } from "../utils/contentClient";
import Footer from "../landmarks/Footer";
import HeroBanner from "../landmarks/HeroBanner";
import { IBioFields } from "../@types/generated/contentful";
import { Entry } from "contentful";

const BIO_ID = "7C9MZB6eSWZt6vKKThecDT";

// const CoolScene = dynamic(() => import("../components/three/CoolScene"), {
//   ssr: false,
// });

const Home = ({ bio }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="relative flex flex-col justify-between min-h-screen">
      <Head>
        <title>Aodhagán Murphy</title>
        <meta name="description" content="Aodhagán Murphy personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col  items-center  flex-grow">
        <HeroBanner bio={bio} />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const bio: Entry<IBioFields> = await contentClient.getEntry(BIO_ID);

  return { props: { bio } };
};

export default Home;
