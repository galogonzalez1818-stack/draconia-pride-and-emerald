# Pride & Emerald — Visual Novel Dating Sim

A **100% free** browser-based visual novel dating sim, responsive for **PC, tablets, and mobile phones**.

## ✨ Features
- **Interactive Story (5 Chapters + 4 Endings)**: Play as **Draconia**, trying to navigate her stubborn pride and secret feelings for **Harry** (with mentions of **Ron** and **Hermione** — first names only, no copyrighted surnames or trademarked terms).
- **Responsive Design**: Works smoothly in mobile portrait, tablet, and desktop views (including keyboard shortcuts `Space`/`Enter` and `1-3`).
- **Zero-Cost Procedural Audio**: Ambient magic music and SFX powered by the Web Audio API (`audio.js`).
- **Auto-Save & Endings Gallery**: Saves progress and unlocked endings in `localStorage`.
- **Ad Monetization Ready (`ads-config.js`)**:
  - Responsive bottom banner slot (`#ad-banner-slot`).
  - Chapter-break interstitial ad modal with configurable cooldown.
  - Optional Rewarded Ad (**"Heart Hint"**) so players can watch an ad to unlock a helpful choice hint.

## 🚀 How to Run Locally
Open `index.html` directly in your browser, or run a quick local server:

```powershell
python -m http.server 8080
```
Then visit `http://localhost:8080`.

## 🌐 Free Hosting Options
Because this is a pure static web app (HTML + CSS + JS + images), you can host it **100% free** on:
1. **GitHub Pages**
2. **Cloudflare Pages** or **Netlify**
3. **itch.io** (supports HTML5 browser games + optional player donations)

## 💰 Enabling Real Ads
Open `ads-config.js`, set `demoMode: false`, and paste your publisher IDs or banner HTML from **Google AdSense**, **Adsterra**, or **Monetag**.
