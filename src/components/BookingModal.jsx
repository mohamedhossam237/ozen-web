'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CreditCard, 
  ShieldCheck, 
  Printer, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Video,
  Building
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialSpecialty }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    specialty: initialSpecialty || 'الجلدية والتجميل والليزر',
    doctor: 'د. سارة الشهري',
    type: 'in-person', // in-person or virtual
    date: '2026-09-11',
    slot: '05:30 م',
    patientName: '',
    patientId: '',
    patientPhone: '',
    insurance: 'بدون تأمين (نقدي / مدى)',
    ticketNo: ''
  });

  useEffect(() => {
    if (initialSpecialty) {
      setFormData(prev => ({
        ...prev,
        specialty: initialSpecialty,
        doctor: doctorsMap[initialSpecialty]?.[0] || 'د. سارة الشهري'
      }));
    }
  }, [initialSpecialty, isOpen]);

  if (!isOpen) return null;

  const specialties = [
    'الجلدية والتجميل والليزر',
    'طب وتجميل الأسنان',
    'القلب والأوعية الدموية',
    'الأطفال وحديثي الولادة',
    'العظام والمفاصل',
    'الأنف والأذن والحنجرة',
    'الباطنية والسكر',
    'الفحص الدوري الشامل والمختبر'
  ];

  const doctorsMap = {
    'الجلدية والتجميل والليزر': ['د. سارة الشهري', 'د. لمياء النجار'],
    'طب وتجميل الأسنان': ['د. خالد العتيبي', 'د. يوسف القحطاني'],
    'القلب والأوعية الدموية': ['د. عبدالمجيد الغامدي'],
    'الأطفال وحديثي الولادة': ['د. نورة الشمري'],
    'العظام والمفاصل': ['د. فهد الزهراني'],
    'الأنف والأذن والحنجرة': ['د. أمل الدوسري'],
    'الباطنية والسكر': ['د. طارق السالم'],
    'الفحص الدوري الشامل والمختبر': ['د. استشاري الفحص الشامل']
  };

  const availableSlots = ['04:30 م', '05:00 م', '05:30 م', '06:15 م', '07:00 م', '08:30 م'];

  const handleNext = () => {
    if (step === 3 && (!formData.patientName || !formData.patientPhone)) {
      alert('يرجى كتابة الاسم ورقم الجوال لتأكيد الحجز');
      return;
    }
    if (step === 3) {
      // Generate Ticket Number
      const randomNo = 'OZN-' + Math.floor(100000 + Math.random() * 900000);
      setFormData(prev => ({ ...prev, ticketNo: randomNo }));
    }
    setStep(prev => prev + 1);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#C5A059]/40 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#573F36] via-[#3A2822] to-[#1B2A4A] p-5 text-white flex items-center justify-between border-b border-[#C5A059]/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059] p-1 shadow-md flex items-center justify-center">
              <Image 
                src="/brand/brand_logo_page.png" 
                alt="Ozen Logo" 
                width={1752} 
                height={1216}
                className="w-auto h-7 object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#F9F8F6]">حجز موعد استشاري - أوزين</h3>
              <p className="text-xs text-[#D5BAA5]">مجمع عيادات أوزين الطبية | Ozen Medical Group</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#D5BAA5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar (Centered) */}
        {step <= 3 && (
          <div className="bg-[#FAF5F0] px-6 py-3 border-b border-[#C5A059]/20 flex items-center justify-center gap-4 text-xs font-bold text-[#7D6D6B] text-center">
            <span className={step >= 1 ? 'text-[#573F36]' : ''}>1. العيادة والطبيب</span>
            <span>←</span>
            <span className={step >= 2 ? 'text-[#573F36]' : ''}>2. الوقت والموعد</span>
            <span>←</span>
            <span className={step >= 3 ? 'text-[#573F36]' : ''}>3. بيانات المريض</span>
          </div>
        )}

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-center">
          
          {/* STEP 1: Select Specialty & Doctor */}
          {step === 1 && (
            <div className="space-y-6 text-center">
              <div className="space-y-2 text-center">
                <label className="block text-xs font-extrabold text-[#573F36] uppercase tracking-wider text-center">
                  اختر العيادة / التخصص الطبي:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {specialties.map(spec => (
                    <button
                      key={spec}
                      type="button"
                      onClick={() => {
                        const docs = doctorsMap[spec] || ['د. استشاري العيادة'];
                        setFormData({ ...formData, specialty: spec, doctor: docs[0] });
                      }}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center ${
                        formData.specialty === spec
                          ? 'bg-[#573F36] text-white border-[#C5A059] shadow-md'
                          : 'bg-[#F9F8F6] text-[#573F36] border-gray-200 hover:border-[#C5A059]'
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Doctor */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-[#573F36] uppercase tracking-wider">
                  اختر الطبيب الاستشاري:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(doctorsMap[formData.specialty] || ['د. استشاري العيادة']).map(doc => (
                    <button
                      key={doc}
                      type="button"
                      onClick={() => setFormData({ ...formData, doctor: doc })}
                      className={`p-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all ${
                        formData.doctor === doc
                          ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#573F36] shadow-sm'
                          : 'bg-white border-gray-200 text-[#7D6D6B] hover:border-gray-300'
                      }`}
                    >
                      <span>{doc}</span>
                      {formData.doctor === doc && <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Choose Consultation Type & Time */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Type Toggle */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-[#573F36] uppercase">
                  نوع الاستشارة الطبية:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'in-person' })}
                    className={`p-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                      formData.type === 'in-person'
                        ? 'bg-[#573F36] text-white border-[#C5A059]'
                        : 'bg-[#F9F8F6] text-[#573F36] border-gray-200'
                    }`}
                  >
                    <Building className="w-4 h-4 text-[#D4AF37]" />
                    <span>حضوري بمركز العيادات</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'virtual' })}
                    className={`p-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                      formData.type === 'virtual'
                        ? 'bg-[#573F36] text-white border-[#C5A059]'
                        : 'bg-[#F9F8F6] text-[#573F36] border-gray-200'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#D4AF37]" />
                    <span>استشارة مرئية افتراضية</span>
                  </button>
                </div>
              </div>

              {/* Date & Slot selection */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-[#573F36] uppercase">
                  تاريخ الزيارة:
                </label>
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm font-semibold text-[#573F36]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-[#573F36] uppercase">
                  الأوقات المتاحة:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {availableSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, slot: slot })}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                        formData.slot === slot
                          ? 'bg-[#C5A059] text-white border-[#98783A]'
                          : 'bg-[#F9F8F6] text-[#573F36] border-gray-200 hover:border-[#C5A059]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information Form */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#573F36] mb-1">اسم المريض ثلاثي *</label>
                <input 
                  type="text" 
                  placeholder="أدخل الاسم الكامل"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm font-semibold text-[#573F36]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#573F36] mb-1">رقم الجوال *</label>
                  <input 
                    type="tel" 
                    placeholder="05xxxxxxxx"
                    value={formData.patientPhone}
                    onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                    className="w-full p-3 rounded-xl border border-gray-300 text-sm font-semibold text-[#573F36]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#573F36] mb-1">رقم الهوية / الإقامة</label>
                  <input 
                    type="text" 
                    placeholder="10xxxxxxxx"
                    value={formData.patientId}
                    onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
                    className="w-full p-3 rounded-xl border border-gray-300 text-sm font-semibold text-[#573F36]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#573F36] mb-1">التأمين الطبي / طريقة الدفع</label>
                <select 
                  value={formData.insurance}
                  onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm font-semibold text-[#573F36]"
                >
                  <option value="بدون تأمين (نقدي / مدى)">بدون تأمين (نقدي / مدى / فيزا)</option>
                  <option value="تأمين بوبا العربية - Bupa">تأمين بوبا العربية - Bupa</option>
                  <option value="تأمين التعاونية - Tawuniya">تأمين التعاونية - Tawuniya</option>
                  <option value="تأمين تكافل الراجحي">تأمين تكافل الراجحي</option>
                  <option value="تأمين ميدغلف - Medgulf">تأمين ميدغلف - Medgulf</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 4: Digital Printable Ticket Confirmation */}
          {step === 4 && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-300 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#573F36]">تم تأكيد حجز الموعد بنجاح!</h3>
                <p className="text-xs text-[#7D6D6B] mt-1">تذكرة الحجز الرسمية بمجمع عيادات أوزين الطبية</p>
              </div>

              {/* Printable Ticket Box */}
              <div className="bg-[#FAF5F0] rounded-2xl p-6 border-2 border-[#C5A059]/40 text-right space-y-4 shadow-sm max-w-lg mx-auto">
                <div className="flex justify-between items-center pb-3 border-b border-[#C5A059]/30">
                  <span className="font-extrabold text-[#573F36] text-sm">تذكرة موعد أوزين الرقمية</span>
                  <span className="px-2.5 py-1 rounded bg-[#573F36] text-[#D4AF37] font-mono text-xs font-bold">
                    {formData.ticketNo}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#7D6D6B] block">اسم المريض:</span>
                    <span className="font-bold text-[#573F36]">{formData.patientName || 'مراجع أوزين'}</span>
                  </div>
                  <div>
                    <span className="text-[#7D6D6B] block">العيادة والطبيب:</span>
                    <span className="font-bold text-[#573F36]">{formData.doctor}</span>
                  </div>
                  <div>
                    <span className="text-[#7D6D6B] block">التاريخ والوقت:</span>
                    <span className="font-bold text-[#573F36]">{formData.date} - {formData.slot}</span>
                  </div>
                  <div>
                    <span className="text-[#7D6D6B] block">طريقة الدفع:</span>
                    <span className="font-bold text-[#573F36]">{formData.insurance}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#7D6D6B] text-center italic border-t border-gray-200">
                  يرجى الحضور لقسم الاستقبال قبل الموعد بـ 15 دقيقة لتأكيد الدخول.
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#573F36] text-white font-bold text-xs"
                >
                  <Printer className="w-4 h-4 text-[#D4AF37]" />
                  <span>طباعة التذكرة</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-gray-200 text-gray-700 font-bold text-xs"
                >
                  إغلاق
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer Controls */}
        {step <= 3 && (
          <div className="bg-[#FAF5F0] p-4 border-t border-[#C5A059]/20 flex justify-between items-center">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-200 text-gray-700 font-bold text-xs"
              >
                <ArrowRight className="w-4 h-4" />
                <span>السابق</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#98783A] text-white font-bold text-xs shadow-md"
            >
              <span>{step === 3 ? 'تأكيد الحجز وطباعة التذكرة' : 'المتابعة'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
