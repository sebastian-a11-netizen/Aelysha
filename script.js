/* =========================================
   TRANSICIÓN DE VERSÍCULOS
========================================= */
const verseText = document.getElementById("verse-text");
const verseRef = document.getElementById("verse-reference");
const verseArea = document.getElementById("verse-area");
const progress = document.getElementById("progress");
const stage = document.getElementById("stage");
const hero = document.getElementById("hero");
const routeEl = hero.querySelector(".subtitle");

/* =========================================
   VERSÍCULOS (se cargan desde data/verse.json)
========================================= */
let verses = [];
const versesReady = fetch("data/verse.json")
  .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
  .then((data) => { verses = Array.isArray(data) ? data : data.verses; })
  .catch((err) => {
    console.error("No se pudo cargar data/verse.json:", err);
    verses = [{ text: "El Señor es mi pastor; nada me faltará.", reference: "Salmos 23:1" }];
  });

const VERSE_DURATION = 20000;
document.documentElement.style.setProperty("--dur", VERSE_DURATION + "ms");

let deck = [], current = -1, timer = null, busy = false;

function nextIndex() {
  if (!deck.length) {
    deck = verses.map((_, i) => i);
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    if (deck.length > 1 && deck[deck.length - 1] === current) deck.unshift(deck.pop());
  }
  return deck.pop();
}

function showVerse(v) {
  const words = v.text.split(" ");
  verseText.textContent = "";
  verseText.setAttribute("aria-label", v.text);
  words.forEach((w, i) => {
    const s = document.createElement("span");
    s.className = "w";
    s.style.setProperty("--i", i);
    s.textContent = w;
    verseText.appendChild(s);
  });
  fitVerse();
  verseRef.textContent = v.reference;
  verseRef.style.setProperty("--d", (words.length * 45 + 500) + "ms");
  verseRef.style.animation = "none";
  void verseRef.offsetWidth;
  verseRef.style.animation = "";
}

/* El versículo siempre cabe en su caja: se reduce la letra si hace falta */
function fitVerse() {
  verseText.classList.add("measuring");
  verseText.style.fontSize = "";
  let size = parseFloat(getComputedStyle(verseText).fontSize);
  const last = () => verseText.lastElementChild;
  while (last() && last().offsetTop + last().offsetHeight > verseText.clientHeight + 1 && size > 12) {
    size -= .5;
    verseText.style.fontSize = size + "px";
  }
  verseText.classList.remove("measuring");
}

/* Toda la página cabe en la pantalla, sin scroll, en cualquier dispositivo */
function fitStage() {
  let k = 1;
  hero.style.justifyContent = "flex-start";
  for (let i = 0; i < 12; i++) {
    stage.style.setProperty("--k", k.toFixed(2));
    const need = routeEl.offsetTop + routeEl.offsetHeight - hero.offsetTop;
    if (need <= hero.clientHeight) break;
    k -= .05;
  }
  hero.style.justifyContent = "";
}

function refit() { fitStage(); fitVerse(); }
window.addEventListener("resize", refit);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);

function restartProgress() {
  progress.classList.remove("run");
  void progress.offsetWidth;
  progress.classList.add("run");
}

function changeVerse(first) {
  if (busy || !verses.length) return;
  busy = true;
  current = nextIndex();
  const v = verses[current];

  if (first) {
    showVerse(v);
    busy = false;
    return;
  }
  verseArea.classList.add("leaving");
  setTimeout(() => {
    showVerse(v);
    verseArea.classList.remove("leaving");
    busy = false;
  }, 750);
}

function startTimer() {
  clearInterval(timer);
  restartProgress();
  timer = setInterval(() => { changeVerse(); restartProgress(); }, VERSE_DURATION);
}

fitStage();
Promise.all([versesReady, new Promise((r) => setTimeout(r, 3300))]).then(() => {
  if (current === -1) changeVerse(true);
  startTimer();
});

document.addEventListener("click", (e) => {
  burst(e.clientX, e.clientY);
  if (!busy) { changeVerse(); startTimer(); }
});

document.addEventListener("keydown", (e) => {
  if (["Enter", " ", "ArrowRight"].includes(e.key)) {
    e.preventDefault();
    if (!busy) { changeVerse(); startTimer(); }
  }
});

/* =========================================
   MONTAÑAS (Andes entre Ibagué y el Caquetá)
========================================= */
(function mountains() {
  const svg = document.getElementById("mountains");
  const W = 1440, H = 300;
  const ridge = (seed, base, amp) => (x) =>
    base + amp * (Math.sin(x * .004 + seed) * .55 + Math.sin(x * .011 + seed * 2.3) * .3 + Math.sin(x * .027 + seed * 1.7) * .15);

  const layers = [
    { f: ridge(1.2, 130, 70), top: "#3a4478", bot: "#1b2350", o: .5 },
    { f: ridge(3.7, 185, 60), top: "#232c60", bot: "#10173a", o: .78 },
    { f: ridge(6.1, 245, 42), top: "#0f1535", bot: "#070b1a", o: 1 }
  ];

  let out = "<defs>";
  layers.forEach((l, i) => {
    out += `<linearGradient id="m${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${l.top}"/><stop offset="1" stop-color="${l.bot}"/></linearGradient>`;
  });
  out += "</defs>";

  layers.forEach((l, i) => {
    let d = `M0 ${H} L0 ${l.f(0)}`;
    for (let x = 12; x <= W; x += 12) d += ` L${x} ${l.f(x).toFixed(1)}`;
    d += ` L${W} ${H}Z`;
    out += `<path d="${d}" fill="url(#m${i})" opacity="${l.o}"/>`;
  });

  /* Luces de casitas en el valle */
  const mid = layers[1].f;
  for (let i = 0; i < 14; i++) {
    const x = 60 + Math.random() * (W - 120);
    const y = mid(x) + 10 + Math.random() * 22;
    out += `<circle class="light" cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="1.3" fill="#ffd9a0" style="animation-delay:${(Math.random() * 4).toFixed(1)}s;animation-duration:${(3 + Math.random() * 3).toFixed(1)}s"/>`;
  }
  svg.innerHTML = out;
})();

/* =========================================
   CIELO ANIMADO
========================================= */
const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");
const emblem = document.querySelector(".emblem");

let width, height, dpr;
let stars = [], dust = [], meteors = [], sparks = [], ripples = [], heart = [];
let lastTime = 0, meteorTimer = 3, lastMove = -1e5, rafId = 0, shownX = 99, shownY = 99;
const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
const TAU = Math.PI * 2;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const random = (min, max) => Math.random() * (max - min) + min;

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createSky();
  if (reducedMotion) draw(0);
}

function createSky() {
  stars = []; dust = []; heart = [];
  const count = Math.min(width < 600 ? 170 : 300, Math.floor(width * height / 4200));

  for (let i = 0; i < count; i++) {
    const z = random(.2, 1);
    stars.push({
      x: random(0, width), y: random(0, height), z,
      r: .3 + z * 1.15, alpha: random(.3, .9),
      phase: random(0, TAU), speed: random(.3, 1.4),
      big: z > .88 && Math.random() > .45
    });
  }
  for (let i = 0; i < 46; i++) {
    dust.push({
      x: random(0, width), y: random(0, height),
      r: random(.6, 1.9), alpha: random(.15, .5),
      drift: random(3, 12), sway: random(0, TAU)
    });
  }

  /* Constelación en forma de corazón */
  const s = Math.max(1.9, Math.min(width, height) * .0068);
  const cx = width * (width < 600 ? .2 : .17);
  const cy = height * (width < 600 ? .15 : .2);
  for (let k = 0; k < 12; k++) {
    const t = k * TAU / 12;
    heart.push({
      x: cx + 16 * Math.pow(Math.sin(t), 3) * s,
      y: cy - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * s,
      phase: random(0, TAU)
    });
  }
}

function sparkle(x, y, r, a) {
  ctx.globalAlpha = a;
  ctx.strokeStyle = "#fff6de";
  ctx.lineWidth = .8;
  ctx.beginPath();
  ctx.moveTo(x - r * 4.5, y); ctx.lineTo(x + r * 4.5, y);
  ctx.moveTo(x, y - r * 4.5); ctx.lineTo(x, y + r * 4.5);
  ctx.stroke();
}

function dot(x, y, r, color, a) {
  ctx.globalAlpha = a;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fill();
}

function createMeteor() {
  const angle = random(2.25, 2.6), speed = random(480, 700);
  meteors.push({
    x: random(width * .3, width * 1.05), y: random(-30, height * .4),
    vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
    life: 0, duration: random(.7, 1.1), length: random(90, 170)
  });
}

function burst(x, y) {
  if (reducedMotion) return;
  ripples.push({ x, y, life: 0, dur: 1.1 });
  for (let i = 0; i < 22; i++) {
    const a = random(0, TAU), v = random(40, 210);
    sparks.push({
      x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 25,
      life: 0, dur: random(.9, 1.8), r: random(1, 2.6),
      star: Math.random() < .4, rose: Math.random() < .3
    });
  }
}

function draw(time) {
  rafId = 0;
  const dt = Math.min((time - lastTime) / 1000 || 0, .05);
  lastTime = time;

  /* Si nadie toca la pantalla, el retrato se mece solo */
  if (time - lastMove > 3500) {
    pointer.tx = Math.sin(time / 5200) * .16;
    pointer.ty = Math.cos(time / 6800) * .10;
  }
  const ease = Math.min(1, dt * 3.2);
  pointer.x += (pointer.tx - pointer.x) * ease;
  pointer.y += (pointer.ty - pointer.y) * ease;
  if (Math.abs(pointer.x - shownX) > .0004 || Math.abs(pointer.y - shownY) > .0004) {
    shownX = pointer.x; shownY = pointer.y;
    emblem.style.setProperty("--mx", shownX.toFixed(4));
    emblem.style.setProperty("--my", shownY.toFixed(4));
  }

  ctx.clearRect(0, 0, width, height);

  /* Estrellas con paralaje */
  ctx.fillStyle = "#f6eede";
  for (const s of stars) {
    s.phase += dt * s.speed;
    const a = s.alpha * (.62 + Math.sin(s.phase) * .38);
    const x = s.x + pointer.x * s.z * 22;
    const y = s.y + pointer.y * s.z * 22;
    ctx.globalAlpha = a;
    ctx.beginPath(); ctx.arc(x, y, s.r, 0, TAU); ctx.fill();
    if (s.big) {
      dot(x, y, s.r * 3.4, "#ecd9a8", a * .08);
      sparkle(x, y, s.r, a * .55);
      ctx.fillStyle = "#f6eede";
    }
  }

  /* Corazón de estrellas */
  const pulse = .55 + Math.sin(time / 1400) * .2;
  const ox = pointer.x * 12, oy = pointer.y * 12;
  ctx.globalAlpha = .2 * pulse;
  ctx.strokeStyle = "#ecd9a8";
  ctx.lineWidth = .8;
  ctx.beginPath();
  heart.forEach((p, i) => { i ? ctx.lineTo(p.x + ox, p.y + oy) : ctx.moveTo(p.x + ox, p.y + oy); });
  ctx.closePath();
  ctx.stroke();
  for (const p of heart) {
    const a = .65 + Math.sin(time / 900 + p.phase) * .3;
    dot(p.x + ox, p.y + oy, 4.2, "#e8b4b8", .1 * a);
    dot(p.x + ox, p.y + oy, 1.6, "#fff0e1", a);
  }

  if (!reducedMotion) {
    /* Luciérnagas doradas */
    for (const d of dust) {
      d.sway += dt * .7;
      d.y -= d.drift * dt;
      d.x += Math.sin(d.sway) * 6 * dt;
      if (d.y < -6) { d.y = height + 6; d.x = random(0, width); }
      const a = d.alpha * (.6 + Math.sin(d.sway * 2) * .4);
      dot(d.x, d.y, d.r * 3.4, "#ecd296", a * .12);
      dot(d.x, d.y, d.r, "#ffe8b4", a);
    }

    /* Estrellas fugaces */
    meteorTimer += dt;
    if (meteorTimer > 5.5) { createMeteor(); meteorTimer = 0; }
    meteors = meteors.filter(m => m.life < m.duration);
    for (const m of meteors) {
      m.life += dt; m.x += m.vx * dt; m.y += m.vy * dt;
      const a = Math.sin(m.life / m.duration * Math.PI) * .9;
      const tx = m.x - m.vx / 700 * m.length, ty = m.y - m.vy / 700 * m.length;
      const g = ctx.createLinearGradient(m.x, m.y, tx, ty);
      g.addColorStop(0, "rgba(255,246,224,1)");
      g.addColorStop(1, "rgba(232,180,184,0)");
      ctx.globalAlpha = a;
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(tx, ty);
      ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.stroke();
      dot(m.x, m.y, 1.7, "#fffaeb", a);
    }

    /* Ondas al tocar */
    ripples = ripples.filter(r => r.life < r.dur);
    for (const r of ripples) {
      r.life += dt;
      const p = r.life / r.dur;
      ctx.globalAlpha = (1 - p) * (1 - p) * .55;
      ctx.strokeStyle = "#ecd9a8";
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(r.x, r.y, 6 + p * 74, 0, TAU); ctx.stroke();
    }

    /* Destellos al tocar */
    sparks = sparks.filter(s => s.life < s.dur);
    for (const s of sparks) {
      s.life += dt;
      s.vx *= .965; s.vy = s.vy * .965 + 38 * dt;
      s.x += s.vx * dt; s.y += s.vy * dt;
      const a = 1 - s.life / s.dur;
      if (s.star) sparkle(s.x, s.y, s.r * 1.2, a);
      dot(s.x, s.y, s.r, s.rose ? "#f0bec4" : "#ffe8af", a);
    }
  }

  ctx.globalAlpha = 1;
  if (!reducedMotion && !document.hidden) rafId = requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);

function aim(e) {
  pointer.tx = e.clientX / width - .5;
  pointer.ty = e.clientY / height - .5;
  lastMove = performance.now();
}
window.addEventListener("pointermove", aim);
window.addEventListener("pointerdown", aim);

/* Se pausa cuando la pestaña no se ve: ahorra batería */
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && !reducedMotion && !rafId) {
    lastTime = performance.now();
    rafId = requestAnimationFrame(draw);
  }
});

resize();
if (!reducedMotion) rafId = requestAnimationFrame(draw);
