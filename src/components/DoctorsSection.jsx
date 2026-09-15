'use client';
import { useState } from 'react';
import Image from 'next/image';
import { 
  Star, 
  Calendar, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  ArrowLeft,
  Clock,
  UserCheck,
  Building2,
  HeartPulse,
  Smile,
  Baby
} from 'lucide-react';
import Card3D from './Card3D';

export default function DoctorsSection({ onOpenBooking }) {
  const [hoveredDocId, setHoveredDocId] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const doctors = [
    {
      id: 'khaled',
      name: 'د. خالد العتيبي',
      title: 'استشاري طب وتجميل الأسنان والتركيبات',
      specialtyCategory: 'dental',
      specialty: 'طب وتجميل الأسنان',
      fellowship: 'البورد الألماني في زراعة وتجميل الأسنان',
      experience: 'خبرة +16 عاماً',
      rating: '4.98',
      reviewsCount: '480+',
      image: '/doctors/dr_khaled.jpg',
      badge: 'ابتسامة هوليوود',
      schedule: 'متاح اليوم: 10 ص - 10 م',
      subspecialties: ['ابتسامة هوليوود 3D', 'زراعة الأسنان الفورية', 'التقويم الشفاف']
    },
    {
      id: 'sarah',
      name: 'د. سارة الشهري',
      title: 'استشارية أمراض الجلدية وحقن التجميل والليزر',
      specialtyCategory: 'dermo',
      specialty: 'الجلدية والتجميل والليزر',
      fellowship: 'البورد الأمريكي في الجلدية التجميلية والعلاج بالليزر',
      experience: 'خبرة +14 عاماً',
      rating: '4.99',
      reviewsCount: '620+',
      image: '/doctors/dr_sarah.jpg',
      badge: 'الأكثر طلباً',
      schedule: 'متاح اليوم: 11 ص - 9 م',
      subspecialties: ['جلسات الفراكشنال ليزر', 'حقن الفيلر والبوتوكس', 'شد الوجه بالخيوط']
    },
    {
      id: 'abdulmajeed',
      name: 'د. عبدالمجيد الغامدي',
      title: 'استشاري أمراض القلب والأوعية الدموية',
      specialtyCategory: 'cardio',
      specialty: 'القلب والأوعية الدموية',
      fellowship: 'الزمالة البريطانية لأمراض وقسطرة القلب FRCP',
      experience: 'خبرة +22 عاماً',
      rating: '4.95',
      reviewsCount: '390+',
      image: '/doctors/dr_abdulmajeed.jpg',
      badge: 'تشخيص فوري',
      schedule: 'متاح اليوم: 9 ص - 5 م',
      subspecialties: ['فحص الإيكو 4D الملون', 'تخطيط رسم القلب والمجهود', 'متابعة ضغط الدم الشرياني']
    },
    {
      id: 'noura',
      name: 'د. نورة الشمري',
      title: 'استشارية طب الأطفال ومتابعة حديثي الولادة',
      specialtyCategory: 'pedia',
      specialty: 'الأطفال وحديثي الولادة',
      fellowship: 'البورد الكندي في طب الأطفال وحديثي الولادة FAAP',
      experience: 'خبرة +15 عاماً',
      rating: '4.97',
      reviewsCount: '510+',
      image: '/doctors/dr_noura.jpg',
      badge: 'رعاية صديقة للطفل',
      schedule: 'متاح اليوم: 10 ص - 8 م',
      subspecialties: ['فحص حديثي الولادة', 'جدول التطعيمات المعتمد', 'علاج الحساسية الصدرية']
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'كافة الاستشاريين (4)' },
    { id: 'dental', label: 'طب وتجميل الأسنان' },
    { id: 'dermo', label: 'الجلدية والتجميل والليزر' },
    { id: 'cardio', label: 'القلب والأوعية الدموية' },
    { id: 'pedia', label: 'الأطفال وحديثي الولادة' }
  ];

  const filteredDoctors = selectedSpecialty === 'all'
    ? doctors
    : doctors.filter(d => d.specialtyCategory === selectedSpecialty);

  return (
    <section id="doctors" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAF5F0]/70 to-white overflow-hidden w-full max-w-full text-center flex flex-col items-center justify-center">
      
      {/* Centered Ambient 3D Gold Lighting */}
      <div className="absolute top-20 inset-x-0 mx-auto w-[700px] sm:w-[950px] h-[550px] bg-gradient-to-b from-[#C5A059]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full border border-[#C5A059]/10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Centered Luxury 3D Badge */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#573F36] text-xs font-black border border-[#C5A059]/50 shadow-sm mx-auto">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>نخبة الأطباء والاستشاريين المعتمدين في دمياط الجديدة</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#573F36] leading-[1.25] text-center tracking-tight">
            نخبة أطباء أوزين <span className="text-gold-gradient font-serif">الأكثر تميزاً واستشارة</span>
          </h2>

          <p className="text-sm sm:text-base text-[#7D6D6B] font-medium max-w-2xl mx-auto text-center leading-relaxed">
            استشر كبار الاستشاريين الحاصلين على أعلى الزمالات الطبية العالمية (أمريكية، ألمانية، بريطانية، وكندية) لحراسة صحتك وصحة عائلتك بأعلى دقة واحترافية.
          </p>

          {/* Trust Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs font-bold text-[#573F36]">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#C5A059]/30 shadow-2xs">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span>زمالات البورد الأمريكي والأوروبي</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#C5A059]/30 shadow-2xs">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>تقييم سريري استثنائي +4.95</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#C5A059]/30 shadow-2xs">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span>مواعيد استشارية متاحة اليوم</span>
            </div>
          </div>

          {/* Specialty Filter Switcher */}
          <div className="pt-2 w-full flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#C5A059]/35 shadow-sm max-w-4xl mx-auto">
              {filterTabs.map((tab) => {
                const isActive = selectedSpecialty === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedSpecialty(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#573F36] to-[#3A2822] text-[#F9F8F6] shadow-md border border-[#C5A059]' 
                        : 'text-[#7D6D6B] hover:text-[#573F36] hover:bg-[#FAF5F0] border border-transparent'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. CINEMATIC 3D DOCTOR PROFILE SHOWCASE CARDS                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl mx-auto items-stretch justify-items-center">
          {filteredDoctors.map((doc) => {
            const isHovered = hoveredDocId === doc.id;
            return (
              <div 
                key={doc.id}
                className="w-full max-w-[320px] flex flex-col items-center"
                onMouseEnter={() => setHoveredDocId(doc.id)}
                onMouseLeave={() => setHoveredDocId(null)}
              >
                <Card3D depth={22} maxTilt={10} className="w-full h-full flex flex-col">
                  <div className="relative group bg-white rounded-3xl overflow-hidden border-2 border-[#C5A059]/35 hover:border-[#D4AF37] shadow-[0_12px_35px_-10px_rgba(87,63,54,0.08)] hover:shadow-[0_28px_60px_-10px_rgba(197,160,89,0.35)] transition-all duration-300 flex flex-col justify-between items-center h-full w-full text-center">
                    
                    {/* Top Ambient Gold Light */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Top Gold Hairline */}
                    <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent group-hover:via-[#D4AF37] transition-all z-20" />

                    {/* ================================================================= */}
                    {/* FULL-IMAGE ARCHITECTURAL PORTRAIT STAGE                           */}
                    {/* ================================================================= */}
                    <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gradient-to-b from-[#FAF5F0] to-[#F4EBE3]">
                      
                      {/* Doctor High-Res Photo */}
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="(max-width: 768px) 320px, 320px"
                        className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                        priority
                      />

                      {/* Gentle Luxury Gradient Fade at Bottom of Image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20 pointer-events-none" />

                      {/* Top Floating Glass Badges Row */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                        <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#C5A059]/40 text-[10px] font-black text-[#98783A] shadow-sm">
                          {doc.badge}
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-emerald-300 text-emerald-700 text-[10px] font-black shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          متاح اليوم
                        </span>
                      </div>

                      {/* Rating Over Image Bottom */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#C5A059]/40 text-xs font-black text-[#573F36] shadow-sm">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{doc.rating}</span>
                          <span className="text-[10px] text-[#7D6D6B] font-bold">({doc.reviewsCount})</span>
                        </div>
                      </div>

                      {/* Experience Pill Bottom Left */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <div className="px-2.5 py-1 rounded-full bg-[#573F36]/90 backdrop-blur-md text-[#FFF0BD] text-[10px] font-black border border-[#C5A059]/40 shadow-sm">
                          {doc.experience}
                        </div>
                      </div>

                    </div>

                    {/* ================================================================= */}
                    {/* DOCTOR CARD DETAILS & CREDENTIALS                                 */}
                    {/* ================================================================= */}
                    <div className="p-6 pt-3 space-y-3.5 flex flex-col items-center justify-center w-full flex-1 preserve-3d">
                      
                      {/* Doctor Name & Main Specialty */}
                      <div 
                        className="space-y-1 text-center w-full"
                        style={{ transform: 'translateZ(20px)' }}
                      >
                        <h3 className="text-xl font-black text-[#573F36] group-hover:text-[#C5A059] transition-colors leading-snug">
                          {doc.name}
                        </h3>
                        <p className="text-xs text-[#7D6D6B] font-black leading-relaxed text-center min-h-[34px]">
                          {doc.title}
                        </p>
                      </div>

                      {/* International Fellowship Badge */}
                      <div 
                        className="w-full py-2 px-3 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/30 flex items-center justify-center gap-2 text-[10px] font-black text-[#573F36] leading-tight"
                        style={{ transform: 'translateZ(16px)' }}
                      >
                        <GraduationCap className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span className="line-clamp-1">{doc.fellowship}</span>
                      </div>

                      {/* Schedule Bar */}
                      <div 
                        className="w-full flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#7D6D6B] pt-0.5"
                        style={{ transform: 'translateZ(14px)' }}
                      >
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{doc.schedule}</span>
                      </div>

                      {/* Subspecialties / Key Clinical Focus */}
                      <div 
                        className="w-full pt-2 border-t border-[#C5A059]/20 flex flex-wrap justify-center gap-1"
                        style={{ transform: 'translateZ(14px)' }}
                      >
                        {doc.subspecialties.map((sub, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2 py-0.5 rounded-lg bg-[#FAF5F0]/70 text-[9px] font-extrabold text-[#7D6D6B] border border-[#C5A059]/20"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Action Trigger Button */}
                    <div 
                      className="p-5 pt-0 w-full"
                      style={{ transform: 'translateZ(25px)' }}
                    >
                      <button
                        onClick={() => onOpenBooking(doc.specialty)}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#573F36] via-[#4A342D] to-[#3A2822] hover:from-[#D4AF37] hover:via-[#C5A059] hover:to-[#98783A] text-white font-black text-xs shadow-md hover:shadow-xl border border-[#C5A059]/50 transition-all duration-300 cursor-pointer group/btn"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:text-white" />
                        <span>حجز موعد استشارة مع الطبيب</span>
                        <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:text-white group-hover/btn:-translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                </Card3D>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Hotline Strip */}
        <div className="pt-2 w-full flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white/90 border border-[#C5A059]/35 shadow-sm text-xs font-bold text-[#573F36]">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span>يمكنك اختيار الطبيب وتحديد وقت الاستشارة المناسب مباشرة أونلاين</span>
            <span className="text-[#C5A059] font-bold">|</span>
            <span>أو الاتصال المباشر: <span className="font-mono font-black text-[#573F36]" dir="ltr">920000000</span></span>
          </div>
        </div>

      </div>
    </section>
  );
}
