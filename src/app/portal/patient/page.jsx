'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  User, 
  Calendar, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Download, 
  Phone, 
  Video, 
  Building2, 
  ShieldCheck, 
  Stethoscope,
  Sparkles,
  ArrowRight,
  Printer,
  Plus
} from 'lucide-react';
import { initialAppointments, initialPrescriptions } from '@/data/mockData';

export default function PatientPortal() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [prescriptions, setPrescriptions] = useState(initialPrescriptions);
  const [selectedRx, setSelectedRx] = useState(null);

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#573F36] flex flex-col font-sans">
      
      {/* Universal Portal Top Switcher Bar (Centered) */}
      <div className="bg-[#573F36] text-[#F9F8F6] px-4 py-2 text-xs border-b border-[#C5A059]/40 flex flex-wrap justify-center sm:justify-between items-center gap-2 text-center">
        <div className="flex items-center justify-center gap-2 font-bold">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>منظومة أوزين الرقمية (Ozen Portal)</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-[#D5BAA5] font-semibold hidden sm:inline">مبدل الأنظمة والمراكز:</span>
          <Link href="/portal/patient" className="px-2.5 py-1 rounded bg-[#C5A059] text-white font-extrabold shadow-sm">
            تطبيق المرضى
          </Link>
          <Link href="/portal/doctor" className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#D5BAA5] font-bold">
            تطبيق الأطباء
          </Link>
          <Link href="/portal/reception" className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#D5BAA5] font-bold">
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

      {/* Main Patient App Header */}
      <header className="bg-white border-b border-[#C5A059]/30 px-6 py-4 shadow-sm text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#573F36] to-[#3A2822] p-1 shadow flex items-center justify-center">
              <Image src="/brand/brand_logo_page.png" alt="Ozen Logo" width={34} height={34} style={{ width: 'auto', height: 'auto' }} className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#573F36]">تطبيق أوزين للمرضى</h1>
              <p className="text-xs text-[#7D6D6B]">أوزين للرعاية الطبية والملف الصحي الشامل</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5F0] border border-[#C5A059]/30">
              <div className="w-7 h-7 rounded-full bg-[#573F36] text-[#D4AF37] flex items-center justify-center font-bold text-xs">
                م
              </div>
              <span className="text-xs font-extrabold text-[#573F36]">محمد عبدالكريم السبيعي</span>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Body */}
      <main className="max-w-7xl mx-auto w-full p-6 lg:p-8 space-y-8 flex-1">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#573F36] via-[#3A2822] to-[#1B2A4A] rounded-3xl p-8 text-white border-2 border-[#C5A059]/40 shadow-xl relative overflow-hidden text-center flex flex-col items-center justify-center">
          <div className="relative z-10 space-y-3 max-w-2xl text-center flex flex-col items-center justify-center mx-auto">
            <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/50 text-[#E7CF9B] text-xs font-bold mx-auto">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>الملف الطبي الالكتروني الموحد (Ozen EHR)</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-[#F9F8F6] text-center">أهلاً بك، أ. محمد السبيعي</h2>
            <p className="text-xs lg:text-sm text-[#D5BAA5] leading-relaxed text-center mx-auto">
              يمكنك متابعة مواعيدك القادمة بمجمع أوزين الطبي، تنزيل الوصفات الإلكترونية الرسمية، والاطلاع على التقرير الفحص الدوري.
            </p>
          </div>

          <div className="absolute top-4 left-6 hidden md:block opacity-20">
            <Image src="/brand/brand_cover.png" alt="Ozen Emblem" width={220} height={220} />
          </div>
        </div>

        {/* Grid Stats & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Appointments Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-[#573F36] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C5A059]" />
                <span>مواعيدي الطبية الحالية والقادمة</span>
              </h3>
              <Link href="/" className="text-xs font-extrabold text-[#C5A059] hover:underline flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" />
                <span>حجز موعد جديد</span>
              </Link>
            </div>

            <div className="space-y-4">
              {appointments.map((apt) => (
                <div key={apt.id} className="bg-white rounded-2xl p-5 border border-[#C5A059]/25 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#573F36] text-[#D4AF37] flex items-center justify-center font-bold">
                        <Stethoscope className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-[#573F36]">{apt.doctor}</div>
                        <div className="text-xs text-[#7D6D6B]">{apt.specialty}</div>
                      </div>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                      apt.status === 'قيد الاستشارة' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                      apt.status === 'مكتمل' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {apt.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-[#7D6D6B] block">التاريخ والوقت:</span>
                      <span className="font-bold text-[#573F36]">{apt.date} | {apt.time}</span>
                    </div>
                    <div>
                      <span className="text-[#7D6D6B] block">مكان العيادة:</span>
                      <span className="font-bold text-[#573F36]">{apt.clinicRoom}</span>
                    </div>
                    <div>
                      <span className="text-[#7D6D6B] block">الرسوم المدفوعة:</span>
                      <span className="font-bold text-[#573F36]">{apt.paidAmount} ({apt.paymentMethod})</span>
                    </div>
                  </div>

                  {apt.type === 'عيادة افتراضية' && (
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                      <span className="font-bold text-blue-900 flex items-center gap-1.5">
                        <Video className="w-4 h-4 text-blue-600" />
                        رابط الاستشارة الافتراضية المرئية جاهز
                      </span>
                      <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs shadow-sm hover:bg-blue-700">
                        دخول الاستشارة
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* E-Prescriptions & Reports Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <h3 className="text-lg font-black text-[#573F36] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C5A059]" />
              <span>الوصفات الإلكترونية والتقارير</span>
            </h3>

            <div className="space-y-4">
              {prescriptions.map((rx) => (
                <div key={rx.id} className="bg-white rounded-2xl p-5 border border-[#C5A059]/25 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="px-2 py-0.5 rounded bg-[#573F36] text-[#D4AF37] font-mono text-[10px] font-bold">
                        {rx.id}
                      </span>
                      <div className="font-extrabold text-sm text-[#573F36] mt-1">{rx.doctorName}</div>
                      <div className="text-xs text-[#7D6D6B]">{rx.specialty}</div>
                    </div>
                    <button 
                      onClick={() => setSelectedRx(rx)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF5F0] hover:bg-[#573F36] text-[#573F36] hover:text-white font-bold text-xs border border-[#C5A059]/30 transition-all"
                    >
                      <Download className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>عرض الوصفة الرسمية</span>
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF5F0] text-xs text-[#573F36]">
                    <span className="font-bold text-[#7D6D6B] block">التشخيص:</span>
                    <span className="font-semibold">{rx.diagnosis}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </main>

      {/* Official Prescription Printable Modal */}
      {selectedRx && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-8 border-2 border-[#C5A059]/40 shadow-2xl space-y-6">
            
            {/* Prescription Official Header */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#573F36]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#573F36] p-1 flex items-center justify-center">
                  <Image src="/brand/brand_logo_page.png" alt="Ozen Logo" width={36} height={36} style={{ width: 'auto', height: 'auto' }} className="object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#573F36]">وصفة طبية إلكترونية - أوزين</h4>
                  <div className="text-xs font-mono text-[#7D6D6B]">Ozen E-Prescription System</div>
                </div>
              </div>

              <div className="text-left">
                <span className="px-2.5 py-1 rounded bg-[#573F36] text-[#D4AF37] font-mono text-xs font-bold">
                  {selectedRx.id}
                </span>
                <div className="text-[11px] text-[#7D6D6B] mt-1">{selectedRx.date}</div>
              </div>
            </div>

            {/* Patient & Doctor Header Info */}
            <div className="grid grid-cols-2 gap-4 text-xs p-4 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/20">
              <div>
                <span className="text-[#7D6D6B] block">اسم المريض:</span>
                <span className="font-bold text-[#573F36]">{selectedRx.patientName}</span>
              </div>
              <div>
                <span className="text-[#7D6D6B] block">الطبيب المعالج:</span>
                <span className="font-bold text-[#573F36]">{selectedRx.doctorName} ({selectedRx.specialty})</span>
              </div>
            </div>

            {/* Diagnosis */}
            <div className="text-xs">
              <span className="font-bold text-[#573F36] block mb-1">التشخيص الطبي:</span>
              <p className="p-3 rounded-lg bg-gray-50 border border-gray-200 font-semibold">{selectedRx.diagnosis}</p>
            </div>

            {/* Prescribed Medicines */}
            <div className="space-y-3">
              <span className="font-bold text-[#573F36] text-xs block">الأدوية والجرعات المقررة (R/):</span>
              <div className="space-y-2">
                {selectedRx.medicines.map((med, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/30 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-extrabold text-[#573F36]">{med.name}</div>
                      <div className="text-[11px] text-[#7D6D6B]">{med.dose}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#573F36]/10 font-bold text-[#573F36]">
                      {med.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Controls */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#573F36] text-white font-bold text-xs shadow-md"
              >
                <Printer className="w-4 h-4 text-[#D4AF37]" />
                <span>طباعة الوصفة الإلكترونية</span>
              </button>

              <button 
                onClick={() => setSelectedRx(null)}
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
