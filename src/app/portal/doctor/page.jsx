'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Stethoscope, 
  User, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  Plus, 
  Sparkles,
  Clock,
  Activity,
  Send,
  AlertCircle
} from 'lucide-react';
import { initialAppointments, initialPrescriptions } from '@/data/mockData';

export default function DoctorPortal() {
  const [queue, setQueue] = useState(initialAppointments);
  const [selectedPatient, setSelectedPatient] = useState(initialAppointments[0]);
  
  // Clinical Form state
  const [clinicalNotes, setClinicalNotes] = useState('حالة تصبغات خفيفة بالبشرة نتيجة التعرض للشمس. ينصح بجلسات نضارة واستعمال واقي شمس.');
  const [icdCode, setIcdCode] = useState('L81.1 - Chloasma (Hyperpigmentation)');
  const [medsList, setMedsList] = useState([
    { name: 'كريم نضارة وتبييض Ozen Skin C', dose: 'مرة واحدة مساءً', duration: '30 يوم' }
  ]);
  const [newMed, setNewMed] = useState({ name: '', dose: '', duration: '' });
  const [consultationSuccess, setConsultationSuccess] = useState(false);

  const handleAddMed = () => {
    if (!newMed.name) return;
    setMedsList([...medsList, newMed]);
    setNewMed({ name: '', dose: '', duration: '' });
  };

  const handleCompleteConsultation = () => {
    // Update selected patient status to completed
    setQueue(prev => prev.map(item => 
      item.id === selectedPatient.id ? { ...item, status: 'مكتمل' } : item
    ));
    setConsultationSuccess(true);
    setTimeout(() => setConsultationSuccess(false), 3500);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#573F36] flex flex-col font-sans">
      
      {/* Universal Top Switcher Bar (Centered) */}
      <div className="bg-[#573F36] text-[#F9F8F6] px-4 py-2 text-xs border-b border-[#C5A059]/40 flex flex-wrap justify-center sm:justify-between items-center gap-2 text-center">
        <div className="flex items-center justify-center gap-2 font-bold">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>محطة عمل الأطباء واستشاريي أوزين (Doctor Console)</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-[#D5BAA5] font-semibold hidden sm:inline">مبدل الأنظمة والمراكز:</span>
          <Link href="/portal/patient" className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#D5BAA5] font-bold">
            تطبيق المرضى
          </Link>
          <Link href="/portal/doctor" className="px-2.5 py-1 rounded bg-[#C5A059] text-white font-extrabold shadow-sm">
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

      {/* Main Doctor Header */}
      <header className="bg-white border-b border-[#C5A059]/30 px-6 py-4 shadow-sm text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#98783A] p-1 shadow flex items-center justify-center text-white">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#573F36]">محطة عمل الأطباء - د. سارة الشهري</h1>
              <p className="text-xs text-[#7D6D6B]">استشارية أمراض الجلدية وحقن التجميل | عيادة 104</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>العيادة متصلة وجاهزة</span>
            </div>
          </div>
        </div>
      </header>

      {/* Doctor Workstation Body */}
      <main className="max-w-7xl mx-auto w-full p-6 lg:p-8 space-y-6 flex-1">
        
        {consultationSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-100 border-2 border-emerald-400 text-emerald-900 font-bold text-sm flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>تم اعتماد الكشف والتشخيص وإرسال الوصفة الإلكترونية لمكتب الاستقبال والمريض بنجاح!</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Patient Queue List (Left/Right) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-[#573F36] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>قائمة مراجعي العيادة اليوم</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#573F36] text-[#D4AF37] text-xs font-bold">
                {queue.length} مرضى
              </span>
            </div>

            <div className="space-y-3">
              {queue.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedPatient(item)}
                  className={`w-full text-right p-4 rounded-2xl border transition-all ${
                    selectedPatient?.id === item.id
                      ? 'bg-white border-[#C5A059] shadow-lg ring-2 ring-[#C5A059]/30'
                      : 'bg-[#FAF5F0] border-gray-200 hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="font-extrabold text-sm text-[#573F36]">{item.patientName}</div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      item.status === 'مكتمل' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="text-xs text-[#7D6D6B] mt-1 flex justify-between">
                    <span>الموعد: {item.time}</span>
                    <span>{item.type}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Patient Consultation Console */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Active Patient Banner */}
            <div className="bg-white rounded-3xl p-6 border-2 border-[#C5A059]/40 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#573F36] text-[#D4AF37] flex items-center justify-center font-bold text-xl">
                    م
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-[#573F36]">{selectedPatient.patientName}</h2>
                    <div className="text-xs text-[#7D6D6B] flex items-center gap-3">
                      <span>رقم الجوال: {selectedPatient.patientPhone}</span>
                      <span>|</span>
                      <span>رقم الحجز: {selectedPatient.id}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-[#FAF5F0] text-xs font-bold text-[#573F36]">
                    طريقة الدفع: {selectedPatient.paymentMethod}
                  </span>
                </div>
              </div>

              {/* Patient Vitals Quick Bar */}
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/20">
                  <div className="text-[11px] text-[#7D6D6B] font-bold">ضغط الدم BP</div>
                  <div className="text-sm font-black text-[#573F36]">120 / 80</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/20">
                  <div className="text-[11px] text-[#7D6D6B] font-bold">النبض Pulse</div>
                  <div className="text-sm font-black text-[#573F36]">74 bpm</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/20">
                  <div className="text-[11px] text-[#7D6D6B] font-bold">الحرارة Temp</div>
                  <div className="text-sm font-black text-[#573F36]">36.8 °C</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/20">
                  <div className="text-[11px] text-[#7D6D6B] font-bold">الوزن Weight</div>
                  <div className="text-sm font-black text-[#573F36]">74 kg</div>
                </div>
              </div>
            </div>

            {/* Diagnosis & Clinical Notes Input */}
            <div className="bg-white rounded-3xl p-6 border border-[#C5A059]/30 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-[#573F36] uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C5A059]" />
                <span>التشخيص الطبي والتعليقات الإكلينيكية (ICD-10):</span>
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-[#7D6D6B] mb-1">ترميز التشخيص (ICD-10 Diagnosis):</label>
                  <select 
                    value={icdCode} 
                    onChange={(e) => setIcdCode(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 text-xs font-bold text-[#573F36]"
                  >
                    <option value="L81.1 - Chloasma (Hyperpigmentation)">L81.1 - Chloasma (Hyperpigmentation)</option>
                    <option value="L70.0 - Acne Vulgaris">L70.0 - Acne Vulgaris (حب الشباب)</option>
                    <option value="K02.9 - Dental Caries">K02.9 - Dental Caries (تسوس أسنان)</option>
                    <option value="I10 - Essential Hypertension">I10 - Essential Hypertension (ضغط الدم)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#7D6D6B] mb-1">ملاحظات الطبيب الاستشاري والشكوى الرئيسية:</label>
                  <textarea 
                    rows={3} 
                    value={clinicalNotes}
                    onChange={(e) => setClinicalNotes(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 text-xs font-medium text-[#573F36]"
                  />
                </div>
              </div>
            </div>

            {/* E-Prescription Builder */}
            <div className="bg-white rounded-3xl p-6 border border-[#C5A059]/30 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-[#573F36] uppercase tracking-wider flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-[#C5A059]" />
                <span>إنشاء الوصفة الطبية الإلكترونية (E-Prescription):</span>
              </h3>

              {/* Current Meds List */}
              <div className="space-y-2">
                {medsList.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FAF5F0] border border-[#C5A059]/20 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-extrabold text-[#573F36]">{m.name}</div>
                      <div className="text-[11px] text-[#7D6D6B]">{m.dose}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#573F36] text-[#D4AF37] font-bold">
                      {m.duration}
                    </span>
                  </div>
                ))}
              </div>

              {/* Add New Med Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <input 
                  type="text" 
                  placeholder="اسم الدواء والعيار" 
                  value={newMed.name}
                  onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
                  className="p-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-[#573F36]"
                />
                <input 
                  type="text" 
                  placeholder="الجرعة (مثال: مرتين يومياً)" 
                  value={newMed.dose}
                  onChange={(e) => setNewMed({ ...newMed, dose: e.target.value })}
                  className="p-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-[#573F36]"
                />
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="المدة (مثال: 10 أيام)" 
                    value={newMed.duration}
                    onChange={(e) => setNewMed({ ...newMed, duration: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-[#573F36]"
                  />
                  <button 
                    onClick={handleAddMed}
                    className="px-4 py-2.5 rounded-xl bg-[#C5A059] text-white font-bold text-xs shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Finish Action */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleCompleteConsultation}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#98783A] text-white font-extrabold text-sm shadow-lg hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
                <span>اعتماد الكشف وإصدار الوصفة الإلكترونية</span>
              </button>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
