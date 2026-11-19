/**
 * Visual Novel Engine: "Pride & Emerald: Echoes of the Rift"
 */
(() => {
  const AUTO_SAVE_KEY = 'draconia_autosave_v2';
  const MANUAL_SAVE_KEY = 'draconia_manualsave_v2';
  const ENDINGS_KEY = 'draconia_endings_v2';
  const LANG_KEY = 'draconia_lang_v1';

  const CHAR_IMAGES = {
    harry: 'assets/harry.png',
    hermiona: 'assets/hermione.png',
    ronn: 'assets/ron.png',
    lune: 'assets/luna.png',
    nevile: 'assets/neville.png',
    severo: 'assets/professor.png',
    minerba: 'assets/minerva.png',
    remuz: 'assets/remus.png',
    pamona: 'assets/pomona.png',
    albuz: 'assets/albus.png',
    lucio: 'assets/lucius.png',
    thom: 'assets/villain.png',
    belatrix: 'assets/bellatrix.png',
    barti: 'assets/bartok.png',
    piter: 'assets/peter.png',
  };

  const CHAR_NAMES = {
    draconia: 'Draconia',
    harry: 'Harry',
    hermiona: 'Hermiona',
    ronn: 'Ronn',
    lune: 'Lune',
    nevile: 'Nevile',
    severo: 'Professor Severo',
    minerba: 'Professor Minerba',
    remuz: 'Professor Remuz',
    pamona: 'Professor Pamona',
    albuz: 'Headmaster Albuz',
    lucio: 'Lord Lucio',
    thom: 'Thom',
    belatrix: 'Belatrix',
    barti: 'Barti',
    piter: 'Piter',
    narrator: 'Narrator',
  };

  const state = {
    nodeId: 'intro_1',
    affection: 20,
    sincerity: 10,
    courage: 10,
    mystery: 0,
    flags: {},
    log: [],
    currentParticles: '',
    typingTimer: null,
    isTyping: false,
    fullText: '',
    textSpeed: 20,
    autoPlay: false,
    autoTimer: null,
    activePlayMs: 0,
    lastTickMs: null,
    adIntervalTimer: null,
    pendingAdBreak: false,
    lang: localStorage.getItem(LANG_KEY) || 'en',
  };

  const screens = {
    title: document.getElementById('screen-title'),
    game: document.getElementById('screen-game'),
    ending: document.getElementById('screen-ending'),
    gallery: document.getElementById('screen-gallery'),
  };

  const el = {
    btnNewGame: document.getElementById('btn-new-game'),
    btnContinue: document.getElementById('btn-continue'),
    btnGallery: document.getElementById('btn-gallery'),
    endingsCount: document.getElementById('endings-count'),
    selectLanguage: document.getElementById('select-language'),
    lblLanguage: document.getElementById('lbl-language'),
    titlePillTag: document.getElementById('title-pill-tag'),
    titleSubtitle: document.getElementById('title-subtitle'),
    statsLegend: document.getElementById('stats-legend'),
    deviceNote: document.getElementById('device-note'),
    btnPaypalTitle: document.getElementById('btn-paypal-title'),
    btnPaypalEnding: document.getElementById('btn-paypal-ending'),

    sceneBg: document.getElementById('scene-bg'),
    particlesLayer: document.getElementById('particles-layer'),
    fxFlash: document.getElementById('fx-flash'),
    imgDraconiaCorner: document.getElementById('img-draconia-corner'),
    hudChapter: document.getElementById('hud-chapter'),
    valAffection: document.getElementById('val-affection'),
    valSincerity: document.getElementById('val-sincerity'),
    valCourage: document.getElementById('val-courage'),
    valMystery: document.getElementById('val-mystery'),
    btnHome: document.getElementById('btn-home'),

    slotLeft: document.getElementById('char-slot-left'),
    imgLeft: document.getElementById('img-slot-left'),
    slotRight: document.getElementById('char-slot-right'),
    imgRight: document.getElementById('img-slot-right'),

    dialogueBox: document.getElementById('dialogue-box'),
    speakerBadge: document.getElementById('speaker-badge'),
    dialogueText: document.getElementById('dialogue-text'),
    tapIndicator: document.getElementById('tap-indicator'),
    choicesContainer: document.getElementById('choices-container'),

    btnHistory: document.getElementById('btn-history'),
    btnAuto: document.getElementById('btn-auto'),
    btnSave: document.getElementById('btn-save'),
    btnLoad: document.getElementById('btn-load'),
    btnSettings: document.getElementById('btn-settings'),
    toastMsg: document.getElementById('toast-msg'),

    endingBadge: document.getElementById('ending-badge'),
    endingTitle: document.getElementById('ending-title'),
    endingDesc: document.getElementById('ending-desc'),
    endAffection: document.getElementById('end-affection'),
    endSincerity: document.getElementById('end-sincerity'),
    endCourage: document.getElementById('end-courage'),
    endMystery: document.getElementById('end-mystery'),
    btnReplay: document.getElementById('btn-replay'),
    btnEndGallery: document.getElementById('btn-end-gallery'),

    galleryTitle: document.getElementById('gallery-title'),
    btnJumpCrossroads: document.getElementById('btn-jump-crossroads'),
    galleryList: document.getElementById('gallery-list'),
    btnGalleryBack: document.getElementById('btn-gallery-back'),

    modalLog: document.getElementById('modal-log'),
    historyTitle: document.getElementById('history-title'),
    btnCloseLog: document.getElementById('btn-close-log'),
    logEntries: document.getElementById('log-entries'),

    modalSettings: document.getElementById('modal-settings'),
    settingsTitle: document.getElementById('settings-title'),
    lblMusicSfx: document.getElementById('lbl-music-sfx'),
    lblTextSpeed: document.getElementById('lbl-text-speed'),
    btnCloseSettings: document.getElementById('btn-close-settings'),
    btnToggleAudio: document.getElementById('btn-toggle-audio'),
    selectTextSpeed: document.getElementById('select-text-speed'),
    btnExportCode: document.getElementById('btn-export-code'),
    btnImportCode: document.getElementById('btn-import-code'),

    modalAd: document.getElementById('modal-ad'),
    adModalTitle: document.getElementById('ad-modal-title'),
    adModalBody: document.getElementById('ad-modal-body'),
    adDirectLink: document.getElementById('ad-direct-link'),
    adCountdown: document.getElementById('ad-countdown'),
    btnCloseAd: document.getElementById('btn-close-ad'),

    adBannerInner: document.getElementById('ad-banner-inner'),
  };

  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove('active'));
    screens[name].classList.add('active');
    if (name !== 'game') {
      stopAutoPlay();
    }
  }

  function clamp(num, min, max) {
    return Math.max(min, Math.min(max, num));
  }

  function showToast(msg) {
    el.toastMsg.textContent = msg;
    el.toastMsg.hidden = false;
    setTimeout(() => {
      el.toastMsg.hidden = true;
    }, 1800);
  }

  function getUnlockedEndings() {
    try {
      return JSON.parse(localStorage.getItem(ENDINGS_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveUnlockedEnding(id) {
    const unlocked = getUnlockedEndings();
    if (!unlocked.includes(id)) {
      unlocked.push(id);
      localStorage.setItem(ENDINGS_KEY, JSON.stringify(unlocked));
    }
    el.endingsCount.textContent = unlocked.length;
  }

  function buildSavePayload() {
    return {
      nodeId: state.nodeId,
      affection: state.affection,
      sincerity: state.sincerity,
      courage: state.courage,
      mystery: state.mystery,
      flags: state.flags,
      log: state.log.slice(-50),
    };
  }

  function saveToKey(key) {
    localStorage.setItem(key, JSON.stringify(buildSavePayload()));
  }

  function loadFromKey(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }

  function updateHud(node) {
    const chLabel = window.I18N?.chapters?.[state.lang]?.[node.chapter] || window.STORY.chapters[node.chapter] || '';
    el.hudChapter.textContent = chLabel;
    el.valAffection.textContent = state.affection;
    el.valSincerity.textContent = state.sincerity;
    el.valCourage.textContent = state.courage;
    el.valMystery.textContent = state.mystery;
  }

  function setImageWithFallback(imgEl, preferredSrc, fallbackSrc) {
    imgEl.onerror = () => {
      imgEl.onerror = null;
      if (fallbackSrc && imgEl.src !== fallbackSrc) {
        imgEl.src = fallbackSrc;
      }
    };
    imgEl.src = preferredSrc;
  }

  function updateDraconiaCorner(node) {
    if (!el.imgDraconiaCorner) return;
    let expr = node.draconiaExpr || '';
    if (!expr && node.speaker === 'draconia' && node.mood === 'blush') expr = 'blush';
    const base = 'assets/draconia.png';
    if (expr && expr !== 'normal') {
      setImageWithFallback(el.imgDraconiaCorner, `assets/draconia_${expr}.png`, base);
    } else {
      el.imgDraconiaCorner.src = base;
    }
  }

  function triggerFx(node) {
    if (!node.fx) return;
    const fxList = Array.isArray(node.fx) ? node.fx : [node.fx];
    if (fxList.includes('shake')) {
      screens.game.classList.remove('fx-shake');
      void screens.game.offsetWidth;
      screens.game.classList.add('fx-shake');
    }
    ['emerald', 'violet', 'gold'].forEach((color) => {
      if (fxList.includes(`flash-${color}`) && el.fxFlash) {
        el.fxFlash.className = 'fx-flash';
        void el.fxFlash.offsetWidth;
        el.fxFlash.classList.add(color);
      }
    });
  }

  function updateParticles(node) {
    if (!el.particlesLayer) return;
    let kind = node.particles || '';
    if (!kind && node.bg) {
      if (node.bg.includes('bg_ball') || node.bg.includes('bg_bridge')) kind = 'snow';
      else if (node.bg.includes('bg_vault') || node.bg.includes('bg_forest')) kind = 'embers';
      else if (node.music === 'romance' && node.bg.includes('bg_tower')) kind = 'sparkles';
    }
    if (kind === state.currentParticles) return;
    state.currentParticles = kind;
    el.particlesLayer.innerHTML = '';
    if (!kind) return;

    const count = 18;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = `particle ${kind}`;
      const size = kind === 'snow' ? 4 + Math.random() * 5 : 3 + Math.random() * 4;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${5 + Math.random() * 6}s`;
      p.style.animationDelay = `${Math.random() * 5}s`;
      el.particlesLayer.appendChild(p);
    }
  }

  function updateCharacters(node) {
    const chars = (node.chars || []).filter((c) => CHAR_IMAGES[c]);
    const leftChar = chars[0] || null;
    const rightChar = chars[1] || null;

    applySlot(el.slotLeft, el.imgLeft, leftChar, node);
    applySlot(el.slotRight, el.imgRight, rightChar, node);
    updateDraconiaCorner(node);
  }

  function applySlot(slotEl, imgEl, charKey, node) {
    slotEl.classList.remove('speaking', 'dimmed', 'blushing');
    if (!charKey) {
      slotEl.classList.add('hidden');
      return;
    }
    slotEl.classList.remove('hidden');
    const baseSrc = CHAR_IMAGES[charKey];
    let expr = '';
    if (node.active === charKey) {
      expr = node.expr || (node.mood === 'blush' ? 'blush' : '');
    }
    const preferredSrc =
      expr && expr !== 'normal' && baseSrc.endsWith('.png')
        ? baseSrc.replace('.png', `_${expr}.png`)
        : baseSrc;

    setImageWithFallback(imgEl, preferredSrc, baseSrc);
    imgEl.alt = CHAR_NAMES[charKey] || charKey;

    if (node.active === charKey) {
      slotEl.classList.add('speaking');
      if (node.mood === 'blush' || expr === 'blush') slotEl.classList.add('blushing');
    } else if (node.active && node.active !== 'narrator' && node.active !== 'draconia') {
      slotEl.classList.add('dimmed');
    }
  }

  function updateSpeaker(speaker) {
    el.speakerBadge.className = 'vn-name-tab';
    if (speaker === 'narrator' || !speaker) {
      el.speakerBadge.textContent = window.I18N?.ui?.[state.lang]?.narrator || 'Narrator';
    } else {
      el.speakerBadge.textContent = CHAR_NAMES[speaker] || speaker;
    }
    if (speaker) {
      el.speakerBadge.classList.add(speaker);
    }
  }

  function typeText(text, onDone) {
    clearInterval(state.typingTimer);
    clearTimeout(state.autoTimer);
    state.isTyping = true;
    state.fullText = text;

    if (state.textSpeed === 0) {
      finishTyping(onDone);
      return;
    }

    el.dialogueText.textContent = '';
    let i = 0;
    state.typingTimer = setInterval(() => {
      i++;
      el.dialogueText.textContent = text.slice(0, i);
      if (i >= text.length) {
        finishTyping(onDone);
      }
    }, state.textSpeed);
  }

  function finishTyping(onDone) {
    clearInterval(state.typingTimer);
    state.isTyping = false;
    el.dialogueText.textContent = state.fullText;
    if (onDone) onDone();
  }

  function renderNode(nodeId) {
    const node = window.STORY.nodes[nodeId];
    if (!node) return;

    state.nodeId = nodeId;
    saveToKey(AUTO_SAVE_KEY);

    const setSceneBackground = (bgPath) => {
      if (bgPath && bgPath.endsWith('.png')) {
        const probe = new Image();
        probe.onload = () => {
          el.sceneBg.style.backgroundImage = `url('${bgPath}')`;
        };
        probe.onerror = () => {
          el.sceneBg.style.backgroundImage = `url('${bgPath.replace('.png', '.svg')}')`;
        };
        probe.src = bgPath;
      } else {
        el.sceneBg.style.backgroundImage = `url('${bgPath}')`;
      }
    };
    setSceneBackground(node.bg);
    updateParticles(node);
    triggerFx(node);
    if (node.sfx) {
      window.soundEngine.playSfx(node.sfx);
    }
    window.soundEngine.setMood(node.music || 'normal');
    updateHud(node);
    updateCharacters(node);
    updateSpeaker(node.speaker);

    const localizedText = window.I18N?.nodes?.[state.lang]?.[nodeId] || node.text;
    const speakerLabel =
      node.speaker === 'narrator'
        ? (window.I18N?.ui?.[state.lang]?.narrator || 'Narrator')
        : (CHAR_NAMES[node.speaker] || 'Narrator');
    if (!state.log.length || state.log[state.log.length - 1].nodeId !== nodeId) {
      state.log.push({ nodeId, speaker: speakerLabel, text: localizedText });
    }

    el.choicesContainer.innerHTML = '';
    el.choicesContainer.hidden = true;
    el.tapIndicator.style.visibility = node.choices ? 'hidden' : 'visible';

    typeText(localizedText, () => {
      if (node.choices) {
        stopAutoPlay();
        showChoices(node);
      } else if (state.autoPlay) {
        state.autoTimer = setTimeout(advanceDialogue, 2400);
      }
    });
  }

  function checkRequirements(req) {
    if (!req) return { ok: true, reason: '' };
    const missing = [];
    if (req.affection && state.affection < req.affection) missing.push(`❤️ ${req.affection}`);
    if (req.sincerity && state.sincerity < req.sincerity) missing.push(`✨ ${req.sincerity}`);
    if (req.courage && state.courage < req.courage) missing.push(`⚔️ ${req.courage}`);
    if (req.mystery && state.mystery < req.mystery) missing.push(`🌀 ${req.mystery}`);
    if (req.flag && !state.flags[req.flag]) missing.push('🔑');
    return { ok: missing.length === 0, reason: missing.join(' ') };
  }

  function showChoices(node) {
    el.choicesContainer.innerHTML = '';
    const locChoices = window.I18N?.choices?.[state.lang]?.[node.id];
    node.choices.forEach((choice, idx) => {
      const btn = document.createElement('button');
      const check = checkRequirements(choice.requires);
      btn.className = `choice-btn${check.ok ? '' : ' locked'}`;
      const label = (locChoices && locChoices[idx]) || choice.text;
      btn.textContent = check.ok ? `${idx + 1}. ${label}` : `🔒 [${check.reason}] ${label}`;
      btn.disabled = !check.ok;
      if (check.ok) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          handleChoice(choice);
        });
      }
      el.choicesContainer.appendChild(btn);
    });
    el.choicesContainer.hidden = false;
  }

  function handleChoice(choice) {
    if (choice.setFlags) {
      Object.assign(state.flags, choice.setFlags);
    }
    if (choice.effects) {
      state.affection = clamp(state.affection + (choice.effects.affection || 0), 0, 100);
      state.sincerity = clamp(state.sincerity + (choice.effects.sincerity || 0), 0, 100);
      state.courage = clamp(state.courage + (choice.effects.courage || 0), 0, 100);
      state.mystery = clamp(state.mystery + (choice.effects.mystery || 0), 0, 100);

      if ((choice.effects.affection || 0) >= 15) {
        window.soundEngine.playHeartUp();
      } else if ((choice.effects.affection || 0) < 0) {
        window.soundEngine.playCold();
      } else {
        window.soundEngine.playClick();
      }
    }

    if (choice.ending) {
      resolveEndingByKey(choice.ending);
      return;
    }

    if (choice.resolveEnding === 'force_echoes_check') {
      resolveEnding(true);
      return;
    }

    if (choice.resolveEnding) {
      resolveEnding(false);
      return;
    }

    if (choice.next) {
      renderNode(choice.next);
    }
  }

  function resolveEndingByKey(endingKey) {
    const ending = window.STORY.endings[endingKey] || window.STORY.endings.solitude;
    saveUnlockedEnding(ending.id);
    localStorage.removeItem(AUTO_SAVE_KEY);
    window.GAME_ANALYTICS?.track('timeline_complete', { timeline: ending.id, language: state.lang });

    const presentEnding = () => {
      const locEnd = window.I18N?.endings?.[state.lang]?.[ending.id];
      el.endingBadge.textContent = locEnd?.badge || ending.badge;
      el.endingTitle.textContent = locEnd?.title || ending.title;
      el.endingDesc.textContent = locEnd?.desc || ending.desc;
      el.endAffection.textContent = state.affection;
      el.endSincerity.textContent = state.sincerity;
      el.endCourage.textContent = state.courage;
      el.endMystery.textContent = state.mystery;
      showScreen('ending');
    };

    const cfg = window.ADS_CONFIG.interstitial;
    if (cfg && cfg.enabled && cfg.onTimelineEnd) {
      showTimedInterstitial(presentEnding, 'TIMELINE COMPLETE');
    } else {
      presentEnding();
    }
  }

  function resolveEnding(steppedIntoMirror) {
    let endingKey = 'solitude';

    if (steppedIntoMirror || state.mystery >= 45) {
      endingKey = 'echoes';
    } else if (state.affection >= 65 && state.sincerity >= 55) {
      endingKey = 'sovereign';
    } else if (state.affection >= 55 && state.sincerity < 55) {
      endingKey = 'thorns';
    } else if (state.courage >= 45 && state.affection >= 25) {
      endingKey = 'guardians';
    }

    resolveEndingByKey(endingKey);
  }

  function advanceDialogue() {
    const node = window.STORY.nodes[state.nodeId];
    if (!node) return;

    if (state.isTyping) {
      finishTyping(() => {
        if (node.choices) showChoices(node);
      });
      return;
    }

    if (node.choices) return;

    window.soundEngine.playClick();
    if (node.ending) {
      resolveEndingByKey(node.ending);
      return;
    }
    if (node.next) {
      if (state.pendingAdBreak) {
        state.pendingAdBreak = false;
        showTimedInterstitial(() => renderNode(node.next));
      } else {
        renderNode(node.next);
      }
    }
  }

  function stopAutoPlay() {
    state.autoPlay = false;
    clearTimeout(state.autoTimer);
    el.btnAuto.classList.remove('active-mode');
  }

  // ==================== 15-MINUTE TIMED AD + STATIC BANNER ====================
  function initBannerAd() {
    const cfg = window.ADS_CONFIG;
    if (!cfg || !cfg.banner?.enabled || cfg.demoMode) return;

    if (cfg.provider === 'custom' && cfg.custom.bannerHtml) {
      el.adBannerInner.innerHTML = '';
      const tpl = document.createElement('template');
      tpl.innerHTML = cfg.custom.bannerHtml;
      const scripts = tpl.content.querySelectorAll('script');
      scripts.forEach((oldScript) => {
        const s = document.createElement('script');
        Array.from(oldScript.attributes).forEach((a) => s.setAttribute(a.name, a.value));
        s.textContent = oldScript.textContent;
        oldScript.replaceWith(s);
      });
      el.adBannerInner.appendChild(tpl.content);
    } else if (cfg.provider === 'adsense' && cfg.adsense.clientId) {
      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        const asScript = document.createElement('script');
        asScript.async = true;
        asScript.crossOrigin = 'anonymous';
        asScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(cfg.adsense.clientId)}`;
        document.head.appendChild(asScript);
      }
      el.adBannerInner.innerHTML = `
        <ins class="adsbygoogle"
             style="display:block;width:100%;height:50px"
             data-ad-client="${cfg.adsense.clientId}"
             data-ad-slot="${cfg.adsense.bannerSlotId}"></ins>
      `;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {}
    }
  }

  function start15MinuteAdTracker() {
    if (state.adIntervalTimer) return;
    const cfg = window.ADS_CONFIG.interstitial;
    if (!cfg || !cfg.enabled) return;

    const intervalMs = (cfg.intervalMinutes || 15) * 60 * 1000;
    state.lastTickMs = Date.now();

    state.adIntervalTimer = setInterval(() => {
      if (!screens.game.classList.contains('active') || !el.modalAd.hidden) {
        state.lastTickMs = Date.now();
        return;
      }
      const now = Date.now();
      state.activePlayMs += now - state.lastTickMs;
      state.lastTickMs = now;

      if (state.activePlayMs >= intervalMs) {
        state.activePlayMs = 0;
        state.pendingAdBreak = true;
      }
    }, 5000);
  }

  function showTimedInterstitial(onComplete, customTitle) {
    const cfg = window.ADS_CONFIG;
    let seconds = cfg.interstitial.skipAfterSeconds || 5;
    stopAutoPlay();

    el.adModalTitle.textContent = customTitle || `SPONSORED BREAK (${cfg.interstitial.intervalMinutes || 10} MIN)`;
    el.adModalBody.textContent = cfg.demoMode
      ? 'Sponsored break (Demo Mode). Connect your AdSense, Adsterra, or Monetag code in ads-config.js.'
      : 'Thank you for supporting this free visual novel!';

    if (!cfg.demoMode && cfg.custom.directLinkUrl) {
      el.adDirectLink.href = cfg.custom.directLinkUrl;
      el.adDirectLink.hidden = false;
    } else {
      el.adDirectLink.hidden = true;
    }

    el.btnCloseAd.disabled = true;
    el.btnCloseAd.textContent = `Wait ${seconds}s...`;
    el.adCountdown.textContent = `${seconds}s`;
    el.modalAd.hidden = false;

    const timer = setInterval(() => {
      seconds--;
      if (seconds <= 0) {
        clearInterval(timer);
        el.adCountdown.textContent = 'Ready';
        el.btnCloseAd.disabled = false;
        el.btnCloseAd.textContent = 'Continue Story';
      } else {
        el.adCountdown.textContent = `${seconds}s`;
        el.btnCloseAd.textContent = `Wait ${seconds}s...`;
      }
    }, 1000);

    el.btnCloseAd.onclick = () => {
      clearInterval(timer);
      el.modalAd.hidden = true;
      state.lastTickMs = Date.now();
      if (onComplete) onComplete();
    };
  }

  // ==================== GALLERY & MODALS ====================
  function renderGallery() {
    const unlocked = getUnlockedEndings();
    const t = window.I18N?.ui?.[state.lang] || window.I18N.ui.en;
    el.galleryList.innerHTML = '';
    if (el.btnJumpCrossroads) {
      el.btnJumpCrossroads.hidden = unlocked.length === 0;
    }

    Object.values(window.STORY.endings).forEach((end) => {
      const isUnlocked = unlocked.includes(end.id);
      const locEnd = window.I18N?.endings?.[state.lang]?.[end.id];
      const title = locEnd?.title || end.title;
      const badge = locEnd?.badge || end.badge;
      const desc = locEnd?.desc || end.desc;
      const item = document.createElement('div');
      item.className = `gallery-item ${isUnlocked ? 'unlocked' : ''}`;
      item.innerHTML = isUnlocked
        ? `<h4>🏆 ${title} (${badge})</h4><p>${desc}</p>`
        : `<h4>${t.lockedTitle}</h4><p>${t.lockedDesc}</p>`;
      el.galleryList.appendChild(item);
    });
  }

  function openHistory() {
    stopAutoPlay();
    el.logEntries.innerHTML = state.log
      .map((entry) => `<div class="log-entry"><strong>${entry.speaker}:</strong> ${entry.text}</div>`)
      .join('');
    el.modalLog.hidden = false;
    el.logEntries.scrollTop = el.logEntries.scrollHeight;
  }

  // ==================== EVENTS ====================
  function startNewGame() {
    window.soundEngine.init();
    window.soundEngine.startBgm();
    window.GAME_ANALYTICS?.track('game_start', { language: state.lang });
    state.affection = 20;
    state.sincerity = 10;
    state.courage = 10;
    state.mystery = 0;
    state.flags = {};
    state.log = [];
    showScreen('game');
    start15MinuteAdTracker();
    renderNode('intro_1');
  }

  function loadGameState(saved) {
    if (!saved) return;
    window.soundEngine.init();
    window.soundEngine.startBgm();
    state.affection = saved.affection ?? 20;
    state.sincerity = saved.sincerity ?? 10;
    state.courage = saved.courage ?? 10;
    state.mystery = saved.mystery ?? 0;
    state.flags = saved.flags || {};
    state.log = saved.log || [];
    showScreen('game');
    start15MinuteAdTracker();
    renderNode(saved.nodeId || 'intro_1');
  }

  el.btnNewGame.addEventListener('click', startNewGame);
  el.btnReplay.addEventListener('click', startNewGame);
  el.btnContinue.addEventListener('click', () => loadGameState(loadFromKey(AUTO_SAVE_KEY)));

  el.btnGallery.addEventListener('click', () => {
    renderGallery();
    showScreen('gallery');
  });
  el.btnEndGallery.addEventListener('click', () => {
    renderGallery();
    showScreen('gallery');
  });
  el.btnGalleryBack.addEventListener('click', () => showScreen('title'));
  el.btnHome.addEventListener('click', () => {
    el.btnContinue.hidden = !loadFromKey(AUTO_SAVE_KEY);
    showScreen('title');
  });

  // Dialogue Box + Utility Bar
  el.dialogueBox.addEventListener('click', advanceDialogue);

  el.btnHistory.addEventListener('click', (e) => {
    e.stopPropagation();
    openHistory();
  });
  el.btnCloseLog.addEventListener('click', () => (el.modalLog.hidden = true));

  el.btnAuto.addEventListener('click', (e) => {
    e.stopPropagation();
    state.autoPlay = !state.autoPlay;
    el.btnAuto.classList.toggle('active-mode', state.autoPlay);
    if (state.autoPlay && !state.isTyping) {
      state.autoTimer = setTimeout(advanceDialogue, 1400);
    }
  });

  el.btnSave.addEventListener('click', (e) => {
    e.stopPropagation();
    saveToKey(MANUAL_SAVE_KEY);
    showToast(window.I18N?.ui?.[state.lang]?.savedToast || 'Progress Saved!');
  });

  el.btnLoad.addEventListener('click', (e) => {
    e.stopPropagation();
    const t = window.I18N?.ui?.[state.lang] || window.I18N.ui.en;
    const saved = loadFromKey(MANUAL_SAVE_KEY);
    if (!saved) {
      showToast(t.noSaveToast);
      return;
    }
    loadGameState(saved);
    showToast(t.loadedToast);
  });

  el.btnSettings.addEventListener('click', (e) => {
    e.stopPropagation();
    stopAutoPlay();
    el.modalSettings.hidden = false;
  });
  el.btnCloseSettings.addEventListener('click', () => (el.modalSettings.hidden = true));

  el.btnToggleAudio.addEventListener('click', () => {
    const on = window.soundEngine.toggle();
    const t = window.I18N?.ui?.[state.lang] || window.I18N.ui.en;
    el.btnToggleAudio.textContent = on ? t.on : t.off;
  });

  el.selectTextSpeed.addEventListener('change', (e) => {
    state.textSpeed = Number(e.target.value);
  });

  if (el.btnJumpCrossroads) {
    el.btnJumpCrossroads.addEventListener('click', () => {
      window.soundEngine.init();
      window.soundEngine.startBgm();
      state.affection = 40;
      state.sincerity = 30;
      state.courage = 25;
      state.mystery = 15;
      state.flags = { jumpedToCrossroads: true };
      state.log = [];
      showScreen('game');
      start15MinuteAdTracker();
      renderNode('c3_branch_choice');
    });
  }

  if (el.btnExportCode) {
    el.btnExportCode.addEventListener('click', () => {
      const code = btoa(unescape(encodeURIComponent(JSON.stringify(buildSavePayload()))));
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(() => showToast('Save code copied!'));
      } else {
        window.prompt('Copy your Save Code:', code);
      }
    });
  }

  if (el.btnImportCode) {
    el.btnImportCode.addEventListener('click', () => {
      const raw = window.prompt('Paste your Save Code:');
      if (!raw) return;
      try {
        const decoded = JSON.parse(decodeURIComponent(escape(atob(raw.trim()))));
        el.modalSettings.hidden = true;
        loadGameState(decoded);
        showToast('Save code loaded!');
      } catch {
        showToast('Invalid save code.');
      }
    });
  }

  // Keyboard shortcuts for PC
  document.addEventListener('keydown', (e) => {
    if (
      !screens.game.classList.contains('active') ||
      !el.modalLog.hidden ||
      !el.modalAd.hidden ||
      !el.modalSettings.hidden
    ) {
      return;
    }
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      advanceDialogue();
    } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4'].includes(e.code)) {
      const idx = Number(e.code.replace('Digit', '')) - 1;
      const btns = el.choicesContainer.querySelectorAll('.choice-btn');
      if (!el.choicesContainer.hidden && btns[idx]) {
        btns[idx].click();
      }
    }
  });

  function applyLanguage(lang) {
    state.lang = window.I18N?.ui?.[lang] ? lang : 'en';
    localStorage.setItem(LANG_KEY, state.lang);
    const t = window.I18N.ui[state.lang];

    el.lblLanguage.textContent = `🌐 ${t.langLabel}`;
    el.titlePillTag.textContent = t.pillTag;
    el.titleSubtitle.innerHTML = t.subtitle;
    el.btnNewGame.textContent = t.newGame;
    el.btnContinue.textContent = t.continueGame;
    el.btnGallery.innerHTML = `${t.gallery} (<span id="endings-count">${getUnlockedEndings().length}</span>/10)`;
    el.endingsCount = document.getElementById('endings-count');
    el.btnPaypalTitle.textContent = t.donate;
    el.btnPaypalEnding.textContent = t.donate;
    el.statsLegend.innerHTML = `<span>${t.affection}</span><span>${t.sincerity}</span><span>${t.courage}</span><span>${t.mystery}</span>`;
    el.deviceNote.textContent = t.deviceNote;

    el.btnHistory.textContent = t.history;
    el.btnAuto.textContent = t.auto;
    el.btnSave.textContent = t.save;
    el.btnLoad.textContent = t.load;
    el.btnSettings.textContent = t.settings;
    el.btnReplay.textContent = t.replay;
    el.btnEndGallery.textContent = t.viewAll;
    el.btnGalleryBack.textContent = t.back;
    el.galleryTitle.textContent = t.galleryTitle;
    el.historyTitle.textContent = t.historyTitle;
    el.settingsTitle.textContent = t.settingsTitle;
    el.lblMusicSfx.textContent = t.musicSfx;
    el.lblTextSpeed.textContent = t.textSpeed;
    el.btnToggleAudio.textContent = window.soundEngine.enabled ? t.on : t.off;
    el.selectTextSpeed.options[0].textContent = t.speedNormal;
    el.selectTextSpeed.options[1].textContent = t.speedFast;
    el.selectTextSpeed.options[2].textContent = t.speedInstant;
  }

  function initPaypal() {
    const pp = window.ADS_CONFIG?.paypal;
    const show = Boolean(pp && pp.enabled && pp.donateUrl);
    el.btnPaypalTitle.hidden = !show;
    el.btnPaypalEnding.hidden = !show;
    if (show) {
      el.btnPaypalTitle.href = pp.donateUrl;
      el.btnPaypalEnding.href = pp.donateUrl;
    }
  }

  function init() {
    window.GAME_ANALYTICS?.init();
    el.selectLanguage.value = state.lang;
    el.selectLanguage.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
      window.GAME_ANALYTICS?.track('language_change', { language: e.target.value });
    });
    applyLanguage(state.lang);
    el.btnContinue.hidden = !loadFromKey(AUTO_SAVE_KEY);
    el.endingsCount.textContent = getUnlockedEndings().length;
    initBannerAd();
    initPaypal();
    el.btnPaypalTitle.addEventListener('click', () => window.GAME_ANALYTICS?.track('paypal_click', { location: 'title' }));
    el.btnPaypalEnding.addEventListener('click', () => window.GAME_ANALYTICS?.track('paypal_click', { location: 'ending' }));
  }

  init();
})();
