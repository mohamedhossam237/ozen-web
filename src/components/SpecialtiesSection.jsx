'use client';
import { useState } from 'react';
import { 
  Sparkles, 
  Smile, 
  HeartPulse, 
  Baby, 
  Activity, 
  Bone, 
  Ear, 
  Stethoscope, 
  FileCheck,
  ArrowLeft,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Award,
  CheckCircle2,
  PhoneCall,
  Box,
  Layers,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Clock,
  UserCheck
} from 'lucide-react';
import Specialty3DViewer from './Specialty3DViewer';
import ThreeMiniIcon from './ThreeMiniIcon';

export default function SpecialtiesSection({ onOpenBooking }) {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState('dermo');
  const [activeCategory, setActiveCategory] = useState('all');

  const specialties = [
    {
      id: 'dermo',
      category: 'cosmetic',
      categoryLabel: 'تجميل وليزر',
      title: 'الجلدية والتجميل والليزر',
      titleEn: 'Dermatology & Aesthetic Laser',
      icon: Sparkles,
      doctorsCount: 8,
      highlight: 'الأكثر طلباً',
      modelTag: '3D DNA & Laser Matrix',
      deviceTech: 'أجهزة Candela GentleMax Pro Plus و CO2 ليزر 2025',
      desc: 'أحدث تقنيات النضارة والليزر العالمية، الفيلر والبوتوكس الملكي، علاج التصبغات، وشد البشرة بالخيوط وتجديد الشباب تحت إشراف نخبة من كبار استشاريي الجلدية والتجميل.',
      treatments: ['جلسات الفراكشنال ليزر', 'حقن البوتكس والفيلر الملكي', 'شد الوجه بالخيوط التجميلية', 'تنظيف الهيدرافاشيال المتطور']
    },
    {
      id: 'dental',
      category: 'cosmetic',
      categoryLabel: 'طب وتجميل الأسنان',
      title: 'طب وتجميل الأسنان',
      titleEn: 'Dental & Oral Aesthetic',
      icon: Smile,
      doctorsCount: 10,
      highlight: 'ابتسامة هوليوود',
      modelTag: '3D Diamond Tooth & Smile Arc',
      deviceTech: 'الماسح الرقمي 3D iTero وعدسات E-max الألمانية',
      desc: 'ابتسامة هوليوود الرقمية ثلاثية الأبعاد، زراعة الأسنان الفورية بدون جراحة، التقويم الشفاف غير المرئي، والتبييض الماسي بأحدث المعايير الطبية العالمية.',
      treatments: ['ابتسامة هوليوود (عدسات E-max)', 'زراعة الأسنان الفورية', 'تقويم الأسنان الشفاف', 'تبييض الأسنان بالليزر']
    },
    {
      id: 'cardio',
      category: 'medical',
      categoryLabel: 'أمراض باطنية وقلب',
      title: 'القلب والأوعية الدموية',
      titleEn: 'Cardiology & Vascular Center',
      icon: HeartPulse,
      doctorsCount: 5,
      highlight: 'تشخيص فوري',
      modelTag: '3D Cardiac Pulse Rhythm',
      deviceTech: 'جهاز الإيكو 4D فائق الدقة وهولتر المراقبة الذكي',
      desc: 'تشخيص دقيق وفوري لأمراض القلب والشرايين، رسم القلب وتخطيط المجهود المحوسب، وتصوير الإيكو الملون لتقييم كفاءة عضلة القلب والصمامات بدقة بالغة.',
      treatments: ['فحص الإيكو للقلب 4D', 'رسم القلب التخطيطي المحوسب', 'متابعة ضغط الدم وهولتر 48h', 'دوبلر الأوعية الدموية']
    },
    {
      id: 'pedia',
      category: 'medical',
      categoryLabel: 'رعاية الأطفال',
      title: 'الأطفال وحديثي الولادة',
      titleEn: 'Pediatrics & Newborn Care',
      icon: Baby,
      doctorsCount: 6,
      highlight: 'رعاية صديقة للطفل',
      modelTag: '3D Protective Celestial Orbit',
      deviceTech: 'حاضنات ذكية وأجهزة فحص المؤشرات الحيوية غير المؤلمة',
      desc: 'رعاية دافئة وصديقة للطفل منذ لحظة الولادة حتى سن المراهقة، متابعة دقيقة لمراحل النمو والتطور الحركي والذهني، والتطعيمات الأساسية والإضافية.',
      treatments: ['متابعة نمو وحديثي الولادة', 'جدول التطعيمات المعتمد', 'علاج حساسية الصدر والأكزيما', 'فحص التطور الحركي والذهني']
    },
    {
      id: 'ortho',
      category: 'surgery',
      categoryLabel: 'جراحة وعظام',
      title: 'العظام والمفاصل',
      titleEn: 'Orthopedics & Sports Medicine',
      icon: Bone,
      doctorsCount: 6,
      highlight: 'علاج غير جراحي',
      modelTag: '3D Articulated Spine & Joints',
      deviceTech: 'تقنية حقن البلازما PRP والموجات التصويرية للمفاصل',
      desc: 'تشخيص وعلاج آلام العمود الفقري، خشونة الركبة والمفاصل، الإصابات الرياضية، مع باقة متكاملة من الحقن العلاجية وحقن البلازما الغنية بالصفائح.',
      treatments: ['علاج آلام العمود الفقري والرقبة', 'حقن المفاصل بالبلازما PRP', 'علاج إصابات الملاعب والأربطة', 'تأهيل وتخفيف خشونة المفاصل']
    },
    {
      id: 'ent',
      category: 'surgery',
      categoryLabel: 'أنف وأذن وحنجرة',
      title: 'الأنف والأذن والحنجرة',
      titleEn: 'ENT & Hearing Center',
      icon: Ear,
      doctorsCount: 5,
      highlight: 'مناظير دقيقة',
      modelTag: '3D Acoustic Resonance Waves',
      deviceTech: 'مناظير الأنف والجيوب الدقيقة ووحدة تخطيط السمع الرقمية',
      desc: 'تشخيص متطور بمناظير الأنف والحنجرة، علاج الحساسية المزمنة، قياس واختبارات السمع وضغط الأذن، وعلاج الدوار والاتزان واضطرابات الشخير.',
      treatments: ['مناظير الأنف والجيوب الأنفية', 'تخطيط واختبارات السمع الشاملة', 'علاج الدوار ومشاكل الاتزان', 'علاج الشخير واضطرابات التنفس']
    },
    {
      id: 'internal',
      category: 'medical',
      categoryLabel: 'باطنية وغدد',
      title: 'الباطنية والغدد والسكر',
      titleEn: 'Internal Medicine & Diabetes',
      icon: Stethoscope,
      doctorsCount: 7,
      highlight: 'برامج علاجية متكاملة',
      modelTag: '3D Molecular Glucose Crystal',
      deviceTech: 'أجهزة قياس السكر التراكمي الفورية وسونار البطن الرقمي',
      desc: 'المتابعة الطبية الشاملة للأمراض المزمنة، تنظيم داء السكري وعلاج اضطرابات الغدة الدرقية، واضطرابات الجهاز الهضمي والقولون العصبي بدقة فائقة.',
      treatments: ['برنامج المتابعة الشاملة للسكري', 'فحوصات الغدة الدرقية والهرمونات', 'علاج القولون ومشاكل الهضم', 'برامج السمنة والتمثيل الغذائي']
    },
    {
      id: 'checkup',
      category: 'wellness',
      categoryLabel: 'فحص دوري ومختبر',
      title: 'الفحص الدوري والمختبر',
      titleEn: 'Executive Checkup & Lab',
      icon: FileCheck,
      doctorsCount: 4,
      highlight: 'نتائج فورية دقيقة',
      modelTag: '3D Biometric Radar Scanner',
      deviceTech: 'مختبر آلي متكامل بنتائج فورية معتمدة دولياً',
      desc: 'باقات الفحص الصحي الدوري الشامل للرجال والنساء، تحليل الفيتامينات والمعادن، تحاليل وظائف الكبد والكلى، ونتائج مخبرية فورية دقيقة خلال دقائق.',
      treatments: ['باقة الفحص الصحي الشامل VIP', 'تحليل الفيتامينات والمعادن الحيوية', 'فحص وظائف الأعضاء الكامل', 'فحوصات الهرمونات والدلالات']
    }
  ];

  const categories = [
    { id: 'all', label: 'جميع العيادات (8)' },
    { id: 'cosmetic', label: 'الجلدية والأسنان والتجميل' },
    { id: 'medical', label: 'الباطنية والقلب والأطفال' },
    { id: 'surgery', label: 'العظام والأنف والأذن' },
    { id: 'wellness', label: 'الفحص الدوري والمختبر' }
  ];

  const filteredSpecialties = activeCategory === 'all'
    ? specialties
    : specialties.filter(s => s.category === activeCategory);

  const activeSpecialty = specialties.find(s => s.id === activeSpecialtyId) || specialties[0];
  const activeSpecialtyIndex = specialties.findIndex(s => s.id === activeSpecialty.id);

  const handlePrevSpecialty = () => {
    const currentIndex = specialties.findIndex(s => s.id === activeSpecialtyId);
    const prevIndex = (currentIndex - 1 + specialties.length) % specialties.length;
    setActiveSpecialtyId(specialties[prevIndex].id);
  };

  const handleNextSpecialty = () => {
    const currentIndex = specialties.findIndex(s => s.id === activeSpecialtyId);
    const nextIndex = (currentIndex + 1) % specialties.length;
    setActiveSpecialtyId(specialties[nextIndex].id);
  };

  return (
    <section id="specialties" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF5F0]/70 via-[#F9F8F6] to-[#FAF5F0]/80 overflow-hidden w-full text-center flex flex-col items-center justify-center">
      
      {/* Centered Ambient 3D Lighting Accents */}
      <div className="absolute top-16 inset-x-0 mx-auto w-[700px] sm:w-[950px] h-[600px] bg-gradient-to-b from-[#C5A059]/15 via-[#D4AF37]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-8 inset-x-0 mx-auto w-[650px] sm:w-[850px] h-[850px] rounded-full border border-[#C5A059]/15 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full space-y-10 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto text-center w-full">
          
          {/* Centered Luxury 3D Badge */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#573F36] text-xs font-black border border-[#C5A059]/50 shadow-sm mx-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A059]"></span>
            </span>
            <Box className="w-4 h-4 text-[#C5A059]" />
            <span>الجناح الطبي التفاعلي ثلاثي الأبعاد | دمياط الجديدة</span>
          </div>

          {/* Centered Heading with Metallic Gold Gradient */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#573F36] leading-[1.25] text-center tracking-tight">
            عيادات تخصصية متكاملة برعاية <span className="text-gold-gradient font-serif">نخبة الاستشاريين</span>
          </h2>

          {/* Centered Subtitle */}
          <p className="text-sm sm:text-base text-[#7D6D6B] max-w-3xl mx-auto leading-relaxed text-center font-medium">
            استكشف مراكز أوزين التخصصية بتجربة ثلاثية الأبعاد تفاعلية 360°، وتعرف على أحدث التجهيزات والمنظومات الطبية لعام 2025 مع سهولة الحجز المباشر.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs font-bold text-[#573F36]">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-[#C5A059]/30 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>أعلى معايير الجودة وسلامة المرضى</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-[#C5A059]/30 shadow-2xs">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span>+45 استشاري وطبيب معتمد</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-[#C5A059]/30 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>أحدث تقنيات التشخيص 2025</span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-2 w-full flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#C5A059]/35 shadow-sm max-w-4xl mx-auto">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      if (cat.id !== 'all') {
                        const firstInCat = specialties.find(s => s.category === cat.id);
                        if (firstInCat) setActiveSpecialtyId(firstInCat.id);
                      }
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#573F36] to-[#3A2822] text-[#F9F8F6] shadow-md border border-[#C5A059]' 
                        : 'text-[#7D6D6B] hover:text-[#573F36] hover:bg-[#FAF5F0] border border-transparent'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* UNIFIED MASTER 3D CLINIC PAVILION (THE ULTIMATE PANORAMIC VIEW)           */}
        {/* ========================================================================= */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-[#C5A059]/40 shadow-[0_25px_65px_-15px_rgba(87,63,54,0.18)] p-6 sm:p-8 lg:p-10 overflow-hidden text-right">
            
            {/* Top Gold Foil Accent Line */}
            <div className="absolute top-0 inset-x-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            
            {/* Ambient Corner Glows */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#573F36]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Stage Grid: Interactive 3D WebGL Canvas + Clinical Dossier */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Interactive Three.js 3D WebGL Canvas */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
                <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#FAF5F0]/80 via-[#F4EBE3]/50 to-white border border-[#C5A059]/35 shadow-inner overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
                  <Specialty3DViewer 
                    specialtyId={activeSpecialty.id}
                    title={activeSpecialty.title}
                  />
                </div>

                {/* 3D Navigation Controls */}
                <div className="flex items-center justify-between w-full pt-4 px-2">
                  <button
                    onClick={handlePrevSpecialty}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF5F0] text-[#573F36] hover:text-[#C5A059] border border-[#C5A059]/35 text-xs font-black shadow-sm transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>العيادة السابقة</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-[#98783A]">
                      0{activeSpecialtyIndex + 1} / 0{specialties.length}
                    </span>
                    <div className="flex items-center gap-1">
                      {specialties.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setActiveSpecialtyId(s.id)}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            activeSpecialtyId === s.id 
                              ? 'w-7 bg-gradient-to-r from-[#D4AF37] to-[#C5A059]' 
                              : 'w-2 bg-[#C5A059]/30 hover:bg-[#C5A059]/60'
                          }`}
                          aria-label={s.title}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleNextSpecialty}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF5F0] text-[#573F36] hover:text-[#C5A059] border border-[#C5A059]/35 text-xs font-black shadow-sm transition-all cursor-pointer"
                  >
                    <span>العيادة التالية</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Selected Clinic's Luxury Dossier */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-right space-y-5">
                
                {/* Badges Row */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#573F36] to-[#3A2822] text-[#FFF0BD] text-xs font-black shadow-xs border border-[#C5A059]/50">
                    {activeSpecialty.highlight}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-700 border border-emerald-200/60 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    متاح اليوم
                  </span>
                </div>

                {/* Main Titles with Live Rotating 3D Icon */}
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3.5 mb-1.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#573F36] to-[#3A2822] flex items-center justify-center border-2 border-[#D4AF37]/60 shadow-md">
                      <ThreeMiniIcon type={activeSpecialty.id} className="w-11 h-11" isHovered={true} />
                    </div>
                    <div className="text-right">
                      <h3 className="text-2xl sm:text-3xl font-black text-[#573F36] tracking-tight">
                        {activeSpecialty.title}
                      </h3>
                      <div className="text-xs font-mono font-bold text-[#98783A] mt-0.5">
                        {activeSpecialty.titleEn}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#7D6D6B] font-medium leading-relaxed">
                  {activeSpecialty.desc}
                </p>

                {/* Clinical Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-right">
                  <div className="p-3.5 rounded-2xl bg-[#FAF5F0]/80 border border-[#C5A059]/30 flex items-center gap-2.5">
                    <UserCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-[#7D6D6B]">الفريق الطبي</div>
                      <div className="text-xs font-black text-[#573F36]">{activeSpecialty.doctorsCount} استشاريين معتمدين</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF5F0]/80 border border-[#C5A059]/30 flex items-center gap-2.5">
                    <Cpu className="w-5 h-5 text-[#C5A059] shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-[#7D6D6B]">الأجهزة والتجهيزات</div>
                      <div className="text-[11px] font-black text-[#573F36] line-clamp-1">{activeSpecialty.deviceTech}</div>
                    </div>
                  </div>
                </div>

                {/* Key Treatments */}
                <div className="w-full space-y-2">
                  <div className="text-xs font-black text-[#573F36] flex items-center justify-center lg:justify-start gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>أبرز الخدمات والتقنيات العلاجية:</span>
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
                    {activeSpecialty.treatments.map((t, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-white text-xs font-black text-[#573F36] border border-[#C5A059]/30 shadow-2xs hover:border-[#D4AF37] hover:scale-105 transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Action Button */}
                <div className="pt-2 w-full">
                  <button
                    onClick={() => onOpenBooking(activeSpecialty.title)}
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#573F36] via-[#4A342D] to-[#3A2822] hover:from-[#D4AF37] hover:via-[#C5A059] hover:to-[#98783A] text-[#F9F8F6] font-black text-xs sm:text-sm border border-[#C5A059] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37] group-hover:text-white" />
                    <span>حجز استشارة مباشرة في {activeSpecialty.title}</span>
                    <ArrowLeft className="w-4 h-4 text-[#D4AF37] group-hover:text-white group-hover:-translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>

            {/* ===================================================================== */}
            {/* PANORAMIC 8-CLINIC DECK (EASILY SEE ALL CLINICS AT A GLANCE)          */}
            {/* ===================================================================== */}
            <div className="mt-10 pt-6 border-t border-[#C5A059]/25 w-full">
              <div className="flex items-center justify-between pb-3 px-1">
                <span className="text-xs font-black text-[#573F36] flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#C5A059]" />
                  <span>انقر على أي عيادة لاستعراض مجسمها ثلاثي الأبعاد 3D وملفها السريري:</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-[#98783A] bg-[#FAF5F0] px-3 py-1 rounded-full border border-[#C5A059]/30">
                  {filteredSpecialties.length} عيادات متاحة
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 w-full">
                {filteredSpecialties.map((spec) => {
                  const isActive = activeSpecialtyId === spec.id;
                  return (
                    <button
                      key={spec.id}
                      onClick={() => setActiveSpecialtyId(spec.id)}
                      className={`group relative flex flex-col items-center justify-between p-3.5 rounded-2xl text-center transition-all duration-300 cursor-pointer border ${
                        isActive
                          ? 'bg-gradient-to-b from-[#573F36] to-[#3A2822] text-[#F9F8F6] border-2 border-[#D4AF37] shadow-lg scale-105 ring-2 ring-[#C5A059]/30'
                          : 'bg-[#FAF5F0]/80 hover:bg-white text-[#573F36] border-[#C5A059]/30 hover:border-[#C5A059] hover:shadow-md'
                      }`}
                    >
                      {/* Real Three.js 3D Icon Container */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? 'bg-black/25' : 'bg-white shadow-2xs'
                      }`}>
                        <ThreeMiniIcon type={spec.id} className="w-10 h-10" isHovered={isActive} />
                      </div>

                      {/* Title */}
                      <div className={`text-xs font-black leading-tight line-clamp-2 min-h-[2rem] flex items-center justify-center ${
                        isActive ? 'text-white' : 'text-[#573F36]'
                      }`}>
                        {spec.title}
                      </div>

                      {/* Doctor Count & Status Badge */}
                      <div className="mt-2 pt-2 border-t border-[#C5A059]/20 w-full flex flex-col items-center gap-0.5">
                        <span className={`text-[9px] font-bold ${
                          isActive ? 'text-[#FFF0BD]' : 'text-[#7D6D6B]'
                        }`}>
                          {spec.doctorsCount} استشاريين
                        </span>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full mt-0.5 ${
                          isActive 
                            ? 'bg-[#C5A059] text-white' 
                            : 'bg-white text-[#98783A] border border-[#C5A059]/30'
                        }`}>
                          {spec.highlight}
                        </span>
                      </div>

                      {/* Active Gold Indicator Bar */}
                      {isActive && (
                        <div className="absolute -bottom-1 inset-x-4 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM LUXURY CALLOUT BANNER                                              */}
        {/* ========================================================================= */}
        <div className="pt-4 w-full flex justify-center">
          <div className="w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#3A2822] via-[#573F36] to-[#3A2822] text-white p-6 sm:p-8 border-2 border-[#C5A059]/50 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
            
            {/* Ambient gold glow in banner */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-2 relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFF0BD] text-xs font-bold border border-[#C5A059]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>رعاية استثنائية تحت سقف واحد في دمياط الجديدة</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
                احجز استشارتك مع نخبة أطباء أوزين الآن
              </h3>
              <p className="text-xs sm:text-sm text-[#D5BAA5] leading-relaxed">
                مواعيد متاحة صباحاً ومساءً طيلة أيام الأسبوع مع سهولة الحجز المباشر واختيار التخصص والاستشاري المناسب.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full md:w-auto shrink-0 justify-center">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#98783A] text-white font-black text-xs sm:text-sm shadow-xl hover:scale-105 transition-transform border border-[#FFF0BD]/40 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>حجز موعد فوري</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <a
                href="tel:920000000"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-xs border border-white/20 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>920000000</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
