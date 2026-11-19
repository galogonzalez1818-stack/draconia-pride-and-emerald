/**
 * FREE WEB ANALYTICS (Visitors, Countries, Devices & Events)
 * Configure your Google Analytics 4 (G-XXXXXXXXXX) or GoatCounter ID in ads-config.js
 */
window.GAME_ANALYTICS = {
  ready: false,

  init() {
    const cfg = window.ADS_CONFIG?.analytics;
    if (!cfg) return;

    // 1. Google Analytics 4 (100% free: visitors, countries, cities, PC vs Mobile)
    if (cfg.googleAnalyticsId && cfg.googleAnalyticsId.startsWith('G-')) {
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(cfg.googleAnalyticsId)}`;
      document.head.appendChild(s);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', cfg.googleAnalyticsId);
      this.ready = true;
    }

    // 2. GoatCounter (optional free privacy-friendly counter)
    if (cfg.goatCounterCode) {
      const g = document.createElement('script');
      g.async = true;
      g.dataset.goatcounter = `https://${cfg.goatCounterCode}.goatcounter.com/count`;
      g.src = 'https://gc.zgo.at/count.js';
      document.head.appendChild(g);
    }
  },

  track(eventName, params = {}) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  },
};
