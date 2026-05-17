/* ═══════════════════════════════════════════
   KOPI RUMAHAN — Cart Module
   File: js/cart.js
   Handles cart state, UI rendering, sidebar
═══════════════════════════════════════════ */

/* ── State ── */
let cart = {};

/* ── Helpers ── */
function formatPrice(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function getCartItems() {
  return Object.values(cart);
}

function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return getCartItems().reduce((sum, item) => sum + item.qty, 0);
}

/* ── Actions ── */
function addToCart(id) {
  const item = MENU_ITEMS.find(i => i.id === id);
  if (!item) return;
  if (cart[id]) {
    cart[id] = { ...cart[id], qty: cart[id].qty + 1 };
  } else {
    cart[id] = { ...item, qty: 1 };
  }
  renderCart();
  updateCartBadge();
  showToast('✅ ' + item.name + ' ditambahkan!');
}

function removeFromCart(id) {
  if (!cart[id]) return;
  if (cart[id].qty > 1) {
    cart[id] = { ...cart[id], qty: cart[id].qty - 1 };
  } else {
    delete cart[id];
  }
  renderCart();
  updateCartBadge();
}

function clearCart() {
  cart = {};
  renderCart();
  updateCartBadge();
}

/* ── UI ── */
function updateCartBadge() {
  const count = getCartCount();
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}

function renderCart() {
  const items = getCartItems();
  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  if (!container || !footer) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🧺</div>
        <strong>Keranjang masih kosong</strong>
        <p>Yuk pilih menu favoritmu!</p>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="removeFromCart(${item.id})" aria-label="Kurangi">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="addToCart(${item.id})" aria-label="Tambah">+</button>
      </div>
    </div>
  `).join('');

  const totalEl = document.getElementById('cart-total-price');
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
  footer.style.display = 'block';
}

/* ── Sidebar toggle ── */
function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (!sidebar || !overlay) return;
  const isOpen = sidebar.classList.toggle('open');
  overlay.classList.toggle('open', isOpen);
  if (isOpen) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = '';
}

function closeCartSidebar() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}
