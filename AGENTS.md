# AGENTS.md — Metro AI Studio (read this first)

## What this is
A custom-branded **AI studio for Metro Public Adjustment, Inc.®** (https://metropa.com), a veteran-owned public adjusting firm in Bensalem, PA (since 1994). Public adjusters are state-licensed advocates who represent **policyholders**, not insurance companies, on property claims. Metro's mission: "To Protect And Educate The Policy Holder."

The studio is for **Metro's own team**: public adjusters, claims reps, the sales team and office staff. It gives them ten easy AI tools in Metro's look: chat (homeowner explainers, carrier emails, plain-English updates), images (handouts, safety tips, recruiting graphics), short videos, voiceovers, talking-avatar training clips, music, slide decks (rep training), translation (Spanish homeowner notices), partner outreach and brand kits. Simple mode starts with chat, images and slide decks.

**Requested by** Don Martin for Metro (email to Dan, 2026-10-28): "for their adjusters and their sales team/solicitors. The avatar should be the CEO, which is Steve McCaffrey."

**Status:** preview built 2026-10-29. Search engines are told not to index it (`noindex: true`), the footer says it's a preview and that AI drafts need human and compliance review, and the sign-in box says who stores members' data. Keep it that way until Metro approves.

- **Live:** https://bizconnectcoalition.github.io/metropa-ai-studio/
- **Repo:** `bizconnectcoalition/metropa-ai-studio` (GitHub Pages from `main`, folder `/docs`)

## It is part of the BizConnect AI Studio family
This site is the **shared AI Studio core** plus **Metro's brand**. The core is maintained in one place:

```
R:\Documents\Claude\Projects\Bizconnect\
├─ bizconnect-ai-studio\        the core + BizConnect's own studio. READ ITS AGENTS.md for the full picture
└─ ai-studio-clients\
   └─ metropa-ai-studio\        ← YOU ARE HERE
      docs\                     the website GitHub Pages serves
        brands\metropa\         ← Metro's own files: EDIT THESE
          brand.js              names, wording, example prompts, the guide "AI Steve"
          brand.css             colors and fonts
          img\                  M-and-house mark (cream for the header, gold for the sign-in box), favicon,
                                guide\ (AI Steve's 6 full-body poses), steve-avatar.jpg, presenter.jpg (Morgan)
          previews\             claims-team media for the hover examples
        brand.js, *.html, assets\   ← copied from the core: DO NOT EDIT HERE
        CORE_VERSION.txt        which core commit was last copied in
```

## Common jobs
| Job | How |
|---|---|
| Change wording, example prompts, guide lines | Edit `docs\brands\metropa\brand.js` (fields explained in `..\..\bizconnect-ai-studio\tools\brand-template\brand.js`). `studios.hide: ["music"]` removes a studio |
| Change the 3 tools Simple mode shows | `simpleStudios` in `brand.js` (now chat, image, deck) |
| Change colors or fonts | Edit `docs\brands\metropa\brand.css` |
| See it before publishing | `python -m http.server 8752 --directory docs` → http://localhost:8752 |
| Publish | `git add docs` → `git commit -m "…"` → `git push` (GitHub Pages updates in 1–2 min; hard-refresh with Ctrl+Shift+R) |
| Pick up core improvements | Run the sync command in rule 1, preview, then publish. `sync-client.ps1 -Check` (run from the core) says whether this client is behind |
| Change AI Steve's concierge voice or the compliance rules (back end) | The `metropa` entry in `BRANDS` in `..\..\bizconnect-ai-studio\worker\src\index.js` (`rules` = concierge limits, `copyRules` = limits on chat, deck, outreach and brand-kit output) → deploy the Worker (affects every studio; see the core's WHITE_LABEL.md step 4) |

## Rules
1. **Edit only `docs\brands\metropa\`** (and these .md files). Everything else in `docs\` is overwritten by the core's `tools\sync-client.ps1`:
   ```powershell
   cd R:\Documents\Claude\Projects\Bizconnect\bizconnect-ai-studio
   powershell -ExecutionPolicy Bypass -File .\tools\sync-client.ps1 -Client ..\ai-studio-clients\metropa-ai-studio -BrandId metropa
   ```
2. **Public repo:** no secrets, no private notes about Metro's people or business. Source photos of Steve stay in `..\_private_refs\metropa-people\` (never in a repo).
3. The back end is the **shared BizConnect Worker**. For now the passcode, daily spending cap and wallets are shared with the other studios (core `project-docs\DECISIONS.md`, D-004). Fix that before Metro's whole team gets the passcode.
4. Push only when Dan asks.
5. **Regulated trade.** Examples stay educational. Never add prompts that promise results, settlement amounts or percentages; door-knocking, door-hanger or "after the storm" solicitation scripts; referral fees or gifts to contractors/roofers; earnings claims in recruiting; or photoreal "damage" images (they could pass as claim evidence).

## AI Steve (the guide) — a real person
The guide is a 3D cartoon of **Steve McCaffrey**, Metro's founder and President, made at Metro's request from his LinkedIn photo and photos Don sent (how: the core's `project-docs\PREVIEW_MEDIA.md`). His name tag says "AI Steve".
- He always presents as an AI guide; the Worker entry has `cast: { Steve: … }`, which adds "you are an AI, not the real Steve" rules, plus Metro `rules` (no coverage or value opinions, no promises, no opinions on insurers or politics, no HR/pay answers, no role-playing the real Steve).
- He is **not** the Talking Avatar presenter. The default presenter is **Morgan**, a fictional teammate (`img\presenter.jpg` = the Worker's `public\morgan-presenter.jpg`), so nobody can make a video of the real founder saying a script. Making Steve a presenter needs his own written OK for that use.
- **No voice cloning of Steve**, ever, without new written consent.
- **To remove Steve:** set `guide` in `brand.js` to a fictional character (or `guide: null`), drop `cast` from the Worker's `metropa` entry and change its `guide`, deploy the Worker, publish this repo, delete `img\guide\steve-*` and `img\steve-avatar.jpg`. Old versions stay in the public git history.

## Brand notes (from metropa.com, 2026-10-29)
| Item | Value |
|---|---|
| Colors | deep green `#003928`, gold `#FEB703` (buttons), white |
| Fonts | headings and buttons **Maven Pro**, body **Lato** (both Google Fonts) |
| Logo | `https://metropa.com/wp-content/uploads/2024/07/cropped-Metro-Logo-Clear-bkg.png` (green M with columns and a house, "METRO / PUBLIC ADJUSTMENT, INC.®"); the M mark is recolored cream/gold here |
| Voice | protect and educate; "veteran owned & operated"; policyholder, advocate, free consultation |
| Audience | adjusters, claims reps, sales team, office staff |

Dark theme: Metro-green canvas, gold kept to buttons, active states and highlights.

## Open items
- Steve's own written OK (email is fine) covering: cartoon likeness, the name "AI Steve", chat guide, preview and live site, public repo history. Store it in `..\_private_refs\metropa-people\`.
- Metro's compliance review of the example prompts and guide lines.
- Hover examples for Video, Voiceover and Talking Avatar (hidden for now; make them per the core's PREVIEW_MEDIA.md, no real people, no damage footage).
- Per-brand passcode and spending cap on the Worker (D-004) before the whole team signs in.
- Their own domain (e.g. studio.metropa.com) → `docs\CNAME` plus a DNS record.
