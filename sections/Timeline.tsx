import { Entry } from "contentful";
import { startCase, toLower } from "lodash";
import { ITimelineFields } from "../@types/generated/contentful";
import { RichText } from "../components/text/RichText";

type TimelineProps = {
  timeline: Entry<ITimelineFields>;
};

const TAG_BADGE_CLASS_MAP: Record<string, string> = {
  react: "bg-blue-500 border-blue-500",
  angular: "bg-red-500 border-red-500",
  webpack: "bg-green-500 border-green-500",
  vite: "bg-yellow-500 border-yellow-500",
  nextJs: "bg-purple-500 border-purple-500",
};

export const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <section className="w-full flex justify-center p-12 bg-gray-200">
      <ul className="steps steps-vertical">
        {timeline.fields.timelineItems &&
          timeline.fields.timelineItems.map((item) => (
            <li key={item.sys.id} className="step step-neutral" data-content="">
              <div className="card mb-6 w-96 h-96 bg-base-100 shadow-xl ">
                <figure className="p-6">
                  <img
                    className="h-12"
                    src={item.fields.image?.fields.file.url}
                    alt={item.fields.title + " image"}
                  />
                </figure>
                <div className="card-body card-actions border-t-2">
                  {item.fields.description && (
                    <RichText text={item.fields.description} />
                  )}
                  <div>
                    {item.metadata.tags.map((tag) => (
                      <div
                        key={tag.sys.id}
                        className={`badge mr-2 ${
                          TAG_BADGE_CLASS_MAP[tag.sys.id]
                        }`}
                      >
                        {startCase(tag.sys.id)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};
