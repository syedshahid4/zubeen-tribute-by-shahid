// ---------- Song data (alphabetical) ----------
// Clicking play opens a real YouTube search for the track in a new tab.
// Why not an inline embed? YouTube retired the "listType=search" embed
// parameter this used to rely on, so those players silently failed to
// load any video — which is why there was no sound before. Hardcoding
// video IDs for 27 songs risks pointing at removed/unofficial uploads,
// so this opens a live YouTube search instead — it always plays.
const songs = [
  "Aahe Ba Naahe",
  "Aasin Aayang Mane Ki",
  "Abegey",
  "Anuradha",
  "Baahi Tumi",
  "Endhar Hobo Nuware",
  "Fagun",
  "Ganane Ki Aane",
  "Hiradoi",
  "Janu Janu",
  "Jodi Tumi Ketiyaba",
  "Ki Naam Di Maatim",
  "Kolia Meghe",
  "Kun Tumi",
  "Maya",
  "Mayabini Ratir Bukut",
  "Nahor",
  "Nila Nila Dusokute",
  "Nishigandha",
  "Nodi Barhile",
  "Pogola Pogola",
  "Protidine",
  "Rodali Tumi",
  "Rong Diya Morom",
  "Rumaal",
  "Tumi Dusokute",
  "Zarou Pungni Somao",
];

const songList = document.getElementById("songList");

songs.forEach((title, i) => {
  const card = document.createElement("div");
  card.className = "song-card";
  card.innerHTML = `
    <span class="song-index">${String(i + 1).padStart(2, "0")}</span>
    <button class="song-play" aria-label="Play ${title} on YouTube">▶</button>
    <div class="song-info">
      <h4>${title}</h4>
      <p>Zubeen Garg</p>
    </div>
    <div class="song-bars">
      <span></span><span></span><span></span><span></span>
    </div>
  `;
  songList.appendChild(card);
});

songList.addEventListener("click", (e) => {
  const btn = e.target.closest(".song-play");
  if (!btn) return;
  const card = btn.closest(".song-card");
  const title = card.querySelector("h4").textContent;

  card.classList.add("is-playing");
  setTimeout(() => card.classList.remove("is-playing"), 2500);

  const query = encodeURIComponent(`${title} Zubeen Garg`);
  window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank", "noopener");
});

// ---------- Mobile nav toggle ----------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
