/* ═══════════════════════════════════════════
   KOPI RUMAHAN — Chat Module
   File: js/chat.js
   Customer chat widget with bot auto-reply
═══════════════════════════════════════════ */

/* ─── Bot reply bank ── */
const BOT_REPLIES = {
  /* ─ Tentang Kedai ─ */
  tentang: [
    'Kopi Rumahan adalah kedai kopi dengan suasana homey dan nyaman di Cirebon! ☕ Kami menyajikan kopi berkualitas dengan cinta. 💕',
    'Kopi Rumahan didirikan pada tahun 2006 sebagai tempat berkumpul dan menikmati kopi premium. Bergabunglah dengan kami! 😊',
    'Kami adalah kedai kopi yang percaya bahwa setiap cangkir kopi adalah cerita. Kopi terbaik untuk pelanggan terbaik! ✨'
  ],
  founder: [
    'Kopi Rumahan didirikan dengan sepenuh hati oleh Rafi Ayyasy. Passion kami adalah memberikan pengalaman kopi terbaik! 🤗',
    'Pendiri kami adalah Rafi Ayyasy, seorang pencinta kopi sejati yang ingin berbagi kebahagiaan lewat kopi berkualitas. ☕💫'
  ],

  /* ─ Menu & Produk ─ */
  stok: [
    'Semua menu kami tersedia hari ini! Silakan order langsung ya. ✅',
    'Stok kita masih lengkap kok! Mau pesan yang mana? 😊',
    'Alhamdulillah stok masih banyak! Silakan pilih menu favoritmu. ☕'
  ],
  rekomendasi: [
    'Rekomendasi kami: Kopi Susu Rumahan (bestseller!) atau Cold Brew Caramel. Duanya sangat lezat! 🤤',
    'Coba Matcha Latte atau Vietnamese Coffee - dua favorit pelanggan kami! Dijamin puas 😍',
    'Untuk snack: Cheesecake Jepang kami sangat terkenal! Cocok dimakan sambil menikmati kopi. 🍰☕'
  ],
  bahan: [
    'Kami menggunakan bahan-bahan berkualitas premium! Kopi dipilih langsung dari petani terpercaya. ✨',
    'Semua bahan organik dan segar. Tidak ada pengawet atau bahan kimia berbahaya. Sehat kok! 💚',
    'Setiap detail diperhatikan - dari memilih biji kopi terbaik hingga susu premium organik. 🌿'
  ],
  alergen: [
    'Informasi alergen: Banyak produk kami mengandung gluten, kacang, dan susu. Sebaiknya tanya langsung ke kasir untuk detail lengkap ya. 🛑',
    'Ada yang alergi? Jangan ragu hubungi kami di +62 881-0275-52114. Tim kami siap bantu mencari menu yang aman untuk kamu! 💪'
  ],

  /* ─ Operasional ─ */
  harga: [
    'Harga sudah tertera di halaman menu ya. Ada yang ingin ditanya lebih lanjut? 💰',
    'Semua harga bisa dilihat di menu di atas. Kalau ada promo akan kami info! 🎉'
  ],
  buka: [
    'Kami buka dari jam 7 pagi ya! Yuk mampir segera. ☕',
    'Hari ini kami buka seperti biasa! Senin–Jumat 07.00–22.00 WIB. 🕖'
  ],
  tutup: [
    'Kami tutup jam 22.00 WIB (Senin–Jumat), jam 23.00 (Sabtu). Masih sempat! 📅',
    'Jam tutup kami ada di bagian Jam Buka di halaman ini ya.'
  ],
  libur: [
    'Kami buka setiap hari untuk melayani Anda! Tidak ada hari libur khusus. Tapi tetap buka dengan jam normal. 🗓️',
    'Minggu kami juga buka kok! Sama seperti hari biasa. Yuk berkumpul di Kopi Rumahan! ☕'
  ],
  wifi: [
    'Ada WiFi gratis untuk semua pelanggan! Password: kopirumahan2025 🛜',
    'WiFi tersedia! Kamu bisa tanya kasir untuk password-nya ya. 😊'
  ],
  parkir: [
    'Parkir gratis tersedia untuk motor dan mobil. Tenang aja! 🅿️',
    'Ada lahan parkir luas kok, gratis. Motor dan mobil bisa masuk. 🚗'
  ],

  /* ─ Pesanan & Pembayaran ─ */
  pesan: [
    'Kamu bisa pesan di website ini atau langsung datang ke kedai! 🛒',
    'Gampang! Pilih menu, klik +, lalu checkout. Atau datang langsung juga boleh. 😄'
  ],
  pembayaran: [
    'Kami terima berbagai metode pembayaran: Cash, Transfer Bank, E-wallet (GCash, Dana, OVO, dll), dan QRIS. 💳',
    'Pembayaran yang diterima: Uang tunai, transfer bank, GoPay, OVO, Dana, QRIS. Pilih yang paling mudah untuk kamu! 😊'
  ],
  kirim: [
    'Saat ini belum kami sediakan layanan delivery. Tapi kamu bisa datang langsung atau order untuk ambil nanti. 🏃‍♂️',
    'Untuk sekarang kami melayani on-site (di kedai) dan take-away saja. Maaf belum bisa delivery. 😅'
  ],
  reservasi: [
    'Mau reservasi meja? Hubungi kami di +62 881-0275-52114 atau bisa langsung datang! 📞',
    'Reservasi tersedia untuk rombongan atau acara spesial. Silakan hubungi kami untuk detail. 🎉'
  ],
  catering: [
    'Kami menyediakan layanan catering untuk acara Anda! Hubungi +62 881-0275-52114 untuk informasi paket. 🎊',
    'Ada kebutuhan catering? Team kami siap membantu! Chat atau hubungi langsung untuk konsultasi. 📦'
  ],

  /* ─ Promo & Diskon ─ */
  promo: [
    'Saat ini belum ada promo khusus, tapi pantau terus Instagram kami ya! 🎉',
    'Promo terbaru bisa dicek di Instagram @kopirumahan. Stay tuned! 📸'
  ],
  member: [
    'Program loyalitas kami akan segera hadir! Follow Instagram @kopirumahan untuk update terbaru. 🎁',
    'Pantau terus media sosial kami untuk program member eksklusif dengan berbagai benefit! 😍'
  ],

  /* ─ Lokasi & Kontak ─ */
  lokasi: [
    'Kami ada di Pilangsari, Kedawung, Cirebon, West Java 45153! Ada peta di halaman lokasi. 📍',
    'Alamat kami: Pilangsari, Kedawung, Cirebon, West Java 45153. Bisa klik tombol Google Maps di bawah! 🗺️'
  ],
  kontak: [
    'Hubungi kami:\n📞 +62 881-0275-52114\n📧 rafi.ayyasy.ti.25@cic.ac.id\n📍 Cirebon, Jawa Barat',
    'Cara menghubungi kami:\nTelepon: +62 881-0275-52114\nEmail: rafi.ayyasy.ti.25@cic.ac.id\nMedia sosial: @kopirumahan'
  ],
  sosmed: [
    'Ikuti kami di Instagram @kopirumahan untuk update menu, promo, dan foto-foto menarik! 📸',
    'Follow social media kami:\n📘 Facebook: Kopi Rumahan\n📸 Instagram: @kopirumahan\n🐦 Twitter/X: @kopirumahan'
  ],

  /* ─ Sapaan & Interaksi ─ */
  halo: [
    'Halo! Selamat datang di Kopi Rumahan! ☕ Ada yang bisa kami bantu?',
    'Hai! Senang melihat mu di sini. Apa yang bisa kami lakukan untuk mu hari ini? 😊',
    'Selamat datang! Kami siap melayani dengan sepenuh hati. 💕'
  ],
  pagi: [
    'Selamat pagi! Mulai hari dengan kopi terbaik kami yuk! ☀️☕',
    'Pagi! Sudah minum kopi hari ini? Yuk pesan yang spesial dari kami! 🌄'
  ],
  siang: [
    'Siang! Istirahat sebentar dengan kopi premium kami? ☕😊',
    'Siang! Ini waktu yang tepat untuk bersantai di Kopi Rumahan. 🌤️'
  ],
  sore: [
    'Sore! Suasana sore cocok untuk menikmati kopi dan snack kami. 🌅☕',
    'Sore! Kapan lagi kalau tidak sekarang? Mari mampir ke Kopi Rumahan! 🏪'
  ],
  malam: [
    'Malam! Kopi malam kami bisa membuat malam kamu lebih berkesan. 🌙☕',
    'Malam! Kami masih buka kok sampai jam 22.00 WIB. Yuk berkunjung! 🌙'
  ],
  terima: [
    'Sama-sama! Senang bisa membantu. Ada yang lain? 😊',
    'Dengan senang hati! Jangan ragu tanya lagi ya. ☕'
  ],

  /* ─ Empati & Support ─ */
  sedih: [
    'Semoga hari-harimu lebih baik ke depannya! Datang ke Kopi Rumahan, kopi kami bisa obati kesedihan mu. ❤️☕',
    'Don\'t worry, be happy! Segelas kopi hangat sambil berbincang dengan kami mungkin bisa membantu. 🤗☕'
  ],
  sibuk: [
    'Sibuk ya? Istirahat sebentar, minum kopi, dan refresh pikiran. Work-life balance itu penting! 💪☕',
    'Jangan lupa istirahat! Mampir ke Kopi Rumahan sebentar, minum kopi premium dan nikmati suasana homey. 🏪'
  ],
  stress: [
    'Stres? Kopi kami bisa jadi mood booster terbaik! Ditambah suasana nyaman Kopi Rumahan. Pasti lebih baik! 😊☕',
    'Stres adalah bagian dari kehidupan, tapi istirahat juga penting! Datang ke Kopi Rumahan dan relaksasi. 🧘‍♀️'
  ],

  /* ─ Pertanyaan Lucu ─ */
  lelucon: [
    'Kenapa kopi tidak pernah sendirian? Karena selalu disertai susu! ☕😄',
    'Tahu gak bedanya Kopi Rumahan dengan kopi lain? Kopi Rumahan dibuat dengan cinta! 💕☕',
    'Apa yang dibilang kopi ke susu? "Kita cocok!" ☕🥛😄'
  ],
  joke: [
    'Tanya: Kopi apa yang bisa masuk polisi? Jawab: Kopi terpidana! 😂☕',
    'Kopi panas bersifat sangat kental, kopi dingin bersifat sangat lancar. Jadi kopi itu memiliki kepribadian ganda! 😄'
  ],

  /* ─ Karir & Kolaborasi ─ */
  rekrut: [
    'Tertarik bergabung dengan tim Kopi Rumahan? Hubungi rafi.ayyasy.ti.25@cic.ac.id untuk info lowongan kerja! 💼',
    'Kami selalu mencari talenta baru yang passionate! Kirim CV ke rafi.ayyasy.ti.25@cic.ac.id untuk bergabung. 🎯'
  ],
  kolaborasi: [
    'Ada ide kolaborasi? Sangat tertarik! Hubungi kami di rafi.ayyasy.ti.25@cic.ac.id untuk diskusi lebih lanjut. 🤝',
    'Kolaborasi bisnis? Mari kita bicarakan! Email: rafi.ayyasy.ti.25@cic.ac.id atau telepon: +62 881-0275-52114 📧'
  ],

  default: [
    'Hmm, menarik! Apa yang lebih spesifik bisa kami bantu? Tanya soal menu, jam buka, lokasi, atau yang lain! 🤔',
    'Maaf kurang paham pertanyaannya. Tapi kami siap bantu soal kopi, menu, pesanan, lokasi, atau hal lainnya! 😊',
    'Pertanyaan bagus! Kalau tidak terjawab di sini, silakan hubungi kami: +62 881-0275-52114 atau rafi.ayyasy.ti.25@cic.ac.id 📞'
  ]
};

/* ── AI fallback configuration ── */
const AI_FALLBACK_CONFIG = {
  enabled: true,
  provider: 'openai', // 'openai' or 'gemini'
  apiKey: '', // Masukkan API key OpenAI atau Gemini di sini
  openaiModel: 'gpt-3.5-turbo',
  geminiModel: 'gemini-1.5-pro',
  temperature: 0.65
};

const AI_SYSTEM_PROMPT = `You are a friendly Indonesian coffee shop assistant for Kopi Rumahan in Cirebon. Answer in Bahasa Indonesia when the user asks in Indonesian. Keep responses concise, polite, and helpful. Use local information: Pilangsari, Kedawung, Cirebon, West Java 45153. If asked about delivery, mention that only on-site pickup is available. Provide short customer-friendly replies.`;

async function callOpenAI(prompt) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AI_FALLBACK_CONFIG.apiKey}`
    },
    body: JSON.stringify({
      model: AI_FALLBACK_CONFIG.openaiModel,
      messages: [
        { role: 'system', content: AI_SYSTEM_PROMPT },
        { role: 'user', content: prompt }
      ],
      temperature: AI_FALLBACK_CONFIG.temperature,
      max_tokens: 250
    })
  });
  const data = await response.json();
  if (!response.ok || !data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error(data.error?.message || 'OpenAI response invalid');
  }
  return data.choices[0].message.content.trim();
}

async function callGemini(prompt) {
  const response = await fetch(`https://gemini.googleapis.com/v1/models/${AI_FALLBACK_CONFIG.geminiModel}:generateMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AI_FALLBACK_CONFIG.apiKey}`
    },
    body: JSON.stringify({
      messages: [
        { author: 'system', content: { type: 'text', text: AI_SYSTEM_PROMPT } },
        { author: 'user', content: { type: 'text', text: prompt } }
      ],
      temperature: AI_FALLBACK_CONFIG.temperature
    })
  });
  const data = await response.json();
  const text = data?.candidates?.[0]?.message?.content?.[0]?.text || data?.candidates?.[0]?.content?.[0]?.text;
  if (!response.ok || !text) {
    throw new Error(data.error?.message || 'Gemini response invalid');
  }
  return text.trim();
}

async function getAIFallbackReply(text) {
  if (!AI_FALLBACK_CONFIG.enabled) {
    return pickReply(BOT_REPLIES.default);
  }
  if (!AI_FALLBACK_CONFIG.apiKey) {
    return 'AI belum dikonfigurasi, jadi saya menjawab dengan pola biasa. Silakan isi API key di js/chat.js agar AI fallback bekerja.';
  }
  try {
    if (AI_FALLBACK_CONFIG.provider === 'gemini') {
      return await callGemini(text);
    }
    return await callOpenAI(text);
  } catch (error) {
    console.error('AI fallback error:', error);
    return 'Maaf, sepertinya AI sedang tidak dapat menjawab sekarang. Silakan coba lagi atau tanyakan langsung ke kami.';
  }
}

/* ── Helper to pick random reply ── */
function pickReply(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* ── Escape HTML to prevent XSS ── */
function escHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Current time string ── */
function timeNow() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

/* ── Bot response logic ── */
function getBotReply(text) {
  const t = text.toLowerCase();
  
  /* ─ Tentang Kedai ─ */
  if (t.includes('tentang') || t.includes('siapa') || t.includes('founder') || t.includes('rafi') || t.includes('pemilik') || t.includes('owner'))
    return t.includes('rafi') || t.includes('founder') || t.includes('pemilik') || t.includes('owner') 
      ? pickReply(BOT_REPLIES.founder) 
      : pickReply(BOT_REPLIES.tentang);
  
  /* ─ Menu & Produk ─ */
  if (t.includes('stok') || t.includes('stock') || t.includes('masih ada') || t.includes('tersedia'))
    return pickReply(BOT_REPLIES.stok);
  if (t.includes('rekomendasi') || t.includes('saran') || t.includes('recommend') || t.includes('bagus') || t.includes('enak'))
    return pickReply(BOT_REPLIES.rekomendasi);
  if (t.includes('bahan') || t.includes('ingredient') || t.includes('organik') || t.includes('alami') || t.includes('kualitas'))
    return pickReply(BOT_REPLIES.bahan);
  if (t.includes('alergi') || t.includes('alergen') || t.includes('gluten') || t.includes('kacang') || t.includes('susu intolerant'))
    return pickReply(BOT_REPLIES.alergen);
  
  /* ─ Operasional ─ */
  if (t.includes('harga') || t.includes('berapa') || t.includes('price') || t.includes('cost'))
    return pickReply(BOT_REPLIES.harga);
  if (t.includes('buka') && !t.includes('tutup') && !t.includes('booking'))
    return pickReply(BOT_REPLIES.buka);
  if (t.includes('tutup') || t.includes('close') || t.includes('closed') || t.includes('closing'))
    return pickReply(BOT_REPLIES.tutup);
  if (t.includes('libur') || t.includes('hari libur') || t.includes('weekend') || t.includes('minggu'))
    return pickReply(BOT_REPLIES.libur);
  if (t.includes('wifi') || t.includes('wi-fi') || t.includes('internet') || t.includes('password'))
    return pickReply(BOT_REPLIES.wifi);
  if (t.includes('parkir') || t.includes('motor') || t.includes('mobil') || t.includes('parking') || t.includes('kendaraan'))
    return pickReply(BOT_REPLIES.parkir);
  
  /* ─ Pesanan & Pembayaran ─ */
  if (t.includes('pesan') || t.includes('order') || t.includes('beli') || t.includes('cara'))
    return pickReply(BOT_REPLIES.pesan);
  if (t.includes('pembayaran') || t.includes('payment') || t.includes('bayar') || t.includes('transfer') || t.includes('cash') || t.includes('card'))
    return pickReply(BOT_REPLIES.pembayaran);
  if (t.includes('kirim') || t.includes('delivery') || t.includes('antar') || t.includes('ojek'))
    return pickReply(BOT_REPLIES.kirim);
  if (t.includes('reservasi') || t.includes('booking') || t.includes('reserve') || t.includes('pesan meja'))
    return pickReply(BOT_REPLIES.reservasi);
  if (t.includes('catering') || t.includes('paket') || t.includes('rombongan') || t.includes('acara') || t.includes('event'))
    return pickReply(BOT_REPLIES.catering);
  
  /* ─ Promo & Diskon ─ */
  if (t.includes('promo') || t.includes('diskon') || t.includes('discount') || t.includes('sale') || t.includes('hemat'))
    return pickReply(BOT_REPLIES.promo);
  if (t.includes('member') || t.includes('loyalitas') || t.includes('loyalty') || t.includes('point'))
    return pickReply(BOT_REPLIES.member);
  
  /* ─ Lokasi & Kontak ─ */
  if (t.includes('lokasi') || t.includes('alamat') || t.includes('dimana') || t.includes('maps') || t.includes('where') || t.includes('pilangsari') || t.includes('kedawung') || t.includes('cirebon'))
    return pickReply(BOT_REPLIES.lokasi);
  if (t.includes('kontak') || t.includes('hubungi') || t.includes('telepon') || t.includes('phone') || t.includes('email') || t.includes('whatsapp'))
    return pickReply(BOT_REPLIES.kontak);
  if (t.includes('instagram') || t.includes('facebook') || t.includes('twitter') || t.includes('tiktok') || t.includes('sosmed') || t.includes('social media'))
    return pickReply(BOT_REPLIES.sosmed);
  
  /* ─ Sapaan & Interaksi ─ */
  if (t.includes('halo') || t.includes('hello') || t.includes('hi') || t.includes('hey'))
    return pickReply(BOT_REPLIES.halo);
  if (t.includes('pagi') || t.includes('morning') || t.includes('selamat pagi'))
    return pickReply(BOT_REPLIES.pagi);
  if (t.includes('siang') || t.includes('noon') || t.includes('afternoon') && !t.includes('sore'))
    return pickReply(BOT_REPLIES.siang);
  if (t.includes('sore') || t.includes('afternoon'))
    return pickReply(BOT_REPLIES.sore);
  if (t.includes('malam') || t.includes('night') || t.includes('evening'))
    return pickReply(BOT_REPLIES.malam);
  if (t.includes('terima kasih') || t.includes('makasih') || t.includes('thanks') || t.includes('tq') || t.includes('thx'))
    return pickReply(BOT_REPLIES.terima);
  
  /* ─ Empati & Support ─ */
  if (t.includes('sedih') || t.includes('sad') || t.includes('bersedih') || t.includes('sedih hati'))
    return pickReply(BOT_REPLIES.sedih);
  if (t.includes('sibuk') || t.includes('busy') || t.includes('banyak kerjaan'))
    return pickReply(BOT_REPLIES.sibuk);
  if (t.includes('stress') || t.includes('stressed') || t.includes('pusing') || t.includes('jenuh'))
    return pickReply(BOT_REPLIES.stress);
  
  /* ─ Pertanyaan Lucu ─ */
  if (t.includes('lelucon') || t.includes('joke') || t.includes('funny') || t.includes('lawak') || t.includes('bercanda'))
    return pickReply(BOT_REPLIES.joke);
  if (t.includes('kenapa kopi') || t.includes('apa bedanya'))
    return pickReply(BOT_REPLIES.lelucon);
  
  /* ─ Karir & Kolaborasi ─ */
  if (t.includes('rekrut') || t.includes('kerja') || t.includes('job') || t.includes('lowongan') || t.includes('karir') || t.includes('career') || t.includes('intern'))
    return pickReply(BOT_REPLIES.rekrut);
  if (t.includes('kolaborasi') || t.includes('collaborate') || t.includes('kerjasama') || t.includes('partnership'))
    return pickReply(BOT_REPLIES.kolaborasi);
  
  /* Default jika tidak ada match */
  return null;
}

/* ── Append message bubble ── */
function appendMessage(text, type) {
  const msgs = document.getElementById('chat-msgs');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'msg ' + type;
  div.innerHTML = escHtml(text).replace(/\n/g, '<br>') + `<div class="msg-time">${timeNow()}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

/* ── Send user message ── */
function sendMsg() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, 'outgoing');
  input.value = '';

  /* simulate typing delay */
  setTimeout(async () => {
    const reply = getBotReply(text);
    if (reply) {
      appendMessage(reply, 'incoming');
      return;
    }
    const aiReply = await getAIFallbackReply(text);
    appendMessage(aiReply, 'incoming');
  }, 750 + Math.random() * 400);
}

/* ── Toggle chat window ── */
function toggleChat() {
  const win = document.getElementById('chat-window');
  const notif = document.getElementById('chat-notif');
  if (!win) return;
  win.classList.toggle('open');
  if (notif) notif.style.display = 'none';
  if (win.classList.contains('open')) {
    const input = document.getElementById('chat-input');
    if (input) input.focus();
  }
}

/* ── Init chat with welcome messages ── */
function initChat() {
  const msgs = document.getElementById('chat-msgs');
  if (!msgs) return;
  msgs.innerHTML = '';
  setTimeout(() => appendMessage('Halo! Selamat datang di Kopi Rumahan ☕\nAda yang bisa kami bantu hari ini?', 'incoming'), 400);
  setTimeout(() => appendMessage('Tanya soal menu, jam buka, lokasi, pembayaran, atau bahkan lelucon! 😄🎉', 'incoming'), 1000);
  setTimeout(() => appendMessage('Contoh: "Apa menu rekomendasi?", "Jam buka berapa?", "Ada WiFi?", atau "Bercanda dong!" 😊', 'incoming'), 1600);
}

/* ── Allow Enter key to send ── */
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('chat-input');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendMsg();
    });
  }
});
