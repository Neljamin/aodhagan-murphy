import { createClient } from "contentful";

export const contentClient = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CDA_ACCESS_TOKEN!,
});
