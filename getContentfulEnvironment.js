require("dotenv").config();
const contentfulManagement = require("contentful-management");
const { strict: assert } = require("assert");

const {
  NEXT_PUBLIC_CMA_ACCESS_TOKEN,
  NEXT_PUBLIC_SPACE_ID,
  NEXT_PUBLIC_ENVIRONMENT,
} = process.env;

assert(NEXT_PUBLIC_CMA_ACCESS_TOKEN);
assert(NEXT_PUBLIC_SPACE_ID);
assert(NEXT_PUBLIC_ENVIRONMENT);

const getContentfulEnvironment = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: NEXT_PUBLIC_CMA_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(NEXT_PUBLIC_SPACE_ID)
    .then((space) => space.getEnvironment(NEXT_PUBLIC_ENVIRONMENT));
};

module.exports = getContentfulEnvironment;
