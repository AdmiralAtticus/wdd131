
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
});

function createCard(culture) {
  const card = document.createElement('div');
  card.className = 'culture-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Learn about ${culture.country}`);
  card.addEventListener('click', () => openModal(culture.id));
  card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(culture.id); });

  card.innerHTML = `
    <div class="card-emoji-header" style="background:${culture.bgColor}">
      <span style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.15))">${culture.emoji}</span>
      <span class="card-region-badge">${culture.region}</span>
    </div>
    <div class="card-body">
      <div class="card-dish">${culture.dishShort}</div>
      <div class="card-country">${culture.country}</div>
      <p class="card-desc">${culture.description.substring(0, 110)}...</p>
      <div class="card-tags">${culture.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="card-phrase">
        <strong>${culture.phrases[0].native}</strong>
        <span style="color:var(--text-muted)"> — ${culture.phrases[0].translation}</span>
      </div>
    </div>
  `;
  return card;
}

function openModal(id) {
  const c = cultures.find(x => x.id === id);
  if (!c) return;

  document.getElementById('modalEmoji').textContent     = c.emoji;
  document.getElementById('modalCountry').textContent   = c.country;
  document.getElementById('modalRegion').textContent    = c.region;
  document.getElementById('modalDish').textContent      = c.dish;
  document.getElementById('modalDesc').textContent      = c.description;
  document.getElementById('modalTraditions').textContent = c.traditions;

  document.getElementById('modalPhrases').innerHTML = c.phrases.map(p =>
    `<div class="phrase-item">
       <div class="native">${p.native}</div>
       <div class="translation">${p.translation}</div>
     </div>`
  ).join('');

  document.getElementById('modalTags').innerHTML = c.tags.map(t =>
    `<span class="tag">${t}</span>`
  ).join('');

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') &&
      !e.target.classList.contains('modal-close')) return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });