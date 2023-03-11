import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { contentClient } from "../utils/contentClient";
import Footer from "../landmarks/Footer";
import HeroBanner from "../landmarks/HeroBanner";
import { IBioFields, ITimelineFields } from "../@types/generated/contentful";
import { Entry } from "contentful";
import { Timeline } from "../sections/Timeline";

const BIO_ID = "7C9MZB6eSWZt6vKKThecDT";
const WORK_EXPERIENCE_TIMELINE_ID = "gH51AAx6QdHixpTO5qKF8";

// const CoolScene = dynamic(() => import("../components/three/CoolScene"), {
//   ssr: false,
// });

const Home = ({
  bio,
  workExperienceTimeline,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="relative flex flex-col justify-between min-h-screen">
      <Head>
        <title>Aodhagán Murphy</title>
        <meta name="description" content="Aodhagán Murphy personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col  items-center  flex-grow">
        <HeroBanner bio={bio} />
        <Timeline timeline={workExperienceTimeline} />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const bio: Entry<IBioFields> = await contentClient.getEntry(BIO_ID);
  const workExperienceTimeline: Entry<ITimelineFields> =
    await contentClient.getEntry(WORK_EXPERIENCE_TIMELINE_ID);

  return { props: { bio, workExperienceTimeline } };
};

export default Home;
