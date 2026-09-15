'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  Globe, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export default function Navbar({ onOpenBooking, lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    ar: {
      emergency: 'طوارئ 24/7:',
      phone: '920000000',
      hours: 'السبت - الخميس: 8:00 ص - 11:00 م',
      home: 'الرئيسية',
      specialties: 'العيادات والخدمات',
      apps: 'تطبيقات أوزين الرقمية',
      doctors: 'نخبة الأطباء',
      about: 'عن أوزين',
      contact: 'اتصل بنا',
      bookNow: 'حجز موعد استشاري',
      portals: 'منظومة أوزين الرقمية',
      patientApp: 'تطبيق المرضى',
      doctorApp: 'تطبيق الأطباء',
      receptionApp: 'تطبيق الاستقبال',
      adminApp: 'تطبيق الإدارة'
    },
    en: {
      emergency: '24/7 Emergency:',
      phone: '+966 920000000',
      hours: 'Sat - Thu: 8:00 AM - 11:00 PM',
      home: 'Home',
      specialties: 'Specialties',
      apps: 'Ozen Apps',
      doctors: 'Elite Doctors',
      about: 'About Ozen',
      contact: 'Contact Us',
      bookNow: 'Book Appointment',
      portals: 'Ozen App Suite',
      patientApp: 'Patient App',
      doctorApp: 'Doctor Portal',
      receptionApp: 'Reception Desk',
      adminApp: 'Admin & Analytics'
    }
  }[lang];

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white w-full">
      
      {/* Top Bar (Centered & Symmetrical) */}
      <div className="bg-[#1B2A4A] text-[#EFECE6] text-xs py-2 border-b border-[#C5A059]/40 w-full flex justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-3 w-full">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5 text-[#D4AF37] font-extrabold">
              <Phone className="w-3.5 h-3.5" />
              <span>{t.emergency}</span>
              <a href="tel:920000000" className="hover:underline tracking-wide font-mono dir-ltr inline-block">
                9200 00000
              </a>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-[#D5BAA5] font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.hours}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#573F36] hover:bg-[#3A2822] border border-[#C5A059]/50 text-[#F9F8F6] transition-all text-xs font-bold shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar (Centered & Symmetrical) */}
      <nav className="bg-[#F9F8F6] border-b border-[#C5A059]/30 py-3 w-full flex justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 w-full">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-108">
              <Image 
                src="/brand/ozen_symbol_clean_brown.png" 
                alt="شعار مجمع عيادات أوزين الطبية" 
                width={504} 
                height={478}
                className="w-auto h-10 object-contain drop-shadow-[0_2px_8px_rgba(197,160,89,0.25)] group-hover:drop-shadow-[0_4px_14px_rgba(212,175,55,0.4)] transition-all duration-300"
                priority
              />
            </div>
            <div className="flex flex-col text-right">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-[#573F36] font-serif tracking-tight leading-tight">
                  أوزيـن
                </span>
                <span className="text-base sm:text-lg font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#98783A] font-sans">
                  OZEN
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#7D6D6B] tracking-wider whitespace-nowrap">
                مجمع عيادات أوزين الطبية | Medical Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-black text-[#573F36]">
            <Link href="/" className="hover:text-[#C5A059] transition-colors py-1">
              {t.home}
            </Link>
            <a href="#specialties" className="hover:text-[#C5A059] transition-colors py-1">
              {t.specialties}
            </a>
            <a href="#doctors" className="hover:text-[#C5A059] transition-colors py-1">
              {t.doctors}
            </a>
            <a href="#why-ozen" className="hover:text-[#C5A059] transition-colors py-1">
              {t.about}
            </a>

          </div>

          {/* Action Button (Nova Health Sleek Capsule Button) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button 
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#3A2822] hover:bg-[#573F36] text-[#F9F8F6] font-black shadow-xl border border-[#C5A059]/50 hover:scale-105 transition-all text-xs sm:text-sm tracking-wide"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>ابدأ رحلتك العلاجية</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#573F36]/10 text-[#573F36]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#C5A059]/30 px-6 py-4 space-y-3 animate-fadeIn">
          <Link href="/" className="block py-2 text-[#573F36] font-bold">
            {t.home}
          </Link>
          <a href="#specialties" className="block py-2 text-[#573F36] font-bold">
            {t.specialties}
          </a>
          <a href="#doctors" className="block py-2 text-[#573F36] font-bold">
            {t.doctors}
          </a>
          
          <a href="#why-ozen" className="block py-2 text-[#573F36] font-bold">
            {t.about}
          </a>

          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#98783A] text-white font-bold text-sm shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.bookNow}</span>
          </button>
        </div>
      )}
    </header>
  );
}
