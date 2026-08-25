function categoryById(id) {
  return CATEGORIES.find((c) => c.id === id);
}

function topicById(id) {
  return TOPICS.find((t) => t.id === id);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function tagsHTML(tags) {
  return `<div class="tag-row">${tags
    .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
    .join('')}</div>`;
}

function cardHTML(topic) {
  return `
    <a class="card" href="#/topic/${topic.id}">
      <h3 class="card-title">${escapeHtml(topic.title)}</h3>
      <p class="card-summary">${escapeHtml(topic.summary)}</p>
      ${tagsHTML(topic.tags)}
    </a>
  `;
}

function renderSidebar(activeCategoryId) {
  const sidebar = document.getElementById('sidebar');
  const html = CATEGORIES.map((cat) => {
    const active = cat.id === activeCategoryId ? ' active' : '';
    return `<a class="nav-link${active}" href="#/category/${cat.id}">${escapeHtml(cat.label)}</a>`;
  }).join('');
  sidebar.innerHTML = `
    <div class="nav-group-label">Browse</div>
    <a class="nav-link${activeCategoryId ? '' : ' active'}" href="#/">All Topics</a>
    <div class="nav-group-label">Categories</div>
    ${html}
  `;
}

function renderHome(query, activeCategoryId) {
  const content = document.getElementById('content');
  const results = searchTopics(query);

  if (query.trim() && results.length === 0) {
    content.innerHTML = `
      <div class="empty-state">
        <p>No topics found for "<strong>${escapeHtml(query)}</strong>" yet — try a different word, or browse by category below.</p>
      </div>
      ${renderCategorySections(TOPICS, null)}
    `;
    return;
  }

  content.innerHTML = renderCategorySections(results, activeCategoryId);
}

function renderCategorySections(topics, onlyCategoryId) {
  const cats = onlyCategoryId ? CATEGORIES.filter((c) => c.id === onlyCategoryId) : CATEGORIES;

  return cats
    .map((cat) => {
      const catTopics = topics.filter((t) => t.category === cat.id);
      if (catTopics.length === 0) return '';
      return `
        <section class="category-section" id="cat-${cat.id}">
          <h2 class="category-heading">${escapeHtml(cat.label)}<span class="category-desc">${escapeHtml(cat.desc)}</span></h2>
          <div class="card-grid">
            ${catTopics.map(cardHTML).join('')}
          </div>
        </section>
      `;
    })
    .join('');
}

function renderTopicDetail(topic) {
  const content = document.getElementById('content');
  const cat = categoryById(topic.category);

  content.innerHTML = `
    <a class="back-link" href="#/">&larr; Back to Browse</a>
    <div class="breadcrumb">
      <a href="#/category/${cat.id}">${escapeHtml(cat.label)}</a>
    </div>
    <h1 class="topic-title">${escapeHtml(topic.title)}</h1>
    <p class="topic-summary">${escapeHtml(topic.summary)}</p>
    <div class="topic-body">${topic.body}</div>
    <div class="topic-tags">${tagsHTML(topic.tags)}</div>
  `;
  content.scrollIntoView({ behavior: 'instant', block: 'start' });
}

function renderNotFound() {
  document.getElementById('content').innerHTML = `
    <div class="empty-state">
      <p>That topic doesn't exist (yet).</p>
      <a class="back-link" href="#/">&larr; Back to Browse</a>
    </div>
  `;
}
