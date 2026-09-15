'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  UserCheck, 
  CreditCard, 
  Printer, 
  Clock, 
  Plus, 
  Sparkles,
  CheckCircle2,
  FileText,
  UserPlus,
  DollarSign,
  Search
} from 'lucide-react';
import { initialAppointments, initialInvoices } from '@/data/mockData';

export default function ReceptionPortal() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [invoices, setInvoices] = useState(initialInvoices);
  const [activeInvoiceModal, setActiveInvoiceModal] = useState(null);
  
  // Walk-in Registration form state
  const [showWalkinModal, setShowWalkinModal] = useState(false);
  const [walkinName, setWalkinName] = useState('');
  const [walkinDoctor, setWalkinDoctor] = useState('د. سارة الشهري');

  const handleCheckIn = (id) => {
    setAppointments(prev => prev.map(apt => 
      apt.id === id ? { ...apt, status: 'قيد الاستشارة' } : apt
    ));
  };

  const handleCreateWalkin = () => {
    if (!walkinName) return;
    const newApt = {
      id: 'APT-' + Math.floor(1000 + Math.random() * 9000),
      patientName: walkinName,
      patientPhone: '0500000000',
      doctor: walkinDoctor,
      specialty: 'استقبال مراجع مباشر',
      date: '2026-09-11',
      time: 'الآن',
      status: 'بانتظار الطبيب',
      type: 'حضوري بالعيادة',
      clinicRoom: 'عيادة الاستقبال',
      paidAmount: '350 ر.س',
      paymentMethod: 'مدى'
    };
    setAppointments([newApt, ...appointments]);
    setShowWalkinModal(false);
    setWalkinName('');
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#573F36] flex flex-col font-sans">
      
      {/* Universal Top Switcher Bar */}
      <div className="bg-[#573F36] text-[#F9F8F6] px-4 py-2 text-xs border-b border-[#C5A059]/40 flex flex-wrap justify-center sm:justify-between items-center gap-2 text-center">
        <div className="flex items-center justify-center gap-2 font-bold">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>تطبيق الاستقبال ومبيعات أوزين (Ozen Reception & POS Desk)</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-[#D5BAA5] font-semibold hidden sm:inline">مبدل الأنظمة والمراكز:</span>
          <Link href="/portal/patient" className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#D5BAA5] font-bold">
            تطبيق المرضى
          </Link>
          <Link href="/portal/doctor" className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#D5BAA5] font-bold">
            تطبيق الأطباء
          </Link>
          <Link href="/portal/reception" className="px-2.5 py-1 rounded bg-[#C5A059] text-white font-extrabold shadow-sm">
            مكتب الاستقبال
          </Link>
          <Link href="/portal/admin" className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#D5BAA5] font-bold">
            الإدارة والتحليلات
          </Link>
          <Link href="/" className="px-2.5 py-1 rounded bg-[#1B2A4A] text-white font-bold mr-2">
            العودة للموقع
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-[#C5A059]/30 px-6 py-4 shadow-sm text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1B2A4A] to-[#0F1A30] p-1 shadow flex items-center justify-center text-white">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#573F36]">مكتب استقبال المراجعين والكاشير (POS)</h1>
              <p className="text-xs text-[#7D6D6B]">مجمع عيادات أوزين الطبية - صالة الانتظار الرئيسة</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowWalkinModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#98783A] text-white font-bold text-xs shadow-md"
            >
              <UserPlus className="w-4 h-4" />
              <span>تسجيل مراجع مباشر (Walk-in)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Reception Desk Body */}
      <main className="max-w-7xl mx-auto w-full p-6 lg:p-8 space-y-8 flex-1">
        
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#573F36] text-[#D4AF37] flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-[#7D6D6B] font-bold">المراجعين اليوم</div>
              <div className="text-2xl font-black text-[#573F36]">{appointments.length}</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059] text-white flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-[#7D6D6B] font-bold">في قاعة الانتظار</div>
              <div className="text-2xl font-black text-[#C5A059]">
                {appointments.filter(a => a.status === 'بانتظار الطبيب').length}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1B2A4A] text-white flex items-center justify-center font-bold">
              <CreditCard className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-xs text-[#7D6D6B] font-bold">متحصلات اليوم (POS)</div>
              <div className="text-xl font-black text-[#573F36]">18,450 ر.س</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#C5A059]/30 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-[#7D6D6B] font-bold">العيادات النشطة</div>
              <div className="text-2xl font-black text-emerald-800">8 عيادات</div>
            </div>
          </div>
        </div>

        {/* Live Reception Queue & Invoices Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Waiting Queue (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-[#573F36] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C5A059]" />
                <span>قاعة الانتظار وحالة دخول المراجعين</span>
              </h3>
            </div>

            <div className="space-y-3">
              {appointments.map((apt) => (
                <div key={apt.id} className="bg-white rounded-2xl p-5 border border-[#C5A059]/25 shadow-sm flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-[#573F36] text-base">{apt.patientName}</span>
                      <span className="text-xs text-[#7D6D6B]">({apt.patientPhone})</span>
                    </div>
                    <div className="text-xs text-[#7D6D6B]">
                      العيادة والطبيب: <span className="font-bold text-[#573F36]">{apt.doctor} ({apt.specialty})</span>
                    </div>
                    <div className="text-xs text-[#7D6D6B]">
                      الموعد: <span className="font-bold text-[#573F36]">{apt.time}</span> | الغرفة: <span className="font-bold text-[#573F36]">{apt.clinicRoom}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      apt.status === 'قيد الاستشارة' ? 'bg-amber-100 text-amber-800' :
                      apt.status === 'مكتمل' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {apt.status}
                    </span>

                    {apt.status === 'بانتظار الطبيب' && (
                      <button 
                        onClick={() => handleCheckIn(apt.id)}
                        className="px-4 py-2 rounded-xl bg-[#573F36] text-white font-bold text-xs shadow-sm hover:bg-[#3A2822]"
                      >
                        إدخال للعيادة
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* POS & Invoicing Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-black text-[#573F36] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C5A059]" />
              <span>فواتير الكاشير الضريبية ZATCA</span>
            </h3>

            <div className="space-y-3">
              {invoices.map((inv) => (
                <div key={inv.id} className="bg-white rounded-2xl p-4 border border-[#C5A059]/25 shadow-sm space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded bg-[#573F36] text-[#D4AF37] font-mono text-[10px] font-bold">
                      {inv.id}
                    </span>
                    <span className="font-black text-sm text-[#573F36]">{inv.total} ر.س</span>
                  </div>

                  <div className="text-xs space-y-0.5">
                    <div className="font-bold text-[#573F36]">{inv.patientName}</div>
                    <div className="text-[11px] text-[#7D6D6B]">{inv.services}</div>
                  </div>

                  <button 
                    onClick={() => setActiveInvoiceModal(inv)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#FAF5F0] hover:bg-[#573F36] text-[#573F36] hover:text-white font-bold text-xs border border-[#C5A059]/30 transition-all"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>طباعة الفاتورة الضريبية</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>

      {/* Walk-in Patient Registration Modal */}
      {showWalkinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 border-2 border-[#C5A059]/40 shadow-2xl space-y-4">
            <h3 className="text-lg font-black text-[#573F36]">تسجيل مراجع جديد بالاستقبال (Walk-in)</h3>
            
            <div>
              <label className="block text-xs font-bold text-[#7D6D6B] mb-1">اسم المريض:</label>
              <input 
                type="text" 
                placeholder="أدخل الاسم الثلاثي" 
                value={walkinName}
                onChange={(e) => setWalkinName(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 text-xs font-bold text-[#573F36]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#7D6D6B] mb-1">توجيه إلى العيادة والطبيب:</label>
              <select 
                value={walkinDoctor}
                onChange={(e) => setWalkinDoctor(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 text-xs font-bold text-[#573F36]"
              >
                <option value="د. سارة الشهري">د. سارة الشهري (الجلدية)</option>
                <option value="د. خالد العتيبي">د. خالد العتيبي (الأسنان)</option>
                <option value="د. عبدالمجيد الغامدي">د. عبدالمجيد الغامدي (القلب)</option>
                <option value="د. نورة الشمري">د. نورة الشمري (الأطفال)</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button 
                onClick={() => setShowWalkinModal(false)}
                className="px-4 py-2.5 rounded-xl bg-gray-200 text-gray-700 font-bold text-xs"
              >
                إلغاء
              </button>
              <button 
                onClick={handleCreateWalkin}
                className="px-6 py-2.5 rounded-xl bg-[#573F36] text-white font-bold text-xs shadow-md"
              >
                إضافة لطابور الانتظار
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Printable Tax Invoice Modal */}
      {activeInvoiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-3xl p-8 border-2 border-[#C5A059]/40 shadow-2xl space-y-6">
            
            <div className="flex justify-between items-center pb-4 border-b-2 border-[#573F36]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#573F36] p-1 flex items-center justify-center">
                  <Image src="/brand/brand_logo_page.png" alt="Ozen Logo" width={32} height={32} style={{ width: 'auto', height: 'auto' }} className="object-contain" />
                </div>
                <div>
                  <h4 className="text-base font-black text-[#573F36]">فاتورة ضريبية مبسطة - ZATCA</h4>
                  <div className="text-[11px] text-[#7D6D6B]">مجمع عيادات أوزين الطبية</div>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-[#573F36]">{activeInvoiceModal.id}</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#7D6D6B]">اسم المراجع:</span>
                <span className="font-bold text-[#573F36]">{activeInvoiceModal.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7D6D6B]">الخدمات المقدمة:</span>
                <span className="font-bold text-[#573F36]">{activeInvoiceModal.services}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7D6D6B]">طريقة الدفع:</span>
                <span className="font-bold text-[#573F36]">{activeInvoiceModal.paymentMethod}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200 text-sm font-black">
                <span>المبلغ الإجمالي (شامل الضريبة 15%):</span>
                <span className="text-[#573F36]">{activeInvoiceModal.total} ر.س</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/30 text-center font-mono text-xs text-[#7D6D6B]">
              [ QR Code ZATCA Verified: {activeInvoiceModal.zatcaQr} ]
            </div>

            <div className="flex justify-between items-center pt-2">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#573F36] text-white font-bold text-xs"
              >
                <Printer className="w-4 h-4 text-[#D4AF37]" />
                <span>طباعة الفاتورة</span>
              </button>
              <button 
                onClick={() => setActiveInvoiceModal(null)}
                className="px-6 py-2.5 rounded-xl bg-gray-200 text-gray-700 font-bold text-xs"
              >
                إغلاق
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
