import React, { useRef, useState } from 'react';
import { ArrowRight, Volume2, VolumeX, Play, Pause } from 'lucide-react';

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
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-28 lg:pt-32 pb-16 lg:pb-24 bg-[#FBF8F3]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Monolithic Editorial Typography (45-50% width) */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10 lg:pr-6">
            
            {/* Shark Tank Season 4 Trust Pill */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] mb-8 w-fit backdrop-blur-xs">
              <img
                src="/images/Season 4.png"
                alt="Shark Tank India Season 4"
                className="h-6 w-auto object-contain rounded-xs"
              />
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#171412]/80 font-mono font-medium">
                As Seen on Shark Tank India S4
              </span>
            </div>

            {/* Giant Monolithic Headline: 72px - 100px */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[98px] font-normal text-[#171412] leading-[0.98] tracking-tight font-display">
              Food that <br />
              feels <span className="font-editorial italic font-normal text-[#9E1B1B]">like home.</span>
            </h1>

            {/* Supporting text: 18px */}
            <p className="mt-8 text-base sm:text-lg text-[#171412]/75 max-w-lg font-light leading-relaxed">
              Authentic Indian comfort food, made with care and served with the warmth of home.
            </p>

            {/* ONLY ONE CTA */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-3.5 px-9 py-4.5 rounded-full bg-[#9E1B1B] text-white text-xs sm:text-sm uppercase tracking-[0.18em] font-medium shadow-sm hover:bg-[#851616] active:scale-98 transition-all duration-300 group cursor-pointer"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
                Fresh daily • Delivered warm
              </span>
            </div>

          </div>

          {/* Right Column: Large Cinematic Video Container (50-55% width, 600-720px tall) */}
          <div className="lg:col-span-6 relative h-[440px] sm:h-[560px] lg:h-[660px] xl:h-[700px] w-full">
            <div className="w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(23,20,18,0.18)] relative bg-stone-900 group border border-stone-200/50">
              
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                poster="/images/9a6dd6_f3668576e4fa4c30b984ab2897c502a7~mv2.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/images/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Subtle ambient light gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/50 via-transparent to-transparent pointer-events-none" />

              {/* Top Floating Badge: Live Homestyle Kitchen */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171412]/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#9E1B1B] animate-pulse" />
                <span>Live Kitchen • Kolkata</span>
              </div>

              {/* Bottom Video Controls: Mute and Play/Pause */}
              <div className="absolute bottom-5 right-5 flex items-center gap-2.5 z-20">
                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-full bg-[#171412]/70 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:bg-[#171412] transition-all cursor-pointer shadow-sm"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  title={isMuted ? "Unmute sound" : "Mute sound"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={togglePlay}
                  className="p-2.5 rounded-full bg-[#171412]/70 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:bg-[#171412] transition-all cursor-pointer shadow-sm"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  title={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>

              {/* Bottom Left Reel caption */}
              <div className="absolute bottom-5 left-5 text-white/90 text-xs font-editorial italic drop-shadow-md hidden sm:block">
                “Handcrafted with generational love”
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
