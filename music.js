/* =========================================
   MÚSICA DE FONDO (YouTube, con fade in / fade out)
   - El video se carga oculto y solo se usa su audio.
   - Los navegadores no permiten sonido sin interacción: la música
     arranca sola al abrir la página; si el navegador lo bloquea, arranca en la primera interacción.
========================================= */
(() => {
  const CONFIG = {
    videoId: "1ZYbU82GVz4",
    start: 8119,        // segundo donde empieza la música (2:15:19)
    end: null,          // segundo donde termina (null = hasta el final del video)
    volume: 55,         // volumen máximo, de 0 a 100
    fadeInMs: 6000,     // duración del fade al iniciar
    fadeOutMs: 6000,    // duración del fade al terminar
    loop: true,         // al terminar, vuelve a empezar con fade
    entryScreen: false  // true = pantalla "Toca para entrar": la música arranca SIEMPRE al entrar
  };

  if (location.protocol === "file:") {
    console.warn("[música] La página está abierta como archivo (file://). YouTube normalmente bloquea el reproductor así: súbela a un hosting o usa un servidor local (http://localhost).");
  }

  const btn = document.getElementById("soundBtn") || document.createElement("button"); // sin botón visible
  const holder = document.getElementById("ytHolder");
  if (!holder) return;

  let player = null;
  let ready = false;
  let wantSound = false;     // la persona quiere escuchar música
  let unlocked = false;      // ya hubo una interacción
  let fadeRaf = 0;
  let endingFade = false;
  let curVol = 0;

  /* ---------- fade suave (curva ease in-out) ---------- */
  function fadeTo(target, ms, done) {
    clearInterval(fadeRaf);
    const from = curVol, t0 = performance.now();
    fadeRaf = setInterval(() => {
      const p = Math.min(1, (performance.now() - t0) / Math.max(1, ms));
      const e = p * p * (3 - 2 * p);
      curVol = from + (target - from) * e;
      try { player.setVolume(Math.round(curVol)); } catch (_) {}
      if (p >= 1) { clearInterval(fadeRaf); if (done) done(); }
    }, 40);
  }

  function setUI(on) {
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-pressed", String(on));
    btn.setAttribute("aria-label", on ? "Silenciar música" : "Activar música");
  }

  /* ---------- iniciar / detener con fade ---------- */
  function startMusic(ms = CONFIG.fadeInMs) {
    if (!ready) return;
    wantSound = true; endingFade = false;
    setUI(true);
    try {
      player.unMute();
      player.setVolume(Math.round(curVol));
      player.playVideo();
    } catch (_) {}
    fadeTo(CONFIG.volume, ms);
  }

  function stopMusic(ms = 1800) {
    wantSound = false;
    setUI(false);
    fadeTo(0, ms, () => { try { player.pauseVideo(); } catch (_) {} });
  }

  function restartLoop() {
    endingFade = false;
    try { player.seekTo(CONFIG.start, true); player.playVideo(); } catch (_) {}
    if (wantSound) fadeTo(CONFIG.volume, CONFIG.fadeInMs);
  }

  /* ---------- vigilar el final para hacer fade out ---------- */
  setInterval(() => {
    if (!ready || !wantSound || endingFade) return;
    let t = 0, dur = 0;
    try { t = player.getCurrentTime(); dur = player.getDuration(); } catch (_) { return; }
    const limit = CONFIG.end || dur;
    if (!limit) return;
    if (limit - t <= CONFIG.fadeOutMs / 1000 + 0.3) {
      endingFade = true;
      fadeTo(0, CONFIG.fadeOutMs, () => {
        if (CONFIG.loop) restartLoop();
        else { try { player.pauseVideo(); } catch (_) {} wantSound = false; setUI(false); }
      });
    }
  }, 400);

  /* ---------- primer toque: desbloquear audio ---------- */
  const GESTURES = ["pointerup", "touchend", "click", "keydown"];
  function unlock() {
    if (unlocked) return;
    unlocked = true;
    GESTURES.forEach((ev) => window.removeEventListener(ev, onFirst, true));
    if (ready) { startMusic(); verifyPlaying(); } else wantSound = true;
  }
  /* si el navegador bloqueó el audio, se reintenta en el siguiente toque */
  function verifyPlaying() {
    setTimeout(() => {
      if (!wantSound || !ready) return;
      let st = -1, muted = false;
      try { st = player.getPlayerState(); muted = player.isMuted(); } catch (_) { return; }
      if (st !== 1 || muted) {
        unlocked = false; wantSound = false; setUI(false);
        GESTURES.forEach((ev) => window.addEventListener(ev, onFirst, true));
      }
    }, 1800);
  }
  function onFirst(e) {
    if (btn.contains(e.target)) return;   // el botón maneja su propio clic
    unlock();
  }
  GESTURES.forEach((ev) => window.addEventListener(ev, onFirst, true));


  /* ---------- arranque automático al abrir la página ----------
     Se intenta sonar con fade-in apenas carga. Si el navegador lo bloquea
     (Chrome/Safari/Firefox suelen hacerlo), queda en silencio y arranca
     con el fade en la primera interacción como respaldo. */
  function tryAutoplay() {
    startMusic();
    setTimeout(() => {
      let st = -1, muted = true;
      try { st = player.getPlayerState(); muted = player.isMuted(); } catch (_) {}
      if (st === 1 && !muted) {
        unlocked = true;                                   // ¡funcionó solo!
        GESTURES.forEach((ev) => window.removeEventListener(ev, onFirst, true));
      } else if (!unlocked) {                              // bloqueado: esperar interacción
        clearInterval(fadeRaf);
        curVol = 0; wantSound = false; setUI(false);
        try { player.mute(); player.setVolume(0); player.playVideo(); } catch (_) {}
      }
    }, 2200);
  }


  /* ---------- pantalla de entrada (opcional) ----------
     Es la única forma de que el navegador permita sonido desde el primer
     instante: el toque para "entrar" cuenta como permiso y la música
     empieza con fade-in en ese mismo momento. */
  if (CONFIG.entryScreen) {
    const gate = document.createElement("div");
    gate.className = "entry-gate";
    gate.innerHTML = '<div class="entry-inner"><span class="entry-star"></span><p>Toca para entrar</p></div>';
    document.body.appendChild(gate);
    const enter = (e) => {
      e.stopPropagation();
      gate.removeEventListener("click", enter);
      unlocked = true;
      GESTURES.forEach((ev) => window.removeEventListener(ev, onFirst, true));
      startMusic(); verifyPlaying();
      gate.classList.add("out");
      setTimeout(() => gate.remove(), 1600);
    };
    gate.addEventListener("click", enter);
  }

  /* ---------- botón de sonido ---------- */
  btn.addEventListener("click", (e) => {
    e.stopPropagation();          // que no cambie el versículo
    if (!unlocked) { unlocked = true; GESTURES.forEach((ev) => window.removeEventListener(ev, onFirst, true)); startMusic(); verifyPlaying(); return; }
    if (wantSound) stopMusic(); else startMusic(3000);
  });

  /* La música sigue sonando aunque cambies de pestaña o ventana. */

  /* ---------- cargar la API de YouTube ---------- */
  window.onYouTubeIframeAPIReady = () => {
    const slot = document.createElement("div");
    slot.id = "ytPlayer";
    holder.appendChild(slot);
    const vars = {
      autoplay: 1, mute: 0, controls: 0, start: CONFIG.start,
      playsinline: 1, rel: 0, modestbranding: 1, disablekb: 1, fs: 0, iv_load_policy: 3
    };
    if (location.protocol.startsWith("http")) vars.origin = location.origin;
    player = new YT.Player("ytPlayer", {
      width: "200", height: "200", videoId: CONFIG.videoId, playerVars: vars,
      host: "https://www.youtube-nocookie.com",   // modo privado: menos avisos de cookies
      events: {
        onReady: () => {
          ready = true;
          try { player.setVolume(0); player.seekTo(CONFIG.start, true); } catch (_) {}
          tryAutoplay();
        },
        onStateChange: (e) => {
          if (e.data === 0 && wantSound) restartLoop();            // terminó
          if (e.data === 1 && !wantSound && !unlocked) {            // sonando mudo hasta el primer toque
            try { player.setVolume(0); } catch (_) {}
          }
        },
        onError: (e) => {
          console.warn("[música] YouTube devolvió el error", e.data,
            "(101/150 = el video no permite incrustarse, 153 = abre la página desde un servidor http(s), no con doble clic)");
          btn.title = "No se pudo cargar la música (error " + e.data + ")";
          btn.style.opacity = ".45";
        }
      }
    });
  };
  const s = document.createElement("script");
  s.src = "https://www.youtube.com/iframe_api";
  s.async = true;
  document.head.appendChild(s);
})();