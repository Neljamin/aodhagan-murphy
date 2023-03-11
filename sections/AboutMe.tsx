import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IBioFields } from "../@types/generated/contentful";
import { Entry } from "contentful";

export default function AboutMe({ bio }: { bio: Entry<IBioFields> }) {
  return (
    <section className="mt-3 pb-12 max-w-3xl bg-white p-6 bg-opacity-95">
      <div className="flex justify-center pb-6 pt-6">
        <div className="relative h-64 w-64 bg-purple-700 rounded-full border-4 border-purple-700 overflow-hidden">
          <Image
            priority
            fill
            src="/profile.jpeg"
            alt="Aodhagán Murphy profile image"
          />
        </div>
      </div>
      <h2 className="text-4xl text-center pb-3 text-purple-800">
        I'm Aodhagán! 👋
      </h2>
      {bio.fields.description &&
        documentToReactComponents(bio.fields.description, {})}
      <div className="flex justify-center">
        <a
          className="btn btn-primary"
          href="https://www.linkedin.com/in/aodhagán-murphy/"
          target="_blank"
          rel="noreferrer"
        >
          My LinkedIn
        </a>
      </div>
    </section>
  );
}
