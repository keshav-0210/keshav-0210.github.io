'use client';

import { useEffect, useState } from 'react';

const GOATCOUNTER_SITE = 'keshav-world';

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://${GOATCOUNTER_SITE}.goatcounter.com/counter/TOTAL.json`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.count) {
          const parsed = parseInt(String(data.count).replace(/[^0-9]/g, ''), 10);
          if (!Number.isNaN(parsed)) setCount(parsed);
        }
      })
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <p className="text-neutral/40 font-mono text-xs mt-4">
      👁️ {count.toLocaleString()} visits
    </p>
  );
}
