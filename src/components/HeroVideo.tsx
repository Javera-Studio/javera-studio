"use client";

export function HeroVideo() {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      style={{ backgroundColor: "#F8F5F2" }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.jpg"
      aria-hidden
      ref={(el) => { if (el) el.playbackRate = 0.5; }}
    >
      <source src="/hero.mp4" type="video/mp4" />
      <source src="/hero.webm" type="video/webm" />
    </video>
  );
}
