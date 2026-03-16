import { useEffect, useState } from 'react';
import Home from './pages/Home';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-2 border-brand-primary/30" />
        <div className="absolute inset-2 animate-spin rounded-full border-t-2 border-r-2 border-brand-primary border-r-transparent" />
      </div>
      <p className="mt-6 text-sm uppercase tracking-[0.4em] text-slate-300">
        Loading Portfolio
      </p>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Home />
    </>
  );
}
