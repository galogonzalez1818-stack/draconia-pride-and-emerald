/**
 * ADVERTISING & DONATION CONFIGURATION
 * ====================================
 * Set `demoMode` to `false` and add your publisher IDs
 * from Google AdSense, Adsterra, or Monetag to earn revenue.
 */
window.ADS_CONFIG = {
  demoMode: true,
  provider: 'demo',

  adsense: {
    clientId: 'ca-pub-XXXXXXXXXXXXXXXX',
    bannerSlotId: '1234567890',
  },

  custom: {
    bannerHtml: '',
    directLinkUrl: '',
  },

  banner: {
    enabled: true,
  },

  // Interstitial ad every 10 minutes of active play + at the end of each timeline
  interstitial: {
    enabled: true,
    intervalMinutes: 10,
    onTimelineEnd: true,
    skipAfterSeconds: 5,
  },

  // PayPal Donation button (Title screen & Ending screen)
  // Replace with your PayPal.me link (e.g. 'https://paypal.me/YourName') or PayPal Donate URL
  paypal: {
    enabled: true,
    donateUrl: 'https://paypal.me/vendt18',
  },

  // Free Visitor & Country Analytics
  // Google Analytics 4 gives real-time visitors, country, city, and PC vs Mobile stats.
  analytics: {
    googleAnalyticsId: '', // Paste your 'G-XXXXXXXXXX' ID here
    goatCounterCode: '',   // Optional: your GoatCounter subdomain
  },
};
