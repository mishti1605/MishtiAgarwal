// Simple Web Audio API Synthesizer
// Avoids need for external assets and bypasses some loading latency issues.

export const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export const playBlip = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // High blip
    oscillator.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
};

export const playNetflixSound = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const t = audioCtx.currentTime;

    // --- Part 1: "The Anvil" (Strike) ---
    // A. The Hard Hit (Triangle Drop)
    const kickOsc = audioCtx.createOscillator();
    const kickGain = audioCtx.createGain();
    kickOsc.type = 'triangle'; // Harder edge than sine
    kickOsc.frequency.setValueAtTime(100, t);
    kickOsc.frequency.exponentialRampToValueAtTime(0.01, t + 0.3);

    kickGain.gain.setValueAtTime(0.0, t);
    kickGain.gain.linearRampToValueAtTime(1.0, t + 0.01); // 10ms Attack
    kickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.3); // Short Decay

    kickOsc.connect(kickGain);
    kickGain.connect(audioCtx.destination);
    kickOsc.start(t);
    kickOsc.stop(t + 0.3);

    // B. The Metal Texture (High-passed Noise)
    const bufferSize = audioCtx.sampleRate * 0.5;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(800, t);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.3, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15); // Fast metallic snap

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);
    noise.start(t);


    // --- Part 2: "The Swell" (Wide Cinematic Chord) ---
    const t2 = t + 0.05;
    const duration = 4.5;

    // Exact Harmony: D Major Add 9 (Cinematic Hero Chord)
    // Frequencies: D2, D3, F#3, A3, E4, D4
    const chord = [
        { f: 73.42, type: 'triangle', pan: 0 },    // D2 (Root/Bass)
        { f: 146.83, type: 'sawtooth', pan: -0.5 }, // D3 (Octave)
        { f: 185.00, type: 'triangle', pan: 0.5 },  // F#3 (Major 3rd)
        { f: 220.00, type: 'sawtooth', pan: -0.3 }, // A3 (5th)
        { f: 329.63, type: 'square', pan: 0.3 },    // E4 (9th - The "Dreamy" note)
        { f: 293.66, type: 'sine', pan: 0 }         // D4 (High Octave)
    ];

    chord.forEach((note) => {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        const panner = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;

        osc.type = note.type;
        osc.frequency.setValueAtTime(note.f, t2);
        // Slight detune for analog warmth
        osc.detune.setValueAtTime(Math.random() * 10 - 5, t2);

        // Filter Ssweep (The "Opening" effect)
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(100, t2);
        filter.frequency.exponentialRampToValueAtTime(8000, t2 + 0.5); // "Wah" opening

        g.gain.setValueAtTime(0, t2);
        g.gain.linearRampToValueAtTime(0.15, t2 + 0.1); // Fast Attack
        g.gain.exponentialRampToValueAtTime(0.0001, t2 + duration); // Long Decay

        // Signal Chain
        osc.connect(filter);
        filter.connect(g);

        if (panner) {
            panner.pan.value = note.pan; // Wide stereo image
            g.connect(panner);
            panner.connect(audioCtx.destination);
        } else {
            g.connect(audioCtx.destination);
        }

        osc.start(t2);
        osc.stop(t2 + duration);
    });
};
