'use strict';
/* Common Dutch verbs. Fields: infinitive | English | ik (present) | imperfect sg | imperfect pl (blank = sg+n)
   | past participle (- = none) | auxiliary (h = hebben, z = zijn; 2nd letter = also accepted)
   | optional present override "ik/jij/hij/wij". Separable verbs are left out on purpose. */
const VERB_DATA = `
zijn|to be|ben|was|waren|geweest|z|ben/bent/is/zijn
hebben|to have|heb|had|hadden|gehad|h|heb/hebt/heeft/hebben
worden|to become|word|werd|werden|geworden|z
kunnen|can, to be able to|kan|kon|konden|gekund|h|kan/kunt/kan/kunnen
zullen|shall, will|zal|zou|zouden|-|h|zal/zult/zal/zullen
willen|to want|wil|wilde||gewild|h|wil/wilt/wil/willen
mogen|may, to be allowed to|mag|mocht|mochten|gemogen|h|mag/mag/mag/mogen
moeten|must, to have to|moet|moest|moesten|gemoeten|h
gaan|to go|ga|ging|gingen|gegaan|z
komen|to come|kom|kwam|kwamen|gekomen|z
zien|to see|zie|zag|zagen|gezien|h
doen|to do|doe|deed|deden|gedaan|h
maken|to make|maak|maakte||gemaakt|h
weten|to know (a fact)|weet|wist|wisten|geweten|h
zeggen|to say|zeg|zei|zeiden|gezegd|h
geven|to give|geef|gaf|gaven|gegeven|h
nemen|to take|neem|nam|namen|genomen|h
staan|to stand|sta|stond|stonden|gestaan|h
zitten|to sit|zit|zat|zaten|gezeten|h
liggen|to lie (be lying)|lig|lag|lagen|gelegen|h
houden|to hold, to keep|houd|hield|hielden|gehouden|h
denken|to think|denk|dacht|dachten|gedacht|h
vinden|to find|vind|vond|vonden|gevonden|h
krijgen|to get, to receive|krijg|kreeg|kregen|gekregen|h
laten|to let, to leave|laat|liet|lieten|gelaten|h
lopen|to walk|loop|liep|liepen|gelopen|hz
praten|to talk|praat|praatte||gepraat|h
spreken|to speak|spreek|sprak|spraken|gesproken|h
werken|to work|werk|werkte||gewerkt|h
leven|to live (be alive)|leef|leefde||geleefd|h
wonen|to live (reside)|woon|woonde||gewoond|h
beginnen|to begin|begin|begon|begonnen|begonnen|z
blijven|to stay|blijf|bleef|bleven|gebleven|z
brengen|to bring|breng|bracht|brachten|gebracht|h
halen|to fetch|haal|haalde||gehaald|h
kijken|to look|kijk|keek|keken|gekeken|h
horen|to hear|hoor|hoorde||gehoord|h
luisteren|to listen|luister|luisterde||geluisterd|h
vragen|to ask|vraag|vroeg|vroegen|gevraagd|h
antwoorden|to answer|antwoord|antwoordde||geantwoord|h
leren|to learn, to teach|leer|leerde||geleerd|h
begrijpen|to understand|begrijp|begreep|begrepen|begrepen|h
snappen|to get it, to understand|snap|snapte||gesnapt|h
lezen|to read|lees|las|lazen|gelezen|h
schrijven|to write|schrijf|schreef|schreven|geschreven|h
spelen|to play|speel|speelde||gespeeld|h
eten|to eat|eet|at|aten|gegeten|h
drinken|to drink|drink|dronk|dronken|gedronken|h
slapen|to sleep|slaap|sliep|sliepen|geslapen|h
rijden|to ride, to drive|rijd|reed|reden|gereden|hz
fietsen|to cycle|fiets|fietste||gefietst|hz
reizen|to travel|reis|reisde||gereisd|hz
vliegen|to fly|vlieg|vloog|vlogen|gevlogen|zh
zwemmen|to swim|zwem|zwom|zwommen|gezwommen|hz
kopen|to buy|koop|kocht|kochten|gekocht|h
verkopen|to sell|verkoop|verkocht|verkochten|verkocht|h
betalen|to pay|betaal|betaalde||betaald|h
kosten|to cost|kost|kostte||gekost|h
winnen|to win|win|won|wonnen|gewonnen|h
verliezen|to lose|verlies|verloor|verloren|verloren|h
vallen|to fall|val|viel|vielen|gevallen|z
stoppen|to stop|stop|stopte||gestopt|h
wachten|to wait|wacht|wachtte||gewacht|h
proberen|to try|probeer|probeerde||geprobeerd|h
helpen|to help|help|hielp|hielpen|geholpen|h
gebruiken|to use|gebruik|gebruikte||gebruikt|h
vertellen|to tell|vertel|vertelde||verteld|h
bellen|to call (phone)|bel|belde||gebeld|h
openen|to open|open|opende||geopend|h
sluiten|to close|sluit|sloot|sloten|gesloten|h
leggen|to lay, to put down|leg|legde||gelegd|h
zetten|to put, to set|zet|zette||gezet|h
stellen|to put, to pose (a question)|stel|stelde||gesteld|h
hangen|to hang|hang|hing|hingen|gehangen|h
ontmoeten|to meet|ontmoet|ontmoette||ontmoet|h
kennen|to know (a person)|ken|kende||gekend|h
herkennen|to recognise|herken|herkende||herkend|h
vergeten|to forget|vergeet|vergat|vergaten|vergeten|h
onthouden|to remember (keep in mind)|onthoud|onthield|onthielden|onthouden|h
herinneren|to remind, to remember|herinner|herinnerde||herinnerd|h
geloven|to believe|geloof|geloofde||geloofd|h
hopen|to hope|hoop|hoopte||gehoopt|h
voelen|to feel|voel|voelde||gevoeld|h
lijken|to seem|lijk|leek|leken|geleken|h
schijnen|to seem, to shine|schijn|scheen|schenen|geschenen|h
blijken|to turn out|blijk|bleek|bleken|gebleken|z
gebeuren|to happen|gebeur|gebeurde||gebeurd|z
veranderen|to change|verander|veranderde||veranderd|hz
groeien|to grow|groei|groeide||gegroeid|z
sterven|to die|sterf|stierf|stierven|gestorven|z
overlijden|to pass away|overlijd|overleed|overleden|overleden|z
trouwen|to marry|trouw|trouwde||getrouwd|zh
bedoelen|to mean (intend)|bedoel|bedoelde||bedoeld|h
betekenen|to mean (signify)|beteken|betekende||betekend|h
bestaan|to exist|besta|bestond|bestonden|bestaan|h
bestellen|to order|bestel|bestelde||besteld|h
verwachten|to expect|verwacht|verwachtte||verwacht|h
beslissen|to decide|beslis|besliste||beslist|h
besluiten|to decide, to conclude|besluit|besloot|besloten|besloten|h
kiezen|to choose|kies|koos|kozen|gekozen|h
zoeken|to search, to look for|zoek|zocht|zochten|gezocht|h
ontdekken|to discover|ontdek|ontdekte||ontdekt|h
lachen|to laugh|lach|lachte||gelachen|h
huilen|to cry|huil|huilde||gehuild|h
glimlachen|to smile|glimlach|glimlachte||geglimlacht|h
schreeuwen|to shout|schreeuw|schreeuwde||geschreeuwd|h
roepen|to call out|roep|riep|riepen|geroepen|h
zingen|to sing|zing|zong|zongen|gezongen|h
dansen|to dance|dans|danste||gedanst|h
koken|to cook|kook|kookte||gekookt|h
bakken|to bake|bak|bakte||gebakken|h
snijden|to cut|snijd|sneed|sneden|gesneden|h
wassen|to wash|was|waste||gewassen|h
breken|to break|breek|brak|braken|gebroken|h
bouwen|to build|bouw|bouwde||gebouwd|h
repareren|to repair|repareer|repareerde||gerepareerd|h
gooien|to throw|gooi|gooide||gegooid|h
vangen|to catch|vang|ving|vingen|gevangen|h
trekken|to pull|trek|trok|trokken|getrokken|h
duwen|to push|duw|duwde||geduwd|h
dragen|to carry, to wear|draag|droeg|droegen|gedragen|h
pakken|to grab, to take|pak|pakte||gepakt|h
delen|to share, to divide|deel|deelde||gedeeld|h
sturen|to send|stuur|stuurde||gestuurd|h
ontvangen|to receive|ontvang|ontving|ontvingen|ontvangen|h
bieden|to offer|bied|bood|boden|geboden|h
accepteren|to accept|accepteer|accepteerde||geaccepteerd|h
weigeren|to refuse|weiger|weigerde||geweigerd|h
genieten|to enjoy|geniet|genoot|genoten|genoten|h
missen|to miss|mis|miste||gemist|h
haten|to hate|haat|haatte||gehaat|h
lukken|to succeed, to work out|luk|lukte||gelukt|z
slagen|to succeed, to pass (an exam)|slaag|slaagde||geslaagd|z
oefenen|to practise|oefen|oefende||geoefend|h
studeren|to study|studeer|studeerde||gestudeerd|h
verklaren|to declare, to explain|verklaar|verklaarde||verklaard|h
beschrijven|to describe|beschrijf|beschreef|beschreven|beschreven|h
vergelijken|to compare|vergelijk|vergeleek|vergeleken|vergeleken|h
tellen|to count|tel|telde||geteld|h
rekenen|to calculate|reken|rekende||gerekend|h
meten|to measure|meet|mat|maten|gemeten|h
wegen|to weigh|weeg|woog|wogen|gewogen|h
branden|to burn|brand|brandde||gebrand|h
smelten|to melt|smelt|smolt|smolten|gesmolten|z
regenen|to rain|regen|regende||geregend|h
sneeuwen|to snow|sneeuw|sneeuwde||gesneeuwd|h
waaien|to blow (wind)|waai|waaide||gewaaid|h
bloeien|to bloom|bloei|bloeide||gebloeid|h
rennen|to run|ren|rende||gerend|hz
springen|to jump|spring|sprong|sprongen|gesprongen|zh
klimmen|to climb|klim|klom|klommen|geklommen|zh
stappen|to step|stap|stapte||gestapt|zh
vertrekken|to leave, to depart|vertrek|vertrok|vertrokken|vertrokken|z
bereiken|to reach|bereik|bereikte||bereikt|h
volgen|to follow|volg|volgde||gevolgd|h
leiden|to lead|leid|leidde||geleid|h
begeleiden|to accompany|begeleid|begeleidde||begeleid|h
bezoeken|to visit|bezoek|bezocht|bezochten|bezocht|h
danken|to thank|dank|dankte||gedankt|h
groeten|to greet|groet|groette||gegroet|h
feliciteren|to congratulate|feliciteer|feliciteerde||gefeliciteerd|h
beloven|to promise|beloof|beloofde||beloofd|h
zweren|to swear|zweer|zwoer|zwoeren|gezworen|h
liegen|to lie (tell an untruth)|lieg|loog|logen|gelogen|h
bedriegen|to deceive, to cheat|bedrieg|bedroog|bedrogen|bedrogen|h
stelen|to steal|steel|stal|stalen|gestolen|h
doden|to kill|dood|doodde||gedood|h
slaan|to hit|sla|sloeg|sloegen|geslagen|h
vechten|to fight|vecht|vocht|vochten|gevochten|h
beschermen|to protect|bescherm|beschermde||beschermd|h
redden|to save, to rescue|red|redde||gered|h
ruiken|to smell|ruik|rook|roken|geroken|h
proeven|to taste|proef|proefde||geproefd|h
raken|to touch, to hit|raak|raakte||geraakt|h
passen|to fit|pas|paste||gepast|h
douchen|to shower|douch|douchte||gedoucht|h
scheren|to shave|scheer|schoor|schoren|geschoren|h
knippen|to cut (hair, paper)|knip|knipte||geknipt|h
wekken|to wake (someone)|wek|wekte||gewekt|h
dromen|to dream|droom|droomde||gedroomd|h
rusten|to rest|rust|rustte||gerust|h
ontspannen|to relax|ontspan|ontspande||ontspannen|h
zorgen|to take care, to worry|zorg|zorgde||gezorgd|h
letten|to pay attention|let|lette||gelet|h
merken|to notice|merk|merkte||gemerkt|h
beseffen|to realise|besef|besefte||beseft|h
overwegen|to consider|overweeg|overwoog|overwogen|overwogen|h
suggereren|to suggest|suggereer|suggereerde||gesuggereerd|h
adviseren|to advise|adviseer|adviseerde||geadviseerd|h
raden|to guess, to advise|raad|ried|rieden|geraden|h
durven|to dare|durf|durfde||gedurfd|h
bevatten|to contain|bevat|bevatte||bevat|h
gelden|to apply, to be valid|geld|gold|golden|gegolden|h
verdienen|to earn, to deserve|verdien|verdiende||verdiend|h
sparen|to save (money)|spaar|spaarde||gespaard|h
besteden|to spend|besteed|besteedde||besteed|h
lenen|to borrow, to lend|leen|leende||geleend|h
huren|to rent|huur|huurde||gehuurd|h
verhuizen|to move (house)|verhuis|verhuisde||verhuisd|z
ontstaan|to arise, to come into being|ontsta|ontstond|ontstonden|ontstaan|z
verschijnen|to appear|verschijn|verscheen|verschenen|verschenen|z
verdwijnen|to disappear|verdwijn|verdween|verdwenen|verdwenen|z
ontbijten|to have breakfast|ontbijt|ontbeet|ontbeten|ontbeten|h
lunchen|to have lunch|lunch|lunchte||geluncht|h
eindigen|to end|eindig|eindigde||geëindigd|h
duren|to last|duur|duurde||geduurd|h
kloppen|to knock, to be correct|klop|klopte||geklopt|h
bewegen|to move|beweeg|bewoog|bewogen|bewogen|h
draaien|to turn|draai|draaide||gedraaid|h
buigen|to bend, to bow|buig|boog|bogen|gebogen|h
schieten|to shoot|schiet|schoot|schoten|geschoten|h
vermijden|to avoid|vermijd|vermeed|vermeden|vermeden|h
verbieden|to forbid|verbied|verbood|verboden|verboden|h
klagen|to complain|klaag|klaagde||geklaagd|h
wensen|to wish|wens|wenste||gewenst|h
lijden|to suffer|lijd|leed|leden|geleden|h
reageren|to react|reageer|reageerde||gereageerd|h
kussen|to kiss|kus|kuste||gekust|h
vieren|to celebrate|vier|vierde||gevierd|h
organiseren|to organise|organiseer|organiseerde||georganiseerd|h
plannen|to plan|plan|plande||gepland|h
verbeteren|to improve|verbeter|verbeterde||verbeterd|h
controleren|to check|controleer|controleerde||gecontroleerd|h
testen|to test|test|testte||getest|h
tekenen|to draw|teken|tekende||getekend|h
schilderen|to paint|schilder|schilderde||geschilderd|h
bewaren|to keep, to store|bewaar|bewaarde||bewaard|h
verzamelen|to collect, to gather|verzamel|verzamelde||verzameld|h
ontkennen|to deny|ontken|ontkende||ontkend|h
erkennen|to admit, to recognise|erken|erkende||erkend|h
vertrouwen|to trust|vertrouw|vertrouwde||vertrouwd|h
twijfelen|to doubt|twijfel|twijfelde||getwijfeld|h
verrassen|to surprise|verras|verraste||verrast|h
schrikken|to be startled|schrik|schrok|schrokken|geschrokken|z
zwaaien|to wave|zwaai|zwaaide||gezwaaid|h
wandelen|to walk, to stroll|wandel|wandelde||gewandeld|hz
parkeren|to park|parkeer|parkeerde||geparkeerd|h
tanken|to fill up (fuel)|tank|tankte||getankt|h
starten|to start|start|startte||gestart|h
landen|to land|land|landde||geland|z
stijgen|to rise, to climb|stijg|steeg|stegen|gestegen|z
dalen|to fall, to descend|daal|daalde||gedaald|z
verhogen|to raise, to increase|verhoog|verhoogde||verhoogd|h
verlagen|to lower|verlaag|verlaagde||verlaagd|h
beperken|to limit|beperk|beperkte||beperkt|h
zwijgen|to be silent|zwijg|zweeg|zwegen|gezwegen|h
treffen|to meet, to hit|tref|trof|troffen|getroffen|h
knijpen|to pinch, to squeeze|knijp|kneep|knepen|geknepen|h
ontwerpen|to design|ontwerp|ontwierp|ontwierpen|ontworpen|h
bedenken|to think up, to devise|bedenk|bedacht|bedachten|bedacht|h
`;

const VERBS = VERB_DATA.trim().split('\n').map((l) => {
  const f = l.split('|');
  return { inf: f[0], en: f[1], ik: f[2], sg: f[3], pl: f[4] || f[3] + 'n', pp: f[5] === '-' ? '' : f[5], aux: f[6], ov: f[7] || '' };
});

const SUBJ = ['ik', 'jij', 'hij', 'wij'];
const AUXF = { h: { perfect: ['heb', 'hebt', 'heeft', 'hebben'], pastperfect: ['had', 'had', 'had', 'hadden'] }, z: { perfect: ['ben', 'bent', 'is', 'zijn'], pastperfect: ['was', 'was', 'was', 'waren'] } };
const TENSES = [{ id: 'present', label: 'Present' }, { id: 'imperfect', label: 'Imperfect' }, { id: 'perfect', label: 'Perfect' }, { id: 'pastperfect', label: 'Past perfect' }];
const T_LABEL = Object.fromEntries(TENSES.map(t => [t.id, t.label]));

function accepted(v, t, i) {
  if (t === 'present') { if (v.ov) return [v.ov.split('/')[i]]; const j = v.ik.endsWith('t') ? v.ik : v.inf.endsWith('aan') ? v.ik + 'at' : v.ik + 't'; return [[v.ik, j, j, v.inf][i]]; }
  if (t === 'imperfect') return [i === 3 ? v.pl : v.sg];
  return v.aux.split('').map(a => AUXF[a][t][i] + ' ' + v.pp);
}
const hasTense = (v, t) => (t === 'perfect' || t === 'pastperfect') ? !!v.pp : true;
const normA = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();

/* ---------- progress ---------- */
let vScore = lsGet('woordje.verbs', {});   // inf -> tense -> [right, wrong]
const vGet = (inf, t) => (vScore[inf] && vScore[inf][t]) || [0, 0];
function vRecord(inf, t, ok) { const a = vGet(inf, t).slice(); a[ok ? 0 : 1]++; (vScore[inf] = vScore[inf] || {})[t] = a; lsSet('woordje.verbs', vScore); }

/* ---------- table ---------- */
function verbTable(v) {
  const box = document.createElement('div'); box.className = 'vt';
  for (const t of TENSES) {
    if (!hasTense(v, t.id)) continue;
    const h = document.createElement('div'); h.className = 'tn'; h.textContent = t.label; box.appendChild(h);
    const g = document.createElement('div'); g.className = 'g';
    for (let i = 0; i < 4; i++) { const c = document.createElement('div'); const b = document.createElement('span'); b.textContent = SUBJ[i] + ' '; c.append(b, accepted(v, t.id, i)[0]); g.appendChild(c); }
    box.appendChild(g);
  }
  return box;
}

/* ---------- practice ---------- */
const vState = { hint: 0, on: new Set(TENSES.map(t => t.id)), q: null, answered: false, right: 0, total: 0, last: '' };
function pickQuestion() {
  const cands = [];
  for (const v of VERBS) for (const t of TENSES) {
    if (!vState.on.has(t.id) || !hasTense(v, t.id)) continue;
    const [r, w] = vGet(v.inf, t.id), seen = r + w;
    const weight = seen === 0 ? 2 : Math.max(0.3, 1 + 2 * w - 0.5 * Math.min(r, 3));
    cands.push({ v, t: t.id, w: weight });
  }
  if (!cands.length) return null;
  let total = 0; for (const c of cands) total += c.w;
  for (let tries = 0; tries < 5; tries++) {
    let x = Math.random() * total, pick = cands[0];
    for (const c of cands) { x -= c.w; if (x <= 0) { pick = c; break; } }
    if (pick.v.inf !== vState.last || cands.length < 3) { vState.last = pick.v.inf; return { v: pick.v, t: pick.t, i: Math.floor(Math.random() * 4) }; }
  }
  const c = cands[0]; vState.last = c.v.inf; return { v: c.v, t: c.t, i: 0 };
}
function vStat() { $('#vStat').textContent = vState.total ? vState.right + ' of ' + vState.total + ' correct this session' : VERBS.length + ' verbs · type the form and press Check'; }
/* ---------- hints ---------- */
function hintClue(q) {
  const v = q.v, regular = /(te|de)$/.test(v.sg) && v.pl === v.sg + 'n';
  if (q.t === 'present') return v.ov ? 'Irregular present tense.' : q.i === 3 ? 'Same as the infinitive.' : q.i === 0 ? 'The stem: drop -en (mind the spelling).' : 'The stem + t.';
  if (q.t === 'imperfect') return (regular ? 'Regular: stem + te/de' : 'Irregular: the vowel changes') + (q.i === 3 ? ', plural ends in -en.' : '.');
  const helper = v.aux[0] === 'h' ? 'hebben' : 'zijn';
  return 'Helper verb from ' + helper + ' + ' + (regular ? 'regular participle (ge- + stem + t/d).' : 'irregular participle.');
}
function hintPattern(word, upto) { return word.split(' ').map(w => { const k = Math.min(w.length, upto === 1 ? 1 : Math.ceil(w.length / 2)); return w.slice(0, k) + '_'.repeat(w.length - k); }).join('  '); }
function showHint() {
  const q = vState.q; if (!q || vState.answered) return;
  vState.hint = Math.min(3, vState.hint + 1);
  const t = $('#vHintText'); t.textContent = '';
  if (vState.hint === 1) t.textContent = hintClue(q);
  else { t.append(hintClue(q) + ' '); const b = document.createElement('b'); b.textContent = hintPattern(accepted(q.v, q.t, q.i)[0], vState.hint - 1); t.append(document.createElement('br'), b); }
  $('#vHint').textContent = vState.hint < 3 ? 'More' : 'Hint'; $('#vHint').disabled = vState.hint >= 3;
}

function nextQuestion(keepFocus) {
  const q = pickQuestion(); vState.q = q; vState.answered = false; vState.hint = 0;
  $('#vHintText').textContent = ''; $('#vHint').textContent = 'Hint'; $('#vHint').disabled = false; $('.hintline').hidden = false;
  $('#vFeedback').textContent = ''; $('#vFeedback').className = ''; $('#vTable').textContent = '';
  const inp = $('#vInput'); inp.value = ''; inp.disabled = false; inp.className = '';
  if (!q) { $('#vEn').textContent = ''; $('#vInf').textContent = 'Pick at least one tense'; $('#vPrompt').textContent = ''; $('#vBtn').disabled = true; return; }
  $('#vBtn').disabled = false; $('#vBtn').textContent = 'Check';
  $('#vEn').textContent = q.v.en; $('#vInf').textContent = q.v.inf;
  $('#vPrompt').innerHTML = '';
  const chip = document.createElement('span'); chip.className = 'tchip'; chip.textContent = T_LABEL[q.t];
  const subj = document.createElement('span'); subj.className = 'subj'; subj.textContent = SUBJ[q.i] + ' ';
  const blank = document.createElement('span'); blank.className = 'blank'; blank.textContent = '…';
  $('#vPrompt').append(chip, document.createElement('br'), subj, blank);
  vStat(); if (keepFocus) inp.focus({ preventScroll: true });
}
function checkAnswer() {
  const q = vState.q; if (!q) return;
  const val = normA($('#vInput').value); if (!val) return;
  const acc = accepted(q.v, q.t, q.i), ok = acc.some(a => normA(a) === val);
  const hinted = vState.hint > 0; vRecord(q.v.inf, q.t, ok && !hinted); vState.total++; if (ok && !hinted) vState.right++;
  $('.hintline').hidden = true;
  vState.answered = true; $('#vInput').className = ok ? 'ok' : 'bad';
  const fb = $('#vFeedback'); fb.className = ok ? 'ok' : 'bad';
  fb.textContent = ok ? (hinted ? 'Correct, with a hint. It will come back soon. ' : 'Correct! ') + SUBJ[q.i] + ' ' + acc[0] : 'Not quite. ' + SUBJ[q.i] + ' ' + acc.join(' / ');
  $('#vTable').textContent = ''; $('#vTable').appendChild(verbTable(q.v));
  $('#vBtn').textContent = 'Next'; vStat();
}

/* ---------- browse ---------- */
function renderBrowse() {
  const term = normA($('#vSearch').value), list = $('#vList'); list.textContent = '';
  const items = VERBS.filter(v => !term || normA(v.inf).includes(term) || normA(v.en).includes(term));
  if (!items.length) { list.innerHTML = '<div class="empty">No verbs match.</div>'; return; }
  for (const v of items) {
    const d = document.createElement('details'); d.className = 'vitem';
    const s = document.createElement('summary'); const b = document.createElement('b'); b.textContent = v.inf; s.append(b, ' ' + v.en); d.appendChild(s);
    d.addEventListener('toggle', () => { if (d.open && !d.querySelector('.vt')) d.appendChild(verbTable(v)); });
    list.appendChild(d);
  }
}

/* ---------- wiring ---------- */
function renderChips() {
  const box = $('#vChips'); box.textContent = '';
  for (const t of TENSES) {
    const b = document.createElement('button'); b.className = 'chip'; b.textContent = t.label; b.setAttribute('aria-pressed', vState.on.has(t.id));
    b.onclick = () => { if (vState.on.has(t.id)) { if (vState.on.size > 1) vState.on.delete(t.id); } else vState.on.add(t.id); renderChips(); nextQuestion(); };
    box.appendChild(b);
  }
}
$('#btnVerbs').onclick = () => { show('verbs'); renderChips(); $('#vTabs button[data-vt=practice]').click(); if (!vState.q) nextQuestion(); };
$('#btnBrowse').onclick = () => { show('verbs'); renderChips(); $('#vTabs button[data-vt=browse]').click(); };
$('#vBack').onclick = () => { document.activeElement && document.activeElement.blur(); document.body.classList.remove('typing'); show('home'); };
$('#vInput').addEventListener('focus', () => { document.body.classList.add('typing'); setTimeout(() => window.scrollTo(0, 0), 50); });
$('#vInput').addEventListener('blur', () => document.body.classList.remove('typing'));
$('#vTabs').onclick = (e) => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#vTabs button').forEach(x => x.setAttribute('aria-pressed', x === b));
  $('#vPractice').hidden = b.dataset.vt !== 'practice'; $('#vBrowse').hidden = b.dataset.vt !== 'browse';
  if (b.dataset.vt === 'browse') renderBrowse();
};
$('#vSearch').oninput = renderBrowse;
for (const id of ['#vBtn', '#vHint']) $(id).addEventListener('pointerdown', (e) => e.preventDefault());
$('#vHint').onclick = showHint;   // keep the keyboard open
$('#vBtn').onclick = () => vState.answered ? nextQuestion(true) : checkAnswer();
$('#vInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); vState.answered ? nextQuestion(true) : checkAnswer(); } });
