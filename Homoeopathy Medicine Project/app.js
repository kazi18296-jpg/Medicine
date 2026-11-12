"use strict";

const PRODUCTS = [
  { id: "arnica-30", name: "Arnica Montana 30C", brand: "Aurelia Naturals", category: "Dilutions", type: "Dilution", pack: "30 ml", price: 185, discount: 10, stock: 18, rating: 4.8, reviews: 86, bg: "#eff0e2", tone: ["#98714a", "#c49b6a"], form: "bottle", description: "A sample homoeopathic dilution presented for product-catalogue demonstration.", info: "30C potency · 30 ml bottle · Store away from direct sunlight." },
  { id: "calendula-mt", name: "Calendula Officinalis Q", brand: "Greenleaf Remedies", category: "Mother Tinctures", type: "Mother Tincture", pack: "30 ml", price: 220, discount: 0, stock: 12, rating: 4.7, reviews: 54, bg: "#f4eadc", tone: ["#a47545", "#d0a873"], form: "dropper", description: "A sample mother tincture for browsing the demonstration catalogue.", info: "Mother tincture · 30 ml bottle · Read the product label before use." },
  { id: "biochemic-no6", name: "Biochemic Tissue Salts No. 6", brand: "Aurelia Naturals", category: "Biochemic", type: "Biochemic", pack: "25 g", price: 145, discount: 5, stock: 27, rating: 4.6, reviews: 42, bg: "#e9eee4", tone: ["#8da28a", "#b8c5a5"], form: "tablets", description: "Sample biochemic tablets. This listing is for demonstration and does not make health claims.", info: "25 g · Tablet format · Consult a qualified healthcare professional for advice." },
  { id: "belladonna-200", name: "Belladonna 200C", brand: "Hill & Herb", category: "Dilutions", type: "Dilution", pack: "11 ml", price: 125, discount: 0, stock: 0, rating: 4.5, reviews: 29, bg: "#eee8e2", tone: ["#885646", "#ae795d"], form: "bottle", description: "A sample dilution listing. Availability is simulated for this frontend demo.", info: "200C potency · 11 ml bottle · Currently out of stock in this demo." },
  { id: "cough-comfort", name: "Herbal Comfort Syrup", brand: "Meadow & Co.", category: "Syrups", type: "Syrup", pack: "100 ml", price: 265, discount: 15, stock: 9, rating: 4.4, reviews: 61, bg: "#f1e8dc", tone: ["#8a633e", "#c0925e"], form: "bottle", description: "A fictional sample syrup listing for demonstrating product details and shopping controls.", info: "100 ml bottle · Sample product data · Not medical advice." },
  { id: "arnica-tablets", name: "Arnica Tablets 6X", brand: "Greenleaf Remedies", category: "Tablets", type: "Tablets", pack: "20 g", price: 160, discount: 8, stock: 32, rating: 4.9, reviews: 105, bg: "#edf0e7", tone: ["#95a17a", "#bbc79d"], form: "tablets", description: "Sample tablets displayed in the demo storefront. Information is for general reference only.", info: "6X potency · 20 g · Always read product packaging and seek professional advice." },
  { id: "skin-soothe", name: "Calendula Care Ointment", brand: "Hill & Herb", category: "Ointments", type: "Ointment", pack: "25 g", price: 195, discount: 0, stock: 14, rating: 4.3, reviews: 37, bg: "#f3eadf", tone: ["#b18453", "#d1aa79"], form: "jar", description: "A fictional sample ointment listing for exploring the product page and cart.", info: "25 g jar · Sample product · Consult a professional for personal care advice." },
  { id: "daily-wellness", name: "Daily Wellness Drops", brand: "Aurelia Naturals", category: "Drops", type: "Drops", pack: "30 ml", price: 310, discount: 12, stock: 20, rating: 4.6, reviews: 73, bg: "#e8eee8", tone: ["#728c75", "#9eb197"], form: "dropper", description: "Sample drop product with fictional catalogue copy for this local demo.", info: "30 ml bottle · Demo listing · Not a substitute for medical guidance." },
  { id: "travel-kit", name: "Everyday Travel Kit", brand: "Meadow & Co.", category: "Combo", type: "Combo", pack: "6 items", price: 495, discount: 10, stock: 7, rating: 4.7, reviews: 23, bg: "#f0ece2", tone: ["#9a8057", "#c2a77a"], form: "combo", description: "A sample combination pack to demonstrate combo products in the shop.", info: "Six sample items · Contents are illustrative only in this demo." },
  { id: "healthcare-kit", name: "Home Healthcare Essentials", brand: "Greenleaf Remedies", category: "Healthcare", type: "Healthcare", pack: "1 set", price: 390, discount: 0, stock: 5, rating: 4.2, reviews: 18, bg: "#e9eeeb", tone: ["#829994", "#acc0b6"], form: "combo", description: "A sample healthcare set for showing catalogue and shopping features.", info: "One sample set · Product contents are illustrative." }
];
const CATEGORIES = ["All products", "Mother Tinctures", "Dilutions", "Biochemic", "Tablets", "Drops", "Syrups", "Ointments", "Combo", "Healthcare"];
const STORAGE = { cart: "rr_cart_v1", wish: "rr_wishlist_v1", users: "rr_demo_users_v1", session: "rr_demo_session_v1", bookings: "rr_demo_bookings_v1", orders: "rr_demo_orders_v1", prescriptions: "rr_demo_prescriptions_v1", inventory: "rr_demo_inventory_v1" };
const DOCTORS = [
  { id: "ananya-mehta", name: "Dr. Ananya Mehta", initials: "AM", photo: "assets/doctors/ananya.svg", qualification: "BHMS, MD (Hom.)", specialization: "Classical Homoeopathy", experience: 12, fee: 700, days: [1, 2, 3, 4, 5], slots: ["10:00 AM", "11:30 AM", "3:00 PM", "4:30 PM"], bio: "Dr. Mehta takes a thoughtful, patient-centred approach to consultations. Her profile is sample content for this website demo.", languages: "English, Hindi, Gujarati", color: "#e7eee2" },
  { id: "kabir-shah", name: "Dr. Kabir Shah", initials: "KS", photo: "assets/doctors/kabir.svg", qualification: "BHMS, PGD (Counselling)", specialization: "Family Wellness", experience: 9, fee: 600, days: [1, 2, 4, 5, 6], slots: ["9:30 AM", "12:00 PM", "2:30 PM", "5:00 PM"], bio: "Dr. Shah's sample profile demonstrates how patients can review a doctor's interests and availability before booking.", languages: "English, Hindi, Marathi", color: "#f2eadc" },
  { id: "mira-nair", name: "Dr. Mira Nair", initials: "MN", photo: "assets/doctors/mira.svg", qualification: "BHMS, MD (Hom.)", specialization: "Women's Wellness", experience: 15, fee: 850, days: [2, 3, 4, 5, 6], slots: ["10:30 AM", "1:00 PM", "3:30 PM", "5:30 PM"], bio: "Dr. Nair's profile is illustrative demo content, designed to show a detailed practitioner page.", languages: "English, Malayalam, Tamil", color: "#e8eaf0" }
];
let page = "shop";
let profileTab = "profile";
let selectedCategory = "All products";
let selectedDoctorId = DOCTORS[0].id;
let appointmentTab = "upcoming";
let bookingDraft = {};
let checkoutDraft = { step: "address", paymentMethod: "COD", prescriptionId: "" };
let operationsTab = "orders";
let toastTimer;
const app = document.getElementById("app");
const modalRoot = document.getElementById("modalRoot");

function read(key, fallback) {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch { return fallback; }
}
function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function cartData() { return read(STORAGE.cart, {}); }
function wishlistData() { return read(STORAGE.wish, []); }
function currentUser() { return read(STORAGE.session, null); }
function appointmentData() { return read(STORAGE.bookings, []); }
function findDoctor(id) { return DOCTORS.find(doctor => doctor.id === id); }
function inventoryData() { return read(STORAGE.inventory, {}); }
function stockFor(product) { const saved = inventoryData()[product.id]; return Number.isInteger(saved) && saved >= 0 ? saved : product.stock; }
function prescriptionData() { return read(STORAGE.prescriptions, []); }
function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function money(value) { return `₹${Number(value).toLocaleString("en-IN")}`; }
function discountPrice(product) { return Math.round(product.price * (100 - product.discount) / 100); }
function findProduct(id) { return PRODUCTS.find(product => product.id === id); }
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function updateCounts() {
  const cart = cartData();
  document.getElementById("cartCount").textContent = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  document.getElementById("wishlistCount").textContent = wishlistData().length;
  const user = currentUser();
  document.getElementById("accountLabel").textContent = user ? "Account" : "Sign in";
}
function productArt(product, className = "") {
  return `<div class="product-object ${product.form} ${className}" style="--bottle-dark:${product.tone[0]};--bottle-light:${product.tone[1]}"><span>${safeText(product.brand.split(" ")[0])}<br>${safeText(product.category)}</span></div>`;
}
function productCard(product, wishlistMode = false) {
  const saved = wishlistData().includes(product.id);
  const stock = stockFor(product);
  const oldPrice = product.discount ? `<span class="old-price">${money(product.price)}</span>` : "";
  const stockLabel = stock ? `${stock} in stock` : "Out of stock";
  return `<article class="product-card">
    <div class="product-visual" style="--product-bg:${product.bg}" data-detail="${product.id}" tabindex="0" role="button" aria-label="View ${safeText(product.name)} details">
      ${product.discount ? `<span class="discount-tag">${product.discount}% off</span>` : ""}
      <button class="wish-toggle ${saved ? "saved" : ""}" data-wish="${product.id}" aria-label="${saved ? "Remove from" : "Add to"} wishlist">${saved ? "♥" : "♡"}</button>${productArt(product)}
    </div>
    <div class="product-info">
      <div class="product-brand">${safeText(product.brand)}</div>
      <a class="product-name" href="#" data-detail="${product.id}">${safeText(product.name)}</a>
      <div class="product-meta"><span>${safeText(product.pack)}</span><span class="rating">★ ${product.rating} (${product.reviews})</span></div>
      <div class="price-row"><span class="price">${money(discountPrice(product))}</span>${oldPrice}<span class="stock">${stockLabel}</span></div>
      <div class="product-actions"><button class="button button-primary" ${wishlistMode ? `data-move="${product.id}"` : `data-add="${product.id}"`} ${stock ? "" : "disabled"}>${stock ? wishlistMode ? "Move to cart" : "Add to cart" : "Unavailable"}</button><button class="button button-secondary" data-detail="${product.id}" aria-label="Product details">Details</button></div>
    </div>
  </article>`;
}
function renderShop() {
  const brands = [...new Set(PRODUCTS.map(product => product.brand))];
  app.innerHTML = `<section class="hero">
    <div class="hero-content"><div class="eyebrow">A gentler way to shop</div><h1>Care that feels<br><em>close to home.</em></h1>
    <p>Explore a thoughtfully arranged catalogue and discover a calmer, more considered way to shop for your wellness essentials.</p>
    <div class="hero-actions"><a class="button button-primary" href="#catalogue" data-scroll="catalogue">Explore the shop <span aria-hidden="true">→</span></a><a href="#" class="text-link" data-page="appointments">Meet our doctors ↗</a></div></div>
    <div class="hero-art" aria-hidden="true"><div class="sun-disc"></div><div class="bottle"></div><div class="bottle-label">ROOT &<br>REMEDY<br><small>BOTANICAL CARE</small></div><i class="leaf leaf-one"></i><i class="leaf leaf-two"></i><i class="leaf leaf-three"></i></div>
  </section>
  <div class="trust-row"><div class="trust-item"><span class="trust-icon">✳</span> Carefully selected catalogue</div><div class="trust-item"><span class="trust-icon">♧</span> Made for mindful browsing</div><div class="trust-item"><span class="trust-icon">♡</span> Care, with a human touch</div></div>
  <section class="shop-section" id="catalogue">
    <div class="section-heading"><div><div class="eyebrow">Find your essentials</div><h2>Shop the collection</h2><p>Browse our sample catalogue by category or search by name, brand, or type.</p></div><a class="text-link" href="#" data-page="appointments">Book a consultation →</a></div>
    <div class="category-strip" id="categoryStrip">${CATEGORIES.map(category => `<button class="category-chip ${category === selectedCategory ? "selected" : ""}" data-category="${safeText(category)}">${safeText(category)}</button>`).join("")}</div>
    <div class="toolbar">
      <div class="search-wrap"><span aria-hidden="true">⌕</span><input id="searchInput" class="field" placeholder="Search name, brand, category or type" aria-label="Search products"></div>
      <select id="brandFilter" class="select-field" aria-label="Filter by brand"><option value="">All brands</option>${brands.map(brand => `<option>${safeText(brand)}</option>`).join("")}</select>
      <select id="priceFilter" class="select-field" aria-label="Filter by price"><option value="">Any price</option><option value="0-150">Under ₹150</option><option value="150-250">₹150 – ₹250</option><option value="250-400">₹250 – ₹400</option><option value="400+">Over ₹400</option></select>
      <select id="availabilityFilter" class="select-field" aria-label="Filter availability"><option value="">Availability</option><option value="yes">In stock</option><option value="no">Out of stock</option></select>
      <select id="ratingFilter" class="select-field" aria-label="Filter by rating"><option value="">Any rating</option><option value="4">4★ & above</option><option value="4.5">4.5★ & above</option></select>
      <button class="clear-button" id="clearFilters">Clear filters</button>
    </div>
    <div class="results-line"><span id="resultsCount"></span><span>Sample products · Demo pricing</span></div>
    <div class="product-grid" id="productGrid"></div>
  </section>`;
  const state = { query: "", brand: "", price: "", availability: "", rating: "" };
  const paint = () => {
    const query = state.query.trim().toLowerCase();
    const results = PRODUCTS.filter(product => {
      const matchesQuery = !query || [product.name, product.brand, product.category, product.type].some(value => value.toLowerCase().includes(query));
      const matchesCategory = selectedCategory === "All products" || product.category === selectedCategory;
      const matchesBrand = !state.brand || product.brand === state.brand;
      const finalPrice = discountPrice(product);
      const matchesPrice = !state.price || (state.price === "400+" ? finalPrice >= 400 : finalPrice >= Number(state.price.split("-")[0]) && finalPrice < Number(state.price.split("-")[1]));
      const matchesStock = !state.availability || (state.availability === "yes" ? stockFor(product) > 0 : stockFor(product) === 0);
      return matchesQuery && matchesCategory && matchesBrand && matchesPrice && matchesStock && (!state.rating || product.rating >= Number(state.rating));
    });
    document.getElementById("resultsCount").textContent = `${results.length} ${results.length === 1 ? "product" : "products"}`;
    document.getElementById("productGrid").innerHTML = results.length ? results.map(product => productCard(product)).join("") : `<div class="empty-state"><strong>No products found</strong>Try changing your search or clearing the filters.</div>`;
  };
  document.getElementById("categoryStrip").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    selectedCategory = button.dataset.category;
    document.querySelectorAll(".category-chip").forEach(chip => chip.classList.toggle("selected", chip === button));
    paint();
  });
  const updateFilters = event => {
    const target = event.target;
    if (target.id === "searchInput") state.query = target.value;
    if (target.id === "brandFilter") state.brand = target.value;
    if (target.id === "priceFilter") state.price = target.value;
    if (target.id === "availabilityFilter") state.availability = target.value;
    if (target.id === "ratingFilter") state.rating = target.value;
    paint();
  };
  document.querySelector(".toolbar").addEventListener("input", updateFilters);
  document.querySelector(".toolbar").addEventListener("change", updateFilters);
  document.getElementById("clearFilters").addEventListener("click", () => {
    selectedCategory = "All products";
    state.query = state.brand = state.price = state.availability = state.rating = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("brandFilter").value = "";
    document.getElementById("priceFilter").value = "";
    document.getElementById("availabilityFilter").value = "";
    document.getElementById("ratingFilter").value = "";
    document.querySelectorAll(".category-chip").forEach(chip => chip.classList.toggle("selected", chip.dataset.category === selectedCategory));
    paint();
  });
  paint();
}
function cartTotals() {
  return Object.entries(cartData()).reduce((totals, [id, quantity]) => {
    const product = findProduct(id);
    if (!product || !quantity) return totals;
    totals.subtotal += product.price * quantity;
    totals.discount += (product.price - discountPrice(product)) * quantity;
    totals.count += quantity;
    return totals;
  }, { subtotal: 0, discount: 0, count: 0 });
}
function cartAmounts() {
  const totals = cartTotals();
  const discountedSubtotal = totals.subtotal - totals.discount;
  const tax = Math.round(discountedSubtotal * 0.05);
  const delivery = totals.count ? (discountedSubtotal >= 500 ? 0 : 40) : 0;
  return { ...totals, discountedSubtotal, tax, delivery, total: discountedSubtotal + tax + delivery };
}
function orderData() { return read(STORAGE.orders, []); }
function orderInvoice(order) {
  return `<div class="invoice-paper"><div class="invoice-head"><div><div class="page-kicker">Root & Remedy · Demo invoice</div><h2>Order invoice</h2></div><div><strong>${safeText(order.orderId)}</strong><span>${safeText(new Date(order.createdAt).toLocaleString())}</span></div></div><div class="invoice-customer"><strong>Bill to</strong><span>${safeText(order.customer.name)}</span><span>${safeText(order.customer.email)} · ${safeText(order.customer.mobile)}</span><span>${safeText(order.customer.address)}</span></div><div class="invoice-table"><div class="invoice-row invoice-header"><span>Product</span><span>Qty</span><span>Unit price</span><span>Amount</span></div>${order.items.map(item => `<div class="invoice-row"><span>${safeText(item.name)}</span><span>${item.quantity}</span><span>${money(item.unitPrice)}</span><span>${money(item.lineTotal)}</span></div>`).join("")}</div><div class="invoice-totals"><span>Subtotal</span><strong>${money(order.subtotal)}</strong><span>Discount</span><strong>− ${money(order.discount)}</strong><span>Tax (5%)</span><strong>${money(order.tax)}</strong><span>Delivery</span><strong>${order.delivery ? money(order.delivery) : "Free"}</strong><span class="invoice-grand">Total</span><strong class="invoice-grand">${money(order.total)}</strong></div><div class="invoice-payment"><strong>Payment record</strong><span>Payment ID: ${safeText(order.payment.paymentId)}</span><span>Order ID: ${safeText(order.payment.orderId)}</span><span>${safeText(order.payment.method)} · ${safeText(order.payment.status)} · ${safeText(new Date(order.payment.date).toLocaleString())}</span></div><p class="form-hint">Demo invoice only. This is not a tax invoice, payment receipt, or real order.</p></div>`;
}
function orderCard(order, customerView = false) {
  const stages = ["Pending", "Confirmed", "Processing", "Shipped", "Delivered"];
  const current = stages.indexOf(order.status);
  return `<article class="order-card"><div class="order-card-head"><div><div class="page-kicker">${safeText(order.orderId)} · ${safeText(new Date(order.createdAt).toLocaleDateString())}</div><h3>${safeText(money(order.total))} <span>· ${order.items.length} item${order.items.length === 1 ? "" : "s"}</span></h3></div><span class="status-pill status-${safeText(order.status.toLowerCase())}">${safeText(order.status)}</span></div><div class="order-progress">${stages.map((stage,index)=>`<span class="${index<current?"complete":index===current?"current":""}"><i>${index<current?"✓":index+1}</i>${stage}</span>`).join("")}</div><div class="order-card-items">${order.items.map(item=>`${safeText(item.name)} × ${item.quantity}`).join(" · ")}</div><div class="order-card-meta"><span>Payment: <strong>${safeText(order.payment.method)} · ${safeText(order.payment.status)}</strong></span><span>Prescription: <strong>${order.prescriptionId ? "Attached" : "None"}</strong></span></div><div class="order-card-actions"><button class="button button-secondary" data-invoice="${safeText(order.orderId)}">View invoice</button>${!customerView && current >= 0 && current < stages.length - 1 ? `<button class="button button-primary" data-advance-order="${safeText(order.orderId)}">Mark ${safeText(stages[current + 1])}</button>` : ""}</div></article>`;
}
function prescriptionCard(item, admin = false) {
  return `<article class="prescription-card"><div><strong>${safeText(item.fileName)}</strong><span>${safeText(item.fileType)} · ${Math.ceil(item.fileSize / 1024)} KB · ${safeText(item.email)}</span><span>${safeText(item.orderId ? `Order ${item.orderId}` : "Not attached to an order")} · ${safeText(new Date(item.createdAt).toLocaleDateString())}</span></div><span class="status-pill status-${safeText(item.status.toLowerCase())}">${safeText(item.status)}</span>${admin && item.status === "Pending review" ? `<div class="prescription-actions"><button class="button button-secondary" data-prescription-decision="${safeText(item.prescriptionId)}" data-decision="Rejected">Reject</button><button class="button button-primary" data-prescription-decision="${safeText(item.prescriptionId)}" data-decision="Approved">Approve</button></div>` : `<span class="form-hint">${admin ? "File contents are not stored in this demo." : "Review status"}</span>`}</article>`;
}
function showInvoice(orderId) {
  const order = orderData().find(item => item.orderId === orderId);
  if (!order) { showToast("Invoice was not found."); return; }
  modalRoot.innerHTML = `<div class="modal-backdrop" data-dismiss><section class="modal invoice-modal" role="dialog" aria-modal="true" aria-labelledby="invoiceTitle"><button class="modal-close" data-dismiss aria-label="Close dialog">×</button><div id="invoiceContent">${orderInvoice(order)}</div><button class="button button-primary no-print" id="printInvoice">Print invoice</button></section></div>`;
}
function renderOperations() {
  const orders = orderData().slice().reverse();
  const prescriptions = prescriptionData().slice().reverse();
  const inventory = PRODUCTS.map(product => ({ product, stock: stockFor(product) }));
  const low = inventory.filter(item => item.stock > 0 && item.stock <= 5).length;
  const out = inventory.filter(item => item.stock === 0).length;
  let content = "";
  if (operationsTab === "orders") content = orders.length ? `<div class="operations-list">${orders.map(order => orderCard(order)).join("")}</div>` : `<div class="empty-state"><strong>No demo orders yet</strong>Place a sample order from the cart to see tracking here.</div>`;
  if (operationsTab === "prescriptions") content = prescriptions.length ? `<div class="operations-list">${prescriptions.map(item => prescriptionCard(item, true)).join("")}</div>` : `<div class="empty-state"><strong>No prescription records</strong>Test a demo prescription upload from your customer account or checkout.</div>`;
  if (operationsTab === "inventory") content = `<div class="inventory-report"><div><span>Catalogue items</span><strong>${inventory.length}</strong></div><div><span>Low stock (≤5)</span><strong class="${low ? "report-warning" : ""}">${low}</strong></div><div><span>Out of stock</span><strong class="${out ? "report-danger" : ""}">${out}</strong></div></div><div class="inventory-table"><div class="inventory-row inventory-head"><span>Product</span><span>Current qty</span><span>Availability</span><span>Update stock</span></div>${inventory.map(({product,stock})=>`<div class="inventory-row"><span><strong>${safeText(product.name)}</strong><small>${safeText(product.brand)} · ${safeText(product.category)}</small></span><span>${stock}</span><span><span class="stock-state ${stock===0?"out":stock<=5?"low":"available"}">${stock===0?"Out of stock":stock<=5?"Low stock":"Available"}</span></span><span><form class="stock-update-form" data-stock-product="${product.id}"><input type="number" min="0" max="9999" value="${stock}" aria-label="New stock for ${safeText(product.name)}" required><button class="button button-secondary">Save</button></form></span></div>`).join("")}</div><div class="notice">Inventory is sample data stored in this browser. Stock changes made by a demo order reduce available quantities.</div>`;
  app.innerHTML = `<section class="page-shell"><div class="page-kicker">Local prototype tools</div><h1 class="page-title">Shop operations</h1><p class="page-intro">Demo order fulfilment, prescription review and stock controls. This page is not protected by an admin login and must not be used for real customer data.</p><div class="operations-tabs">${[["orders","Orders & tracking"],["prescriptions","Prescription review"],["inventory","Inventory & reports"]].map(([key,label])=>`<button class="operations-tab ${operationsTab===key?"active":""}" data-operations-tab="${key}">${label}</button>`).join("")}</div><div class="operations-panel">${content}</div><div class="notice"><strong>Privacy limitation:</strong> no prescription file contents or real payment credentials are stored. Use fictional data only. Real operations require secure backend storage, access control, and payment/email integrations appropriate to local rules.</div></section>`;
}
function storePrescription(file, email, orderId = "") {
  const allowed = ["application/pdf", "image/jpeg", "image/png"];
  if (!file || !allowed.includes(file.type) || file.size <= 0 || file.size > 5 * 1024 * 1024) return { error: "Choose a non-empty PDF, JPG or PNG file no larger than 5 MB." };
  const record = {
    prescriptionId: `RX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
    fileName: file.name,
    fileType: file.type,
    fileSize: file.size,
    email: String(email || "").trim().toLowerCase(),
    orderId,
    status: "Pending review",
    createdAt: new Date().toISOString()
  };
  const records = prescriptionData();
  records.push(record);
  write(STORAGE.prescriptions, records);
  return { record };
}
function placeDemoOrder() {
  const cart = cartData();
  const items = Object.entries(cart).map(([id, quantity]) => ({ product: findProduct(id), quantity })).filter(item => item.product);
  if (!items.length) { showToast("Your cart is empty."); page = "cart"; render(); return; }
  const unavailable = items.find(({ product, quantity }) => quantity > stockFor(product));
  if (unavailable) {
    showToast(`${unavailable.product.name} no longer has enough demo stock. Please review your cart.`);
    page = "cart"; render(); return;
  }
  const totals = cartAmounts();
  const now = new Date().toISOString();
  const orderId = `RR-ORD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
  const paymentId = `PAY-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
  const status = "Confirmed";
  const order = {
    orderId,
    createdAt: now,
    customer: { ...checkoutDraft.address },
    items: items.map(({ product, quantity }) => ({ productId: product.id, name: product.name, quantity, unitPrice: discountPrice(product), originalUnitPrice: product.price, lineTotal: discountPrice(product) * quantity })),
    subtotal: totals.subtotal,
    discount: totals.discount,
    tax: totals.tax,
    delivery: totals.delivery,
    total: totals.total,
    status,
    statusHistory: [{ status: "Pending", at: now }, { status, at: now }],
    payment: { paymentId, orderId, amount: totals.total, method: checkoutDraft.paymentMethod, status: checkoutDraft.paymentMethod === "COD" ? "Due on delivery" : "Paid (demo)", date: now },
    prescriptionId: checkoutDraft.prescriptionId || "",
    notificationStatus: "Simulated (not sent)"
  };
  const inventory = inventoryData();
  items.forEach(({ product, quantity }) => { inventory[product.id] = stockFor(product) - quantity; });
  write(STORAGE.inventory, inventory);
  if (order.prescriptionId) {
    const records = prescriptionData();
    const prescription = records.find(item => item.prescriptionId === order.prescriptionId);
    if (prescription) { prescription.orderId = orderId; write(STORAGE.prescriptions, records); }
  }
  const orders = orderData();
  orders.push(order);
  write(STORAGE.orders, orders);
  write(STORAGE.cart, {});
  checkoutDraft = { step: "address", paymentMethod: "COD", prescriptionId: "" };
  page = "orderConfirmation";
  lastOrderId = orderId;
  render();
}
let lastOrderId = "";
function renderOrderConfirmation() {
  const order = orderData().find(item => item.orderId === lastOrderId);
  if (!order) { page = "account"; profileTab = "orders"; renderProfile(); return; }
  app.innerHTML = `<section class="page-shell confirmation-page"><div class="confirmation-hero"><span class="confirmation-check">✓</span><div class="page-kicker">Demo order placed</div><h1 class="page-title">Thank you, ${safeText(order.customer.name.split(" ")[0])}.</h1><p>Your demo order <strong>${safeText(order.orderId)}</strong> is confirmed. No real payment or shipment was made.</p><div class="confirmation-order-meta"><span>Order status<strong>${safeText(order.status)}</strong></span><span>Payment<strong>${safeText(order.payment.method)} · ${safeText(order.payment.status)}</strong></span><span>Amount<strong>${money(order.total)}</strong></span><span>Email notice<strong>Simulated · not sent</strong></span></div></div><div class="content-card confirmation-items"><h2 class="modal-title">Order summary</h2>${order.items.map(item=>`<div class="summary-line"><span>${safeText(item.name)} × ${item.quantity}</span><span>${money(item.lineTotal)}</span></div>`).join("")}<div class="summary-line"><span>Tax</span><span>${money(order.tax)}</span></div><div class="summary-line"><span>Delivery</span><span>${order.delivery?money(order.delivery):"Free"}</span></div><div class="summary-line total"><span>Total</span><span>${money(order.total)}</span></div><div class="confirmation-actions"><button class="button button-secondary" data-invoice="${safeText(order.orderId)}">View / print invoice</button><button class="button button-primary" data-page="account" data-profile-target="orders">Track in my orders</button><button class="button button-secondary" data-page="operations">Advance demo delivery</button></div></div><div class="notice">Demo only. Payment, order fulfillment, delivery updates, and email notifications are not connected to real services.</div></section>`;
}
function renderCart() {
  const cart = cartData();
  const products = Object.entries(cart).map(([id, quantity]) => ({ product: findProduct(id), quantity })).filter(item => item.product);
  const totals = cartAmounts();
  app.innerHTML = `<section class="page-shell"><div class="page-kicker">Your shopping bag</div><h1 class="page-title">Your cart</h1><p class="page-intro">Review sample items before checkout. Orders and payments are simulated for this frontend demo.</p>
    <div class="cart-layout"><div class="content-card">${products.length ? products.map(({ product, quantity }) => `<div class="cart-item">
      <div class="mini-art" style="--product-bg:${product.bg}">${productArt(product)}</div>
      <div><h3>${safeText(product.name)}</h3><p>${safeText(product.pack)} · ${safeText(product.brand)} · ${stockFor(product)} available</p><div class="quantity"><button data-qty="${product.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${quantity}</span><button data-qty="${product.id}" data-change="1" aria-label="Increase quantity" ${quantity >= stockFor(product) ? "disabled" : ""}>+</button></div></div>
      <div class="item-price">${money(discountPrice(product) * quantity)}<button class="remove-link" data-remove="${product.id}">Remove</button></div></div>`).join("") : `<div class="empty-state"><strong>Your cart is waiting</strong>Add a few favourites from the shop and they will show up here.<p><a class="button button-primary" href="#" data-page="shop">Browse the shop</a></p></div>`}
    </div><aside class="summary-card"><h3>Order summary</h3><div class="summary-line"><span>Subtotal</span><span>${money(totals.subtotal)}</span></div><div class="summary-line"><span>Discount</span><span>− ${money(totals.discount)}</span></div><div class="summary-line"><span>Tax estimate (5%)</span><span>${money(totals.tax)}</span></div><div class="summary-line"><span>Delivery</span><span>${totals.delivery ? money(totals.delivery) : totals.count ? "Free" : money(0)}</span></div><div class="summary-line total"><span>Estimated total</span><span>${money(totals.total)}</span></div><button class="button button-primary" id="startCheckout" ${products.length ? "" : "disabled"}>Proceed to checkout →</button><div class="notice">Demo checkout only. No real payment is processed. Tax and delivery are illustrative estimates.</div></aside></div>
  </section>`;
}
function renderCheckout() {
  const items = Object.entries(cartData()).map(([id, quantity]) => ({ product: findProduct(id), quantity })).filter(item => item.product);
  if (!items.length) { page = "cart"; renderCart(); showToast("Your cart is empty."); return; }
  const totals = cartAmounts();
  const steps = ["address", "prescription", "payment", "review"];
  const labels = ["Address", "Prescription", "Payment", "Review"];
  const activeIndex = steps.indexOf(checkoutDraft.step);
  let body = "";
  if (checkoutDraft.step === "address") {
    const user = currentUser() || {};
    const address = checkoutDraft.address || {};
    body = `<h2 class="modal-title">1. Delivery details</h2><form id="checkoutAddressForm"><div class="form-field"><label for="checkoutName">Full name</label><input id="checkoutName" name="name" autocomplete="name" value="${safeText(address.name || user.name || "")}" required></div><div class="form-grid"><div class="form-field"><label for="checkoutEmail">Email address</label><input id="checkoutEmail" name="email" type="email" autocomplete="email" value="${safeText(address.email || user.email || "")}" required></div><div class="form-field"><label for="checkoutMobile">Mobile number</label><input id="checkoutMobile" name="mobile" type="tel" inputmode="numeric" pattern="[0-9]{8,15}" value="${safeText(address.mobile || user.mobile || "")}" required><span class="form-hint">Enter 8–15 digits.</span></div></div><div class="form-field"><label for="checkoutAddress">Delivery address</label><textarea id="checkoutAddress" name="address" autocomplete="street-address" required>${safeText(address.address || user.address || "")}</textarea></div><button class="button button-primary" type="submit">Continue to prescription →</button></form>`;
  } else if (checkoutDraft.step === "prescription") {
    const selected = prescriptionData().find(item => item.prescriptionId === checkoutDraft.prescriptionId);
    const prescriptions = prescriptionData().filter(item => item.email === (checkoutDraft.address?.email || "").toLowerCase());
    body = `<h2 class="modal-title">2. Prescription (optional)</h2><p class="page-intro">Attach an image or PDF to this demo order if you want to test the prescription flow. Uploading is not secure here; do not use a real prescription.</p><form id="checkoutPrescriptionForm"><div class="form-field"><label for="orderPrescription">Choose image or PDF (max 5 MB)</label><input id="orderPrescription" type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"></div><button class="button button-secondary" type="submit">Attach selected file</button></form>${selected ? `<div class="attached-prescription"><strong>Attached:</strong> ${safeText(selected.fileName)} · Status: ${safeText(selected.status)}<button class="remove-link" data-remove-prescription>Remove attachment</button></div>` : `<p class="form-hint">No prescription attached. This is optional for the sample catalogue.</p>`}${prescriptions.length ? `<div class="form-field"><label for="existingPrescription">Or attach an existing demo prescription</label><select id="existingPrescription" class="select-field"><option value="">Choose one</option>${prescriptions.map(item => `<option value="${safeText(item.prescriptionId)}">${safeText(item.fileName)} · ${safeText(item.status)}</option>`).join("")}</select></div>` : ""}<div class="checkout-step-actions"><button class="button button-secondary" data-checkout-back="address">← Back</button><button class="button button-primary" data-checkout-next="payment">Continue to payment →</button></div><div class="notice">Only the filename and review status are stored in this demo. The file itself is not uploaded or saved. Real prescription handling needs secure, compliant server storage and authorized staff access.</div>`;
  } else if (checkoutDraft.step === "payment") {
    const methods = [["COD","Cash on delivery"],["UPI","UPI (simulated)"],["Card","Card (simulated)"],["Net Banking","Net banking (simulated)"],["Gateway","Payment gateway (not connected)"]];
    body = `<h2 class="modal-title">3. Choose a payment method</h2><div class="payment-methods">${methods.map(([value,label]) => `<label class="payment-choice ${checkoutDraft.paymentMethod === value ? "selected" : ""}"><input type="radio" name="paymentMethod" value="${value}" ${checkoutDraft.paymentMethod === value ? "checked" : ""}><span><strong>${label}</strong><small>${value === "COD" ? "Pay at delivery · no payment collected now" : "Demo only · never enter payment credentials"}</small></span></label>`).join("")}</div><div class="summary-line total"><span>Amount due</span><span>${money(totals.total)}</span></div><div class="checkout-step-actions"><button class="button button-secondary" data-checkout-back="prescription">← Back</button><button class="button button-primary" data-checkout-next="review">Review order →</button></div><div class="notice">All non-COD payment options are simulated. No card, UPI PIN, bank, or gateway credentials are requested or stored.</div>`;
  } else {
    const address = checkoutDraft.address;
    const attached = prescriptionData().find(item => item.prescriptionId === checkoutDraft.prescriptionId);
    body = `<h2 class="modal-title">4. Review & place your order</h2><div class="checkout-review-block"><strong>Deliver to</strong><span>${safeText(address.name)} · ${safeText(address.mobile)}</span><span>${safeText(address.email)}</span><span>${safeText(address.address)}</span></div><div class="checkout-review-block"><strong>Items</strong>${items.map(({product,quantity})=>`<span>${safeText(product.name)} × ${quantity} · ${money(discountPrice(product)*quantity)}</span>`).join("")}</div><div class="checkout-review-block"><strong>Payment</strong><span>${safeText(checkoutDraft.paymentMethod)} · ${checkoutDraft.paymentMethod === "COD" ? "Pay at delivery" : "Simulated payment confirmation"}</span><span>Prescription: ${attached ? safeText(attached.fileName) + " · " + safeText(attached.status) : "None attached"}</span></div><div class="summary-line"><span>Subtotal</span><span>${money(totals.subtotal)}</span></div><div class="summary-line"><span>Discount</span><span>− ${money(totals.discount)}</span></div><div class="summary-line"><span>Tax estimate (5%)</span><span>${money(totals.tax)}</span></div><div class="summary-line"><span>Delivery</span><span>${totals.delivery ? money(totals.delivery) : "Free"}</span></div><div class="summary-line total"><span>Total</span><span>${money(totals.total)}</span></div><div class="checkout-step-actions"><button class="button button-secondary" data-checkout-back="payment">← Back</button><button class="button button-primary" id="placeDemoOrder">Place demo order · ${money(totals.total)}</button></div><div class="notice">Placing an order updates this demo inventory. No real shipment, payment, or email is initiated.</div>`;
  }
  app.innerHTML = `<section class="page-shell"><div class="page-kicker">Safe, simple checkout</div><h1 class="page-title">Complete your order</h1><div class="checkout-steps">${labels.map((label,index)=>`<div class="checkout-step ${index===activeIndex?"active":index<activeIndex?"done":""}"><span>${index<activeIndex?"✓":index+1}</span>${label}</div>`).join("")}</div><div class="checkout-layout"><div class="content-card checkout-form-card">${body}</div><aside class="summary-card"><h3>Order summary</h3>${items.map(({product,quantity})=>`<div class="summary-line"><span>${safeText(product.name)} × ${quantity}</span><span>${money(discountPrice(product)*quantity)}</span></div>`).join("")}<div class="summary-line"><span>Tax + delivery</span><span>${money(totals.tax+totals.delivery)}</span></div><div class="summary-line total"><span>Total</span><span>${money(totals.total)}</span></div><div class="notice">Demo checkout · sample products · no real charges</div></aside></div></section>`;
}
function renderWishlist() {
  const products = wishlistData().map(findProduct).filter(Boolean);
  app.innerHTML = `<section class="page-shell"><div class="page-kicker">Saved for later</div><h1 class="page-title">Your wishlist</h1><p class="page-intro">A little list of things you would like to come back to. Saved on this browser only.</p>
    ${products.length ? `<div class="wishlist-grid">${products.map(product => productCard(product, true)).join("")}</div>` : `<div class="content-card empty-state"><strong>No saved items yet</strong>Tap the heart on a product to keep it close.<p><a class="button button-primary" href="#" data-page="shop">Explore the shop</a></p></div>`}
  </section>`;
}
function appointmentDateTime(appointment) {
  const [time, meridiem] = String(appointment.time || "12:00 PM").split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return new Date(`${appointment.date}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`);
}
function syncCompletedAppointments() {
  const appointments = appointmentData();
  let changed = false;
  appointments.forEach(appointment => {
    if (!appointment.status) {
      appointment.status = "Requested";
      appointment.appointmentId = `RR-OLD-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      appointment.doctorId = appointment.doctorId || DOCTORS.find(doctor => doctor.name === appointment.doctor)?.id;
      appointment.paymentStatus = "Not paid";
      appointment.statusHistory = [{ status: "Requested", at: appointment.createdAt || new Date().toISOString() }];
      changed = true;
    }
    if (appointment.status === "Confirmed" && appointmentDateTime(appointment) <= new Date()) {
      appointment.status = "Completed";
      appointment.updatedAt = new Date().toISOString();
      appointment.statusHistory = [...(appointment.statusHistory || []), { status: "Completed", at: appointment.updatedAt }];
      changed = true;
    }
  });
  if (changed) write(STORAGE.bookings, appointments);
  return appointments;
}
function formatAppointmentDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString(undefined, { weekday: "short", year: "numeric", month: "short", day: "numeric" });
}
function statusClass(status) { return String(status || "Requested").toLowerCase().replace(/\s+/g, "-"); }
function canCancelAppointment(appointment) {
  if (appointment.status === "Requested") return true;
  return appointment.status === "Confirmed" && appointmentDateTime(appointment).getTime() - Date.now() > 24 * 60 * 60 * 1000;
}
function appointmentCard(appointment) {
  const doctor = findDoctor(appointment.doctorId);
  const doctorName = doctor?.name || appointment.doctor || "Doctor";
  const history = appointment.statusHistory || [{ status: appointment.status || "Requested" }];
  return `<article class="appointment-record">
    <div class="appointment-record-top"><div><div class="page-kicker">${safeText(appointment.appointmentId || "Demo appointment")}</div><h3>${safeText(doctorName)}</h3><p>${safeText(doctor?.specialization || "Consultation")} · ${safeText(appointment.patientName || "")}</p></div><span class="status-pill status-${statusClass(appointment.status)}">${safeText(appointment.status || "Requested")}</span></div>
    <div class="appointment-record-details"><span><strong>Date</strong>${safeText(formatAppointmentDate(appointment.date))}</span><span><strong>Time</strong>${safeText(appointment.time)}</span><span><strong>Consultation fee</strong>${money(appointment.fee || doctor?.fee || 0)}</span><span><strong>Payment</strong>${safeText(appointment.paymentStatus || "Pending")}</span><span><strong>Email notice</strong>${safeText(appointment.notificationStatus || "Not sent")}</span></div>
    <div class="status-history" aria-label="Appointment status timeline">${history.map((item, index) => `<span class="history-step ${index === history.length - 1 ? "current" : ""}">${safeText(item.status)}</span>`).join("<span class=\"history-arrow\" aria-hidden=\"true\">→</span>")}</div>
    <div class="appointment-record-actions">${canCancelAppointment(appointment) ? `<button class="button button-secondary" data-cancel-appointment="${safeText(appointment.appointmentId)}">Cancel appointment</button><span class="form-hint">Free cancellation until 24 hours before the visit.</span>` : appointment.status === "Confirmed" ? `<span class="form-hint">Cancellation is closed within 24 hours of the visit.</span>` : ""}${appointment.status === "Cancelled" ? `<span class="form-hint">The time slot is available to book again.</span>` : ""}</div>
  </article>`;
}
function renderAppointmentRecords() {
  const appointments = syncCompletedAppointments().sort((a, b) => appointmentDateTime(a) - appointmentDateTime(b));
  const filtered = appointments.filter(item => {
    if (appointmentTab === "upcoming") return item.status === "Requested" || item.status === "Confirmed";
    return item.status === appointmentTab;
  });
  return `<section class="my-appointments" id="myAppointments"><div class="section-heading"><div><div class="eyebrow">Your visit history</div><h2>My appointments</h2><p>View bookings made in this browser, including their payment and status.</p></div></div>
    <div class="appointment-tabs" role="tablist" aria-label="Appointment status">${[["upcoming","Upcoming"],["Completed","Completed"],["Cancelled","Cancelled"]].map(([key,label]) => `<button role="tab" aria-selected="${appointmentTab === key}" class="appointment-tab ${appointmentTab === key ? "active" : ""}" data-appt-tab="${key}">${label}<span>${appointments.filter(item => key === "upcoming" ? item.status === "Requested" || item.status === "Confirmed" : item.status === key).length}</span></button>`).join("")}</div>
    <div class="appointment-record-list">${filtered.length ? filtered.map(appointmentCard).join("") : `<div class="content-card empty-state"><strong>No ${appointmentTab === "upcoming" ? "upcoming" : appointmentTab.toLowerCase()} appointments</strong>When you book a demo visit, it will appear here.</div>`}</div>
  </section>`;
}
function authPage(mode = "login", message = "") {
  const title = { login: "Welcome back", register: "Create your account", forgot: "Reset your password" }[mode];
  const intro = { login: "Sign in to see your saved items and account details.", register: "A few details to make your demo shopping experience yours.", forgot: "Enter the email address used for your demo account." }[mode];
  const fields = mode === "register" ? `<div class="form-grid"><div class="form-field"><label for="fullName">Full name</label><input id="fullName" name="name" autocomplete="name" required></div><div class="form-field"><label for="mobile">Mobile number</label><input id="mobile" name="mobile" type="tel" autocomplete="tel" pattern="[0-9]{8,15}" required></div><div class="form-field full"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="form-field full"><label for="address">Address</label><textarea id="address" name="address" autocomplete="street-address" required></textarea></div><div class="form-field full"><label for="password">Password</label><input id="password" name="password" type="password" minlength="8" autocomplete="new-password" required><span class="form-hint">At least 8 characters. Enter digits only. Demo credentials stay in this browser.</span></div></div>` :
    mode === "forgot" ? `<div class="form-field"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required></div>` :
    `<div class="form-field"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="form-field"><label for="password">Password</label><input id="password" name="password" type="password" autocomplete="current-password" required></div>`;
  const authFoot = mode === "login"
    ? `<span>New here? <button data-auth="register">Create account</button></span><button data-auth="forgot">Forgot password?</button>`
    : `<button data-auth="login">← Back to sign in</button>${mode === "forgot" ? "" : `<span>Already registered? <button data-auth="login">Sign in</button></span>`}`;
  app.innerHTML = `<section class="page-shell auth-wrap"><div class="auth-card"><div class="page-kicker">Your account</div><h2>${title}</h2><p>${intro}</p>${message ? `<div class="form-${message.type}">${safeText(message.text)}</div>` : ""}
    <form id="authForm" data-mode="${mode}">${fields}<button class="button button-primary" type="submit">${mode === "register" ? "Create demo account" : mode === "forgot" ? "Show reset steps" : "Sign in"}</button></form>
    <div class="auth-foot">${authFoot}</div>
    <div class="notice">Demo only: account data is stored in this browser and is not secure. No email or SMS verification messages are sent. Do not enter a password you use elsewhere.</div></div></section>`;
}
function renderProfile() {
  const user = currentUser();
  if (!user) { authPage(); return; }
  const bookings = syncCompletedAppointments().filter(item => item.email === user.email);
  const orders = orderData().filter(item => item.customer?.email === user.email);
  let content = "";
  if (profileTab === "profile") content = `<h2 class="modal-title">Your details</h2><form id="profileForm"><div class="form-grid"><div class="form-field"><label for="profileName">Full name</label><input id="profileName" name="name" value="${safeText(user.name)}" required></div><div class="form-field"><label for="profileMobile">Mobile number</label><input id="profileMobile" name="mobile" value="${safeText(user.mobile)}" required></div><div class="form-field full"><label for="profileEmail">Email address</label><input id="profileEmail" value="${safeText(user.email)}" disabled></div><div class="form-field full"><label for="profileAddress">Address</label><textarea id="profileAddress" name="address" required>${safeText(user.address)}</textarea></div></div><button class="button button-primary">Save profile</button><div class="notice">Email/mobile verification is simulated in this demo. No verification messages are sent.</div></form>`;
  if (profileTab === "password") content = `<h2 class="modal-title">Change password</h2><form id="passwordForm"><div class="form-field"><label for="oldPassword">Current password</label><input id="oldPassword" name="oldPassword" type="password" required></div><div class="form-field"><label for="newPassword">New password</label><input id="newPassword" name="newPassword" type="password" minlength="8" required></div><button class="button button-primary">Update password</button></form>`;
  if (profileTab === "addresses") content = `<h2 class="modal-title">Saved address</h2><p class="page-intro">${safeText(user.address)}</p><p class="notice">Edit your delivery address in the Your details tab. Address storage is local to this demo.</p>`;
  if (profileTab === "orders") content = `<h2 class="modal-title">Order history</h2>${orders.length ? orders.slice().reverse().map(order => orderCard(order, true)).join("") : `<p class="page-intro">No demo orders yet. Add products to your cart to try checkout.</p>`}`;
  if (profileTab === "appointments") content = `<h2 class="modal-title">Appointment history</h2>${bookings.length ? bookings.map(appointmentCard).join("") : `<p class="page-intro">You have no demo appointments yet.</p>`}`;
  if (profileTab === "prescription") {
    const records = prescriptionData().filter(item => item.email === user.email);
    content = `<h2 class="modal-title">Prescription records</h2><p class="page-intro">Upload a PDF or image to test the demo review flow. The selected file itself is never uploaded or stored.</p><form id="prescriptionForm"><div class="form-field"><label for="prescriptionFile">Choose image or PDF (max 5 MB)</label><input id="prescriptionFile" type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"></div><button class="button button-primary">Submit for demo review</button><div id="uploadResult"></div></form>${records.length ? `<div class="prescription-list">${records.slice().reverse().map(prescriptionCard).join("")}</div>` : `<p class="form-hint">No prescription metadata on file.</p>`}<div class="notice">Not secure or compliant storage. Do not select real prescriptions or sensitive health information.</div>`;
  }
  app.innerHTML = `<section class="page-shell"><div class="page-kicker">Your account</div><h1 class="page-title">Hello, ${safeText(user.name.split(" ")[0])}</h1><p class="page-intro">Manage your profile, saved address and demo history.</p><div class="profile-grid"><nav class="profile-nav" aria-label="Account sections">${[["profile","Your details"],["addresses","Addresses"],["orders","Order history"],["appointments","Appointment history"],["prescription","Prescription upload"],["password","Change password"]].map(([key,label]) => `<button class="${profileTab === key ? "active" : ""}" data-profile-tab="${key}">${label}</button>`).join("")}<button data-page="operations">Shop operations (demo)</button><button id="logoutButton">Log out</button></nav><div class="content-card">${content}</div></div><div class="notice">Demo account information is stored in browser storage only. It is not secure and must not be used for real customer data.</div></section>`;
}
function renderAppointments() {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  app.innerHTML = `<section class="page-shell"><div class="page-kicker">A conversation starts here</div><h1 class="page-title">Find your doctor</h1><p class="page-intro">Explore practitioner profiles, qualifications, consultation fees, working days and sample availability. Choose a doctor to see their detailed profile and book a visit.</p><div class="appointment-grid">${DOCTORS.map(doctor => `<article class="doctor-card"><img class="doctor-card-photo" src="${doctor.photo}" alt="Illustrative profile portrait for ${safeText(doctor.name)}"><div class="doctor-specialty">${safeText(doctor.specialization)}</div><h3>${safeText(doctor.name)}</h3><p>${safeText(doctor.qualification)} · ${doctor.experience} years' experience</p><div class="doctor-card-meta"><span>Consultation fee</span><strong>${money(doctor.fee)}</strong></div><div class="doctor-card-meta"><span>Available</span><strong>${doctor.days.map(day => dayNames[day]).join(", ")}</strong></div><div class="doctor-card-actions"><button class="button button-secondary" data-doctor-profile="${doctor.id}">View profile</button><button class="button button-primary" data-book="${doctor.id}">Book visit</button></div></article>`).join("")}</div>${renderAppointmentRecords()}<div class="notice">Doctor profiles and availability are illustrative demo data. Bookings and payment are simulated in this browser only; no real clinic or email is contacted.</div></section>`;
}
function renderDoctorProfile() {
  const doctor = findDoctor(selectedDoctorId);
  if (!doctor) { page = "appointments"; renderAppointments(); return; }
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  app.innerHTML = `<section class="page-shell"><button class="text-link back-link" data-page="appointments">← All doctors</button><div class="doctor-profile-layout"><div class="doctor-profile-portrait" style="--avatar-bg:${doctor.color}"><img src="${doctor.photo}" alt="Illustrative profile portrait for ${safeText(doctor.name)}"><span>Illustrative profile portrait</span></div><div class="doctor-profile-copy"><div class="page-kicker">${safeText(doctor.specialization)}</div><h1 class="page-title">${safeText(doctor.name)}</h1><p class="doctor-qualification">${safeText(doctor.qualification)} · ${doctor.experience} years' experience</p><p class="page-intro">${safeText(doctor.bio)}</p><div class="doctor-profile-facts"><div><span>Consultation fee</span><strong>${money(doctor.fee)}</strong></div><div><span>Consultation length</span><strong>30 minutes</strong></div><div><span>Languages</span><strong>${safeText(doctor.languages)}</strong></div><div><span>Available days</span><strong>${doctor.days.map(day => dayNames[day]).join(", ")}</strong></div></div><h2 class="slot-heading">Sample consultation slots</h2><div class="slot-preview">${doctor.slots.map(slot => `<span>${slot}</span>`).join("")}</div><button class="button button-primary" data-book="${doctor.id}">Choose a date & book · ${money(doctor.fee)}</button></div></div><div class="notice">This fictional profile and its availability are for website demonstration only, not medical advice.</div></section>`;
}
function renderAbout() {
  app.innerHTML = `<section class="page-shell"><div class="page-kicker">Our approach</div><h1 class="page-title">Thoughtful by nature.</h1><p class="page-intro">Root & Remedy is a frontend project concept for a customer-facing homoeopathy shop and appointment experience.</p><div class="about-grid"><article class="about-tile"><h3>A considered catalogue</h3><p>Explore sample categories, product details and browsing tools. Every product and review is illustrative demo content—not a real inventory or endorsement.</p></article><article class="about-tile"><h3>Care is personal</h3><p>Use the appointment section to try a sample booking. The flow demonstrates the interface only and does not connect to doctors or clinics.</p></article><article class="about-tile"><h3>Privacy in this prototype</h3><p>Data is stored in your browser for demonstration. This application does not provide secure accounts, payment processing, verification messages or protected health-data handling.</p></article><article class="about-tile"><h3>Health information</h3><p>Nothing on this site is medical advice or a claim that a product diagnoses, treats or cures a condition. Consult a qualified healthcare professional.</p></article></div></section>`;
}
function render() {
  document.querySelectorAll("[data-page]").forEach(link => link.classList.toggle("active", link.dataset.page === page || (page === "doctorProfile" && link.dataset.page === "appointments")));
  if (page === "shop") renderShop();
  else if (page === "cart") renderCart();
  else if (page === "wishlist") renderWishlist();
  else if (page === "account") renderProfile();
  else if (page === "appointments") renderAppointments();
  else if (page === "doctorProfile") renderDoctorProfile();
  else if (page === "checkout") renderCheckout();
  else if (page === "orderConfirmation") renderOrderConfirmation();
  else if (page === "operations") renderOperations();
  else if (page === "about") renderAbout();
  updateCounts();
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
}
function go(nextPage) {
  if (nextPage === "account" && !currentUser()) { page = "login"; authPage(); updateCounts(); return; }
  page = nextPage;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function addToCart(id, quantity = 1) {
  const product = findProduct(id);
  if (!product || !stockFor(product)) { showToast("This sample product is currently unavailable."); return; }
  const cart = cartData();
  cart[id] = Math.min(stockFor(product), (cart[id] || 0) + quantity);
  write(STORAGE.cart, cart);
  updateCounts();
  showToast(`${product.name} added to your cart.`);
}
function toggleWishlist(id) {
  const wishlist = wishlistData();
  const exists = wishlist.includes(id);
  write(STORAGE.wish, exists ? wishlist.filter(item => item !== id) : [...wishlist, id]);
  updateCounts();
  showToast(exists ? "Removed from your wishlist." : "Added to your wishlist.");
  if (page === "shop") renderShop();
  if (page === "wishlist") renderWishlist();
}
function openProduct(id) {
  const product = findProduct(id);
  if (!product) return;
  const saved = wishlistData().includes(id);
  modalRoot.innerHTML = `<div class="modal-backdrop" data-dismiss><section class="modal" role="dialog" aria-modal="true" aria-labelledby="detailTitle"><button class="modal-close" data-dismiss aria-label="Close dialog">×</button><div class="detail-layout">
    <div class="detail-art" style="--product-bg:${product.bg}">${productArt(product)}</div><div class="detail-info"><div class="product-brand">${safeText(product.brand)} · ${safeText(product.category)}</div><h2 id="detailTitle">${safeText(product.name)}</h2><div class="rating">★ ${product.rating} · ${product.reviews} sample reviews</div><p>${safeText(product.description)}</p><p><strong>${safeText(product.pack)}</strong> · ${safeText(product.info)}</p><p><strong>Sample review preview:</strong> “Clear product details and a nicely presented catalogue listing.”</p><div class="price-row"><span class="price">${money(discountPrice(product))}</span>${product.discount ? `<span class="old-price">${money(product.price)}</span>` : ""}<span class="stock">${stockFor(product)} in stock</span></div><div class="quantity"><button data-detail-qty="-1">−</button><span id="detailQuantity">1</span><button data-detail-qty="1">+</button></div><button class="button button-primary" data-detail-add="${id}" ${stockFor(product) ? "" : "disabled"}>${stockFor(product) ? "Add to cart" : "Out of stock"}</button><button class="button button-secondary" data-wish="${id}">${saved ? "♥ Saved" : "♡ Save"}</button><p class="form-hint">Sample listing and reviews for demonstration only. Not medical advice.</p></div>
  </div></section></div>`;
}
function dateValue(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}
function isSlotAvailable(doctor, date, slot) {
  const selectedDate = new Date(`${date}T12:00:00`);
  if (!doctor.days.includes(selectedDate.getDay())) return false;
  const existing = appointmentData().some(item => item.doctorId === doctor.id && item.date === date && item.time === slot && item.status !== "Cancelled");
  return !existing && appointmentDateTime({ date, time: slot }) > new Date();
}
function firstAvailableDate(doctor) {
  for (let offset = 0; offset < 30; offset += 1) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const value = dateValue(date);
    if (doctor.days.includes(date.getDay()) && doctor.slots.some(slot => isSlotAvailable(doctor, value, slot))) return value;
  }
  return dateValue(new Date(Date.now() + 86400000));
}
function openBooking(id) {
  const doctor = findDoctor(id);
  if (!doctor) return;
  bookingDraft = { doctorId: doctor.id, date: firstAvailableDate(doctor), time: "", patient: {} };
  renderBookingStep("schedule");
}
function renderBookingStep(step, message = "") {
  const doctor = findDoctor(bookingDraft.doctorId);
  if (!doctor) { modalRoot.innerHTML = ""; return; }
  const common = `<div class="booking-doctor"><span class="doctor-avatar" style="--avatar-bg:${doctor.color}">${doctor.initials}</span><div><strong>${safeText(doctor.name)}</strong><span>${safeText(doctor.specialization)} · ${money(doctor.fee)}</span></div></div>`;
  let content = "";
  if (step === "schedule") {
    const slots = doctor.slots.map(slot => `<button type="button" class="slot-option ${bookingDraft.time === slot ? "selected" : ""}" data-booking-slot="${slot}" ${isSlotAvailable(doctor, bookingDraft.date, slot) ? "" : "disabled"}>${slot}</button>`).join("");
    const hasSlots = doctor.slots.some(slot => isSlotAvailable(doctor, bookingDraft.date, slot));
    content = `<h2 class="modal-title" id="bookingTitle">1. Choose a date & time</h2>${message ? `<p class="form-error">${safeText(message)}</p>` : ""}<div class="form-field"><label for="appointmentDate">Appointment date</label><input id="appointmentDate" type="date" min="${dateValue(new Date())}" value="${safeText(bookingDraft.date)}" max="${dateValue(new Date(Date.now() + 60 * 86400000))}" required></div><div class="form-field"><label>Available times</label><div class="slot-options">${slots}</div>${hasSlots ? "" : `<span class="form-hint">No sample times remain for this day. Choose another date.</span>`}</div><button class="button button-primary" id="continueBooking" ${bookingDraft.time && hasSlots ? "" : "disabled"}>Continue to patient details →</button><div class="notice">Unavailable or already-booked sample slots cannot be selected.</div>`;
  } else if (step === "patient") {
    const session = currentUser() || {};
    const patient = bookingDraft.patient;
    content = `<h2 class="modal-title" id="bookingTitle">2. Patient information</h2>${message ? `<p class="form-error">${safeText(message)}</p>` : ""}<div class="booking-summary-line">${safeText(formatAppointmentDate(bookingDraft.date))} · ${safeText(bookingDraft.time)} · ${money(doctor.fee)}</div><form id="patientInfoForm"><div class="form-field"><label for="patientName">Patient name</label><input id="patientName" name="name" autocomplete="name" value="${safeText(patient.name || session.name || "")}" required></div><div class="form-grid"><div class="form-field"><label for="patientEmail">Email address</label><input id="patientEmail" name="email" type="email" autocomplete="email" value="${safeText(patient.email || session.email || "")}" required></div><div class="form-field"><label for="patientMobile">Mobile number</label><input id="patientMobile" name="mobile" type="tel" inputmode="numeric" pattern="[0-9]{8,15}" value="${safeText(patient.mobile || session.mobile || "")}" required><span class="form-hint">Enter 8–15 digits.</span></div></div><div class="form-field"><label for="patientNote">Note for the clinic (optional)</label><textarea id="patientNote" name="note" maxlength="300">${safeText(patient.note || "")}</textarea></div><button class="button button-primary">Review appointment →</button><button type="button" class="button button-secondary" data-booking-back="schedule">Back</button></form><div class="notice">Use sample contact information only. No email or SMS notification will be sent.</div>`;
  } else if (step === "review") {
    const patient = bookingDraft.patient;
    content = `<h2 class="modal-title" id="bookingTitle">3. Review your appointment</h2><div class="booking-review"><div><span>Doctor</span><strong>${safeText(doctor.name)} · ${safeText(doctor.qualification)}</strong></div><div><span>Date & time</span><strong>${safeText(formatAppointmentDate(bookingDraft.date))} · ${safeText(bookingDraft.time)}</strong></div><div><span>Patient</span><strong>${safeText(patient.name)} · ${safeText(patient.email)} · ${safeText(patient.mobile)}</strong></div><div><span>Consultation fee</span><strong>${money(doctor.fee)}</strong></div></div><p class="form-hint">Continuing creates a requested demo appointment and holds the selected slot until you confirm the simulated payment.</p><button class="button button-primary" id="createAppointmentRequest">Confirm details & proceed to demo payment</button><button class="button button-secondary" data-booking-back="patient">Back to details</button>`;
  } else if (step === "payment") {
    const appointment = appointmentData().find(item => item.appointmentId === bookingDraft.appointmentId);
    content = `<h2 class="modal-title" id="bookingTitle">4. Demo payment confirmation</h2><div class="booking-summary-line">Appointment ${safeText(appointment?.appointmentId || "")} · ${money(doctor.fee)}</div><p class="page-intro">This local demo has no payment gateway. Use the button below to simulate a successful payment; no card or bank details are collected.</p><div class="notice">Your appointment is currently Requested and the slot is temporarily held. Confirming below will mark it Confirmed.</div><button class="button button-primary" id="simulatePayment">Simulate successful payment · ${money(doctor.fee)}</button><button class="button button-secondary" id="cancelPendingPayment">Cancel request & release slot</button>`;
  } else if (step === "confirmation") {
    const appointment = appointmentData().find(item => item.appointmentId === bookingDraft.appointmentId);
    content = `<div class="booking-confirm"><div class="confirmation-check">✓</div><div class="page-kicker">Demo payment confirmed</div><h2 class="modal-title">Your appointment is confirmed</h2><p>Appointment ID: <strong>${safeText(appointment?.appointmentId || "")}</strong></p><div class="booking-review"><div><span>Doctor</span><strong>${safeText(doctor.name)} · ${safeText(doctor.qualification)}</strong></div><div><span>Date & time</span><strong>${safeText(formatAppointmentDate(bookingDraft.date))} · ${safeText(bookingDraft.time)}</strong></div><div><span>Consultation fee</span><strong>${money(doctor.fee)} · Paid (demo)</strong></div><div><span>Patient email</span><strong>${safeText(bookingDraft.patient.email)}</strong></div><div><span>Email notification</span><strong>Simulated confirmation · Not sent</strong></div></div><p class="form-hint">A notification would normally be sent to this email. In this demo, no email is sent.</p><button class="button button-primary" id="viewMyAppointments">View my appointments</button></div>`;
  }
  modalRoot.innerHTML = `<div class="modal-backdrop" data-dismiss><section class="modal booking-modal" role="dialog" aria-modal="true" aria-labelledby="bookingTitle"><button class="modal-close" data-dismiss aria-label="Close dialog">×</button>${common}<div class="booking-step-content">${content}</div><div class="booking-disclaimer">Demo only · No real payment, email or clinic contact</div></section></div>`;
}
function bytesToHex(buffer) { return [...new Uint8Array(buffer)].map(value => value.toString(16).padStart(2, "0")).join(""); }
async function hashPassword(password) {
  if (window.crypto?.subtle) return bytesToHex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password)));
  throw new Error("Secure browser hashing is unavailable. Please open this site on localhost using a modern browser.");
}
function setAuthMessage(form, text, type = "error") {
  let element = form.previousElementSibling;
  if (!element || !element.classList.contains(`form-${type}`)) {
    element = document.createElement("div");
    element.className = `form-${type}`;
    form.before(element);
  }
  element.textContent = text;
}
document.addEventListener("click", async event => {
  const pageLink = event.target.closest("[data-page]");
  if (pageLink) {
    event.preventDefault();
    if (pageLink.dataset.page === "account" && pageLink.dataset.profileTarget) profileTab = pageLink.dataset.profileTarget;
    go(pageLink.dataset.page);
    return;
  }
  const categorySearch = event.target.closest("[data-category-jump]");
  if (categorySearch) { selectedCategory = categorySearch.dataset.categoryJump; go("shop"); return; }
  const authLink = event.target.closest("[data-auth]");
  if (authLink) { authPage(authLink.dataset.auth); return; }
  const accountButton = event.target.closest("#accountButton");
  if (accountButton) { go("account"); return; }
  const addButton = event.target.closest("[data-add]");
  if (addButton) { addToCart(addButton.dataset.add); return; }
  const moveButton = event.target.closest("[data-move]");
  if (moveButton) {
    const id = moveButton.dataset.move;
    const product = findProduct(id);
    if (!product || !stockFor(product)) { showToast("This sample product is currently unavailable."); return; }
    const cart = cartData();
    cart[id] = Math.min(stockFor(product), (cart[id] || 0) + 1);
    write(STORAGE.cart, cart);
    write(STORAGE.wish, wishlistData().filter(item => item !== id));
    updateCounts();
    renderWishlist();
    showToast(`${product.name} moved to your cart.`);
    return;
  }
  const wishButton = event.target.closest("[data-wish]");
  if (wishButton) { event.preventDefault(); event.stopPropagation(); toggleWishlist(wishButton.dataset.wish); if (modalRoot.innerHTML && page !== "shop" && page !== "wishlist") openProduct(wishButton.dataset.wish); return; }
  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) { event.preventDefault(); openProduct(detailButton.dataset.detail); return; }
  const qtyButton = event.target.closest("[data-qty]");
  if (qtyButton) {
    const cart = cartData(); const product = findProduct(qtyButton.dataset.qty);
    const next = (cart[product.id] || 0) + Number(qtyButton.dataset.change);
    if (next <= 0) delete cart[product.id]; else cart[product.id] = Math.min(stockFor(product), next);
    write(STORAGE.cart, cart); renderCart(); updateCounts(); return;
  }
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) { const cart = cartData(); delete cart[removeButton.dataset.remove]; write(STORAGE.cart, cart); renderCart(); updateCounts(); showToast("Item removed from your cart."); return; }
  const profileButton = event.target.closest("[data-profile-tab]");
  if (profileButton) { profileTab = profileButton.dataset.profileTab; renderProfile(); return; }
  const logoutButton = event.target.closest("#logoutButton");
  if (logoutButton) { localStorage.removeItem(STORAGE.session); page = "shop"; render(); showToast("You have been signed out."); return; }
  const doctorProfileButton = event.target.closest("[data-doctor-profile]");
  if (doctorProfileButton) { selectedDoctorId = doctorProfileButton.dataset.doctorProfile; page = "doctorProfile"; render(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const bookButton = event.target.closest("[data-book]");
  if (bookButton) { openBooking(bookButton.dataset.book); return; }
  const slotButton = event.target.closest("[data-booking-slot]");
  if (slotButton) { bookingDraft.time = slotButton.dataset.bookingSlot; renderBookingStep("schedule"); return; }
  const bookingBack = event.target.closest("[data-booking-back]");
  if (bookingBack) { renderBookingStep(bookingBack.dataset.bookingBack); return; }
  const continueBooking = event.target.closest("#continueBooking");
  if (continueBooking) { if (bookingDraft.time) renderBookingStep("patient"); return; }
  const appointmentTabButton = event.target.closest("[data-appt-tab]");
  if (appointmentTabButton) {
    appointmentTab = appointmentTabButton.dataset.apptTab;
    if (page === "account") renderProfile(); else renderAppointments();
    return;
  }
  const cancelAppointmentButton = event.target.closest("[data-cancel-appointment]");
  if (cancelAppointmentButton) {
    const appointments = appointmentData();
    const appointment = appointments.find(item => item.appointmentId === cancelAppointmentButton.dataset.cancelAppointment);
    if (!appointment) { showToast("That appointment could not be found."); return; }
    if (!canCancelAppointment(appointment)) { showToast("Appointments can only be cancelled more than 24 hours before the visit."); return; }
    appointment.status = "Cancelled";
    appointment.paymentStatus = appointment.paymentStatus === "Paid (demo)" ? "Refunded (demo)" : "Not paid";
    appointment.cancelledAt = new Date().toISOString();
    appointment.statusHistory = [...(appointment.statusHistory || []), { status: "Cancelled", at: appointment.cancelledAt }];
    write(STORAGE.bookings, appointments);
    if (page === "account") renderProfile(); else renderAppointments();
    showToast("Appointment cancelled. Its time slot is available again.");
    return;
  }
  const confirmRequest = event.target.closest("#createAppointmentRequest");
  if (confirmRequest) {
    const doctor = findDoctor(bookingDraft.doctorId);
    if (!doctor || !isSlotAvailable(doctor, bookingDraft.date, bookingDraft.time)) { renderBookingStep("schedule", "That time was just booked. Please choose another open slot."); return; }
    const appointments = appointmentData();
    const sequence = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`.toUpperCase();
    const appointment = {
      appointmentId: `RR-${sequence}`,
      doctorId: doctor.id,
      doctor: doctor.name,
      date: bookingDraft.date,
      time: bookingDraft.time,
      fee: doctor.fee,
      patientName: bookingDraft.patient.name,
      email: bookingDraft.patient.email.toLowerCase(),
      mobile: bookingDraft.patient.mobile,
      note: bookingDraft.patient.note,
      notificationStatus: "Simulated (not sent)",
      status: "Requested",
      paymentStatus: "Pending",
      createdAt: new Date().toISOString(),
      statusHistory: [{ status: "Requested", at: new Date().toISOString() }]
    };
    appointments.push(appointment);
    write(STORAGE.bookings, appointments);
    bookingDraft.appointmentId = appointment.appointmentId;
    renderBookingStep("payment");
    return;
  }
  const simulatePayment = event.target.closest("#simulatePayment");
  if (simulatePayment) {
    const appointments = appointmentData();
    const appointment = appointments.find(item => item.appointmentId === bookingDraft.appointmentId);
    if (!appointment || appointment.status !== "Requested") { renderBookingStep("payment", "This appointment request is no longer available."); return; }
    appointment.paymentStatus = "Paid (demo)";
    appointment.status = "Confirmed";
    appointment.confirmedAt = new Date().toISOString();
    appointment.statusHistory.push({ status: "Confirmed", at: appointment.confirmedAt });
    write(STORAGE.bookings, appointments);
    renderBookingStep("confirmation");
    return;
  }
  const cancelPending = event.target.closest("#cancelPendingPayment");
  if (cancelPending) {
    const appointments = appointmentData();
    const appointment = appointments.find(item => item.appointmentId === bookingDraft.appointmentId);
    if (appointment && appointment.status === "Requested") {
      appointment.status = "Cancelled";
      appointment.paymentStatus = "Not paid";
      appointment.cancelledAt = new Date().toISOString();
      appointment.statusHistory.push({ status: "Cancelled", at: appointment.cancelledAt });
      write(STORAGE.bookings, appointments);
    }
    modalRoot.innerHTML = "";
    showToast("Request cancelled and the time slot released.");
    return;
  }
  const viewMyAppointments = event.target.closest("#viewMyAppointments");
  if (viewMyAppointments) {
    modalRoot.innerHTML = "";
    page = "appointments";
    appointmentTab = "upcoming";
    render();
    document.getElementById("myAppointments")?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  const detailQty = event.target.closest("[data-detail-qty]");
  if (detailQty) { const value = document.getElementById("detailQuantity"); value.textContent = Math.max(1, Math.min(20, Number(value.textContent) + Number(detailQty.dataset.detailQty))); return; }
  const detailAdd = event.target.closest("[data-detail-add]");
  if (detailAdd) { addToCart(detailAdd.dataset.detailAdd, Number(document.getElementById("detailQuantity").textContent)); modalRoot.innerHTML = ""; return; }
  const dismiss = event.target.closest("[data-dismiss]");
  if (dismiss && (event.target === dismiss || event.target.closest(".modal-close"))) { modalRoot.innerHTML = ""; return; }
  const checkout = event.target.closest("#startCheckout");
  if (checkout) { checkoutDraft = { step: "address", paymentMethod: "COD", prescriptionId: "" }; page = "checkout"; render(); return; }
  const checkoutNext = event.target.closest("[data-checkout-next]");
  if (checkoutNext) {
    if (checkoutNext.dataset.checkoutNext === "payment" && document.getElementById("existingPrescription")?.value) checkoutDraft.prescriptionId = document.getElementById("existingPrescription").value;
    checkoutDraft.step = checkoutNext.dataset.checkoutNext;
    renderCheckout();
    return;
  }
  const checkoutBack = event.target.closest("[data-checkout-back]");
  if (checkoutBack) { checkoutDraft.step = checkoutBack.dataset.checkoutBack; renderCheckout(); return; }
  const placeOrder = event.target.closest("#placeDemoOrder");
  if (placeOrder) { placeDemoOrder(); return; }
  const removeAttachment = event.target.closest("[data-remove-prescription]");
  if (removeAttachment) { checkoutDraft.prescriptionId = ""; renderCheckout(); return; }
  const invoiceButton = event.target.closest("[data-invoice]");
  if (invoiceButton) { showInvoice(invoiceButton.dataset.invoice); return; }
  const printInvoice = event.target.closest("#printInvoice");
  if (printInvoice) { window.print(); return; }
  const advanceOrder = event.target.closest("[data-advance-order]");
  if (advanceOrder) {
    const orders = orderData();
    const order = orders.find(item => item.orderId === advanceOrder.dataset.advanceOrder);
    const statuses = ["Pending", "Confirmed", "Processing", "Shipped", "Delivered"];
    if (!order) { showToast("Order was not found."); return; }
    const index = statuses.indexOf(order.status);
    if (index >= 0 && index < statuses.length - 1) {
      order.status = statuses[index + 1];
      order.statusHistory.push({ status: order.status, at: new Date().toISOString() });
      write(STORAGE.orders, orders);
      renderOperations();
      showToast(`${order.orderId} marked ${order.status}.`);
    }
    return;
  }
  const prescriptionDecision = event.target.closest("[data-prescription-decision]");
  if (prescriptionDecision) {
    const records = prescriptionData();
    const record = records.find(item => item.prescriptionId === prescriptionDecision.dataset.prescriptionDecision);
    if (!record || record.status !== "Pending review") { showToast("This prescription record was already reviewed."); return; }
    record.status = prescriptionDecision.dataset.decision;
    record.reviewedAt = new Date().toISOString();
    write(STORAGE.prescriptions, records);
    renderOperations();
    showToast(`Demo prescription ${record.status.toLowerCase()}.`);
    return;
  }
  const operationsButton = event.target.closest("[data-operations-tab]");
  if (operationsButton) { operationsTab = operationsButton.dataset.operationsTab; renderOperations(); return; }
  const stockInput = event.target.closest(".stock-update-form input");
  if (stockInput) {
    const stock = Number(stockInput.value);
    stockInput.setCustomValidity(Number.isInteger(stock) && stock >= 0 && stock <= 9999 ? "" : "Enter a whole quantity from 0 to 9999.");
  }
  const scrollButton = event.target.closest("[data-scroll]");
  if (scrollButton) { event.preventDefault(); document.getElementById(scrollButton.dataset.scroll)?.scrollIntoView({ behavior: "smooth" }); }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") modalRoot.innerHTML = "";
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-detail][role=button]")) { event.preventDefault(); openProduct(event.target.dataset.detail); }
});
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
});
document.addEventListener("change", event => {
  if (event.target.id === "appointmentDate") {
    bookingDraft.date = event.target.value;
    bookingDraft.time = "";
    renderBookingStep("schedule");
  }
  if (event.target.name === "paymentMethod") {
    checkoutDraft.paymentMethod = event.target.value;
    renderCheckout();
  }
  if (event.target.id === "existingPrescription") checkoutDraft.prescriptionId = event.target.value;
});
document.addEventListener("submit", async event => {
  const form = event.target;
  if (form.id === "checkoutAddressForm") {
    event.preventDefault();
    const data = new FormData(form);
    checkoutDraft.address = {
      name: String(data.get("name")).trim(),
      email: String(data.get("email")).trim().toLowerCase(),
      mobile: String(data.get("mobile")).trim(),
      address: String(data.get("address")).trim()
    };
    checkoutDraft.step = "prescription";
    renderCheckout();
  }
  if (form.id === "checkoutPrescriptionForm") {
    event.preventDefault();
    const result = storePrescription(document.getElementById("orderPrescription").files[0], checkoutDraft.address?.email);
    if (result.error) { showToast(result.error); return; }
    checkoutDraft.prescriptionId = result.record.prescriptionId;
    renderCheckout();
    showToast("Prescription metadata attached for demo review.");
  }
  if (form.id === "stockUpdateForm" || form.matches(".stock-update-form")) {
    event.preventDefault();
    const input = form.querySelector('input[type="number"]');
    const quantity = Number(input.value);
    if (!Number.isInteger(quantity) || quantity < 0 || quantity > 9999) { showToast("Enter a stock quantity from 0 to 9999."); return; }
    const inventory = inventoryData();
    inventory[form.dataset.stockProduct] = quantity;
    write(STORAGE.inventory, inventory);
    renderOperations();
    showToast("Sample inventory updated.");
  }
  if (form.id === "checkoutPaymentForm") {
    event.preventDefault();
    checkoutDraft.paymentMethod = new FormData(form).get("paymentMethod");
    checkoutDraft.step = "review";
    renderCheckout();
  }
  if (form.id === "patientInfoForm") {
    event.preventDefault();
    const data = new FormData(form);
    bookingDraft.patient = {
      name: String(data.get("name")).trim(),
      email: String(data.get("email")).trim().toLowerCase(),
      mobile: String(data.get("mobile")).trim(),
      note: String(data.get("note") || "").trim()
    };
    renderBookingStep("review");
  }
  if (form.id === "authForm") {
    event.preventDefault();
    const data = new FormData(form);
    const mode = form.dataset.mode;
    try {
      if (mode === "register") {
        const users = read(STORAGE.users, []);
        const email = String(data.get("email")).trim().toLowerCase();
        if (users.some(user => user.email === email)) { setAuthMessage(form, "An account with this email already exists in this browser. Sign in instead."); return; }
        const passwordHash = await hashPassword(String(data.get("password")));
        users.push({ name: String(data.get("name")).trim(), mobile: String(data.get("mobile")).trim(), email, address: String(data.get("address")).trim(), passwordHash });
        write(STORAGE.users, users);
        write(STORAGE.session, { name: String(data.get("name")).trim(), mobile: String(data.get("mobile")).trim(), email, address: String(data.get("address")).trim() });
        page = "account"; profileTab = "profile"; render(); showToast("Demo account created. Verification is simulated."); return;
      }
      if (mode === "login") {
        const email = String(data.get("email")).trim().toLowerCase();
        const user = read(STORAGE.users, []).find(item => item.email === email);
        if (!user || user.passwordHash !== await hashPassword(String(data.get("password")))) { setAuthMessage(form, "Email or password is not correct. Create a demo account if you have not registered."); return; }
        write(STORAGE.session, { name: user.name, mobile: user.mobile, email: user.email, address: user.address });
        page = "account"; profileTab = "profile"; render(); showToast("You are signed in to your demo account."); return;
      }
      if (mode === "forgot") {
        const email = String(data.get("email")).trim().toLowerCase();
        const user = read(STORAGE.users, []).find(item => item.email === email);
        if (!user) { setAuthMessage(form, "No demo account was found for that email."); return; }
        modalRoot.innerHTML = `<div class="modal-backdrop" data-dismiss><section class="modal" role="dialog" aria-modal="true" aria-labelledby="resetTitle"><button class="modal-close" data-dismiss aria-label="Close dialog">×</button><h2 class="modal-title" id="resetTitle">Set a new demo password</h2><p class="page-intro">Since this is a local demo, there is no email reset link. Create a new password below.</p><form id="resetForm" data-email="${safeText(email)}"><div class="form-field"><label for="resetPassword">New password</label><input id="resetPassword" type="password" minlength="8" required></div><button class="button button-primary">Save new password</button></form><div class="notice">This reset is only stored in this browser and is not secure.</div></section></div>`;
      }
    } catch (error) { setAuthMessage(form, error.message || "Could not complete this demo account action."); }
  }
  if (form.id === "resetForm") {
    event.preventDefault();
    try {
      const users = read(STORAGE.users, []);
      const user = users.find(item => item.email === form.dataset.email);
      if (!user) { setAuthMessage(form, "Demo account not found."); return; }
      user.passwordHash = await hashPassword(document.getElementById("resetPassword").value);
      write(STORAGE.users, users); modalRoot.innerHTML = ""; authPage("login", { type: "success", text: "Demo password updated. You can now sign in." });
    } catch (error) { setAuthMessage(form, error.message); }
  }
  if (form.id === "profileForm") {
    event.preventDefault();
    const user = currentUser(); const data = new FormData(form);
    Object.assign(user, { name: String(data.get("name")).trim(), mobile: String(data.get("mobile")).trim(), address: String(data.get("address")).trim() });
    write(STORAGE.session, user);
    const users = read(STORAGE.users, []);
    const savedUser = users.find(item => item.email === user.email);
    if (savedUser) Object.assign(savedUser, { name: user.name, mobile: user.mobile, address: user.address });
    write(STORAGE.users, users); renderProfile(); updateCounts(); showToast("Profile updated in this browser.");
  }
  if (form.id === "passwordForm") {
    event.preventDefault();
    try {
      const userData = currentUser(); const users = read(STORAGE.users, []); const user = users.find(item => item.email === userData.email);
      if (!user || user.passwordHash !== await hashPassword(document.getElementById("oldPassword").value)) { setAuthMessage(form, "Current password is not correct."); return; }
      user.passwordHash = await hashPassword(document.getElementById("newPassword").value); write(STORAGE.users, users); renderProfile(); showToast("Demo password updated.");
    } catch (error) { setAuthMessage(form, error.message); }
  }
  if (form.id === "prescriptionForm") {
    event.preventDefault();
    const file = document.getElementById("prescriptionFile").files[0];
    const result = document.getElementById("uploadResult");
    const user = currentUser();
    if (!file) { result.innerHTML = `<p class="form-error">Choose a file first.</p>`; return; }
    if (!user) { result.innerHTML = `<p class="form-error">Sign in to associate a demo prescription record with your account.</p>`; return; }
    const outcome = storePrescription(file, user.email);
    if (outcome.error) { result.innerHTML = `<p class="form-error">${safeText(outcome.error)}</p>`; return; }
    profileTab = "prescription";
    renderProfile();
    showToast("Demo prescription submitted for review.");
  }
  if (form.id === "bookingForm") {
    event.preventDefault();
    const data = new FormData(form);
    const booking = { doctor: form.dataset.doctor, date: String(data.get("date")), time: String(data.get("time")), email: String(data.get("email")).trim().toLowerCase() };
    const bookings = read(STORAGE.bookings, []); bookings.push(booking); write(STORAGE.bookings, bookings);
    if (currentUser()?.email === booking.email) { modalRoot.innerHTML = ""; page = "account"; profileTab = "appointments"; renderProfile(); }
    else modalRoot.innerHTML = `<div class="modal-backdrop" data-dismiss><section class="modal" role="dialog" aria-modal="true"><button class="modal-close" data-dismiss aria-label="Close dialog">×</button><div class="booking-confirm"><strong>Demo booking confirmed</strong><br>${safeText(booking.doctor)} · ${safeText(booking.date)} at ${safeText(booking.time)}<br>This was saved in this browser only. No clinic was contacted.</div></section></div>`;
    if (currentUser()?.email === booking.email) showToast("Demo booking saved to your appointment history.");
  }
});
document.addEventListener("click", event => {
  const category = event.target.closest("[data-category-jump]");
  if (category) {
    selectedCategory = category.dataset.categoryJump;
    page = "shop"; render();
    document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
  }
});
render();
