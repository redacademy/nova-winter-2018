export const formatFilterSearchResults = searchResults => {
  const uniqueTags = searchResults.reduce((acc, curr) => {
    if (curr.tags) {
      curr.tags.forEach(tag => {
        if (!acc[tag]) {
          acc[tag] = true;
        }
      });
    }
    return acc;
  }, {});
  return Object.keys(uniqueTags).map(tag => {
    return tag[0].toUpperCase() + tag.slice(1);
  });
};
