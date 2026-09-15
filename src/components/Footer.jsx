'use client';
import Image from 'next/image';
import { Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#2E1F1B] via-[#241713] to-[#141F36] text-[#EFECE6] border-t-2 border-[#C5A059]/40 pt-16 pb-8 px-4 lg:px-8 text-center flex flex-col items-center justify-center w-full overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 text-center flex flex-col items-center justify-center w-full">
        
        {/* Top Grid (Full Width 5-Column Track Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center w-full max-w-7xl mx-auto items-start">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-5 text-center flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3.5">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                <Image 
                  src="/brand/ozen_symbol_clean_gold.png" 
                  alt="شعار مجمع عيادات أوزين" 
                  width={504} 
                  height={478}
                  className="w-auto h-12 sm:h-14 object-contain drop-shadow-[0_4px_16px_rgba(212,175,55,0.5)]"
                />
              </div>
              <div className="text-right flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
                    أوزيـن
                  </span>
                  <span className="text-lg sm:text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#C5A059] font-sans">
                    OZEN
                  </span>
                </div>
                <span className="text-xs text-[#D5BAA5] font-semibold tracking-wider whitespace-nowrap">
                  مجمع عيادات أوزين الطبية | Medical Group
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D5BAA5]/80 leading-relaxed max-w-md mx-auto text-center">
              المنظومة الطبية التخصصية الرائدة المصممة وفقاً للهوية البصرية الرسمية لأوزين، لتقديم أرقى خدمات الرعاية الصحية والطبية التجميلية وفق أفضل المعايير العالمية.
            </p>

            <div className="flex items-center justify-center gap-2 text-xs text-[#D4AF37] font-bold mx-auto">
              <ShieldCheck className="w-4 h-4" />
              <span>ترخيص وزارة الصحة رقم: 1400084920</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-center flex flex-col items-center">
            <h4 className="text-sm font-black text-[#D4AF37] uppercase tracking-wider text-center">روابط سريعة</h4>
            <ul className="space-y-2 text-xs text-[#D5BAA5] text-center">
              <li><a href="#" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">العيادات التخصصية</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">نخبة الأطباء والاستشاريين</a></li>
              <li><a href="#why-ozen" className="hover:text-white transition-colors">عن مجمع أوزين</a></li>
            </ul>
          </div>

          {/* Mobile Apps Download Section (App Store & Google Play) */}
          <div className="space-y-3.5 text-center flex flex-col items-center">
            <h4 className="text-sm font-black text-[#D4AF37] uppercase tracking-wider text-center">
              حمل تطبيق أوزين
            </h4>
            <p className="text-[11px] text-[#D5BAA5] max-w-[190px] leading-relaxed text-center">
              احجز وتابع مواعيدك واستشاراتك الطبية بكل سهولة
            </p>

            <div className="flex flex-col gap-2.5 w-full max-w-[190px]">
              {/* Apple App Store Button */}
              <a
                href="#"
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-[#C5A059]/40 hover:border-[#D4AF37] transition-all shadow-md group text-right"
              >
                <svg className="w-5 h-5 fill-current text-white shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.71-.93 2.73 1 .08 2.03-.48 2.65-1.23z"/>
                </svg>
                <div className="flex flex-col text-right">
                  <span className="text-[8px] text-[#D5BAA5] leading-none">Download on the</span>
                  <span className="text-xs font-bold text-white font-sans tracking-wide leading-tight">App Store</span>
                </div>
              </a>

              {/* Google Play Store Button */}
              <a
                href="#"
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-[#C5A059]/40 hover:border-[#D4AF37] transition-all shadow-md group text-right"
              >
                <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M3.61 2.02L13.88 12.29L3.61 22.56C3.25 22.18 3.03 21.6 3.03 20.89V3.69C3.03 2.98 3.25 2.4 3.61 2.02Z" />
                  <path fill="#FBBC04" d="M17.3 8.87L13.88 12.29L17.3 15.71L20.52 13.88C21.43 13.36 21.43 12.22 20.52 11.7L17.3 8.87Z" />
                  <path fill="#4285F4" d="M13.88 12.29L3.61 2.02C4.1 1.73 4.79 1.83 5.37 2.16L17.3 8.87L13.88 12.29Z" />
                  <path fill="#34A853" d="M13.88 12.29L17.3 15.71L5.37 22.42C4.79 22.75 4.1 22.85 3.61 22.56L13.88 12.29Z" />
                </svg>
                <div className="flex flex-col text-right">
                  <span className="text-[8px] text-[#D5BAA5] leading-none">GET IT ON</span>
                  <span className="text-xs font-bold text-white font-sans tracking-wide leading-tight">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-center flex flex-col items-center">
            <h4 className="text-sm font-black text-[#D4AF37] uppercase tracking-wider text-center">العناية بالمراجعين</h4>
            <div className="space-y-2.5 text-xs text-[#D5BAA5] text-center flex flex-col items-center">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>9200 00000</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>info@ozenmedical.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>دمياط الجديدة</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center text-xs text-[#D5BAA5]/70 gap-4 text-center w-full">
          <div>
            جميع الحقوق محفوظة © <span suppressHydrationWarning>{new Date().getFullYear()}</span> مجمع عيادات أوزين الطبية | Ozen Medical Group
          </div>
          <div className="flex items-center justify-center gap-1">
            <span>صمم بكل فخامة وإتقان بحسب دليل الهوية البصرية</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
}
