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

function ResumeViewer() {
  return (
    <div className="min-h-screen bg-brand-bg px-4 py-6 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl justify-end">
        <a href="/resume.pdf" download className="secondary-btn">
          Download Resume
        </a>
      </div>
      <div className="mx-auto mt-6 h-[calc(100vh-7rem)] max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-glow">
        <iframe src="/resume.pdf" title="Madhura S N Resume" className="h-full w-full" />
      </div>
    </div>
  );
}

export default function App() {
  const isResumePage = window.location.pathname === '/resume';
  const [isLoading, setIsLoading] = useState(!isResumePage);

  useEffect(() => {
    if (isResumePage) {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, [isResumePage]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {isResumePage ? <ResumeViewer /> : <Home />}
    </>
  );
}
