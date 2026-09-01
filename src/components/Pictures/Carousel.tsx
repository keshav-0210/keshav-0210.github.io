'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Manifest {
  images: string[];
}

export default function PictureCarousel() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('/images/carousel/manifest.json')
      .then((res) => (res.ok ? res.json() : { images: [] }))
      .then((data: Manifest) => setImages(data.images || []))
      .catch(() => setImages([]));
  }, []);

  if (images.length === 0) return null;

  // Duplicate the list so the marquee loops seamlessly
  const track = [...images, ...images];

  return (
    <section id="pictures" className="py-20 px-6 bg-gradient-to-b from-dark to-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16"
        >
          <span className="text-gradient">PICTURES</span>
        </motion.h2>
      </div>

      <div className="relative w-full">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
		  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {track.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 h-56 rounded-lg overflow-hidden border-2 border-accent/20"
            >
              <img
                src={`/images/carousel/${img}`}
                alt={`Gallery photo ${(idx % images.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
