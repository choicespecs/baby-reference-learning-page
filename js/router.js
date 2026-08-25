function parseHash() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const parts = hash.split('/').filter(Boolean); // e.g. ['topic', 'burping']

  if (parts[0] === 'topic' && parts[1]) {
    return { view: 'topic', id: parts[1] };
  }
  if (parts[0] === 'category' && parts[1]) {
    return { view: 'category', id: parts[1] };
  }
  return { view: 'home' };
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

function handleRoute() {
  const route = parseHash();
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value;

  closeSidebar();

  if (route.view === 'topic') {
    const topic = topicById(route.id);
    renderSidebar(topic ? topic.category : null, route.id);
    if (topic) {
      renderTopicDetail(topic);
      document.title = `${topic.title} — Baby Reference`;
    } else {
      renderNotFound();
      document.title = 'Not found — Baby Reference';
    }
    return;
  }

  if (route.view === 'category') {
    renderSidebar(route.id);
    renderHome(query, route.id);
    const cat = categoryById(route.id);
    document.title = cat ? `${cat.label} — Baby Reference` : 'Baby Reference';
    return;
  }

  renderSidebar(null);
  renderHome(query, null);
  document.title = 'Baby Reference';
}

function initApp() {
  window.addEventListener('hashchange', handleRoute);

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    const route = parseHash();
    // A search query always shows results across all categories.
    if (route.view === 'topic' && searchInput.value.trim()) {
      window.location.hash = '#/';
      return;
    }
    renderSidebar(route.view === 'category' ? route.id : null);
    renderHome(searchInput.value, route.view === 'category' ? route.id : null);
  });

  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('open');
  });

  document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

  handleRoute();
}

document.addEventListener('DOMContentLoaded', initApp);
