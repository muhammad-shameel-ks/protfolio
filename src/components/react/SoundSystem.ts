// Sound system utility for synthesizing UI click sounds using Web Audio API

let isMuted = true; // Default to muted to comply with browser autoplay policies

export function getMuteState(): boolean {
  if (typeof window === 'undefined') return true;
  return isMuted;
}

export function setMuteState(muted: boolean) {
  isMuted = muted;
  if (typeof window !== 'undefined') {
    localStorage.setItem('shameel-portfolio-muted', muted ? 'true' : 'false');
  }
}

// Initialize from localStorage if available
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('shameel-portfolio-muted');
  if (stored !== null) {
    isMuted = stored === 'true';
  }
}

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a subtle mechanical click sound.
 */
export function playClickSound() {
  if (isMuted || typeof window === 'undefined') return;

  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Mechanical click frequency setup
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.05);

    // Fast decay envelope
    gainNode.gain.setValueAtTime(0.015, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch (e) {
    console.warn("Failed to play click sound:", e);
  }
}

/**
 * Play a low mechanical keystroke sound.
 */
export function playKeySound() {
  if (isMuted || typeof window === 'undefined') return;

  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.type = 'triangle';
    // Keystroke frequency (slightly lower pitch than a hover click)
    osc.frequency.setValueAtTime(350 + Math.random() * 100, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.04);

    gainNode.gain.setValueAtTime(0.03, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    console.warn("Failed to play key sound:", e);
  }
}

/**
 * Play a soft bubble-like check sound.
 */
export function playSuccessSound() {
  if (isMuted || typeof window === 'undefined') return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Play two quick ascending tones
    const playTone = (freq: number, start: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.2, start + duration);

      gainNode.gain.setValueAtTime(0.02, start);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      osc.start(start);
      osc.stop(start + duration);
    };

    playTone(523.25, now, 0.08); // C5
    playTone(659.25, now + 0.06, 0.12); // E5
  } catch (e) {
    console.warn("Failed to play success sound:", e);
  }
}
