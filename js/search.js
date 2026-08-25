// Simple client-side substring search over title, tags, and summary.
function searchTopics(query) {
  const q = query.trim().toLowerCase();
  if (!q) return TOPICS;

  return TOPICS.filter((topic) => {
    const haystack = [
      topic.title,
      topic.summary,
      ...topic.tags,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}
