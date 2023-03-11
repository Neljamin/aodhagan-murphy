import Image from "next/image";
import { Entry } from "contentful";
import { IBioFields } from "../@types/generated/contentful";
import { RichText } from "../components/text/RichText";

export default function AboutMe({ bio }: { bio: Entry<IBioFields> }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <div className="mb-5">
            {bio.fields.description && (
              <RichText text={bio.fields.description} />
            )}
          </div>
          <a
            className="btn btn-glass"
            href="https://www.linkedin.com/in/aodhagan-murphy/"
            target="_blank"
            rel="noreferrer"
          >
            My LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}