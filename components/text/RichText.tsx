import { BLOCKS, MARKS, Node, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }: { children: React.ReactNode }) => (
  <strong>{children}</strong>
);
const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-2">{children}</p>
);
const Heading2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-2 text-4xl">{children}</h2>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
      <Heading2>{children}</Heading2>
    ),
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
