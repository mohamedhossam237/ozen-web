'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  User, 
  Stethoscope, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Smartphone, 
  Layers
} from 'lucide-react';
import Card3D from './Card3D';

export default function AppSuiteSection() {
  const [activeTab, setActiveTab] = useState('patient');

  const apps = {
    patient: {
      id: 'patient',
      title: 'تطبيق أوزين للمرضى',
      titleEn: 'Patient Portal App',
      icon: User,
      badge: 'المرضى والمراجعين',
      color: 'from-[#573F36] to-[#3A2822]',
      link: '/portal/patient',
      description: 'منصة المرضى الشاملة لإدارة الرعاية الطبية، حجز المواعيد الفورية، الاطلاع على نتائج الفحوصات والوصفات الإلكترونية بصيغة أوزين الرسمية.',
      features: [
        'حجز موعد فورى مع اختيار الطبيب والتخصص وتوقيت العيادة',
        'متابعة نتائج التحاليل والأشعة والتقارير الطبية وتنزيلها',
        'سجل الوصفات الإلكترونية مع التنبيه بمواعيد الأدوية',
        'عيادات افتراضية واستشارات مرئية ومحادثات مع الأطباء',
        'محفظة الفواتير والتأمين الطبي مع إشعارات المواعيد'
      ],
      previewStats: [
        { label: 'مواعيد سابقة', val: '12' },
        { label: 'وصفات نشطة', val: '2' },
        { label: 'نتائج جاهزة', val: '3' }
      ]
    },
    doctor: {
      id: 'doctor',
      title: 'تطبيق أوزين للأطباء',
      titleEn: 'Doctor Workstation',
      icon: Stethoscope,
      badge: 'الأطباء والاستشاريين',
      color: 'from-[#C5A059] to-[#98783A]',
      link: '/portal/doctor',
      description: 'محطة العمل الرقمية المتكاملة للاستشاريين والأطباء لإدارة مواعيد اليوم، مراجعة التاريخ الطبي للمريض، إصدار التشخيص والوصفات الطبية الإلكترونية.',
      features: [
        'قائمة المراجعين الحية وحالة الانتظار بالغرفة',
        'مراجعة العلامات الحيوية والسجل الطبي الشامل للمريض',
        'كتابة التشخيص الطبي بترميز ICD-10 والتعليقات الإكلينيكية',
        'محرر الوصفات الإلكترونية مع تحديد الجرعات ومدة العلاج',
        'طلب الفحوصات والأشعة وإرسالها مباشرة للمختبر'
      ],
      previewStats: [
        { label: 'مرضى اليوم', val: '18' },
        { label: 'في الانتظار', val: '4' },
        { label: 'استشارات منتهية', val: '14' }
      ]
    },
    reception: {
      id: 'reception',
      title: 'تطبيق الاستقبال والعمليات',
      titleEn: 'Reception & POS Desk',
      icon: Building2,
      badge: 'موظفي الاستقبال والكاشير',
      color: 'from-[#1B2A4A] to-[#0F1A30]',
      link: '/portal/reception',
      description: 'تطبيق إدارة مكتب الاستقبال الحي، تسجيل الحضور الفوري للمراجعين، تنظيم طوابير عيادات الأطباء، وإصدار الفواتير الضريبية المعتمدة ZATCA.',
      features: [
        'لوحة متابعة قاعة الانتظار المباشرة وحالة العيادات',
        'تسجيل دخول المراجعين وتأكيد الحضور بنقرة واحدة',
        'حجز المراجعين غير المسجلين (Walk-in) وطباعة التذاكر',
        'نظام الكاشير (POS) لدعم مدى، فيزا، كاش، والتحمل التأميني',
        'طباعة الفواتير الضريبية المبسطة بشعار أوزين المعتمد'
      ],
      previewStats: [
        { label: 'المستقبلين اليوم', val: '42' },
        { label: 'إجمالي المحصل', val: '18,450 ر.س' },
        { label: 'عيادات نشطة', val: '8' }
      ]
    },
    admin: {
      id: 'admin',
      title: 'تطبيق الإدارة والتحليلات',
      titleEn: 'Executive Admin & Analytics',
      icon: ShieldCheck,
      badge: 'الإدارة التنفيذية والمالية',
      color: 'from-[#573F36] via-[#7D6D6B] to-[#C5A059]',
      link: '/portal/admin',
      description: 'مركز القيادة والتحليلات الشامل لمجمع عيادات أوزين لمتابعة الأداء المالي، إيرادات العيادات، كفاءة تشغيل الأطباء، وإعدادات النظام.',
      features: [
        'مؤشرات الأداء المالي والإيراد اليومي والشهري لكل عيادة',
        'متابعة كفاءة استخدام الغرف ونسبة شغل الأطباء',
        'إدارة قائمة الخدمات والأسعار ونسب التأمين الطبي',
        'إضافة وتعديل بيانات الأطباء والكوادر الطبية والمواعيد',
        'سجل الأمان والعمليات (Audit Logs) والتقارير التنفيذية'
      ],
      previewStats: [
        { label: 'الإيراد الشهري', val: '485,000 ر.س' },
        { label: 'نسبة الإشغال', val: '92%' },
        { label: 'العيادات الأفضل', val: 'الجلدية' }
      ]
    }
  };

  const currentApp = apps[activeTab];

  return (
    <section id="apps" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-x-clip w-full max-w-full text-center">
      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Section Header (Centered) */}
        <div className="text-center space-y-4 max-w-3xl mx-auto flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#573F36]/10 text-[#573F36] text-xs font-bold border border-[#C5A059]/30 mx-auto">
            <Layers className="w-4 h-4 text-[#C5A059]" />
            <span>منظومة أوزين الرقمية الموحدة (Ozen App Suite)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#573F36] text-center">
            تطبيقات متكاملة مخصصة لكل دور في <span className="text-gold-gradient font-serif">المنظومة الطبية</span>
          </h2>
          <p className="text-base text-[#7D6D6B] text-center max-w-2xl mx-auto">
            نظام متكامل يربط بين المريض والطبيب والاستقبال والإدارة لحظياً لتحقيق أعلى معايير الجودة والدقة.
          </p>
        </div>

        {/* Tabs Bar (Centered) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-2 bg-[#FAF5F0] rounded-2xl border-2 border-[#C5A059]/30 max-w-4xl mx-auto shadow-inner w-full">
          {Object.values(apps).map((app) => {
            const Icon = app.icon;
            const isActive = activeTab === app.id;
            return (
              <button
                key={app.id}
                onClick={() => setActiveTab(app.id)}
                className={`flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#573F36] to-[#3A2822] text-[#F9F8F6] shadow-lg border-2 border-[#C5A059]/60 scale-105'
                    : 'text-[#573F36] hover:bg-[#573F36]/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-[#7D6D6B]'}`} />
                <span>{app.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected App Detailed Showcase Box (Single Centered Stack) */}
        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#F9F8F6] to-[#FAF5F0] rounded-3xl p-8 sm:p-12 border-2 border-[#C5A059]/40 shadow-xl w-full max-w-4xl mx-auto space-y-8">
          
          {/* Badge & App Titles */}
          <div className="space-y-3 text-center flex flex-col items-center justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C5A059]/40 text-xs font-bold text-[#573F36] shadow-sm mx-auto">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
              <span>{currentApp.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-[#573F36] text-center">
              {currentApp.title}
            </h3>
            <p className="text-xs text-[#7D6D6B] font-mono tracking-wider font-bold text-center">
              {currentApp.titleEn}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#573F36]/85 leading-relaxed font-medium text-center max-w-2xl mx-auto">
            {currentApp.description}
          </p>

          {/* Feature List (Centered Tags) */}
          <div className="space-y-3 w-full max-w-2xl mx-auto text-center flex flex-col items-center justify-center">
            <div className="text-xs font-black text-[#573F36] uppercase tracking-wider text-center">
              أبرز مميزات التطبيق التشغيلي:
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {currentApp.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white text-xs text-[#573F36] font-extrabold border border-[#C5A059]/30 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preview Card Box (Centered) */}
          <div className="w-full max-w-md mx-auto pt-2 flex justify-center">
            <Card3D depth={20} className="w-full">
              <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-[#C5A059]/40 space-y-5 w-full text-center flex flex-col items-center justify-center">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 gap-2 w-full">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${currentApp.color} text-white shadow-md shrink-0`}>
                      <currentApp.icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="font-black text-[#573F36] text-sm sm:text-base">{currentApp.title}</div>
                      <div className="text-xs text-[#7D6D6B] font-semibold">منصة رقمية حية متكاملة</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-bold shrink-0">
                    متزامن حياً
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 text-center w-full">
                  {currentApp.previewStats.map((stat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/30 text-center flex flex-col items-center justify-center">
                      <div className="text-[11px] font-bold text-[#7D6D6B]">{stat.label}</div>
                      <div className="text-base font-black text-[#573F36] mt-1">{stat.val}</div>
                    </div>
                  ))}
                </div>

                {/* Info Card */}
                <div className="p-4 rounded-xl bg-[#573F36] text-white space-y-2 text-center w-full flex flex-col items-center justify-center">
                  <div className="flex items-center justify-between text-xs text-[#D5BAA5] w-full px-2">
                    <span>تزامن الملف الطبي EHR</span>
                    <span className="text-[#D4AF37] font-bold">100% مؤمن</span>
                  </div>
                  <div className="text-xs font-bold text-white leading-snug text-center">
                    مجمع عيادات أوزين الطبية - الهوية البصرية الرسمية
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-1 w-full">
                  <Link
                    href={currentApp.link}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FAF5F0] hover:bg-[#573F36] text-[#573F36] hover:text-white font-black text-xs border border-[#C5A059]/40 transition-all shadow-xs"
                  >
                    <Smartphone className="w-4 h-4 text-[#C5A059]" />
                    <span>تشغيل {currentApp.title} الآن</span>
                  </Link>
                </div>

              </div>
            </Card3D>
          </div>

          {/* Launch App Primary Button */}
          <div className="pt-2 flex justify-center w-full">
            <Link
              href={currentApp.link}
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#98783A] text-white font-black text-sm shadow-xl shadow-[#C5A059]/30 hover:scale-105 transition-transform border border-[#FFF0BD]/40 mx-auto"
            >
              <span>دخول {currentApp.title} المباشر</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
