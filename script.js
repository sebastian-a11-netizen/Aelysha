/* =========================================
   COLECCIÓN DE VERSÍCULOS
========================================= */
const verses = [
  {
    text: "El amor es paciente, es bondadoso. No tiene envidia ni se envanece.",
    reference: "1 Corintios 13:4"
  },
  {
    text: "Por encima de todo, vístanse de amor, que es el vínculo perfecto.",
    reference: "Colosenses 3:14"
  },
  {
    text: "Y ahora permanecen la fe, la esperanza y el amor. Pero el mayor de ellos es el amor.",
    reference: "1 Corintios 13:13"
  },
  {
    text: "Ponme como un sello sobre tu corazón, como un sello sobre tu brazo, porque fuerte como la muerte es el amor.",
    reference: "Cantares 8:6"
  },
  {
    text: "El amor nunca deja de ser.",
    reference: "1 Corintios 13:8"
  },
  {
    text: "En todo tiempo ama el amigo, y es como un hermano en tiempo de angustia.",
    reference: "Proverbios 17:17"
  },
  {
    text: "Mejores son dos que uno, porque si uno cae, el otro puede levantarlo.",
    reference: "Eclesiastés 4:9-10"
  },
  {
    text: "Nosotros amamos porque él nos amó primero.",
    reference: "1 Juan 4:19"
  },
  {
    text: "El Señor te bendiga y te guarde; haga resplandecer su rostro sobre ti.",
    reference: "Números 6:24-25"
  },
  {
    text: "Deléitate en el Señor, y él concederá las peticiones de tu corazón.",
    reference: "Salmos 37:4"
  },
  {
    text: "Porque donde esté tu tesoro, allí estará también tu corazón.",
    reference: "Mateo 6:21"
  },
  {
    text: "El amor sea el motivo de todo lo que hagan.",
    reference: "1 Corintios 16:14"
  },
  {
    text: "Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora.",
    reference: "Eclesiastés 3:1"
  },
  {
    text: "He aquí que tú eres hermosa, amiga mía; tus ojos son como palomas.",
    reference: "Cantares 1:15"
  },
  {
    text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia",
    reference: "Isaías 41:10"
  },
  {
    text: "Aunque la noche traiga tristeza, la alegría llega con la mañana.",
    reference: "Salmos 30:5"
  },
  {
    text: "Echa sobre el Señor tu carga, y él te sustentará.",
    reference: "Salmos 55:22"
  },
  {
    text: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera.",
    reference: "Isaías 26:3"
  },
  {
    text: "Los que esperan en el Señor tendrán nuevas fuerzas; levantarán alas como las águilas.",
    reference: "Isaías 40:31"
  },
  {
    text: "Porque yo sé los pensamientos que tengo acerca de ustedes, pensamientos de paz y no de mal, para darles un futuro y una esperanza.",
    reference: "Jeremías 29:11"
  },
  {
    text: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",
    reference: "Jeremías 33:3"
  },
  {
    text: "Las misericordias del Señor nunca terminan; nuevas son cada mañana.",
    reference: "Lamentaciones 3:22-23"
  },
  {
    text: "Porque nada hay imposible para Dios.",
    reference: "Lucas 1:37"
  },
  {
    text: "No tengas miedo; solamente cree.",
    reference: "Marcos 5:36"
  },
  {
    text: "La paz les dejo, mi paz les doy. No se turbe su corazón ni tenga miedo.",
    reference: "Juan 14:27"
  },
  {
    text: "Estas cosas les he hablado para que en mí tengan paz.",
    reference: "Juan 16:33"
  },
  {
    text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.",
    reference: "Romanos 8:28"
  },
  {
    text: "Si Dios está con nosotros, ¿quién podrá estar contra nosotros?",
    reference: "Romanos 8:31"
  },
  {
    text: "Las aflicciones del tiempo presente no se comparan con la gloria que será revelada.",
    reference: "Romanos 8:18"
  },
  {
    text: "Nada podrá separarnos del amor de Dios, que es en Cristo Jesús.",
    reference: "Romanos 8:38-39"
  },
  {
    text: "El amor no hace mal al prójimo; así que el cumplimiento de la ley es el amor.",
    reference: "Romanos 13:10"
  },
  {
    text: "Todo lo que hagan, háganlo con amor.",
    reference: "1 Corintios 16:14"
  },
  {
    text: "Todo lo puedo en Cristo que me fortalece.",
    reference: "Filipenses 4:13"
  },
  {
    text: "Por nada estén afanosos; presenten sus peticiones a Dios con oración y gratitud.",
    reference: "Filipenses 4:6"
  },
  {
    text: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará sus corazones y sus pensamientos.",
    reference: "Filipenses 4:7"
  },
  {
    text: "Mi Dios suplirá todo lo que les falte conforme a sus riquezas en gloria.",
    reference: "Filipenses 4:19"
  },
  {
    text: "El que comenzó en ustedes la buena obra la perfeccionará hasta el día de Jesucristo.",
    reference: "Filipenses 1:6"
  },
  {
    text: "Sean humildes, amables y pacientes; sopórtense unos a otros en amor.",
    reference: "Efesios 4:2"
  },
  {
    text: "Sobre todo, tomen el escudo de la fe, con el que podrán apagar los dardos del enemigo.",
    reference: "Efesios 6:16"
  },
  {
    text: "El Señor es fiel; él los fortalecerá y los protegerá del mal.",
    reference: "2 Tesalonicenses 3:3"
  },
  {
    text: "Dios no nos ha dado espíritu de temor, sino de poder, amor y dominio propio.",
    reference: "2 Timoteo 1:7"
  },
  {
    text: "Acérquense confiadamente al trono de la gracia, para alcanzar misericordia.",
    reference: "Hebreos 4:16"
  },
  {
    text: "La fe es la certeza de lo que se espera y la convicción de lo que no se ve.",
    reference: "Hebreos 11:1"
  },
  {
    text: "Corramos con paciencia la carrera que tenemos por delante.",
    reference: "Hebreos 12:1"
  },
  {
    text: "Toda buena dádiva y todo don perfecto descienden de lo alto.",
    reference: "Santiago 1:17"
  },
  {
    text: "Si alguno necesita sabiduría, pídasela a Dios, quien da generosamente.",
    reference: "Santiago 1:5"
  },
  {
    text: "Echen toda su ansiedad sobre él, porque él tiene cuidado de ustedes.",
    reference: "1 Pedro 5:7"
  },
  {
    text: "El Dios de toda gracia los perfeccionará, afirmará, fortalecerá y establecerá.",
    reference: "1 Pedro 5:10"
  },
  {
    text: "Dios es amor; y el que permanece en amor permanece en Dios.",
    reference: "1 Juan 4:16"
  },
  {
    text: "En el amor no hay temor, sino que el perfecto amor echa fuera el temor.",
    reference: "1 Juan 4:18"
  },
  {
    text: "Este es mi mandamiento: que se amen unos a otros, como yo los he amado.",
    reference: "Juan 15:12"
  },
  {
    text: "Nadie tiene mayor amor que este: que uno ponga su vida por sus amigos.",
    reference: "Juan 15:13"
  },
  {
    text: "Yo he venido para que tengan vida, y para que la tengan en abundancia.",
    reference: "Juan 10:10"
  },
  {
    text: "El Señor es mi pastor; nada me faltará.",
    reference: "Salmos 23:1"
  },
  {
    text: "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.",
    reference: "Salmos 23:4"
  },
  {
    text: "Encomienda al Señor tu camino, confía en él, y él hará.",
    reference: "Salmos 37:5"
  },
  {
    text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
    reference: "Salmos 46:1"
  },
  {
    text: "Estén quietos, y conozcan que yo soy Dios.",
    reference: "Salmos 46:10"
  },
  {
    text: "Cuando se multiplican mis preocupaciones, tus consuelos alegran mi alma.",
    reference: "Salmos 94:19"
  },
  {
    text: "Este es el día que hizo el Señor; nos gozaremos y alegraremos en él.",
    reference: "Salmos 118:24"
  },
  {
    text: "Lámpara es a mis pies tu palabra, y luz para mi camino.",
    reference: "Salmos 119:105"
  },
  {
    text: "Los que sembraron con lágrimas, con regocijo cosecharán.",
    reference: "Salmos 126:5"
  },
  {
    text: "Examíname, oh Dios, y conoce mi corazón; guíame por el camino eterno.",
    reference: "Salmos 139:23-24"
  },
  {
    text: "Con amor eterno te he amado; por eso te sigo mostrando mi misericordia.",
    reference: "Jeremías 31:3"
  },
  {
    text: "El Señor tu Dios está en medio de ti; se gozará sobre ti con alegría y te renovará con su amor.",
    reference: "Sofonías 3:17"
  },
  {
    text: "Bienaventurados los de limpio corazón, porque ellos verán a Dios.",
    reference: "Mateo 5:8"
  },
  {
    text: "Ustedes son la luz del mundo. Una ciudad asentada sobre un monte no se puede esconder.",
    reference: "Mateo 5:14"
  },
  {
    text: "Busquen primeramente el reino de Dios y su justicia, y todas estas cosas les serán añadidas.",
    reference: "Mateo 6:33"
  },
  {
    text: "Vengan a mí todos los que están trabajados y cargados, y yo les daré descanso.",
    reference: "Mateo 11:28"
  },
  {
    text: "Para Dios todo es posible.",
    reference: "Mateo 19:26"
  },
  {
    text: "Ama al Señor tu Dios con todo tu corazón, con toda tu alma y con toda tu mente.",
    reference: "Mateo 22:37"
  },
  {
    text: "Ama a tu prójimo como a ti mismo.",
    reference: "Mateo 22:39"
  },
  {
    text: "El cielo y la tierra pasarán, pero mis palabras no pasarán.",
    reference: "Mateo 24:35"
  },
  {
    text: "Y he aquí, yo estoy con ustedes todos los días, hasta el fin del mundo.",
    reference: "Mateo 28:20"
  },
  {
    text: "Para el que cree, todo es posible.",
    reference: "Marcos 9:23"
  },
  {
    text: "No teman, pequeño rebaño, porque al Padre le ha placido darles el reino.",
    reference: "Lucas 12:32"
  },
  {
    text: "Bienaventurados los que lloran, porque ellos recibirán consolación.",
    reference: "Mateo 5:4"
  },
  {
    text: "El que permanece en mí, y yo en él, lleva mucho fruto.",
    reference: "Juan 15:5"
  },
  {
    text: "Les he dicho estas cosas para que mi gozo esté en ustedes, y su gozo sea completo.",
    reference: "Juan 15:11"
  },
  {
    text: "La luz resplandece en las tinieblas, y las tinieblas no la vencieron.",
    reference: "Juan 1:5"
  },
  {
    text: "El Señor es bueno; es refugio en el día de la angustia y protector de los que en él confían.",
    reference: "Nahúm 1:7"
  },
  {
    text: "Levántate, resplandece, porque ha llegado tu luz, y la gloria del Señor ha nacido sobre ti.",
    reference: "Isaías 60:1"
  },
  {
    text: "El pequeño llegará a ser mil, y el menor, un pueblo fuerte. Yo, el Señor, a su tiempo haré que esto suceda pronto.",
    reference: "Isaías 60:22"
  },
  {
    text: "No temas, porque yo te redimí; te puse nombre, mío eres tú.",
    reference: "Isaías 43:1"
  },
  {
    text: "Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán.",
    reference: "Isaías 43:2"
  },
  {
    text: "Los montes se moverán y los collados temblarán, pero mi misericordia no se apartará de ti.",
    reference: "Isaías 54:10"
  },
  {
    text: "Como aquel a quien consuela su madre, así los consolaré yo a ustedes.",
    reference: "Isaías 66:13"
  },
  {
    text: "El Señor es bueno con los que en él esperan, con el alma que lo busca.",
    reference: "Lamentaciones 3:25"
  },
  {
    text: "Aunque la higuera no florezca ni haya fruto en las vides, con todo, yo me alegraré en el Señor.",
    reference: "Habacuc 3:17-18"
  },
  {
    text: "El Señor es mi fuerza y mi escudo; en él confió mi corazón, y fui ayudado.",
    reference: "Salmos 28:7"
  },
  {
    text: "Me mostrarás la senda de la vida; en tu presencia hay plenitud de gozo.",
    reference: "Salmos 16:11"
  },
  {
    text: "¡Cuán precioso es tu amor, oh Dios! Por eso los seres humanos se refugian bajo la sombra de tus alas.",
    reference: "Salmos 36:7"
  },
  {
    text: "Mi alma tiene sed de Dios, del Dios vivo.",
    reference: "Salmos 42:2"
  },
  {
    text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.",
    reference: "Salmos 51:10"
  },
  {
    text: "Encomienda al Señor tus obras, y tus pensamientos serán afirmados.",
    reference: "Proverbios 16:3"
  },
  {
    text: "El corazón alegre hermosea el rostro.",
    reference: "Proverbios 15:13"
  },
  {
    text: "La respuesta amable calma el enojo.",
    reference: "Proverbios 15:1"
  },
  {
    text: "Confía en el Señor con todo tu corazón, y no te apoyes en tu propia inteligencia. Reconócelo en todos tus caminos y el enderezará tus sendas.",
    reference: "Proverbios 3:5-6"
  },
  {
    text: "El que halla esposa halla el bien y alcanza el favor del Señor.",
    reference: "Proverbios 18:22"
  },
  {
    text: "Engañosa es la gracia y vana la hermosura; la mujer que teme al Señor será alabada.",
    reference: "Proverbios 31:30"
  },
  {
    text: "Porque por fe andamos, no por vista.",
    reference: "2 Corintios 5:7"
  },
  {
    text: "Mi gracia es suficiente para ti, porque mi poder se perfecciona en la debilidad.",
    reference: "2 Corintios 12:9"
  },
  {
    text: "El Señor está cerca de todos los que le invocan con sinceridad.",
    reference: "Salmos 145:18"
  },
  {
    text: "Que el Señor dirija sus corazones al amor de Dios y a la paciencia de Cristo.",
    reference: "2 Tesalonicenses 3:5"
  },
  {
    text: "La esperanza no avergüenza, porque el amor de Dios ha sido derramado en nuestros corazones.",
    reference: "Romanos 5:5"
  },
  {
    text: "Alégrense en la esperanza, tengan paciencia en la tribulación y perseveren en la oración.",
    reference: "Romanos 12:12"
  },
  {
    text: "No te dejes vencer por el mal; vence el mal con el bien.",
    reference: "Romanos 12:21"
  },
  {
    text: "El Dios de esperanza los llene de todo gozo y paz en el creer.",
    reference: "Romanos 15:13"
  },
  {
    text: "Sean, pues, imitadores de Dios como hijos amados, y anden en amor.",
    reference: "Efesios 5:1-2"
  },
  {
    text: "El Señor mismo irá delante de ti; no te dejará ni te desamparará.",
    reference: "Deuteronomio 31:8"
  },
  {
    text: "Sé fuerte y valiente; no temas ni desmayes, porque el Señor tu Dios estará contigo.",
    reference: "Josué 1:9"
  },
  {
    text: "En paz me acostaré, y asimismo dormiré, porque solo tú, Señor, me haces vivir confiado.",
    reference: "Salmos 4:8"
  },
  {
    text: "Gustad y ved que es bueno el Señor; dichoso el que confía en él.",
    reference: "Salmos 34:8"
  },
  {
    text: "El Señor está cerca de los quebrantados de corazón.",
    reference: "Salmos 34:18"
  },
  {
    text: "Aunque mi padre y mi madre me dejaran, con todo, el Señor me recogerá.",
    reference: "Salmos 27:10"
  },
  {
    text: "Una cosa he pedido al Señor, y esa buscaré: estar en su presencia todos los días de mi vida.",
    reference: "Salmos 27:4"
  },
  {
    text: "Porque mejor es un día en tus atrios que mil fuera de ellos.",
    reference: "Salmos 84:10"
  },
  {
    text: "El Señor dará fuerza a su pueblo; el Señor bendecirá a su pueblo con paz.",
    reference: "Salmos 29:11"
  },
  {
    text: "El Señor guardará tu salida y tu entrada desde ahora y para siempre.",
    reference: "Salmos 121:8"
  },
  {
    text: "Grande es el Señor, y digno de suprema alabanza.",
    reference: "Salmos 145:3"
  },
  {
    text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",
    reference: "Salmos 91:1"
  },
  {
    text: "Con sus plumas te cubrirá, y debajo de sus alas estarás seguro.",
    reference: "Salmos 91:4"
  },
  {
    text: "El Señor es compasivo y misericordioso, lento para la ira y grande en amor.",
    reference: "Salmos 103:8"
  },
  {
    text: "Bendice, alma mía, al Señor, y no olvides ninguno de sus beneficios.",
    reference: "Salmos 103:2"
  },
  {
    text: "Tu amor, Señor, llega hasta los cielos; tu fidelidad alcanza las nubes.",
    reference: "Salmos 36:5"
  },
  {
    text: "Que el Señor te responda cuando estés angustiado; que el nombre del Dios de Jacob te proteja.",
    reference: "Salmos 20:1"
  },
  {
    text: "Yo soy de mi amado, y mi amado es mío.",
    reference: "Cantares 6:3"
  },
  {
    text: "¡Cuán hermosa eres, amada mía! No hay defecto en ti.",
    reference: "Cantares 4:7"
  },
  {
    text: "Y esta es la confianza que tenemos en él, que si pedimos alguna cosa conforme a su voluntad, él nos oye.",
    reference: "1 Juan 5:14"
  },
  {
    text: "Sean fuertes y valientes. No teman ni tengan miedo de ellos, porque el Señor su Dios va con ustedes; no los dejará ni los abandonará.",
    reference: "Deuteronomio 31:6"
  },
  {
    text: "Cuando en mi lecho me acuerdo de ti, medito en ti durante las vigilias de la noche.",
    reference: "Salmos 63:6"
  },
  {
    text: "Te alabaré, porque formidables y maravillosas son tus obras; estoy maravillado.",
    reference: "Salmos 139:14"
  },
  {
    text: "Mirad cuál amor nos ha dado el Padre, para que seamos llamados hijos de Dios.",
    reference: "1 Juan 3:1"
  },
  {
    text: "Levántate, amiga mía, hermosa mía, y ven.",
    reference: "Cantares 2:10"
  },
  {
    text: "Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.",
    reference: "1 Corintios 13:7"
  },
  {
    text: "Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene del Señor, que hizo los cielos y la tierra.",
    reference: "Salmos 121:1-2"
  },
  {
    text: "Aunque una madre se olvide de su hijo, yo nunca me olvidaré de ti. En las palmas de mis manos te tengo esculpida.",
    reference: "Isaías 49:15-16"
  },
  {
    text: "En el día que temo, yo en ti confío.",
    reference: "Salmos 56:3"
  },
  {
    text: "Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.",
    reference: "Isaías 40:29"
  },
  {
    text: "Todo lo hizo hermoso en su tiempo.",
    reference: "Eclesiastés 3:11"
  },
  {
    text: "Bendito el hombre que confía en el Señor, y cuya confianza es el Señor. Será como árbol plantado junto a las aguas.",
    reference: "Jeremías 17:7-8"
  },
  {
    text: "El Señor cumplirá su propósito en mí; tu misericordia, oh Señor, es para siempre.",
    reference: "Salmos 138:8"
  },
  {
    text: "No nos cansemos de hacer el bien, porque a su tiempo cosecharemos, si no desmayamos.",
    reference: "Gálatas 6:9"
  },
  {
    text: "Todo lo verdadero, todo lo honesto, todo lo justo, todo lo puro, todo lo amable, todo lo que es de buen nombre, en esto piensen.",
    reference: "Filipenses 4:8"
  }
];

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
  if (busy) return;
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
setTimeout(() => { if (current === -1) changeVerse(true); startTimer(); }, 3300);

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
