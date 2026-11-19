/**
 * ADVERTISING, ANALYTICS & DONATION CONFIGURATION
 * ==============================================
 * Production config: Adsterra Banner + Smartlink, PayPal, and Google Analytics 4.
 */
window.ADS_CONFIG = {
  demoMode: false,
  provider: 'custom',

  adsense: {
    clientId: 'ca-pub-XXXXXXXXXXXXXXXX',
    bannerSlotId: '1234567890',
  },

  custom: {
    bannerHtml: `
      <script>
        atOptions = {
          'key' : '80ed1d453f6cf39cc71d27e18b29fcf5',
          'format' : 'iframe',
          'height' : 50,
          'width' : 320,
          'params' : {}
        };
      <\/script>
      <script src="https://bauval.org/22/80ed1d453f6cf39cc71d27e18b29fcf5"><\/script>
    `,
    directLinkUrl: 'https://araplhn.org/4/7219f049eb955088c8e7ebf152d0c382',
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
  paypal: {
    enabled: true,
    donateUrl: 'https://paypal.me/vendt18',
  },

  // Free Visitor & Country Analytics (Google Analytics 4)
  analytics: {
    googleAnalyticsId: 'G-ZKD3M7VR9P',
    goatCounterCode: '',
  },
};
