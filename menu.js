/* ═══════════════════════════════════
   menu.js — Menu Rendering & Filtering
   Depends on: data.js, cart.js
═══════════════════════════════════ */

function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

function buildMenuCard(item) {
  const badgeHtml = item.badge
    ? `<div class="menu-badge">${item.badge}</div>`
    : '';
  return `
    <div class="menu-card" data-id="${item.id}">
      <div class="menu-card-img">
        <span>${item.emoji}</span>
        ${badgeHtml}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <div class="menu-price">${formatRupiah(item.price)}</div>
          <button class="add-btn" onclick="addToCart(${item.id})" title="Tambah ke keranjang" aria-label="Tambah ${item.name}">+</button>
        </div>
      </div>
    </div>
  `;
}

function renderMenu(cat) {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  const filtered = cat === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === cat);
  grid.innerHTML = filtered.map(buildMenuCard).join('');
}

function filterMenu(cat, clickedBtn) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  clickedBtn.classList.add('active');
  renderMenu(cat);
}
