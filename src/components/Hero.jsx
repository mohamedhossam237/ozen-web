'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroCardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Smooth 3D tilt calculation
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF8F5] via-[#FAF5F0] to-[#F9F8F6] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full max-w-full">
      
      {/* Ambient Luxury Background Light Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#C5A059]/12 to-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#573F36]/8 via-[#C5A059]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Reference 2-Column Grid Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center my-auto">
        
        {/* RIGHT COLUMN (RTL) - Editorial Content & CTAs */}
        <div className="lg:col-span-6 space-y-7 text-right flex flex-col items-start justify-center order-2 lg:order-1">
          
          {/* Luxury Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#C5A059]/30 shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
            </span>
            <span className="text-xs font-black text-[#573F36] tracking-wide">
              مجمع عيادات أوزين الطبية • دمياط الجديدة
            </span>
            <span className="text-[#C5A059] font-black">•</span>
            <span className="text-[11px] font-bold text-[#8C6D32]">
              الرعاية الاستشارية الأرقى
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-[#573F36] leading-[1.16] tracking-tight font-sans">
            رعاية طبية تليق بك، <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#98783A] font-serif">
              بخبرات استشارية رفيعة
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-lg text-[#7D6D6B] max-w-xl leading-relaxed font-medium">
            منظومة متكاملة تضم نخبة من كبار الأطباء والاستشاريين وأساتذة الجامعات في مختلف التخصصات الدقيقة بدمياط الجديدة. نجمع بين دقة التشخيص وأحدث التقنيات العالمية في بيئة استشفائية راقية صُممت لراحتك وسلامتك.
          </p>

          {/* Trust Highlights Strip (Clean & Non-chip) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-1 text-xs font-bold text-[#573F36]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>استشارات تخصصية ونخبة أساتذة الجامعات</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>أحدث تقنيات الفحص والتشخيص الطبي</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenBooking()}
              className="px-9 py-4 rounded-full bg-gradient-to-r from-[#573F36] via-[#46312A] to-[#3A2822] hover:from-[#3A2822] hover:to-[#2A1D18] text-[#F9F8F6] font-black text-sm shadow-[0_14px_30px_rgba(87,63,54,0.3)] hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-3"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>حجز موعد استشاري</span>
            </button>

            <a
              href="#specialties"
              className="px-8 py-4 rounded-full bg-white/95 hover:bg-white text-[#573F36] border-2 border-[#C5A059]/40 hover:border-[#C5A059] font-black text-sm shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
            >
              <span>العيادات والتخصصات</span>
            </a>
          </div>

        </div>

        {/* LEFT COLUMN (RTL) - Tailored Luxury Architectural Doctor Showcase */}
        <div className="lg:col-span-6 flex justify-center items-center relative perspective-container py-2 order-1 lg:order-2">
          
          {/* Main 3D Tilt Container */}
          <div 
            ref={heroCardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[480px] sm:max-w-[530px] aspect-[4/5.1] flex items-end justify-center preserve-3d transition-transform duration-200 ease-out select-none"
            style={{
              transform: isHovered
                ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            }}
          >
            
            {/* Ambient Background Gold Halo Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/25 via-[#D4AF37]/15 to-[#573F36]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

            {/* Grand Architectural Medical Niche Backdrop */}
            <div className="absolute inset-x-2 sm:inset-x-4 bottom-0 top-4 rounded-t-[200px] sm:rounded-t-[240px] rounded-b-[40px] bg-gradient-to-b from-white/95 via-[#FAF6F0]/90 to-[#EFE7DC]/70 shadow-[0_25px_60px_-15px_rgba(87,63,54,0.12),_inset_0_2px_8px_rgba(255,255,255,0.9)] border border-[#C5A059]/25 overflow-hidden -z-5 pointer-events-none">
              
              {/* Internal Radiant Light Spotlight */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 18%, rgba(212, 175, 55, 0.22) 0%, rgba(197, 160, 89, 0.05) 55%, transparent 75%)'
                }}
              />

              {/* Apex Golden Medical Crest Header */}
              <div className="absolute top-7 inset-x-0 flex flex-col items-center justify-center text-center space-y-1.5 z-10 pointer-events-none">
                <div className="w-10 h-10 relative opacity-90">
                  <Image
                    src="/brand/ozen_symbol_clean_gold.png"
                    alt="شعار مجمع عيادات أوزين"
                    fill
                    className="object-contain drop-shadow-[0_2px_8px_rgba(197,160,89,0.35)]"
                  />
                </div>
                <div className="text-[10px] font-black text-[#8C6D32] tracking-widest font-serif uppercase">
                  OZEN MEDICAL GROUP
                </div>
                <div className="text-[9px] text-[#7D6D6B] font-bold">
                  نخبة الاستشاريين والكوادر الطبية
                </div>
              </div>

              {/* Bottom Subtle Floor Base */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#573F36]/10 to-transparent pointer-events-none" />
            </div>

            {/* Doctor Image with Smooth Vertical Fade (Melts seamlessly at the neck & hips) */}
            <div 
              className="w-full h-[82%] relative flex items-end justify-center preserve-3d animate-float-3d z-10 pointer-events-none"
              style={{
                transform: 'translateZ(25px)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)'
              }}
            >
              <Image
                src="/doctor.png"
                alt="استشاريو مجمع عيادات أوزين الطبية"
                fill
                sizes="(max-width: 768px) 100vw, 530px"
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(58,40,34,0.22)]"
              />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}


