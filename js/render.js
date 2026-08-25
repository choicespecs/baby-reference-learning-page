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

function renderSidebar(activeCategoryId, activeTopicId) {
  const sidebar = document.getElementById('sidebar');

  const categoriesHTML = CATEGORIES.map((cat) => {
    const catActive = cat.id === activeCategoryId && !activeTopicId ? ' active' : '';
    const topicsHTML = TOPICS.filter((t) => t.category === cat.id)
      .map((t) => {
        const topicActive = t.id === activeTopicId ? ' active' : '';
        return `<a class="nav-topic-link${topicActive}" href="#/topic/${t.id}">${escapeHtml(t.title)}</a>`;
      })
      .join('');
    return `
      <div class="nav-category">
        <a class="nav-cat-link${catActive}" href="#/category/${cat.id}">${escapeHtml(cat.label)}</a>
        <div class="nav-topic-list">${topicsHTML}</div>
      </div>
    `;
  }).join('');

  sidebar.innerHTML = `
    <a class="nav-link${!activeCategoryId && !activeTopicId ? ' active' : ''}" href="#/">All Topics</a>
    <div class="nav-group-label">Categories</div>
    ${categoriesHTML}
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

function resourcesHTML(resources) {
  if (!resources || resources.length === 0) return '';
  const items = resources
    .map(
      (r) => `
        <li>
          <a class="resource-link" href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">
            <span class="resource-title">${escapeHtml(r.title)}</span>
            <span class="resource-source">${escapeHtml(r.source)} &#8594;</span>
          </a>
        </li>
      `
    )
    .join('');
  return `
    <div class="resources">
      <h3 class="resources-heading">Learn More</h3>
      <ul class="resource-list">${items}</ul>
    </div>
  `;
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
    ${resourcesHTML(topic.resources)}
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
