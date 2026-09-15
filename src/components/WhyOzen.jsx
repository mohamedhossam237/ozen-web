'use client';
import { useState } from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Award, 
  HeartPulse, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  Smartphone,
  Hospital,
  Activity,
  ArrowLeft,
  Lock,
  Zap,
  Clock,
  Compass
} from 'lucide-react';
import Card3D from './Card3D';
import WhyOzen3DVisualizer from './WhyOzen3DVisualizer';

export default function WhyOzen() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      id: 'consultants',
      type: 'consultants',
      stepNum: '01',
      stepLabel: 'المحطة الأولى',
      title: 'نخبة الاستشاريين الأخصائيين',
      titleEn: 'Elite Board-Certified Consultants',
      desc: 'طاقم استشاري مؤهل بأعلى الزمالات الطبية العالمية (أمريكية، بريطانية، وأوروبية) لحراسة صحتك وصحة عائلتك بأعلى دقة تشخيصية.',
      metrics: '+45 استشاري معتمد',
      badges: ['زمالات دولية معتمدة', 'خبرات سريرية استثنائية', 'رعاية مخصصة لكل حالة']
    },
    {
      id: 'records',
      type: 'records',
      stepNum: '02',
      stepLabel: 'المحطة الثانية',
      title: 'ملف صحي موحد مدى الحياة',
      titleEn: 'Smart Lifetime Health Dossier',
      desc: 'منظومة سحابية ذكية متكاملة تتيح لك الوصول الفوري والآمن لسجلك الطبي، نتائج التحاليل الفورية، والوصفات الطبية عبر تطبيق أوزين الرقمي.',
      metrics: 'وصول فوري 24/7',
      badges: ['تشفير طبي عالي الأمان', 'أرشفة شاملة للفحوصات', 'ربط رقمي بين كافة العيادات']
    },
    {
      id: 'quality',
      type: 'quality',
      stepNum: '03',
      stepLabel: 'المحطة الثالثة',
      title: 'ضمان الجودة والتغطية التأمينية',
      titleEn: 'Global Quality & Direct Insurance',
      desc: 'اعتمادات صحية دولية لمعايير الجودة وسلامة المرضى مع تغطيات مباشرة وسريعة لجميع شركات التأمين الكبرى دون تعقيدات ورقية.',
      metrics: '+25 شركة تأمين معتمدة',
      badges: ['تغطية تأمينية فورية', 'معايير جودة معتمدة دولياً', 'انعدام الإجراءات الورقية']
    }
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'الحجز الذكي المباشر',
      desc: 'اختيار الاستشاري والموعد المناسب بثوانٍ عبر التطبيق أو الويب دون أي انتظار.',
      icon: Smartphone
    },
    {
      num: '02',
      title: 'الاستقبال الفندقي الفاخر',
      desc: 'أجواء استشفائية راقية تعزز الخصوصية والراحة النفسية فور وصولك إلى مجمع أوزين.',
      icon: Hospital
    },
    {
      num: '03',
      title: 'التشخيص ثلاثي الأبعاد المتقدم',
      desc: 'فحص سريري دقيق بأحدث أجهزة التشخيص الرقمية والمناظير لعام 2025.',
      icon: Activity
    },
    {
      num: '04',
      title: 'المتابعة الرقمية المستمرة',
      desc: 'نتائج التحاليل والوصفات الطبية تصلك مباشرة في ملفك الموحد مدى الحياة.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="why-ozen" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAF5F0]/50 to-white border-t border-b border-[#C5A059]/25 overflow-hidden w-full text-center flex flex-col items-center justify-center">
      
      {/* Centered Ambient 3D Gold Illumination */}
      <div className="absolute top-1/4 inset-x-0 mx-auto w-[650px] sm:w-[900px] h-[550px] bg-gradient-to-b from-[#C5A059]/12 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full border border-[#C5A059]/10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto text-center w-full">
          
          {/* Centered Luxury 3D Badge */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#573F36] text-xs font-black border border-[#C5A059]/50 shadow-sm mx-auto">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>معايير الرعاية الفائقة ورحلة المريض ثلاثية الأبعاد</span>
          </div>

          {/* Centered Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#573F36] leading-[1.25] text-center tracking-tight">
            من بين مئات المراكز، <span className="text-gold-gradient font-serif">لماذا يختار المرضى أوزين؟</span>
          </h2>

          {/* Centered Subtitle */}
          <p className="text-sm sm:text-base text-[#7D6D6B] max-w-2xl mx-auto leading-relaxed text-center font-medium">
            نقدم علاقات إنسانية وطبية استثنائية ورعاية متكاملة تفوق التوقعات مقارنة بالخدمات التقليدية، في بيئة استشفائية فائقة الخصوصية بدمياط الجديدة.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#98783A] bg-[#FAF5F0] px-4 py-1.5 rounded-full border border-[#C5A059]/30">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>مجسمات ثلاثية الأبعاد تفاعلية 360° - اسحب المجسم بالماوس للتدوير</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE 3 PILLARS: 3D INTERACTIVE SCULPTURE CARDS                          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 lg:gap-10 w-full max-w-6xl mx-auto items-stretch justify-items-center">
          {pillars.map((pillar, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div 
                key={pillar.id}
                className="w-full max-w-[360px] flex flex-col items-center"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card3D depth={22} maxTilt={10} className="w-full h-full flex flex-col">
                  <div className="relative group bg-white/95 rounded-3xl p-7 sm:p-8 border border-[#C5A059]/35 hover:border-[#D4AF37] shadow-[0_12px_35px_-10px_rgba(87,63,54,0.08)] hover:shadow-[0_25px_55px_-10px_rgba(197,160,89,0.30)] transition-all duration-300 flex flex-col justify-between items-center text-center h-full w-full overflow-hidden">
                    
                    {/* Top Ambient Gold Light & Hairline */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-44 h-44 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent group-hover:via-[#D4AF37] transition-all" />

                    <div className="space-y-5 flex flex-col items-center justify-center w-full preserve-3d">
                      
                      {/* Top Step & Metrics Bar */}
                      <div 
                        className="flex items-center justify-between w-full gap-2 transition-transform duration-200"
                        style={{ transform: 'translateZ(20px)' }}
                      >
                        <span className="px-3 py-1 rounded-full bg-[#FAF5F0] border border-[#C5A059]/35 text-[11px] font-black text-[#98783A] font-mono">
                          {pillar.stepLabel}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#573F36] text-[10px] font-black text-[#FFF0BD] shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{pillar.metrics}</span>
                        </span>
                      </div>

                      {/* Real Three.js 3D Interactive Centerpiece Sculpture */}
                      <div 
                        className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#FAF5F0] via-[#F4EBE3] to-white p-1 shadow-inner flex items-center justify-center group-hover:scale-110 transition-all duration-300 mx-auto border-2 border-[#C5A059]/40 group-hover:border-[#D4AF37] overflow-hidden"
                        style={{ transform: 'translateZ(40px)' }}
                      >
                        {/* Ambient gold glow ring */}
                        <div className="absolute inset-2 bg-[#C5A059]/15 rounded-2xl blur-md pointer-events-none" />
                        <WhyOzen3DVisualizer 
                          type={pillar.type}
                          className="w-full h-full relative z-10"
                          isHovered={isHovered}
                        />
                      </div>

                      {/* Pillar Title */}
                      <div 
                        className="text-center w-full space-y-1"
                        style={{ transform: 'translateZ(24px)' }}
                      >
                        <h3 className="text-xl font-black text-[#573F36] group-hover:text-[#C5A059] transition-colors leading-snug">
                          {pillar.title}
                        </h3>
                        <div className="text-[11px] font-mono font-bold text-[#98783A] tracking-wider">
                          {pillar.titleEn}
                        </div>
                      </div>

                      {/* Pillar Description */}
                      <p 
                        className="text-xs sm:text-sm text-[#7D6D6B] font-medium leading-relaxed text-center min-h-[4rem] px-1"
                        style={{ transform: 'translateZ(16px)' }}
                      >
                        {pillar.desc}
                      </p>

                      {/* Trust Badges */}
                      <div 
                        className="w-full pt-4 border-t border-[#C5A059]/20 space-y-2 flex flex-col items-center"
                        style={{ transform: 'translateZ(18px)' }}
                      >
                        {pillar.badges.map((b, bIdx) => (
                          <div 
                            key={bIdx}
                            className="w-full py-1.5 px-3 rounded-xl bg-[#FAF5F0]/80 text-[11px] font-bold text-[#573F36] flex items-center gap-2 border border-[#C5A059]/25 group-hover:bg-white transition-all text-right"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Bottom Golden Hairline Tag */}
                    <div 
                      className="mt-6 pt-2 w-full text-center"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      <span className="text-[10px] font-mono text-[#C5A059] font-bold tracking-widest uppercase">
                        OZEN EXCELLENCE PILLAR {pillar.stepNum}
                      </span>
                    </div>

                  </div>
                </Card3D>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. THE 3D PATIENT JOURNEY ROADMAP (مسار الرحلة العلاجية التفاعلي)         */}
        {/* ========================================================================= */}
        <div className="w-full max-w-6xl mx-auto pt-6">
          <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-[#C5A059]/35 shadow-lg p-6 sm:p-10 overflow-hidden">
            
            {/* Top Bar Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#C5A059]/20 text-center sm:text-right w-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5F0] border border-[#C5A059]/30 text-xs font-black text-[#573F36] mb-1">
                  <Activity className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>رحلة المريض المعتمدة في أوزين</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#573F36]">
                  مسار الرعاية الصحية من لحظة الحجز حتى التعافي التام
                </h3>
              </div>
              <div className="text-xs font-mono font-bold text-[#98783A] bg-[#FAF5F0] px-4 py-2 rounded-2xl border border-[#C5A059]/30">
                4 خطوات متكاملة وسلسة
              </div>
            </div>

            {/* The 4 Interactive Journey Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 relative">
              {journeySteps.map((step, sIdx) => {
                const Icon = step.icon;
                const isSelected = activeStep === sIdx;
                return (
                  <div
                    key={sIdx}
                    onClick={() => setActiveStep(sIdx)}
                    className={`relative flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#573F36] to-[#3A2822] text-white border-2 border-[#D4AF37] shadow-xl scale-105'
                        : 'bg-[#FAF5F0]/70 hover:bg-white text-[#573F36] border-[#C5A059]/30 hover:border-[#C5A059] hover:shadow-md'
                    }`}
                  >
                    {/* Step Number Badge */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-black text-xs mb-3 shadow-sm ${
                      isSelected ? 'bg-[#D4AF37] text-[#3A2822]' : 'bg-white text-[#C5A059] border border-[#C5A059]/30'
                    }`}>
                      {step.num}
                    </div>

                    {/* Step Icon */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-transform ${
                      isSelected ? 'bg-white/15 text-[#D4AF37]' : 'bg-white text-[#573F36] border border-[#C5A059]/25 shadow-2xs'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Step Title */}
                    <h4 className={`text-sm font-black mb-1.5 ${isSelected ? 'text-white' : 'text-[#573F36]'}`}>
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className={`text-xs leading-relaxed font-medium ${isSelected ? 'text-[#D5BAA5]' : 'text-[#7D6D6B]'}`}>
                      {step.desc}
                    </p>

                    {/* Active Step Indicator Pin */}
                    {isSelected && (
                      <div className="absolute -bottom-2 inset-x-8 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
