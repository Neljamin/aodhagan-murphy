import Image from "next/image";
import { Entry } from "contentful";
import { IBioFields } from "../@types/generated/contentful";
import { RichText } from "../components/text/RichText";

export default function AboutMe({ bio }: { bio: Entry<IBioFields> }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("${bio.fields.backgroundImage?.fields.file.url}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{bio.fields.title}</h1>
          <div className="mb-5">
            {bio.fields.description && (
              <RichText text={bio.fields.description} />
            )}
          </div>
          <div className="btn-group">
            <a
              className="btn btn-info"
              href="https://www.linkedin.com/in/aodhagan-murphy/"
              target="_blank"
              rel="noreferrer"
            >
              My LinkedIn
            </a>
            <a className="btn btn-error" href="mailto:aodhaganmurphy@gmail.com">
              Email
            </a>
            <a
              className="btn btn-accent"
              href="https://github.com/Neljamin"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
