/**
 * Dynamic Procedural Soundtrack & Rich Situational SFX Engine (Web Audio API)
 * 5 music moods: 'normal' | 'romance' | 'danger' | 'serious' | 'mystery'
 * 10 situational SFX: 'bump' | 'glass' | 'magic' | 'dark_magic' | 'sparkle' |
 *                     'potion' | 'bell' | 'heartbeat' | 'door' | 'wind'
 * 100% free, zero external audio files required.
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.bgmTimer = null;
    this.bgmStep = 0;
    this.currentMood = 'normal';

    this.moods = {
      normal: {
        tempoMs: 650,
        wave: 'sine',
        volume: 0.022,
        duration: 0.8,
        notes: [440, 523.25, 659.25, 783.99, 392, 493.88, 587.33, 783.99],
      },
      romance: {
        tempoMs: 780,
        wave: 'sine',
        volume: 0.024,
        duration: 1.15,
        notes: [349.23, 440, 523.25, 659.25, 392, 493.88, 587.33, 698.46],
      },
      danger: {
        tempoMs: 260,
        wave: 'sawtooth',
        volume: 0.016,
        duration: 0.22,
        notes: [146.83, 146.83, 155.56, 146.83, 130.81, 146.83, 164.81, 138.59],
      },
      serious: {
        tempoMs: 880,
        wave: 'triangle',
        volume: 0.022,
        duration: 1.1,
        notes: [220, 261.63, 329.63, 293.66, 196, 246.94, 293.66, 261.63],
      },
      mystery: {
        tempoMs: 720,
        wave: 'sine',
        volume: 0.02,
        duration: 1.0,
        notes: [523.25, 622.25, 783.99, 739.99, 466.16, 587.33, 698.46, 622.25],
      },
    };
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      this.stopBgm();
    } else {
      this.init();
      this.startBgm(this.currentMood);
    }
    return this.enabled;
  }

  playTone(freq, duration = 0.12, type = 'sine', volume = 0.06, delay = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const start = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.03);
  }

  playSweep(startFreq, endFreq, duration = 0.3, type = 'sine', volume = 0.08, delay = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const start = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(startFreq, start);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), start + duration);

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.03);
  }

  playNoise(duration = 0.2, filterType = 'bandpass', filterFreq = 800, volume = 0.09, delay = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const sampleRate = this.ctx.sampleRate;
    const length = Math.max(1, Math.floor(sampleRate * duration));
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const start = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(filterFreq, start);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    src.start(start);
    src.stop(start + duration + 0.03);
  }

  playClick() {
    this.playTone(620, 0.06, 'triangle', 0.04);
  }

  playHeartUp() {
    this.playTone(523.25, 0.14, 'sine', 0.07, 0);
    this.playTone(659.25, 0.16, 'sine', 0.07, 0.085);
    this.playTone(783.99, 0.24, 'sine', 0.07, 0.17);
  }

  playCold() {
    this.playTone(330, 0.16, 'triangle', 0.05, 0);
    this.playTone(277.18, 0.22, 'triangle', 0.05, 0.11);
  }

  playSfx(name) {
    if (!this.enabled || !name) return;
    this.init();
    if (!this.ctx) return;

    switch (name) {
      case 'bump':
        // Collision thud + books hitting stone floor
        this.playSweep(150, 42, 0.22, 'triangle', 0.22, 0);
        this.playNoise(0.14, 'lowpass', 420, 0.18, 0);
        this.playSweep(110, 48, 0.14, 'sine', 0.12, 0.14);
        this.playNoise(0.1, 'lowpass', 600, 0.1, 0.18);
        break;

      case 'glass':
        // Hourglass shattering + bright crystal shards
        this.playNoise(0.28, 'highpass', 2200, 0.16, 0);
        this.playTone(2100, 0.12, 'triangle', 0.07, 0.02);
        this.playTone(2850, 0.15, 'sine', 0.06, 0.06);
        this.playTone(1760, 0.14, 'triangle', 0.06, 0.11);
        this.playTone(3200, 0.18, 'sine', 0.05, 0.15);
        break;

      case 'magic':
        // Bright protective spell / wand cast
        this.playSweep(320, 1180, 0.36, 'sine', 0.11, 0);
        this.playSweep(480, 1560, 0.34, 'triangle', 0.07, 0.05);
        this.playTone(1318.5, 0.28, 'sine', 0.06, 0.24);
        this.playTone(1760, 0.32, 'sine', 0.05, 0.32);
        break;

      case 'dark_magic':
        // Menacing dark curse / dimensional crack
        this.playSweep(280, 68, 0.45, 'sawtooth', 0.11, 0);
        this.playNoise(0.32, 'bandpass', 520, 0.12, 0.04);
        this.playSweep(190, 55, 0.38, 'square', 0.06, 0.1);
        break;

      case 'sparkle':
        // Locket glowing / silver potion shimmer
        [880, 1108.73, 1318.51, 1760].forEach((f, idx) => {
          this.playTone(f, 0.3, 'sine', 0.06, idx * 0.07);
        });
        break;

      case 'potion':
        // Bubbling cauldron + hiss
        this.playNoise(0.35, 'bandpass', 1400, 0.07, 0);
        [240, 320, 280, 410, 350].forEach((f, idx) => {
          this.playSweep(f, f * 1.45, 0.08, 'sine', 0.07, idx * 0.09);
        });
        break;

      case 'bell':
        // Deep academy bell chime
        this.playTone(440, 1.3, 'sine', 0.1, 0);
        this.playTone(880, 0.9, 'triangle', 0.04, 0);
        this.playTone(659.25, 1.1, 'sine', 0.05, 0.02);
        break;

      case 'heartbeat':
        // Soft double lub-dub heartbeat
        this.playSweep(85, 42, 0.14, 'sine', 0.18, 0);
        this.playSweep(76, 38, 0.16, 'sine', 0.14, 0.2);
        break;

      case 'door':
        // Heavy wooden door closing
        this.playSweep(120, 45, 0.2, 'triangle', 0.18, 0);
        this.playNoise(0.12, 'lowpass', 340, 0.14, 0.02);
        break;

      case 'wind':
        // Cold night breeze across courtyard/bridge/forest
        this.playNoise(0.9, 'bandpass', 420, 0.065, 0);
        this.playNoise(0.8, 'bandpass', 680, 0.04, 0.15);
        break;

      default:
        break;
    }
  }

  setMood(mood) {
    const target = this.moods[mood] ? mood : 'normal';
    if (target === this.currentMood && this.bgmTimer) return;
    this.currentMood = target;
    if (this.enabled) {
      this.stopBgm();
      this.startBgm(target);
    }
  }

  startBgm(mood = this.currentMood) {
    if (!this.enabled) return;
    this.stopBgm();
    this.currentMood = this.moods[mood] ? mood : 'normal';
    const cfg = this.moods[this.currentMood];

    this.bgmTimer = setInterval(() => {
      if (!this.enabled) return;
      const freq = cfg.notes[this.bgmStep % cfg.notes.length];
      this.playTone(freq, cfg.duration, cfg.wave, cfg.volume);
      this.bgmStep++;
    }, cfg.tempoMs);
  }

  stopBgm() {
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

window.soundEngine = new SoundEngine();
