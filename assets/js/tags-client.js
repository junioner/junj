// Client-side tag/search index for /tags/
// Fetches resources manifest and renders filtered list based on ?tag=... or ?q=...
(function () {
  'use strict';

  function getBase() {
    var meta = document.querySelector('meta[name="site-base"]');
    var base = meta && meta.getAttribute('content') ? meta.getAttribute('content') : '/';
    if (base.endsWith('/')) return base; else return base + '/';
  }

  async function fetchManifest() {
    try {
      var res = await fetch(getBase() + 'resources.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to load /resources.json');
      return await res.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  function getParams() {
    var p = new URLSearchParams(location.search);
    return {
      q: p.get('q') ? p.get('q').trim() : '',
      tag: p.get('tag') ? p.get('tag').trim() : ''
    };
  }

  function normalize(str) {
    return (str || '').toLowerCase();
  }

  function itemMatchesQuery(item, q) {
    var nq = normalize(q);
    if (!nq) return true;
    if (normalize(item.title).includes(nq)) return true;
    if (item.description && normalize(item.description).includes(nq)) return true;
    if (item.tags && item.tags.some(function (t) { return normalize(t).includes(nq); })) return true;
    return false;
  }

  function itemMatchesTag(item, tag) {
    if (!tag) return true;
    return (item.tags || []).some(function (t) { return normalize(t) === normalize(tag); });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderResults(list, container, params) {
    container.innerHTML = '';
    if (!list.length) {
      var qText = params.q || params.tag || '';
      container.innerHTML = '<p>No results' + (qText ? ' for "' + escapeHtml(qText) + '"' : '') + '.</p>';
      return;
    }

    var ul = document.createElement('ul');
    ul.className = 'tags-results-list';
    list.forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'tags-item';

      var a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      a.className = 'tags-item-title';

      var pDesc = document.createElement('p');
      pDesc.className = 'tags-item-desc';
      pDesc.textContent = item.description || '';

      var pTags = document.createElement('p');
      pTags.className = 'tags-item-tags';
      if (item.tags && item.tags.length) {
        pTags.innerHTML = 'Tags: ' + item.tags.map(function (t) {
          return '<a class="tag-link" href="' + getBase() + 'tags/?tag=' + encodeURIComponent(t) + '">' + escapeHtml(t) + '</a>';
        }).join(' ');
      }

      li.appendChild(a);
      if (pDesc.textContent) li.appendChild(pDesc);
      if (item.tags && item.tags.length) li.appendChild(pTags);

      ul.appendChild(li);
    });

    container.appendChild(ul);
  }

  function setSearchInputValue(val) {
    var form = document.querySelector('form[name="tag-search"]');
    if (!form) return;
    var input = form.querySelector('input[name="q"]');
    if (input) input.value = val || '';
  }

  async function init() {
    var container = document.getElementById('tags-results');
    if (!container) return;
    var params = getParams();

    // Reflect query/tag into the nav search input
    setSearchInputValue(params.q || params.tag);

    var manifest = await fetchManifest();
    var filtered = manifest.filter(function (item) { return itemMatchesQuery(item, params.q); })
                           .filter(function (item) { return itemMatchesTag(item, params.tag); });
    filtered.sort(function (a, b) { return (a.title || '').localeCompare(b.title || ''); });
    renderResults(filtered, container, params);

    var resultsCount = filtered.length;
    var subtitle = document.getElementById('tags-subtitle');
    if (subtitle) subtitle.textContent = 'Found ' + resultsCount + ' result' + (resultsCount === 1 ? '' : 's') + '.';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
