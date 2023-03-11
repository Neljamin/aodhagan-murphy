import { BLOCKS, MARKS, Node, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }: { children: React.ReactNode }) => (
  <span className="bold">{children}</span>
);
const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-2">{children}</p>
);
const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
      <Text>{children}</Text>
    ),
  },
};

type RichTextProps = {
  text: Document;
};

export const RichText = ({ text }: RichTextProps) => {
  return <>{documentToReactComponents(text, options)}</>;
};
