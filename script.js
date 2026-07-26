/* =========================================================
   Streaming Services Ranked — script.js
   ========================================================= */

const DATA = {
  movies: [
    { name: "Netflix",              type: "App",     bestFor: "Original Movies",                       rating: 4.5, revenue: "34.932 BILLION", url: "https://www.netflix.com" },
    { name: "Prime Video",          type: "App",     bestFor: "Popular Movies",                         rating: 4.0, revenue: "32.239 BILLION", url: "https://www.primevideo.com" },
    { name: "Hulu",                 type: "App",     bestFor: "Movie Variety",                          rating: 4.0, revenue: "5.1 BILLION", url: "https://www.hulu.com" },
    { name: "Tubi",                 type: "App",     bestFor: "Free Movies",                            rating: 4.0, revenue: "3.21 BILLION", url: "https://tubitv.com" },
    { name: "Peacock",              type: "App",     bestFor: "Affordable TV And Movie Streaming",      rating: 4.0, revenue: "3.3 BILLION", url: "https://www.peacocktv.com" },
    { name: "Disney+ Hotstar",      type: "Website",  bestFor: "Family Friendly Movies",                 rating: 4.1, revenue: "23.16 BILLION", url: "https://www.hotstar.com" },
    { name: "Max",                  type: "Website",  bestFor: "WarnerMedia Movies",                     rating: 4.0, revenue: "4.362 BILLION", url: "https://www.max.com" },
    { name: "Kweli TV",             type: "Website",  bestFor: "International Films",                    rating: 3.9, revenue: "No clear information", url: "https://www.kweli.tv" },
    { name: "Freevee",              type: "Website",  bestFor: "Free Popular Movies and Family Titles",  rating: 3.5, revenue: "5 BILLION", url: "https://www.amazon.com/adlp/freevee" },
    { name: "The Criterion Channel",type: "Website",  bestFor: "Classic Films",                          rating: 3.6, revenue: "20.9 MILLION", url: "https://www.criterionchannel.com" },
  ],
  tv: [
    { name: "Netflix",              type: "App",     bestFor: "Original Movies",                       rating: 4.5, revenue: "34.932 BILLION", url: "https://www.netflix.com" },
    { name: "Prime Video",          type: "App",     bestFor: "Popular Movies",                         rating: 4.0, revenue: "32.239 BILLION", url: "https://www.primevideo.com" },
    { name: "Disney+ Hotstar",      type: "App",     bestFor: "Family Friendly Movies",                 rating: 4.1, revenue: "23.16 BILLION", url: "https://www.hotstar.com" },
    { name: "Max",                  type: "App",     bestFor: "WarnerMedia Movies",                     rating: 4.0, revenue: "4.362 BILLION", url: "https://www.max.com" },
    { name: "Hulu",                 type: "App",     bestFor: "Movie Variety",                          rating: 4.0, revenue: "5.1 BILLION", url: "https://www.hulu.com" },
    { name: "Pluto TV",             type: "Website",  bestFor: "Popular Movies",                         rating: 3.8, revenue: "3.4 BILLION", url: "https://pluto.tv" },
    { name: "Tubi",                 type: "App",     bestFor: "Free Movies",                            rating: 4.0, revenue: "3.21 BILLION", url: "https://tubitv.com" },
    { name: "Crackle TV",           type: "Website",  bestFor: "Original Programming",                   rating: 3.7, revenue: "35 MILLION", url: "https://www.crackle.com" },
    { name: "Peacock",              type: "App",     bestFor: "Affordable TV And Movie Streaming",      rating: 4.0, revenue: "3.3 BILLION", url: "https://www.peacocktv.com" },
    { name: "Apple TV+",            type: "App",     bestFor: "All Rounder",                            rating: 3.9, revenue: "2.2 BILLION", url: "https://tv.apple.com" },
    { name: "PopCornFlix",          type: "Website",  bestFor: "Content Provider",                        rating: 4.0, revenue: "3.21 BILLION", url: "https://www.popcornflix.com" },
    { name: "The Criterion Channel",type: "App",     bestFor: "Classic Films",                          rating: 3.6, revenue: "20.9 MILLION", url: "https://www.criterionchannel.com" },
  ],
  music: [
    { name: "Spotify",               type: "App",     bestFor: "Sound Quality, $12/mo",                  rating: 5.0, revenue: "13.25 BILLION", url: "https://www.spotify.com" },
    { name: "Amazon Music Unlimited",type: "App",     bestFor: "Value, $5–13/mo",                        rating: 4.0, revenue: "n/a", url: "https://music.amazon.com" },
    { name: "Apple Music",           type: "App",     bestFor: "Ecosystem integration, $11/mo",          rating: 4.0, revenue: "n/a", url: "https://music.apple.com" },
    { name: "YouTube Music",         type: "App",     bestFor: "Video + audio combo, $14/mo",            rating: 4.0, revenue: "n/a", url: "https://music.youtube.com" },
    { name: "Tidal",                 type: "App",     bestFor: "Hi-fi audio, $11/mo",                    rating: 3.5, revenue: "n/a", url: "https://tidal.com" },
    { name: "Soundcloud.com",        type: "Website",  bestFor: "Independent & underground artists",      rating: 4.2, revenue: "2.28 BILLION", url: "https://soundcloud.com" },
    { name: "Genius.com",            type: "Website",  bestFor: "Lyrics & annotations",                   rating: 3.8, revenue: "13.5 MILLION", url: "https://genius.com" },
    { name: "NPR.com",               type: "Website",  bestFor: "Music journalism & Tiny Desk",           rating: 3.9, revenue: "3.09 BILLION", url: "https://www.npr.org" },
    { name: "Ultimate-Guitar.com",   type: "Website",  bestFor: "Tabs & chords for musicians",            rating: 4.1, revenue: "16.8 MILLION", url: "https://www.ultimate-guitar.com" },
    { name: "Letras.mus.br",         type: "Website",  bestFor: "Portuguese/Spanish lyrics",              rating: 3.5, revenue: "n/a", url: "https://www.letras.mus.br" },
  ],
};

const DESCRIPTIONS = {
  "Netflix": "Netflix is a global leader in entertainment, founded in 1997 and transformed into a streaming giant in 2007. Motto: \"See What's Next.\"\n\nKnown for original hits like Stranger Things and Squid Game, Netflix popularized binge-watching by releasing full seasons at once, and helped accelerate the decline of traditional cable TV.",
  "Hulu": "Hulu is a leading U.S. streaming service launched in 2008, offering live TV, on-demand shows, movies, and originals like The Handmaid's Tale. Motto: \"TV on your terms.\"\n\nOffers both ad-supported and ad-free plans, with personalized recommendations and bundles with Disney+ and ESPN+.",
  "Spotify": "Spotify is a leading music streaming service launched in 2006 in Sweden, available in 180+ countries with over 70 million tracks.\n\nKnown for personalized playlists like Discover Weekly, offline listening on premium plans, cross-platform availability, and a large podcast library alongside music.",
};

const state = { category: "home", search: "", type: "all", sort: "rank", favOnly: false };

/* ---------- Toasts ---------- */
function toast(msg) {
  const host = document.getElementById("toastHost");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  host.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => { el.classList.remove("show"); setTimeout(() => el.remove(), 300); }, 2600);
}

/* ---------- Favorites (per-user via localStorage) ---------- */
function favKey() {
  const email = (typeof firebase !== "undefined" && firebase.apps.length && firebase.auth().currentUser)
    ? firebase.auth().currentUser.email : "guest";
  return `favorites:${email}`;
}
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(favKey()) || "[]"); } catch { return []; }
}
function toggleFavorite(name) {
  let favs = getFavorites();
  if (favs.includes(name)) { favs = favs.filter(f => f !== name); toast(`Removed ${name} from favorites`); }
  else { favs.push(name); toast(`★ Added ${name} to favorites`); }
  localStorage.setItem(favKey(), JSON.stringify(favs));
  renderTable();
}

/* ---------- Auth gate / guest flow ---------- */
const authGate = document.getElementById("authGate");
const appRoot = document.getElementById("appRoot");

function unlockApp() {
  authGate.hidden = true;
  appRoot.hidden = false;
  const savedTab = localStorage.getItem("lastTab");
  if (savedTab && document.querySelector(`.page-link[data-cat="${savedTab}"], .tab[data-cat="${savedTab}"]`)) {
    state.category = savedTab;
  }
  document.querySelectorAll(".page-link, .tab").forEach(b => b.classList.toggle("active", b.dataset.cat === state.category));
  showSection(state.category);
}

document.getElementById("guestBtn").addEventListener("click", () => {
  sessionStorage.setItem("guestMode", "true");
  unlockApp();
  toast("Browsing as guest");
});
document.getElementById("openAuthBtn").addEventListener("click", () => {
  authGate.hidden = false;
  appRoot.hidden = true;
});

/* ---------- Page nav + category tabs ---------- */
const homeSection = document.getElementById("homeSection");
const catalogSection = document.getElementById("catalogSection");
const aboutSection = document.getElementById("aboutSection");
const contactSection = document.getElementById("contactSection");

function showSection(cat) {
  const isCatalog = ["movies", "tv", "music"].includes(cat);
  homeSection.hidden = cat !== "home";
  catalogSection.hidden = !isCatalog;
  aboutSection.hidden = cat !== "about";
  contactSection.hidden = cat !== "contact";

  document.querySelectorAll(".page-link").forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("active", b.dataset.cat === cat));

  localStorage.setItem("lastTab", cat);

  if (isCatalog) {
    document.getElementById("trendingPanel").hidden = cat === "music";
    renderTable();
    if (cat !== "music") loadTrending();
  }
}

document.querySelectorAll(".page-link").forEach(btn => {
  btn.addEventListener("click", () => { state.category = btn.dataset.cat; showSection(state.category); });
});
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => { state.category = btn.dataset.cat; showSection(state.category); });
});
document.querySelectorAll("[data-goto]").forEach(btn => {
  btn.addEventListener("click", () => { state.category = btn.dataset.goto; showSection(state.category); });
});

/* ---------- Search / filter / sort / favorites toggle ---------- */
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", e => { state.search = e.target.value.toLowerCase(); renderTable(); });
document.getElementById("typeFilter").addEventListener("change", e => { state.type = e.target.value; renderTable(); });
document.getElementById("sortBy").addEventListener("change", e => { state.sort = e.target.value; renderTable(); });

const favToggleBtn = document.getElementById("favToggleBtn");
favToggleBtn.addEventListener("click", () => {
  state.favOnly = !state.favOnly;
  favToggleBtn.classList.toggle("active", state.favOnly);
  favToggleBtn.setAttribute("aria-pressed", String(state.favOnly));
  favToggleBtn.textContent = state.favOnly ? "★ Favorites only" : "☆ Favorites only";
  renderTable();
});

/* Keyboard shortcuts: "/" focuses search, Esc closes modal/gate-return */
document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA" && !catalogSection.hidden) {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === "Escape") {
    if (!modal.hidden) modal.hidden = true;
  }
});

function renderTable() {
  const favs = getFavorites();
  let rows = [...(DATA[state.category] || [])];
  let filtered = rows.filter(r =>
    r.name.toLowerCase().includes(state.search) &&
    (state.type === "all" || r.type === state.type) &&
    (!state.favOnly || favs.includes(r.name))
  );
  if (state.sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (state.sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

  const head = document.getElementById("rankTableHead");
  const body = document.getElementById("rankTableBody");
  const noResults = document.getElementById("noResults");

  head.innerHTML = `<tr><th></th><th>#</th><th>Name</th><th>Type</th><th>Best For</th><th>Rating</th><th>Revenue</th></tr>`;

  if (filtered.length === 0) {
    body.innerHTML = "";
    noResults.hidden = false;
    noResults.textContent = state.favOnly ? "No favorites yet — star a service to save it here." : "No services match your search.";
    return;
  }
  noResults.hidden = true;

  body.innerHTML = filtered.map((r, i) => `
    <tr data-name="${r.name}">
      <td data-label=""><button class="fav-star ${favs.includes(r.name) ? "is-fav" : ""}" data-fav="${r.name}" aria-label="Toggle favorite">${favs.includes(r.name) ? "★" : "☆"}</button></td>
      <td data-label="#">${i + 1}</td>
      <td class="name" data-label="Name"><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.name}</a></td>
      <td data-label="Type"><span class="type-pill">${r.type}</span></td>
      <td data-label="Best for">${r.bestFor}</td>
      <td class="rating" data-label="Rating">${r.rating.toFixed(1)}</td>
      <td data-label="Revenue">${r.revenue}</td>
    </tr>`).join("");

  body.querySelectorAll("tr").forEach(tr => {
    tr.addEventListener("click", e => {
      if (e.target.closest(".fav-star") || e.target.closest("a")) return;
      openModal(tr.dataset.name);
    });
  });
  body.querySelectorAll(".fav-star").forEach(btn => {
    btn.addEventListener("click", e => { e.stopPropagation(); toggleFavorite(btn.dataset.fav); });
  });
}

/* ---------- Detail modal ---------- */
const modal = document.getElementById("detailModal");
document.getElementById("closeModal").addEventListener("click", () => modal.hidden = true);
modal.addEventListener("click", e => { if (e.target === modal) modal.hidden = true; });

function openModal(name) {
  document.getElementById("modalTitle").textContent = name;
  document.getElementById("modalBody").textContent =
    DESCRIPTIONS[name] || `${name} is one of the ranked services in this category.`;
  modal.hidden = false;
}

/* ---------- Live TMDB trending panel ---------- */
const TMDB_IMG = "https://image.tmdb.org/t/p/w200";
function getStoredKey() { return localStorage.getItem("tmdbApiKey") || ""; }

document.getElementById("saveKeyBtn").addEventListener("click", () => {
  const key = document.getElementById("tmdbKey").value.trim();
  if (key) { localStorage.setItem("tmdbApiKey", key); toast("TMDB key saved"); loadTrending(); }
});

function skeletonGrid() {
  const grid = document.getElementById("trendingGrid");
  grid.innerHTML = Array.from({ length: 10 }).map(() => `<div class="trend-card skeleton"><div class="skeleton-img"></div></div>`).join("");
}

async function loadTrending() {
  const status = document.getElementById("trendingStatus");
  const liveDot = document.getElementById("liveDot");
  const key = getStoredKey();
  document.getElementById("tmdbKey").value = key;
  if (state.category === "music") return;

  skeletonGrid();
  const mediaType = state.category === "movies" ? "movie" : "tv";

  if (key) {
    try {
      status.textContent = "Loading live trending titles from TMDB…";
      const res = await fetch(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${key}`);
      if (!res.ok) throw new Error("TMDB request failed — check your API key.");
      const json = await res.json();
      renderTrending(json.results.slice(0, 10), mediaType);
      status.textContent = "Live data from TMDB, updated this week.";
      liveDot.classList.add("on");
      return;
    } catch (err) {
      status.textContent = `Couldn't load live data (${err.message}). Falling back to cached data.`;
      liveDot.classList.remove("on");
    }
  } else {
    status.textContent = "Add your free TMDB API key above for live data, or run fetch_data.py to cache titles offline.";
    liveDot.classList.remove("on");
  }

  try {
    const res = await fetch(`trending_${mediaType}.json`);
    if (!res.ok) throw new Error("no cache found");
    const cached = await res.json();
    renderTrending(cached.results.slice(0, 10), mediaType);
    if (!key) status.textContent = "Showing cached data from trending_" + mediaType + ".json (run fetch_data.py to refresh).";
  } catch {
    document.getElementById("trendingGrid").innerHTML = "";
  }
}

function renderTrending(items, mediaType) {
  const grid = document.getElementById("trendingGrid");
  grid.innerHTML = items.map(item => {
    const title = item.title || item.name || "Untitled";
    const poster = item.poster_path ? TMDB_IMG + item.poster_path : "";
    return `
      <div class="trend-card" data-title="${title.replace(/"/g, '&quot;')}" data-overview="${(item.overview || '').replace(/"/g, '&quot;')}" data-rating="${(item.vote_average || 0).toFixed(1)}">
        ${poster
          ? `<img src="${poster}" alt="${title} poster" loading="lazy" onerror="this.parentElement.querySelector('.poster-fallback')?.removeAttribute('hidden'); this.remove();">`
          : ""}
        <div class="poster-fallback" ${poster ? "hidden" : ""}>${title}</div>
        <div class="trend-info">
          <div class="trend-title">${title}</div>
          <div class="trend-rating">★ ${(item.vote_average || 0).toFixed(1)}</div>
        </div>
      </div>`;
  }).join("");

  grid.querySelectorAll(".trend-card").forEach(card => {
    card.addEventListener("click", () => {
      document.getElementById("modalTitle").textContent = card.dataset.title;
      document.getElementById("modalBody").textContent = `★ ${card.dataset.rating} / 10 (TMDB)\n\n${card.dataset.overview || "No synopsis available for this title."}`;
      modal.hidden = false;
    });
  });
}

/* ---------- Contact form (mailto) ---------- */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;
  const subject = encodeURIComponent(`Message from ${name} via Streaming Services Ranked`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:agamjot9631@gmail.com?subject=${subject}&body=${body}`;
  toast("Opening your email app…");
});

/* ---------- Password show/hide ---------- */
document.getElementById("togglePw").addEventListener("click", () => {
  const pw = document.getElementById("authPassword");
  const btn = document.getElementById("togglePw");
  const show = pw.type === "password";
  pw.type = show ? "text" : "password";
  btn.textContent = show ? "🙈" : "👁";
  btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
});

/* ---------- Firebase authentication ---------- */
const logoutBtn = document.getElementById("logoutBtn");
const accountStatus = document.getElementById("accountStatus");
const authForm = document.getElementById("authForm");
const authError = document.getElementById("authError");
const showLoginBtn = document.getElementById("showLogin");
const showSignupBtn = document.getElementById("showSignup");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const openAuthBtn = document.getElementById("openAuthBtn");

let authMode = "login";

showLoginBtn.addEventListener("click", () => {
  authMode = "login";
  showLoginBtn.classList.add("active"); showSignupBtn.classList.remove("active");
  authSubmitBtn.textContent = "Log in"; authError.textContent = "";
});
showSignupBtn.addEventListener("click", () => {
  authMode = "signup";
  showSignupBtn.classList.add("active"); showLoginBtn.classList.remove("active");
  authSubmitBtn.textContent = "Sign up"; authError.textContent = "";
});

authForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("authEmail").value;
  const password = document.getElementById("authPassword").value;
  authError.textContent = "";

  if (typeof firebase === "undefined" || !firebase.apps || !firebase.apps.length) {
    authError.textContent = "Auth isn't configured yet — fill in firebase-config.js with your Firebase project keys.";
    return;
  }

  const action = authMode === "login"
    ? firebase.auth().signInWithEmailAndPassword(email, password)
    : firebase.auth().createUserWithEmailAndPassword(email, password);

  action
    .then(() => { authForm.reset(); sessionStorage.removeItem("guestMode"); unlockApp(); toast(authMode === "login" ? "Welcome back!" : "Account created!"); })
    .catch(err => { authError.textContent = err.message; });
});

logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("guestMode");
  if (typeof firebase !== "undefined" && firebase.apps && firebase.apps.length) {
    firebase.auth().signOut();
  }
  authGate.hidden = false;
  appRoot.hidden = true;
  toast("Logged out");
});

if (typeof firebase !== "undefined" && firebase.apps && firebase.apps.length) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      accountStatus.textContent = `Signed in as ${user.email}`;
      openAuthBtn.hidden = true;
      logoutBtn.hidden = false;
      unlockApp();
    } else {
      accountStatus.textContent = "Guest";
      openAuthBtn.hidden = false;
      logoutBtn.hidden = true;
      if (sessionStorage.getItem("guestMode") === "true") unlockApp();
    }
  });
} else {
  accountStatus.textContent = "Auth not configured";
  if (sessionStorage.getItem("guestMode") === "true") unlockApp();
}

/* ---------- Init ---------- */
showSection("home");
