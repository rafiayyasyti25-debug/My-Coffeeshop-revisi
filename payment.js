/* ═══════════════════════════════════════════
   KOPI RUMAHAN — Payment Module
   File: js/payment.js
   Handles payment modal, method selection, order confirm
═══════════════════════════════════════════ */

let selectedPayment = null;

/* ── Open payment modal ── */
function openPayment() {
  if (getCartCount() === 0) {
    showToast('⚠️ Keranjang masih kosong!');
    return;
  }
  updateModalSummary();
  closeCartSidebar();
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const modal = document.getElementById('payment-modal');
    if (modal) modal.classList.add('open');
  }, 150);
}

/* ── Close payment modal ── */
function closePayment() {
  const modal = document.getElementById('payment-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Update modal order summary ── */
function updateModalSummary() {
  const items = getCartItems();
  const total = getCartTotal();

  const container = document.getElementById('modal-items');
  const totalEl = document.getElementById('modal-total');
  if (!container || !totalEl) return;

  container.innerHTML = items.map(item => `
    <div class="summary-item">
      <span>${item.emoji} ${item.name} × ${item.qty}</span>
      <span>${formatPrice(item.price * item.qty)}</span>
    </div>
  `).join('');

  totalEl.textContent = formatPrice(total);
}

/* ── Select payment method ── */
function selectPayment(type, el) {
  selectedPayment = type;

  /* highlight selected card */
  document.querySelectorAll('.pay-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');

  /* show corresponding detail panel */
  ['qris', 'emoney', 'cash'].forEach(t => {
    const panel = document.getElementById('pay-detail-' + t);
    if (panel) panel.classList.toggle('show', t === type);
  });
}

/* ── Confirm & place order ── */
function confirmOrder() {
  if (!selectedPayment) {
    showToast('⚠️ Pilih metode pembayaran dulu ya!');
    return;
  }

  closePayment();

  setTimeout(() => {
    const modal = document.getElementById('success-modal');
    if (modal) modal.classList.add('open');

    /* reset cart & payment state */
    clearCart();
    selectedPayment = null;
    document.querySelectorAll('.pay-option').forEach(o => o.classList.remove('selected'));
    document.querySelectorAll('.pay-detail').forEach(d => d.classList.remove('show'));
  }, 250);
}

/* ── Close success modal ── */
function closeSuccess() {
  const modal = document.getElementById('success-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}
