#!/usr/bin/env node

/**
 * Audio Generation Script
 * Creates simple placeholder audio files for the website
 * These will be replaced with actual professional audio later
 */

const fs = require('fs');
const path = require('path');

// Create public/sounds directory if it doesn't exist
const soundsDir = path.join(__dirname, 'public', 'sounds');
if (!fs.existsSync(soundsDir)) {
  fs.mkdirSync(soundsDir, { recursive: true });
  console.log('✓ Created sounds directory');
}

/**
 * Generate a simple WAV file with a tone
 * frequency: Hz
 * duration: seconds
 * volume: 0-1
 */
function generateWAV(frequency, duration, volume = 0.3) {
  const sampleRate = 44100;
  const samples = sampleRate * duration;
  const buffer = Buffer.alloc(samples * 2);
  
  for (let i = 0; i < samples; i++) {
    const sample = Math.sin((i / sampleRate) * frequency * 2 * Math.PI) * volume * 0x7FFF;
    buffer.writeInt16LE(Math.max(-0x8000, Math.min(0x7FFF, sample)), i * 2);
  }

  // WAV header
  const header = Buffer.alloc(44);
  
  // RIFF chunk
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + buffer.length, 4);
  header.write('WAVE', 8);
  
  // Format subchunk
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size
  header.writeUInt16LE(1, 20); // AudioFormat (PCM)
  header.writeUInt16LE(1, 22); // NumChannels (Mono)
  header.writeUInt32LE(sampleRate, 24); // SampleRate
  header.writeUInt32LE(sampleRate * 2, 28); // ByteRate
  header.writeUInt16LE(2, 32); // BlockAlign
  header.writeUInt16LE(16, 34); // BitsPerSample
  
  // Data subchunk
  header.write('data', 36);
  header.writeUInt32LE(buffer.length, 40);
  
  return Buffer.concat([header, buffer]);
}

/**
 * Generate a startup chime (ascending tones)
 */
function generateStartupSound() {
  const sampleRate = 44100;
  const totalDuration = 1.0; // 1 second
  const chimes = [
    { freq: 523.25, duration: 0.15 },  // C5
    { freq: 659.25, duration: 0.15 },  // E5
    { freq: 783.99, duration: 0.4 },   // G5
  ];

  let totalSamples = 0;
  chimes.forEach(chime => {
    totalSamples += Math.floor(sampleRate * chime.duration);
  });

  const buffer = Buffer.alloc(totalSamples * 2);
  let offset = 0;

  chimes.forEach(chime => {
    const samples = Math.floor(sampleRate * chime.duration);
    for (let i = 0; i < samples; i++) {
      // Fade in/out for smooth transitions
      const t = i / samples;
      const envelope = Math.sin(t * Math.PI);
      const sample = Math.sin((offset + i) / sampleRate * chime.freq * 2 * Math.PI) * envelope * 0.4 * 0x7FFF;
      buffer.writeInt16LE(Math.max(-0x8000, Math.min(0x7FFF, sample)), offset * 2 + i * 2);
    }
    offset += samples;
  });

  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + buffer.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(buffer.length, 40);

  return Buffer.concat([header, buffer]);
}

// Generate sounds
const sounds = {
  'startup.wav': generateStartupSound(),
  'click.wav': generateWAV(800, 0.1, 0.3),          // Quick beep
  'transition.wav': generateWAV(600, 0.3, 0.25),    // Smooth tone
  'ambient.wav': generateWAV(432, 5, 0.15),         // Long ambient tone (432 Hz - "healing frequency")
};

// Save all sounds
Object.entries(sounds).forEach(([filename, audio]) => {
  const filepath = path.join(soundsDir, filename);
  fs.writeFileSync(filepath, audio);
  console.log(`✓ Generated ${filename} (${Math.round(audio.length / 1024)}KB)`);
});

console.log('\n✨ Audio files created successfully!');
console.log('Location:', soundsDir);
