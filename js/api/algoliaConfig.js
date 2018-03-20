import algoliasearch from "algoliasearch";
import {
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
  ALGOLIA_API_SEARCH_ONLY_KEY
} from "../config/constants";
require("algoliasearch/reactnative");
export const algoliaIndexClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY
);
export const algoliaIndex = algoliaIndexClient.initIndex("Companies");

export const alogiaClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_API_SEARCH_ONLY_KEY
);

export const algoliaSearchIndex = alogiaClient.initIndex("Companies");

export const addToIndex = data => {
  algoliaIndex.addObject(data, (err, content) => {
    console.log("object id = ", content);
  });
};
