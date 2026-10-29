/* Metro AI Studio — brand settings.
   Metro Public Adjustment, Inc.® (metropa.com), Bensalem, PA: a veteran-owned public adjusting firm that has represented
   property owners on insurance claims since 1994. Mission: "To Protect And Educate The Policy Holder".
   This studio is for Metro's own team (public adjusters, claims reps, the sales team and office staff), requested through
   Don Martin (2026-10-28). Field reference: bizconnect-ai-studio\tools\brand-template\brand.js. Image paths are relative to this folder.
   Public adjusting is a licensed, regulated trade: examples stay educational, never promise results, never solicit
   door-to-door or after a storm, never offer referral fees. The Worker adds the same limits (BRANDS.metropa rules/copyRules). */
window.BRAND = {
  id: "metropa",                        // must match the folder name AND an entry in the Worker's BRANDS list
  api: "https://bizconnect-ai-studio.virtualecommerceinc.workers.dev",

  productName: "Metro AI Studio",
  orgName: "Metro Public Adjustment, Inc.",
  wordmark: ["METRO", "AI Studio"],
  logo: "img/mark-cream.png",           // Metro's M-and-house mark, recolored cream for the dark header
  logoAlt: "Metro Public Adjustment M-and-house mark",
  crest: "img/mark-gold.png",
  favicon: "img/favicon.png",

  pageTitle: "Metro AI Studio — AI tools for the Metro claims team",
  description: "Homeowner explainers, training decks, flyers, translations and more, made with the world's leading AI models in one simple studio for the Metro Public Adjustment team.",
  noindex: true,                        // keep search engines away until Metro approves the wording
  hero: {
    eyebrow: "",
    titleHtml: "Every AI tool your team needs. <em>Built to protect and educate.</em>",
    lead: "Homeowner explainers, training decks, flyers and translations. Just describe it. Pay only for what you create.",
  },
  footer: "Preview prepared for Metro Public Adjustment, Inc. · AI Steve is an AI likeness, used with permission · AI drafts need human and compliance review before use",
  gate: {
    intro: "The Metro AI Studio is in private preview. Enter the access passcode to start creating.",
    invited: "A Metro teammate invited you. Welcome aboard!",
    note: "Preview build: your name and email are stored by the studio's developer (not by Metro) only to run your account and credits. Please don't paste policy or claim numbers, names or addresses into the tools: use placeholders.",
  },
  referral: {
    copied: "Link copied! Share it with your Metro teammates",
    empty: "No referrals yet. Share your link with adjusters and office staff on your team.",
  },
  fileName: "metro-ai-studio",
  exportColors: { bg: "001D15", accent: "FEB703", title: "F5F7F2", body: "D6E0DA" },

  // The guide is a cartoon of Metro's founder, Steve McCaffrey ("AI Steve"). He is a REAL person: the Worker's
  // BRANDS.metropa.cast makes the concierge say it's an AI and keeps it advice-only. His likeness is used at Metro's
  // request; the default Talking Avatar presenter is a fictional teammate (Morgan) so nobody scripts the real founder.
  guide: {
    name: "Steve",
    role: "AI guide · modeled on our founder",
    label: "AI Steve, a digital studio guide modeled on Metro's founder",
    avatar: "img/steve-avatar.jpg",
    poses: [
      { src: "img/guide/steve-pose-wave.png", alt: "Cartoon of AI Steve waving hello" },
      { src: "img/guide/steve-pose-point.png", alt: "Cartoon of AI Steve pointing something out" },
      { src: "img/guide/steve-pose-welcome.png", alt: "Cartoon of AI Steve welcoming you with open arms" },
      { src: "img/guide/steve-pose-thumbsup.png", alt: "Cartoon of AI Steve giving a thumbs up" },
      { src: "img/guide/steve-pose-armscrossed.png", alt: "Cartoon of AI Steve standing confidently" },
      { src: "img/guide/steve-pose-clipboard.png", alt: "Cartoon of AI Steve holding a clipboard, ready to help" },
    ],
    pages: {
      "index.html": { pose: 0, lines: ["Hi, I'm AI Steve, a digital guide (the real Steve is busy). What are we making today?", "Out in the field? Tap the 🎤 in any box and just talk. I'll type it up."] },
      "studio.html": { pose: 5, lines: ["Start with an example, then put it in plain English. Homeowners are already stressed.", "AI writes drafts, not decisions. Anything about a real claim goes to the licensed adjuster on the file."] },
      "account.html": { pose: 3, lines: ["Know a teammate who'd use this? Share your link.", "Your credits and referral link live here, whenever you need them."] },
    },
    greeting: "Hi{first}! I'm AI Steve, a digital guide modeled on Metro's founder (the real Steve doesn't see these chats). What are we making for the team today: something for a homeowner, a training session, or a partner? I'll point you to the right studio.",
    chips: ["Which tool should I use?", "Explain what a public adjuster does", "Build a training deck for new reps", "Translate a document checklist to Spanish"],
  },

  presenter: { name: "Morgan", thumb: "img/presenter.jpg" }, // fictional teammate; same photo is worker/public/morgan-presenter.jpg

  // Hover examples, written for a claims team. Made-up firm "Keystone Claims Advocates" and .example addresses only.
  previews: {
    chat: {
      kind: "chat",
      prompt: "Write a friendly text confirming a homeowner's appointment with their adjuster.",
      reply: "Hi Dana, this is Keystone Claims Advocates confirming your appointment Thursday at 10 am. If you have your policy handy, please set it out, along with any photos you've taken. Reply here with any questions. See you then! Reply STOP to opt out.",
    },
    image: {
      kind: "image",
      prompt: "Warm flyer-style illustration: a claims advocate with a clipboard going over paperwork with a homeowner couple at their kitchen table.",
      src: "brands/metropa/previews/image.webp",
      alt: "AI-made illustration of a claims advocate reviewing paperwork with a homeowner couple at a kitchen table",
    },
    video: null,                        // no claims-team clip yet; hidden rather than showing the core bakery example
    voice: null,
    avatar: null,
    music: {
      kind: "audio",
      prompt: "Calm, confident background music for a training video. No vocals.",
      detail: "Genre: acoustic · Mood: calm and steady",
      src: "assets/previews/music.mp3",
    },
    deck: {
      kind: "deck",
      prompt: "Orientation for new claims reps: how a claim moves from the first call to close.",
      slides: [
        { title: "From first call to close", bullets: ["What happens at each step", "Who the homeowner talks to, and when"] },
        { title: "The inspection", bullets: ["Photos, notes and measurements", "Document before anything is thrown out"] },
        { title: "Keep the policyholder informed", bullets: ["A plain-English update every week", "Write down every call with the carrier"] },
      ],
      detail: "3 of 8 slides shown · with speaker notes · downloads as PowerPoint",
    },
    translate: {
      kind: "translate",
      prompt: "Please take photos of all damage before any cleanup or repairs.",
      language: "Spanish",
      result: "Por favor, tome fotos de todos los daños antes de cualquier limpieza o reparación.",
    },
    outreach: {
      kind: "outreach",
      prompt: "bluepeakrestoration.example",
      promptLabel: "You paste a local business's website",
      pieces: [
        { title: "Intro email", text: "Subject: Helping homeowners understand the claim process. Hi Marco, I saw the restoration work on your site. Our team helps policyholders understand their policy and the claim process. Could we grab coffee and introduce ourselves?" },
        { title: "LinkedIn message", text: "Hi Marco, your water-mitigation work looks great. I work with homeowners on the insurance side of a loss. Happy to connect and share what we do." },
      ],
      detail: "Also writes a text, a call opener and a follow-up",
    },
    brand: {
      kind: "brand",
      prompt: "A public adjusting firm that's calm, trustworthy and on the policyholder's side.",
      name: "Keystone Claims Advocates",
      tagline: "Clear answers. Steady support.",
      colors: ["#1E3A5F", "#C8793A", "#F5F3EE", "#1E2A24"],
      logo: "brands/metropa/previews/logo.webp",
      detail: "Plus fonts, bios and taglines",
    },
  },

  // Simple mode: homeowner and carrier writing (chat), flyers and graphics (image), rep training (deck).
  simpleStudios: ["chat", "image", "deck"],
  defaultMode: "simple",

  studios: {
    chat: {
      placeholder: "Turn my inspection notes into a plain-English update for the homeowner…",
      examples: [
        "Explain what a public adjuster does, in plain English, for a homeowner's first call",
        "Turn these inspection notes into a friendly status update for the homeowner: [notes, no names or claim numbers]",
        "Explain actual cash value vs. replacement cost in simple words",
        "Polite email to the carrier's desk adjuster asking to schedule a reinspection",
      ],
      personas: ["Policyholder education writer", "Claims-office communications coach", "New-rep trainer", "Social media manager", "Plain-English editor"],
    },
    image: {
      tagline: "Flyers, safety tips, social and recruiting graphics",
      placeholder: "A clean flyer explaining what a public adjuster does, deep green and gold…",
      examples: [
        "Clean office handout: 'What does a public adjuster do?', deep green and gold, illustrated",
        "Social graphic with 5 winter freeze tips for homeowners, illustrated, friendly",
        "Recruiting graphic: 'Join our team of claims advocates', green and gold",
        "Illustration of a friendly adjuster with a clipboard greeting a homeowner at the front door, sunny day",
      ],
    },
    video: {
      placeholder: "Slow pan across a cozy, fully restored living room, morning light…",
      examples: [
        "Slow pan across a cozy, fully restored living room, morning light",
        "Storm clouds clearing over a quiet suburban street, cinematic",
        "Adjuster walking up to a front porch with a clipboard, golden hour",
        "Team meeting in a bright office, people smiling, slow push-in",
      ],
    },
    voice: {
      placeholder: "Thank you for calling. Please leave your name and number…",
      examples: [
        "Thank you for calling Metro Public Adjustment. Please leave your name, number and the best time to reach you, and a team member will call you back.",
        "Welcome to Metro's new-rep training series. Today: documenting a loss.",
        "Winter tip: know where your main water shut-off valve is before a pipe bursts.",
      ],
    },
    avatar: {
      blurb: "Type a script and Morgan (or a photo of a teammate who agreed to it) speaks it on video. Great for training clips and homeowner tips. Only use faces of people who said yes.",
      placeholder: "Here are three things to photograph right after water damage, before cleanup…",
      examples: [
        "Here are three things to photograph right after water damage, before any cleanup.",
        "Welcome to the Metro team! Here's what your first week looks like.",
        "What's a public adjuster? We represent policyholders, not insurance companies. Here's how it works.",
        "Storm season tip: take a quick video of every room now, so you have it if you ever need it.",
      ],
    },
    music: {
      placeholder: "Calm, confident background music for a training video…",
      examples: ["Calm, confident background music for a training video", "Warm, upbeat track for a team-celebration slideshow", "Soft piano for a homeowner testimonial video", "Steady corporate beat for a recruiting video"],
    },
    deck: {
      placeholder: "Orientation for new claims reps: how a claim moves from first call to close…",
      examples: [
        "New claims rep orientation: how a claim moves from first call to close",
        "Training: documenting property damage with photos and notes",
        "Lunch-and-learn for realtors: what public adjusters do",
        "Ethics and compliance refresher: solicitation, advertising and contracts",
      ],
    },
    translate: {
      examples: [
        "Please take photos of all damage before any cleanup or repairs.",
        "A team member will call you within one business day to schedule your inspection.",
      ],
    },
    outreach: {
      name: "Partner Outreach",
      tagline: "Friendly intros to realtors, contractors and community groups",
      blurb: "Paste a local business's website. AI reads it and writes a personalized, educational intro email, LinkedIn message, text, call opener and follow-up. No referral fees or kickbacks, ever.",
      placeholder: "https://a-local-business-you-want-to-introduce-yourself-to.com",
      examples: ["metropa.com"],
    },
    brand: {
      placeholder: "A calm, trustworthy public adjusting team on the policyholder's side…",
      examples: ["Veteran-owned public adjusting firm, trustworthy and calm", "Welcome kit for new field reps", "Community storm-readiness workshop", "Homeowner education newsletter"],
    },
  },
};
