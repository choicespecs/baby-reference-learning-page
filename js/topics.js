// Content data store. Add a new topic by adding an object to TOPICS below —
// nothing else needs to change for it to show up in browse, search, and detail view.

const CATEGORIES = [
  { id: 'newborn', label: 'Newborn Basics', desc: 'What to expect in the first days and weeks.' },
  { id: 'feeding', label: 'Feeding', desc: 'Breastfeeding, bottle feeding, and how much is normal.' },
  { id: 'sleep', label: 'Sleep', desc: 'Safe sleep and what to expect at night.' },
  { id: 'diapering-bathing', label: 'Diapering & Bathing', desc: 'The daily physical care basics.' },
  { id: 'health-safety', label: 'Health & Safety', desc: 'Warning signs, safety basics, and when to call the doctor.' },
  { id: 'soothing-development', label: 'Soothing & Development', desc: 'Crying, tummy time, and early milestones.' },
];

const TOPICS = [
  // ---------- NEWBORN BASICS ----------
  {
    id: 'umbilical-cord-care',
    category: 'newborn',
    title: 'Umbilical Cord Care',
    tags: ['newborn', 'cord care', 'hygiene'],
    summary: 'Keep the stump clean and dry until it falls off on its own, usually within 1–3 weeks.',
    body: `
      <p>The umbilical cord stump will dry out, darken, and fall off on its own — usually within <strong>1 to 3 weeks</strong> after birth. Your job is mostly to leave it alone and keep it clean and dry.</p>
      <h3>What to do</h3>
      <ul>
        <li>Keep the stump exposed to air as much as possible; fold the diaper down below it.</li>
        <li>Stick to sponge baths until the stump falls off (see Bathing a Newborn).</li>
        <li>Let it fall off naturally — never pull it, even if it looks like it's barely hanging on.</li>
        <li>A little dried blood around the base when it falls off is normal.</li>
      </ul>
      <div class="callout"><strong>Call your pediatrician</strong> if you notice redness spreading around the base, swelling, a foul smell, yellow discharge (pus), or if your baby seems to be in pain when the area is touched — these can be signs of infection.</div>
    `,
  },
  {
    id: 'swaddling-safely',
    category: 'newborn',
    title: 'Swaddling Safely',
    tags: ['newborn', 'sleep', 'soothing'],
    summary: 'A snug swaddle can soothe a newborn, but hips need room to move and it must stop once baby can roll.',
    resources: [
      { title: 'Good Night, Sleep Tight: How to Swaddle Your Baby', source: 'HealthyChildren.org (AAP)', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/good-night-sleep-tight.aspx' },
    ],
    video: { id: 'JGHdv6zd79M', title: 'Swaddling', source: "Stanford Medicine Children's Health" },
    moreVideos: [
      { id: 'pJCQf2Xxlrk', title: 'How to Swaddle a Newborn', source: 'Mount Sinai Parenting Center' },
    ],
    body: `
      <p>Swaddling recreates the snug feeling of the womb and can help calm a newborn and improve sleep. Done incorrectly, it can be a safety or hip-development risk — a few rules make it safe.</p>
      <h3>How to do it safely</h3>
      <ul>
        <li>Arms can be swaddled in or left out once your baby starts trying to break free — follow their lead.</li>
        <li>Leave room at the hips and knees for legs to bend up and out (a too-tight wrap around the legs can contribute to hip dysplasia). Look for "hip-healthy" swaddle products if unsure.</li>
        <li>Never let a swaddled baby sleep on their stomach or side — always place them on their back.</li>
        <li><strong>Stop swaddling the arms as soon as your baby shows any sign of rolling over</strong> (often around 2–4 months) — a swaddled baby who rolls onto their stomach can't use their arms to reposition, which is a suffocation risk.</li>
      </ul>
    `,
  },
  {
    id: 'newborn-appearance',
    category: 'newborn',
    title: 'Newborn Appearance: What\'s Normal',
    tags: ['newborn', 'skin', 'jaundice'],
    summary: 'Peeling skin, blotchy color, cradle cap, and puffy eyes are common and usually harmless.',
    body: `
      <p>Newborns often look a little different than the "magazine cover" image — most of it is temporary and completely normal.</p>
      <ul>
        <li><strong>Peeling skin:</strong> Common in the first 1–2 weeks, especially on hands and feet. No treatment needed.</li>
        <li><strong>Vernix:</strong> The waxy white coating at birth protects the skin in the womb; it's usually wiped off or absorbs within a day or two.</li>
        <li><strong>Blotchy or mottled skin:</strong> Newborn circulation is still maturing — patchy color, especially on limbs, is normal.</li>
        <li><strong>Cradle cap:</strong> Yellowish, flaky/greasy patches on the scalp. Harmless — soft brushing during bath time helps; no need to pick at it.</li>
        <li><strong>Swollen genitals/breast tissue:</strong> Caused by maternal hormones, resolves within a few weeks.</li>
      </ul>
      <div class="callout">See <a href="#/topic/jaundice">Jaundice: What to Watch For</a> for the one newborn appearance change that does need monitoring.</div>
    `,
  },
  {
    id: 'jaundice',
    category: 'newborn',
    title: 'Jaundice: What to Watch For',
    tags: ['newborn', 'jaundice', 'warning signs'],
    summary: 'A yellow tint to skin/eyes is common in the first week — mild cases resolve on their own, but it needs to be monitored.',
    body: `
      <p>Jaundice (a yellowish tint to the skin and whites of the eyes) is caused by a buildup of bilirubin and affects a large share of newborns in the first week of life. Mild cases are common and resolve on their own; more significant cases need treatment (often light therapy), so it's worth monitoring.</p>
      <h3>How to check</h3>
      <ul>
        <li>In good natural light, gently press a fingertip on your baby's forehead or nose — if the skin looks yellow where you pressed before the color returns, that's a sign of jaundice.</li>
        <li>It usually starts on the face and, in more significant cases, spreads down toward the chest, belly, and legs.</li>
      </ul>
      <div class="callout"><strong>Call your pediatrician</strong> if jaundice appears in the first 24 hours of life, spreads to the arms/legs, your baby seems very sleepy or is feeding poorly, or the yellow color seems to be getting more intense — especially in the first week.</div>
    `,
  },

  // ---------- FEEDING ----------
  {
    id: 'how-to-feed-newborn',
    category: 'feeding',
    title: 'How to Feed a Newborn',
    tags: ['feeding', 'breastfeeding', 'bottle'],
    summary: 'Newborns feed 8–12 times a day, whether breast or bottle — feeding on demand is normal.',
    resources: [
      { title: 'Getting a Good Breastfeeding Latch & What To Know About Latch', source: 'Cleveland Clinic', url: 'https://my.clevelandclinic.org/health/articles/breastfeeding-latch' },
    ],
    video: { id: 'whkO4hUbVGw', title: 'Latching in a Laid-Back Position', source: 'La Leche League Canada' },
    moreVideos: [
      { id: 'or4OnMxihUg', title: 'Breastfeeding Tips: Common Breastfeeding Positions', source: 'Michigan Medicine' },
    ],
    body: `
      <p>Whether breastfeeding, bottle feeding, or both, newborns eat often — typically <strong>8 to 12 times in 24 hours</strong> in the first weeks, roughly every 2–3 hours, including overnight.</p>
      <h3>Breastfeeding basics</h3>
      <ul>
        <li>Aim for a deep latch — baby's mouth covers most of the areola, not just the nipple, to reduce pain and improve milk transfer.</li>
        <li>Let baby feed until they naturally release the breast rather than timing feeds strictly.</li>
        <li>Sore/cracked nipples that don't improve, or pain throughout the whole feed, are signs to get help from a lactation consultant.</li>
      </ul>
      <h3>Bottle feeding basics</h3>
      <ul>
        <li>Hold baby semi-upright, and tilt the bottle so the nipple stays filled with milk (reduces air swallowed).</li>
        <li>Pace the feed — pause every so often rather than baby draining the bottle nonstop, which lets them recognize fullness.</li>
        <li>Newborns typically take about 1.5–3 oz per feed, gradually increasing over the following weeks/months.</li>
      </ul>
      <div class="callout">See also <a href="#/topic/hunger-fullness-cues">Signs of Hunger vs Fullness</a> and <a href="#/topic/burping">Burping Techniques</a>.</div>
    `,
  },
  {
    id: 'burping',
    category: 'feeding',
    title: 'Burping Techniques',
    tags: ['feeding', 'burping', 'gas'],
    summary: 'Burp midway through and after feeds — a few common holds make it easier.',
    resources: [
      { title: 'Burping Your Baby: Techniques, Tips and Timing', source: 'Cleveland Clinic', url: 'https://health.clevelandclinic.org/how-to-burp-a-baby' },
    ],
    video: { id: '75oi_edksLk', title: 'How to Burp a Baby', source: 'HCA HealthONE' },
    moreVideos: [
      { id: 'fgcWOzauLxI', title: 'How to Burp a Newborn', source: 'Mount Sinai Parenting Center' },
    ],
    body: `
      <p>Babies swallow air while feeding, especially with a bottle, which can cause fussiness or spit-up if not released. Try burping midway through a feed and again at the end.</p>
      <h3>Common positions</h3>
      <ul>
        <li><strong>Over the shoulder:</strong> Baby upright against your chest, chin on your shoulder; pat or rub the back gently.</li>
        <li><strong>Sitting on your lap:</strong> Support baby's chest and head with one hand (a finger under the chin, not on the throat), pat the back with the other.</li>
        <li><strong>Face-down on your lap:</strong> Baby lying tummy-down across your knees, head slightly elevated; pat the back.</li>
      </ul>
      <p>If no burp comes after a couple of minutes, it's fine to continue feeding or move on — not every feed produces a burp.</p>
    `,
  },
  {
    id: 'feeding-amounts',
    category: 'feeding',
    title: 'How Much & How Often Should a Newborn Eat',
    tags: ['feeding', 'schedule'],
    summary: 'General guide by age — actual needs vary and pediatric guidance takes priority.',
    body: `
      <p>These are general ranges — your pediatrician's guidance for your specific baby (especially around weight gain) always takes priority.</p>
      <ul>
        <li><strong>First days:</strong> Small, frequent feeds — stomach is tiny (about the size of a marble on day 1, growing quickly).</li>
        <li><strong>1–2 weeks:</strong> Roughly 1.5–3 oz (bottle) per feed, every 2–3 hours; breastfed babies feed on demand, similarly frequently.</li>
        <li><strong>1–2 months:</strong> Roughly 4–5 oz per feed, every 3–4 hours.</li>
        <li><strong>4–6 months:</strong> Roughly 4–6 oz per feed, every 4–5 hours (until solids begin, typically around 6 months).</li>
      </ul>
      <div class="callout">A newborn who is having fewer than 6 wet diapers a day past the first week, seems constantly lethargic, or isn't regaining birth weight by ~2 weeks should be checked by your pediatrician.</div>
    `,
  },
  {
    id: 'hunger-fullness-cues',
    category: 'feeding',
    title: 'Signs of Hunger vs Fullness',
    tags: ['feeding', 'cues'],
    summary: 'Rooting and hand-to-mouth mean hungry; turning away and relaxed hands mean full.',
    body: `
      <p>Reading cues avoids waiting until baby is in a full crying meltdown to feed (which makes latching/feeding harder for everyone).</p>
      <h3>Hunger cues (early → late)</h3>
      <ul>
        <li>Stirring, stretching, rooting (turning head, opening mouth toward anything that touches their cheek)</li>
        <li>Bringing hands to mouth, sucking on hands or fists</li>
        <li>Smacking lips</li>
        <li>Crying — a late/urgent hunger cue; feeding earlier cues makes for a calmer feed</li>
      </ul>
      <h3>Fullness cues</h3>
      <ul>
        <li>Slowing or stopping sucking, releasing the nipple/bottle on their own</li>
        <li>Turning head away, relaxed hands (versus clenched fists when hungry)</li>
        <li>Falling asleep</li>
      </ul>
    `,
  },
  {
    id: 'spit-up-vs-vomit',
    category: 'feeding',
    title: 'Spit-Up vs Vomiting',
    tags: ['feeding', 'reflux', 'warning signs'],
    summary: 'Spit-up is common and effortless; forceful or projectile vomiting is different and worth a call.',
    body: `
      <p>Spitting up small amounts after feeds is extremely common (often called "happy spit-up") and usually not a concern if your baby is otherwise gaining weight and comfortable.</p>
      <h3>Spit-up (usually fine)</h3>
      <ul>
        <li>Effortless, dribbles out, happens shortly after or during feeds</li>
        <li>Baby seems otherwise comfortable</li>
      </ul>
      <h3>When it's more than spit-up</h3>
      <div class="callout"><strong>Call your pediatrician</strong> if vomiting is forceful/projectile, green or yellow in color, contains blood, is paired with a fever, poor weight gain, or signs of dehydration (fewer wet diapers, no tears when crying), or if your baby seems to be in pain/very fussy after most feeds.</div>
    `,
  },

  // ---------- SLEEP ----------
  {
    id: 'safe-sleep',
    category: 'sleep',
    title: 'Safe Sleep Guidelines',
    tags: ['sleep', 'safety', 'SIDS'],
    summary: 'Alone, on their Back, in a Crib with nothing else in it — the "ABC" of safe sleep.',
    resources: [
      { title: 'Safe Sleep', source: 'American Academy of Pediatrics', url: 'https://www.aap.org/en/patient-care/safe-sleep/' },
    ],
    body: `
      <p>These guidelines (from pediatric safe-sleep recommendations) are designed to reduce the risk of SIDS (Sudden Infant Death Syndrome) and accidental suffocation. A simple way to remember them: <strong>A-B-C — Alone, on their Back, in a Crib.</strong></p>
      <div class="diagram">
        <svg viewBox="0 0 400 250" role="img" aria-label="Diagram of a safe crib: baby alone on their back, firm flat mattress, no pillows, blankets, bumpers, or toys">
          <text x="200" y="22" text-anchor="middle" font-size="13" fill="var(--color-accent-hover)" font-family="Inter, sans-serif" font-weight="600">Baby alone, on their back</text>
          <text x="200" y="42" text-anchor="middle" font-size="11" fill="var(--color-text-muted)" font-family="Inter, sans-serif">No pillows &#8226; No loose blankets &#8226; No bumpers or toys</text>
          <rect x="20" y="58" width="360" height="172" rx="10" fill="none" stroke="var(--color-border)" stroke-width="3"/>
          <rect x="36" y="198" width="328" height="18" rx="4" fill="var(--color-accent-soft)" stroke="var(--color-border)" stroke-width="2"/>
          <ellipse cx="200" cy="138" rx="27" ry="23" fill="var(--color-surface)" stroke="var(--color-text)" stroke-width="2.5"/>
          <rect x="148" y="149" width="104" height="52" rx="22" fill="var(--color-surface)" stroke="var(--color-text)" stroke-width="2.5"/>
          <text x="200" y="215" text-anchor="middle" font-size="11" fill="var(--color-text-muted)" font-family="Inter, sans-serif">Firm, flat mattress — fitted sheet only</text>
        </svg>
      </div>
      <ul>
        <li><strong>Alone:</strong> No pillows, blankets, bumpers, stuffed animals, or other soft objects in the sleep space. Room-sharing (crib/bassinet in your room) is recommended for at least the first 6 months — but not bed-sharing.</li>
        <li><strong>Back:</strong> Always place baby on their back to sleep, for every sleep, until at least their first birthday — this is the single biggest risk-reduction factor.</li>
        <li><strong>Crib:</strong> A firm, flat sleep surface (crib, bassinet, or play yard that meets safety standards) with a fitted sheet only. Nothing else in it.</li>
      </ul>
      <h3>Other tips</h3>
      <ul>
        <li>Keep the room at a comfortable temperature — avoid overheating/overbundling, and skip hats indoors.</li>
        <li>A sleep sack (wearable blanket) is a safe alternative to loose blankets.</li>
        <li>Offering a pacifier at sleep time is associated with reduced SIDS risk (wait until breastfeeding is established, if applicable).</li>
      </ul>
    `,
  },
  {
    id: 'day-night-confusion',
    category: 'sleep',
    title: 'Day/Night Confusion',
    tags: ['sleep', 'newborn'],
    summary: 'Newborns are often more alert at night at first — simple light/activity cues help reset the clock.',
    body: `
      <p>Newborns don't yet have a day/night circadian rhythm — it's common for them to sleep a lot during the day and be more wakeful at night for the first several weeks. This resolves on its own, and a few habits can help it along.</p>
      <ul>
        <li><strong>Daytime:</strong> Keep the house bright and normal-noisy during day naps; play and interact during awake windows.</li>
        <li><strong>Nighttime:</strong> Keep lights low and interaction minimal during night feeds/changes — no playtime, calm voice, dim light.</li>
        <li>This is a phase, not a habit you can "cause" — most babies start to develop more day/night distinction by 6–8 weeks, with real sleep consolidation more common around 3–4 months.</li>
      </ul>
    `,
  },
  {
    id: 'room-vs-bed-sharing',
    category: 'sleep',
    title: 'Room Sharing vs Bed Sharing',
    tags: ['sleep', 'safety'],
    summary: 'Room sharing (same room, separate sleep surface) is recommended; bed sharing carries real risk.',
    body: `
      <p><strong>Room sharing</strong> — baby sleeping in your room, in their own crib or bassinet, for at least the first 6 months — is associated with a lower risk of SIDS and is the recommended setup.</p>
      <p><strong>Bed sharing</strong> — baby sleeping in the same bed as an adult — carries a meaningfully higher risk of suffocation and SIDS, particularly under 4 months, and is generally advised against by pediatric guidelines, especially with soft bedding, on a couch/armchair, or if a caregiver is impaired by alcohol, medication, or extreme exhaustion.</p>
      <div class="callout">If you think you might fall asleep while feeding, make sure the surface you're on has no loose bedding/pillows nearby the baby could roll into, and move baby to their own safe sleep surface as soon as you wake.</div>
    `,
  },

  // ---------- DIAPERING & BATHING ----------
  {
    id: 'how-to-change-diaper',
    category: 'diapering-bathing',
    title: 'How to Change a Diaper',
    tags: ['diapering', 'basics'],
    summary: 'Front to back for wiping, and a few tricks to avoid surprise messes mid-change.',
    resources: [
      { title: 'How to Change a Diaper: Step-by-Step Guide', source: 'Pampers', url: 'https://www.pampers.com/en-us/baby/diapering/article/how-to-change-a-diaper' },
    ],
    video: { id: 'euDUqiYdh3U', title: 'Diapering a Newborn', source: "Nicklaus Children's Hospital" },
    moreVideos: [
      { id: 'cDa2BTZppUc', title: "NUH: How to Change Your Baby's Diaper", source: 'National University Hospital, Singapore' },
    ],
    body: `
      <p>You'll do this 6–10+ times a day at first, so a smooth routine helps.</p>
      <h3>Steps</h3>
      <ul>
        <li>Lay baby on a changing surface; keep one hand on them at all times if elevated.</li>
        <li>Open the dirty diaper but leave it underneath as a barrier while you wipe.</li>
        <li>Wipe <strong>front to back</strong> (especially important for baby girls, to avoid spreading bacteria toward the urinary tract).</li>
        <li>For boys, keep a cloth or spare wipe loosely over the penis while open-air — cool air can trigger urination.</li>
        <li>Let skin air-dry for a few seconds before putting on the new diaper if it seems damp/irritated.</li>
        <li>Slide the clean diaper under baby before removing the dirty one, to speed up the swap.</li>
      </ul>
      <p>See also <a href="#/topic/diaper-rash">Diaper Rash: Prevention & Treatment</a>.</p>
    `,
  },
  {
    id: 'diaper-rash',
    category: 'diapering-bathing',
    title: 'Diaper Rash: Prevention & Treatment',
    tags: ['diapering', 'skin', 'rash'],
    summary: 'Frequent changes and air time prevent most rashes; a barrier cream treats mild ones.',
    body: `
      <p>Diaper rash (red, irritated skin in the diaper area) is common and usually caused by prolonged contact with moisture.</p>
      <h3>Prevention</h3>
      <ul>
        <li>Change diapers promptly, especially after bowel movements.</li>
        <li>Let the area air-dry for a few minutes at changes when possible.</li>
        <li>Avoid diapers that are too tight; use fragrance-free wipes if skin seems sensitive.</li>
      </ul>
      <h3>Treatment</h3>
      <ul>
        <li>Apply a zinc-oxide based barrier cream at each change until it clears.</li>
        <li>Pat (don't rub) the area dry.</li>
      </ul>
      <div class="callout"><strong>Call your pediatrician</strong> if the rash includes blisters, pus, bright red raised patches with satellite spots (possible yeast infection), doesn't improve after 2–3 days of home care, or your baby has a fever.</div>
    `,
  },
  {
    id: 'bathing-newborn',
    category: 'diapering-bathing',
    title: 'Bathing a Newborn',
    tags: ['bathing', 'hygiene', 'newborn'],
    summary: 'Sponge baths until the cord falls off, then 2–3 tub baths a week is plenty.',
    resources: [
      { title: 'Bath Time for Baby: When and How To Bathe Your Newborn', source: 'Cleveland Clinic', url: 'https://health.clevelandclinic.org/how-to-bathe-newborn' },
    ],
    video: { id: 'dfCCbVWrdPw', title: 'How to Give Infant a Sponge Bath', source: 'CloudMom' },
    moreVideos: [
      { id: 'P0eg44MJ-qg', title: 'How To Bathe A Newborn Baby: A Comprehensive Guide', source: 'Henry Ford Health' },
    ],
    body: `
      <p>Newborns don't need daily baths — their skin can dry out, and they don't get very dirty. <strong>2–3 times a week</strong> is generally plenty (with regular face/diaper-area cleaning in between).</p>
      <h3>Before the umbilical cord falls off</h3>
      <ul>
        <li>Stick to sponge baths — a damp washcloth, keeping the cord area dry.</li>
      </ul>
      <h3>Once the cord is off</h3>
      <ul>
        <li>Use a small basin or baby tub, water comfortably warm (test with your wrist/elbow — not hot).</li>
        <li>Support the head and neck at all times; never leave baby unattended in water, even for a second.</li>
        <li>Use a mild, fragrance-free baby wash; wash face first while the water is cleanest.</li>
        <li>Save the head/hair for last, since babies lose heat quickly once wet.</li>
      </ul>
    `,
  },

  // ---------- HEALTH & SAFETY ----------
  {
    id: 'when-to-call-doctor',
    category: 'health-safety',
    title: 'When to Call the Doctor',
    tags: ['warning signs', 'fever', 'urgent'],
    summary: 'Any fever in a baby under 3 months is an urgent call — plus other signs that warrant a call.',
    body: `
      <p>Trusting your instincts matters — if something feels wrong, it's always reasonable to call. These are commonly cited thresholds worth knowing in advance.</p>
      <div class="callout"><strong>Call immediately (or go to the ER)</strong> if your baby is under 3 months old and has a rectal temperature of <strong>100.4°F (38°C) or higher</strong> — at this age, fever is treated as a medical emergency regardless of how baby otherwise seems.</div>
      <h3>Also call promptly for</h3>
      <ul>
        <li>Difficulty breathing, unusual grunting, wheezing, or blue tint around lips/face</li>
        <li>Refusing to feed, or noticeably fewer wet diapers than usual (dehydration)</li>
        <li>Unusual lethargy — very hard to wake, limp, not responding normally</li>
        <li>A rash that doesn't fade when you press on it, or looks like bruising</li>
        <li>Persistent forceful/projectile vomiting</li>
        <li>A fall or head injury, especially with vomiting, unusual sleepiness, or a bulging soft spot</li>
        <li>Any time you're simply unsure — pediatric nurse lines exist for exactly this</li>
      </ul>
    `,
  },
  {
    id: 'taking-temperature',
    category: 'health-safety',
    title: "Taking a Baby's Temperature",
    tags: ['health', 'fever', 'how-to'],
    summary: 'A rectal thermometer is most accurate for babies under 3 months.',
    resources: [
      { title: 'How to Take a Rectal Temperature', source: 'Nemours KidsHealth', url: 'https://kidshealth.org/en/parents/rectal-temperature.html' },
    ],
    video: { id: 'OynykCxWls0', title: "Taking a Newborn's Temperature", source: 'Mount Sinai Parenting Center' },
    moreVideos: [
      { id: 'n90G_OiH-qA', title: "How to Take a Baby's Temperature in Armpit (Axillary method)", source: 'RegisteredNurseRN' },
    ],
    body: `
      <p>For babies under 3 months, a <strong>rectal temperature</strong> is the most accurate method and the one pediatricians rely on for fever decisions — forehead/ear thermometers can be less reliable at this age.</p>
      <h3>How to take a rectal temperature</h3>
      <ul>
        <li>Use a digital thermometer designated for rectal use, with a small amount of lubricant on the tip.</li>
        <li>Lay baby on their back with knees toward chest, insert gently about ½ inch — never force it.</li>
        <li>Hold still until it beeps (usually well under a minute).</li>
      </ul>
      <p>For babies over 3 months, underarm (axillary) readings are commonly used for a quick check, though they run slightly lower than rectal/internal temperature.</p>
    `,
  },
  {
    id: 'car-seat-safety',
    category: 'health-safety',
    title: 'Car Seat Safety Basics',
    tags: ['safety', 'car seat'],
    summary: 'Rear-facing in the back seat, chest clip at armpit level, and the pinch test for strap tightness.',
    resources: [
      { title: 'How to Install a Rear-Facing Only Infant Car Seat', source: 'NHTSA', url: 'https://www.nhtsa.gov/how-install-rear-facing-only-infant-car-seat' },
    ],
    video: { id: 'i3VRVTdzFio', title: 'Installing a Rear-Facing Car Safety Seat', source: 'American Academy of Pediatrics' },
    moreVideos: [
      { id: '3C7_eJEmuGE', title: 'How to Install Your Rear-Facing Car Seat', source: 'Safe Kids Worldwide' },
    ],
    body: `
      <p>Car seat misuse is extremely common — a few checks cover most of it.</p>
      <div class="diagram">
        <svg viewBox="0 0 400 240" role="img" aria-label="Diagram of a rear-facing infant car seat showing harness strap at or below shoulder level and chest clip at armpit level">
          <path d="M110 40 C60 40 50 100 60 150 C65 185 90 210 140 215 L260 215 C300 210 310 170 300 130 C290 90 260 60 220 45 Z" fill="var(--color-surface)" stroke="var(--color-text)" stroke-width="2.5"/>
          <ellipse cx="185" cy="90" rx="30" ry="26" fill="var(--color-accent-soft)" stroke="var(--color-text)" stroke-width="2.5"/>
          <rect x="160" y="112" width="60" height="70" rx="18" fill="var(--color-accent-soft)" stroke="var(--color-text)" stroke-width="2.5"/>
          <line x1="165" y1="128" x2="150" y2="180" stroke="var(--color-accent-hover)" stroke-width="4" stroke-linecap="round"/>
          <line x1="205" y1="128" x2="220" y2="180" stroke="var(--color-accent-hover)" stroke-width="4" stroke-linecap="round"/>
          <rect x="172" y="150" width="26" height="14" rx="4" fill="var(--color-accent)" stroke="var(--color-accent-hover)" stroke-width="1.5"/>
          <line x1="60" y1="128" x2="320" y2="128" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="5 4"/>
          <text x="325" y="132" font-size="11" fill="var(--color-text-muted)" font-family="Inter, sans-serif">Shoulder level</text>
          <text x="205" y="150" font-size="11" fill="var(--color-accent-hover)" font-family="Inter, sans-serif" font-weight="600">&#8592; Chest clip at armpit level</text>
          <text x="200" y="20" text-anchor="middle" font-size="12" fill="var(--color-text-muted)" font-family="Inter, sans-serif">Rear-facing — harness at or just below shoulders</text>
        </svg>
      </div>
      <ul>
        <li><strong>Rear-facing</strong> in the back seat for infants — keep rear-facing as long as the seat's height/weight limits allow (often well past age 1).</li>
        <li><strong>Harness straps</strong> at or just below shoulder level for rear-facing; snug enough that you can't pinch excess webbing at the shoulder (the "pinch test").</li>
        <li><strong>Chest clip</strong> at armpit level, not on the belly or neck.</li>
        <li>Avoid bulky coats/snowsuits under the harness — they compress in a crash and leave straps too loose. Buckle first, then add a blanket over the straps if needed.</li>
        <li>Many local fire/police departments or hospitals offer free car seat installation checks — worth doing once before the birth.</li>
      </ul>
    `,
  },
  {
    id: 'babyproofing-timeline',
    category: 'health-safety',
    title: 'Baby-Proofing Timeline',
    tags: ['safety', 'home'],
    summary: 'You have more time than you think — most baby-proofing can wait until baby starts moving.',
    body: `
      <p>You don't need the whole house baby-proofed before birth — most hazards only matter once baby is mobile. A rough timeline:</p>
      <ul>
        <li><strong>Before birth / early weeks:</strong> Safe sleep space set up, car seat installed and checked, smoke/CO detectors working.</li>
        <li><strong>Around 4–6 months (rolling/sitting):</strong> Anchor furniture and TVs to the wall, remove small choking hazards from floor level.</li>
        <li><strong>Around 6–9 months (crawling):</strong> Outlet covers, cabinet locks (especially cleaning supplies/medications), stair gates, cord/blind cord management, corner guards on sharp furniture.</li>
        <li><strong>Around 9–12 months (pulling up/cruising):</strong> Secure anything climbable near windows, re-check furniture anchoring can hold a standing/pulling child.</li>
      </ul>
    `,
  },
  {
    id: 'vaccination-schedule',
    category: 'health-safety',
    title: 'Vaccination Schedule Overview',
    tags: ['health', 'vaccines'],
    summary: 'A general shape of the first-year schedule — your pediatrician provides the exact plan.',
    body: `
      <p>Your pediatrician will give you the exact schedule and product details at each visit — this is just a general shape of the standard first-year visit schedule so it's not a surprise.</p>
      <div class="diagram">
        <svg viewBox="0 0 600 150" role="img" aria-label="Timeline of standard first-year vaccination visits at birth, 2 months, 4 months, 6 months, and 12 months">
          <line x1="50" y1="75" x2="550" y2="75" stroke="var(--color-border)" stroke-width="3"/>
          <g font-family="Inter, sans-serif">
            <circle cx="50" cy="75" r="8" fill="var(--color-accent)"/>
            <text x="50" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-text)">Birth</text>
            <text x="50" y="98" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">Hep B</text>

            <circle cx="175" cy="75" r="8" fill="var(--color-accent)"/>
            <text x="175" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-text)">2 mo</text>
            <text x="175" y="98" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">DTaP, Polio,</text>
            <text x="175" y="112" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">Hib, PCV, RV</text>

            <circle cx="300" cy="75" r="8" fill="var(--color-accent)"/>
            <text x="300" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-text)">4 mo</text>
            <text x="300" y="98" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">2nd round</text>

            <circle cx="425" cy="75" r="8" fill="var(--color-accent)"/>
            <text x="425" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-text)">6 mo</text>
            <text x="425" y="98" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">3rd round +</text>
            <text x="425" y="112" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">flu vaccine</text>

            <circle cx="550" cy="75" r="8" fill="var(--color-accent)"/>
            <text x="550" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="var(--color-text)">12 mo</text>
            <text x="550" y="98" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">MMR, Varicella,</text>
            <text x="550" y="112" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">Hep A</text>
          </g>
        </svg>
      </div>
      <ul>
        <li><strong>Birth:</strong> Hepatitis B (1st dose), often given in the hospital.</li>
        <li><strong>2 months:</strong> First round of several vaccines (e.g. DTaP, polio, Hib, pneumococcal, rotavirus) — this visit often brings mild fussiness/low fever, which is normal.</li>
        <li><strong>4 months:</strong> Second round of the same series.</li>
        <li><strong>6 months:</strong> Third round, plus seasonal flu vaccine becomes relevant going forward.</li>
        <li><strong>12 months:</strong> MMR, varicella, hepatitis A, and others typically begin.</li>
      </ul>
      <div class="callout">Mild fussiness, low fever, or soreness at the injection site for a day or two after shots is common and manageable with guidance from your pediatrician (e.g. on infant pain reliever dosing). A high fever, unusual lethargy, or a rash needs a call.</div>
    `,
  },

  // ---------- SOOTHING & DEVELOPMENT ----------
  {
    id: 'soothing-crying-colic',
    category: 'soothing-development',
    title: 'Soothing a Crying Baby / Colic',
    tags: ['crying', 'colic', 'soothing'],
    summary: 'The "5 S\'s" (swaddle, side, shush, swing, suck) are a well-known starting toolkit.',
    resources: [
      { title: "The 5 S's for Soothing Babies", source: 'Dr. Harvey Karp / Happiest Baby', url: 'https://www.happiestbaby.com/blogs/baby/the-5-s-s-for-soothing-babies' },
    ],
    video: { id: '6Cido2md4Y4', title: "The 5 S's to Soothe Your Baby", source: 'Dr. Harvey Karp / Happiest Baby' },
    moreVideos: [
      { id: 'j2C8MkY7Co8', title: 'How To Calm A Crying Baby — "The Hold" (Official)', source: 'Robert C. Hamilton, MD' },
    ],
    body: `
      <p>All babies cry — it's their main communication tool. Occasional inconsolable crying spells, especially in the evening in the first months, are common and usually not a sign anything is wrong.</p>
      <h3>The "5 S's" (a well-known soothing framework)</h3>
      <ul>
        <li><strong>Swaddle:</strong> Snug wrapping (see Swaddling Safely) recreates womb-like security.</li>
        <li><strong>Side/stomach position (while awake and held):</strong> Holding baby on their side or front in your arms (never for sleep) can be calming — always back to back for actual sleep.</li>
        <li><strong>Shush:</strong> Loud, close white noise mimics womb sounds.</li>
        <li><strong>Swing:</strong> Gentle, rhythmic motion (rocking, a car ride, a baby swing).</li>
        <li><strong>Suck:</strong> Nursing, a bottle, or a pacifier — sucking is naturally calming.</li>
      </ul>
      <h3>About colic</h3>
      <p>"Colic" generally describes crying for 3+ hours a day, 3+ days a week, for 3+ weeks in an otherwise healthy baby. It typically peaks around 6 weeks and improves by 3–4 months. It's exhausting but not dangerous — if it's affecting your ability to cope, it's worth telling your pediatrician, both for baby's sake and yours.</p>
      <div class="callout">If crying is unusual in pitch (very high-pitched), paired with fever, vomiting, or your baby seems to be in pain (arching, pulling legs up), call your pediatrician rather than assuming it's typical fussiness.</div>
    `,
  },
  {
    id: 'tummy-time',
    category: 'soothing-development',
    title: 'Tummy Time',
    tags: ['development', 'motor skills'],
    summary: 'A few minutes a day, starting day one, builds the neck/shoulder strength babies need for milestones ahead.',
    resources: [
      { title: 'Tummy Time: Essential Guide for Parents', source: 'Pathways.org', url: 'https://pathways.org/topics-of-development/tummy-time' },
    ],
    video: { id: 'zQfuBFwVZ5E', title: 'How, When, and Where to Start Tummy Time with a Newborn', source: 'Pathways.org' },
    moreVideos: [
      { id: 'V7yLVmUhcZQ', title: 'Must-Know Tummy Time Positions', source: 'Emma Hubbard (parenting creator)' },
    ],
    body: `
      <p>Tummy time — supervised time on the belly while awake — builds the neck, shoulder, and core strength baby needs for rolling, sitting, and crawling later on. It also helps prevent flat spots on the head from too much time on the back.</p>
      <h3>How to start</h3>
      <ul>
        <li>Start from day one, a few minutes at a time, a few times a day — right after a diaper change works well.</li>
        <li>Get down on the floor at eye level, or lay baby on your chest as you recline, to make it more engaging.</li>
        <li>Build up gradually — aim for around 15–30 total minutes a day by around 3 months, spread across short sessions.</li>
        <li>Always supervised, and only while awake — never for sleep.</li>
      </ul>
    `,
  },
  {
    id: 'milestones-first-year',
    category: 'soothing-development',
    title: 'Developmental Milestones by Month (0–12)',
    tags: ['milestones', 'development'],
    summary: 'A general guide — babies vary widely, and ranges matter more than exact ages.',
    body: `
      <p>Every baby develops at their own pace — these are general ranges, not deadlines. Bring concerns to your pediatrician's well-baby visits, where development is checked at every stage.</p>
      <div class="diagram">
        <svg viewBox="0 0 600 210" role="img" aria-label="Timeline of general developmental milestone ranges from 1 to 12 months">
          <line x1="40" y1="105" x2="560" y2="105" stroke="var(--color-border)" stroke-width="3"/>
          <g font-family="Inter, sans-serif">
            <circle cx="40" cy="105" r="7" fill="var(--color-accent)"/>
            <text x="40" y="130" text-anchor="middle" font-size="11" font-weight="600" fill="var(--color-text)">1&#8211;2 mo</text>
            <text x="40" y="85" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">Social smile</text>

            <circle cx="170" cy="105" r="7" fill="var(--color-accent)"/>
            <text x="170" y="130" text-anchor="middle" font-size="11" font-weight="600" fill="var(--color-text)">3&#8211;4 mo</text>
            <text x="170" y="150" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">Head steady</text>

            <circle cx="300" cy="105" r="7" fill="var(--color-accent)"/>
            <text x="300" y="130" text-anchor="middle" font-size="11" font-weight="600" fill="var(--color-text)">5&#8211;6 mo</text>
            <text x="300" y="85" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">Rolls over</text>

            <circle cx="430" cy="105" r="7" fill="var(--color-accent)"/>
            <text x="430" y="130" text-anchor="middle" font-size="11" font-weight="600" fill="var(--color-text)">7&#8211;9 mo</text>
            <text x="430" y="150" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">Sits alone</text>

            <circle cx="560" cy="105" r="7" fill="var(--color-accent)"/>
            <text x="530" y="130" text-anchor="middle" font-size="11" font-weight="600" fill="var(--color-text)">10&#8211;12 mo</text>
            <text x="560" y="85" text-anchor="middle" font-size="10" fill="var(--color-text-muted)">First steps</text>
          </g>
        </svg>
      </div>
      <ul>
        <li><strong>1–2 months:</strong> Brief eye contact, starts to smile socially, lifts head briefly during tummy time.</li>
        <li><strong>3–4 months:</strong> Holds head steady, pushes up on arms during tummy time, brings hands together, laughs/coos.</li>
        <li><strong>5–6 months:</strong> Rolls over both ways, reaches for objects, may start sitting with support, begins solids readiness (around 6 months).</li>
        <li><strong>7–9 months:</strong> Sits without support, may start crawling, responds to their name, babbles ("mama"/"dada" without meaning yet).</li>
        <li><strong>10–12 months:</strong> Pulls to stand, may cruise along furniture or take first steps, uses simple gestures (waving), may say a first word with meaning.</li>
      </ul>
      <div class="callout">Talk to your pediatrician if your baby isn't making eye contact by 3 months, shows no interest in reaching for objects by 6 months, isn't sitting with support by 9 months, or isn't attempting to stand/cruise by 12 months — early evaluation is low-risk and can help.</div>
    `,
  },
];
