'use client';
import { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Compass, 
  Navigation, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  Maximize2,
  CheckCircle2,
  X
} from 'lucide-react';
import Card3D from './Card3D';

export default function VirtualTour() {
  const [activeImageModal, setActiveImageModal] = useState(null);

  const facilities = [
    {
      id: 'reception',
      tag: 'INTERIOR LOBBY & LOUNGE',
      title: 'استقبال العيادات واللوبي الرئيسي',
      desc: 'تصميم فندقي هادئ بخامات الرخام الإيطالي وخشب الجوز الطبيعي مع إضاءة ذهبية دافئة تعزز الراحة النفسية للمريض.',
      image: '/facilities/reception.jpg',
      badge: 'فخامة فندقية 7 نجوم'
    },
    {
      id: 'clinic_suite',
      tag: 'PRIVATE CLINICAL SUITES',
      title: 'أجنحة الكشف والاستشارات الخاصة',
      desc: 'أجنحة طبية متكاملة فائقة الخصوصية مجهزة بأحدث المنظومات التشخيصية وأجهزة الفحص الرقمي لعام 2025.',
      image: '/facilities/clinic_suite.jpg',
      badge: 'خصوصية طبية مطلقة'
    },
    {
      id: 'facade',
      tag: 'ARCHITECTURAL FACADE',
      title: 'الواجهة المعمارية والموقع الاستراتيجي',
      desc: 'صرح طبي معماري حديث يقع في موقع استراتيجي بدمياط الجديدة مع مساحات خضراء ومواقف سيارات خاصة للمرضى والزوار.',
      image: '/facilities/facade.jpg',
      badge: 'صرح طبي متكامل'
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAF5F0]/60 to-white relative overflow-hidden w-full flex flex-col items-center justify-center text-center">
      
      {/* Centered Ambient 3D Gold Lighting */}
      <div className="absolute top-20 inset-x-0 mx-auto w-[700px] sm:w-[950px] h-[500px] bg-gradient-to-b from-[#C5A059]/12 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full border border-[#C5A059]/10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-14 w-full relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Centered Luxury 3D Badge */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#573F36] text-xs font-black border border-[#C5A059]/50 shadow-sm mx-auto">
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>مرافق المجمع وتجربة الزيارة الفاخرة | دمياط الجديدة</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#573F36] leading-[1.25] text-center tracking-tight">
            موقع المجمع والتصميم <span className="text-gold-gradient font-serif">المعماري الداخلي</span>
          </h2>

          <p className="text-sm sm:text-base text-[#7D6D6B] font-medium max-w-2xl mx-auto text-center leading-relaxed">
            صُمم مجمع أوزين الطبي وفق أعلى معايير العمارة الاستشفائية العالمية بالخامات الفاخرة (الرخام الإيطالي، الإضاءة الدافئة، واللمسات الذهبية) ليوفر بيئة علاجية استثنائية.
          </p>

          {/* Trust Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1 text-xs font-bold text-[#573F36]">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#C5A059]/30 shadow-2xs">
              <Building2 className="w-4 h-4 text-[#C5A059]" />
              <span>أجنحة استشفائية مصممة لراحة المريض</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#C5A059]/30 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>معايير مكافحة العدوى والتعقيم الدولي</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#C5A059]/30 shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>مواقف سيارات خاصة واستقبال فندقي</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. 3D ARCHITECTURAL GALLERY SHOWCASE CARDS                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 lg:gap-10 w-full max-w-6xl mx-auto items-stretch justify-items-center">
          {facilities.map((fac) => (
            <div 
              key={fac.id}
              className="w-full max-w-[360px] flex flex-col items-center cursor-pointer"
              onClick={() => setActiveImageModal(fac)}
            >
              <Card3D depth={22} maxTilt={10} className="w-full h-full flex flex-col">
                <div className="relative group bg-white rounded-3xl overflow-hidden border-2 border-[#C5A059]/35 hover:border-[#D4AF37] shadow-[0_12px_35px_-10px_rgba(87,63,54,0.08)] hover:shadow-[0_28px_60px_-10px_rgba(197,160,89,0.35)] transition-all duration-300 flex flex-col justify-between items-center h-full w-full text-center">
                  
                  {/* Top Ambient Gold Light */}
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Top Gold Hairline */}
                  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent group-hover:via-[#D4AF37] transition-all z-20" />

                  {/* Architectural Image Viewport */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-b from-[#FAF5F0] to-[#F4EBE3]">
                    <Image
                      src={fac.image}
                      alt={fac.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      priority
                    />
                    
                    {/* Shadow overlay with soft gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F1B]/90 via-[#2A1F1B]/30 to-transparent pointer-events-none" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#573F36] text-[10px] font-black border border-[#C5A059]/40 shadow-sm">
                        {fac.badge}
                      </span>
                      <span className="p-1.5 rounded-full bg-black/40 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-colors">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Bottom Title Overlay Over Image */}
                    <div className="absolute bottom-3 inset-x-4 z-10 text-right space-y-0.5">
                      <span className="text-[10px] font-mono font-bold text-[#D4AF37] tracking-wider block">
                        {fac.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                        {fac.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body Details */}
                  <div className="p-6 space-y-3 flex flex-col items-center justify-center w-full flex-1 preserve-3d text-right">
                    <p 
                      className="text-xs sm:text-sm text-[#7D6D6B] font-medium leading-relaxed min-h-[3.6rem]"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      {fac.desc}
                    </p>

                    <div 
                      className="w-full pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] font-black text-[#98783A]"
                      style={{ transform: 'translateZ(18px)' }}
                    >
                      <span>انقر للتكبير والمعاينة</span>
                      <span className="font-mono text-[10px]">VIEW 360° FACILITY</span>
                    </div>
                  </div>

                </div>
              </Card3D>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. LOCATION, HOURS & CONTACT CARD (CENTERED & LUXURIOUS)                  */}
        {/* ========================================================================= */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border-2 border-[#C5A059]/35 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-center">
            
            {/* Column 1: Location in New Damietta */}
            <div className="space-y-4 flex flex-col items-center justify-between text-center p-4 rounded-2xl bg-[#FAF5F0]/70 border border-[#C5A059]/20">
              <div className="w-14 h-14 rounded-2xl bg-[#573F36] text-[#D4AF37] flex items-center justify-center shadow-md border border-[#D4AF37]/40">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-[#573F36]">موقع مجمع العيادات</h3>
                <p className="text-xs font-bold text-[#7D6D6B] leading-relaxed max-w-xs mx-auto">
                  دمياط الجديدة - موقع استراتيجي حيوي متميز وسهل الوصول
                </p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#573F36] to-[#3A2822] hover:from-[#D4AF37] hover:to-[#C5A059] text-white text-xs font-black shadow-md transition-all duration-300 w-full cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>الاتجاهات عبر Google Maps</span>
              </a>
            </div>

            {/* Column 2: Working Hours */}
            <div className="space-y-4 flex flex-col items-center justify-between text-center p-4 rounded-2xl bg-[#FAF5F0]/70 border border-[#C5A059]/20">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C5A059] text-white flex items-center justify-center shadow-md">
                <Clock className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-[#573F36]">أوقات العمل واستقبال المرضى</h3>
                <div className="space-y-1 text-xs text-[#7D6D6B] font-bold">
                  <div>السبت - الخميس: 09:00 صباحاً - 11:00 مساءً</div>
                  <div>الجمعة: 03:00 عصراً - 10:00 مساءً</div>
                </div>
              </div>
              <div className="w-full py-2.5 px-3 rounded-xl bg-white border border-[#C5A059]/30 text-xs font-black text-[#98783A]">
                العيادات والاستشارات: متاح يومياً
              </div>
            </div>

            {/* Column 3: Direct Contact & Booking */}
            <div className="space-y-4 flex flex-col items-center justify-between text-center p-4 rounded-2xl bg-[#FAF5F0]/70 border border-[#C5A059]/20">
              <div className="w-14 h-14 rounded-2xl bg-[#1B2A4A] text-[#D4AF37] flex items-center justify-center shadow-md border border-[#C5A059]/40">
                <Phone className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-[#573F36]">التواصل المباشر والاستفسارات</h3>
                <div className="space-y-1 text-xs text-[#7D6D6B] font-bold">
                  <div>خدمة عملاء أوزين: دمياط الجديدة</div>
                  <div>البريد الإلكتروني: info@ozenmedical.com</div>
                </div>
              </div>
              <a 
                href="tel:920000000"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#1B2A4A] to-[#0F1A30] hover:bg-[#573F36] text-white text-xs font-black shadow-md transition-all duration-300 w-full"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>اتصال مباشر: 920000000</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. HIGH-RESOLUTION ARCHITECTURAL IMAGE LIGHTBOX MODAL                     */}
      {/* ========================================================================= */}
      {activeImageModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImageModal(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden border-2 border-[#C5A059] shadow-2xl p-6 sm:p-8 space-y-4 text-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#C5A059]/20">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#D4AF37]">
                  {activeImageModal.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#573F36]">
                  {activeImageModal.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveImageModal(null)}
                className="p-2 rounded-xl bg-[#FAF5F0] hover:bg-rose-50 text-[#573F36] hover:text-rose-600 transition-colors cursor-pointer border border-[#C5A059]/30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-inner border border-[#C5A059]/30">
              <Image 
                src={activeImageModal.image} 
                alt={activeImageModal.title}
                fill 
                className="object-cover"
                priority
              />
            </div>

            <p className="text-xs sm:text-sm text-[#7D6D6B] font-medium leading-relaxed">
              {activeImageModal.desc}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
