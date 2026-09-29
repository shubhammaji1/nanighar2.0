import React, { useRef, useState } from 'react';
import { ArrowRight, Volume2, VolumeX, Play, Pause, ChevronDown } from 'lucide-react';

interface HeroHomeProps {
  onExploreMenu: () => void;
}

export const HeroHome: React.FC<HeroHomeProps> = ({ onExploreMenu }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative w-full pt-20 sm:pt-22 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3]">
      <div className="max-w-[1360px] mx-auto w-full">
        {/* ONE UNIFIED CINEMATIC BANNER FRAME */}
        <div className="relative w-full h-[calc(100vh-6.5rem)] min-h-[500px] max-h-[720px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(23,20,18,0.25)] border border-stone-800/10 bg-[#141210] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          
          {/* Background Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/Moha Egg Thali.avif"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          >
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Cinematic Scrim & Gradients */}
          {/* Left-to-right gradient for text contrast while preserving video visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D0C]/90 via-[#0F0D0C]/65 to-[#0F0D0C]/25 z-10 pointer-events-none" />
          {/* Bottom subtle ambient gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0C]/85 via-transparent to-[#0F0D0C]/30 z-10 pointer-events-none" />

          {/* TOP BAR INSIDE THE FRAME */}
          <div className="relative z-20 flex items-center justify-between gap-4">
            {/* Shark Tank Season 4 Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 shadow-sm transition-colors">
              <img
                src="/images/Season 4.png"
                alt="Shark Tank India Season 4"
                className="h-5 sm:h-5.5 w-auto object-contain rounded-2xs"
              />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/90 font-mono font-medium">
                As Seen on Shark Tank India S4
              </span>
            </div>

            {/* Live Kitchen Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white text-[10px] sm:text-[11px] font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
              <span>Live Kitchen • Kolkata</span>
            </div>
          </div>

          {/* CENTER / MAIN CONTENT INSIDE THE FRAME */}
          <div className="relative z-20 max-w-2xl my-auto py-3">
            {/* Monolithic Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] font-normal text-white leading-[1.02] tracking-tight font-display">
              Food that feels <br />
              <span className="font-editorial italic font-normal text-[#E25C5C] drop-shadow-sm">
                like home.
              </span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/85 max-w-xl font-light leading-relaxed drop-shadow-sm">
              Authentic Indian comfort food, prepared fresh by generational home chefs and served with the warmth of home.
            </p>

            {/* Action Row: Primary CTA + Micro Assurance */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#9E1B1B] hover:bg-[#851616] text-white text-xs sm:text-sm uppercase tracking-[0.18em] font-medium shadow-[0_8px_25px_rgba(158,27,27,0.45)] active:scale-98 transition-all duration-300 group cursor-pointer"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/75 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Fresh daily • Delivered warm</span>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR INSIDE THE FRAME */}
          <div className="relative z-20 flex items-center justify-between gap-4 pt-2">
            {/* Tagline Whisper */}
            <div className="text-white/80 text-xs sm:text-sm font-editorial italic drop-shadow-sm flex items-center gap-2">
              <span>“Ghar se dil tak”</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-[11px] font-mono tracking-widest uppercase text-white/60 hidden sm:inline">Generational Recipes</span>
            </div>

            {/* Scroll Down Cue */}
            <button
              onClick={() => {
                document.getElementById('brand-statement')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden md:flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors cursor-pointer group"
              aria-label="Scroll to discover more"
            >
              <span>Scroll to taste</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* Bottom Right: Video Playback & Sound Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white/90 hover:text-white transition-all cursor-pointer shadow-sm"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                title={isMuted ? "Unmute sound" : "Mute sound"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </button>
              <button
                onClick={togglePlay}
                className="p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white/90 hover:text-white transition-all cursor-pointer shadow-sm"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                title={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
