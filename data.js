/* ═══════════════════════════════════
   data.js — Menu Items Data
═══════════════════════════════════ */

const MENU_ITEMS = [
  { id:1,  name:'Kopi Susu Rumahan',  emoji:'☕', cat:'coffee',    price:25000, desc:'Espresso lembut berpadu susu segar pilihan. Resep khas kami yang sudah turun-temurun.', badge:'Bestseller' },
  { id:2,  name:'Cold Brew Caramel',  emoji:'🧋', cat:'coffee',    price:30000, desc:'Cold brew 12 jam, caramel homemade, susu oat. Segar dan kaya rasa.',                   badge:'Favorit' },
  { id:3,  name:'Cappuccino Classic', emoji:'🫧', cat:'coffee',    price:28000, desc:'Espresso double shot dengan foam susu sempurna. Pilihan klasik yang tak pernah salah.',  badge:'' },
  { id:4,  name:'Americano',          emoji:'🖤', cat:'coffee',    price:22000, desc:'Double espresso dengan air panas. Simpel, bersih, dan penuh karakter.',                 badge:'' },
  { id:5,  name:'Hazelnut Latte',     emoji:'🍫', cat:'coffee',    price:32000, desc:'Espresso, susu panas, dan sirup hazelnut premium. Aroma yang memanjakan.',              badge:'Baru' },
  { id:6,  name:'Vietnamese Coffee',  emoji:'🇻🇳', cat:'coffee',   price:27000, desc:'Kopi robusta kuat dengan susu kental manis. Energi penuh sepanjang hari.',             badge:'' },

  { id:7,  name:'Matcha Latte',       emoji:'🍵', cat:'noncoffee', price:28000, desc:'Matcha grade A Jepang berpadu susu segar yang creamy dan lembut.',                     badge:'Favorit' },
  { id:8,  name:'Taro Milk Tea',      emoji:'💜', cat:'noncoffee', price:26000, desc:'Taro ungu segar dengan teh hitam dan boba kenyal. Instagramable dan lezat!',            badge:'' },
  { id:9,  name:'Chocolate Lava',     emoji:'🍫', cat:'noncoffee', price:29000, desc:'Cokelat rich Belgian blend, susu panas, taburan cocoa powder premium.',                badge:'Baru' },
  { id:10, name:'Lemon Honey Tea',    emoji:'🍋', cat:'noncoffee', price:24000, desc:'Teh herbal hangat dengan madu asli dan perasan lemon segar. Menyehatkan!',              badge:'' },
  { id:11, name:'Strawberry Yakult',  emoji:'🍓', cat:'noncoffee', price:23000, desc:'Perpaduan stroberi segar, yakult, dan soda. Segar dan menyegarkan!',                  badge:'Baru' },

  { id:12, name:'Roti Bakar Rumahan', emoji:'🍞', cat:'food',      price:18000, desc:'Roti tebal panggang dengan mentega, selai stroberi & cokelat khas kami.',              badge:'Bestseller' },
  { id:13, name:'Nasi Goreng Spesial',emoji:'🍳', cat:'food',      price:35000, desc:'Nasi goreng dengan telur ceplok, ayam suwir, dan acar segar.',                        badge:'Baru' },
  { id:14, name:'Croissant Butter',   emoji:'🥐', cat:'food',      price:22000, desc:'Croissant renyah di luar lembut di dalam dengan mentega premium.',                    badge:'' },
  { id:15, name:'Sandwich Klub',      emoji:'🥪', cat:'food',      price:32000, desc:'Roti gandum, ayam grill, keju, selada, tomat, dan saus spesial.',                     badge:'' },

  { id:16, name:'Cheesecake Jepang',  emoji:'🍰', cat:'snack',     price:28000, desc:'Japanese fluffy cheesecake, meleleh di mulut dan tak terlupakan.',                    badge:'Favorit' },
  { id:17, name:'Brownies Fudgy',     emoji:'🟫', cat:'snack',     price:22000, desc:'Brownies cokelat dense dan fudgy, taburan walnut panggang.',                          badge:'' },
  { id:18, name:'Waffle Klasik',      emoji:'🧇', cat:'snack',     price:30000, desc:'Waffle crispy luar lembut dalam, maple syrup & whipped cream.',                      badge:'Baru' },
  { id:19, name:'Cookie Oatmeal',     emoji:'🍪', cat:'snack',     price:15000, desc:'Cookie oatmeal raisins homemade. 3 pcs per porsi. Renyah & sehat.',                  badge:'' },

  { id:20, name:'Nasi Kuning',        emoji:'🍚', cat:'nasi',      price:32000, desc:'Nasi kuning aromatic dengan lauk pauk pilihan. Resep tradisional Jawa.',               badge:'Baru' },
  { id:21, name:'Nasi Biryani',       emoji:'🍛', cat:'nasi',      price:38000, desc:'Nasi biryani dengan ayam tandoori, yogurt, dan rempah-rempah premium.',                badge:'Baru' },
  { id:22, name:'Nasi Liwet Rumahan', emoji:'🍚', cat:'nasi',      price:30000, desc:'Nasi liwet tradisional dengan lauk ayam bakar, sambal, dan acar.',                   badge:'' },

  { id:23, name:'Ice Cream Vanilla',  emoji:'🍦', cat:'ice-cream', price:22000, desc:'Ice cream vanilla premium dengan topping madu dan granola.',                         badge:'' },
  { id:24, name:'Ice Cream Matcha',   emoji:'🍵', cat:'ice-cream', price:25000, desc:'Ice cream matcha Jepang yang creamy dengan dark chocolate.',                          badge:'Baru' },
  { id:25, name:'Ice Cream Cokelat',  emoji:'🍫', cat:'ice-cream', price:23000, desc:'Ice cream cokelat Belgian dengan topping almond panggang.',                          badge:'' },
  { id:26, name:'Ice Cream Strawberry', emoji:'🍓', cat:'ice-cream', price:24000, desc:'Ice cream stroberi segar dengan choco chips dan wafer cone.',                      badge:'' },

  { id:27, name:'Bingkisan Manis Kopi', emoji:'🎁', cat:'bingkisan', price:120000, desc:'Paket hadiah berisi kopi pilihan premium (500g). Kemasan elegan untuk orang terkasih.',  badge:'Populer' },
  { id:28, name:'Bingkisan Manis Snack', emoji:'🎁', cat:'bingkisan', price:85000, desc:'Paket brownies, cookies, dan waffle dalam kemasan cantik.',                            badge:'' },
  { id:29, name:'Bingkisan Asin Savoury', emoji:'🎁', cat:'bingkisan', price:95000, desc:'Paket snack asin pilihan dengan packaging premium untuk hadiah.',                     badge:'Baru' },
  { id:30, name:'Bingkisan Mix Kopi+Snack', emoji:'🎁', cat:'bingkisan', price:150000, desc:'Paket lengkap kopi premium dan snack pilihan dalam kotak eksklusif.',             badge:'Favorit' },

  { id:31, name:'Teh Jahe Herbal',    emoji:'🍵', cat:'herbal',    price:20000, desc:'Teh jahe hangat dengan madu dan lemon. Hangatkan tubuh & jaga kesehatan.',            badge:'' },
  { id:32, name:'Minuman Kunyit Asam', emoji:'🥤', cat:'herbal',   price:22000, desc:'Minuman tradisional kunyit asam dengan gula aren. Segar dan menyehatkan!',            badge:'Baru' },
  { id:33, name:'Wedang Ronde Herbal', emoji:'🍵', cat:'herbal',   price:25000, desc:'Wedang ronde hangat dengan gula merah dan jahe. Cocok di cuaca dingin.',              badge:'' },
  { id:34, name:'Jamu Beras Kencur',  emoji:'🥤', cat:'herbal',    price:18000, desc:'Jamu tradisional beras kencur untuk stamina dan pencernaan sehat.',                  badge:'' },
];
