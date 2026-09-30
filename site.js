// Shared motion helpers for DCase pages.
const EASE = 'cubic-bezier(.2,.7,.2,1)';

export function setupReveal(root = document) {
  const els = Array.from(root.querySelectorAll('[data-reveal]'));
  const vh = window.innerHeight;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, d = el.getAttribute('data-reveal-delay') || 0;
      el.style.transitionDelay = d + 'ms';
      el.style.opacity = '1'; el.style.transform = 'none';
      io.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
  els.forEach(el => {
    if (el.getBoundingClientRect().top < vh * 0.92) return;
    el.style.opacity = '0'; el.style.transform = 'translateY(32px)';
    el.style.transition = 'opacity .9s ' + EASE + ', transform .9s ' + EASE;
    io.observe(el);
  });
  return () => io.disconnect();
}

export function setupProgress(sel = '[data-progress]') {
  const el = document.querySelector(sel);
  if (!el) return () => {};
  const fn = () => { const h = document.documentElement.scrollHeight - window.innerHeight; el.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%'; };
  window.addEventListener('scroll', fn, { passive: true }); fn();
  return () => window.removeEventListener('scroll', fn);
}

export function tween(dur, onFrame, ease = k => 1 - Math.pow(1 - k, 3)) {
  const t0 = performance.now(); let raf;
  const step = now => { const k = Math.min(1, (now - t0) / dur); onFrame(ease(k)); if (k < 1) raf = requestAnimationFrame(step); };
  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
}

export function setupCounter(sel, onProgress, dur = 1600) {
  const el = document.querySelector(sel);
  if (!el) return () => {};
  let stop = () => {};
  const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { stop = tween(dur, onProgress); io.disconnect(); } }); }, { threshold: 0.3 });
  io.observe(el);
  return () => { io.disconnect(); stop(); };
}

// Mouse parallax: elements with data-depth move with the pointer; [data-glow] follows it.
export function parallaxMove(e, container) {
  const r = container.getBoundingClientRect();
  const dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
  container.querySelectorAll('[data-depth]').forEach(el => {
    const d = parseFloat(el.getAttribute('data-depth')) || 0;
    el.style.transform = 'translate3d(' + (dx * d * 100) + 'px,' + (dy * d * 100) + 'px,0)';
    el.style.transition = 'transform .6s ' + EASE;
  });
  container.querySelectorAll('[data-glow]').forEach(el => { el.style.left = (e.clientX - r.left) + 'px'; el.style.top = (e.clientY - r.top) + 'px'; });
}

export function parallaxReset(container) {
  container.querySelectorAll('[data-depth]').forEach(el => { el.style.transform = 'translate3d(0,0,0)'; });
}
