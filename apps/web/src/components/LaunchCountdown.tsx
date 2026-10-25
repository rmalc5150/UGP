'use client';

import { useEffect, useState } from 'react';

// February 14, 2027 at midnight in Madrid (CET).
const launchTime = Date.parse('2027-02-14T00:00:00+01:00');

export default function LaunchCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    const initialUpdate = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 60000);
    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(interval);
    };
  }, []);

  const daysRemaining =
    now === null ? null : Math.max(0, Math.ceil((launchTime - now) / 86_400_000));

  return (
    <h1 className="text-lg tracking-tight sm:text-3xl sm:font-medium">
      <span className="">{daysRemaining ?? '–'}</span> {daysRemaining === 1 ? 'day' : 'days'} until
      launch
    </h1>
  );
}
