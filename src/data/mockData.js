export const initialAppointments = [
  {
    id: 'APT-1001',
    patientName: 'محمد عبدالكريم السبيعي',
    patientPhone: '0501234567',
    doctor: 'د. سارة الشهري',
    specialty: 'الجلدية والتجميل والليزر',
    date: '2026-09-11',
    time: '04:30 م',
    status: 'بانتظار الطبيب', // بانتظار الطبيب, قيد الاستشارة, مكتمل, ملغي
    type: 'حضوري بالعيادة',
    clinicRoom: 'عيادة 102 - الجلدية',
    paidAmount: '350 ر.س',
    paymentMethod: 'مدى'
  },
  {
    id: 'APT-1002',
    patientName: 'نورة فهد الدوسري',
    patientPhone: '0559876543',
    doctor: 'د. خالد العتيبي',
    specialty: 'طب وتجميل الأسنان',
    date: '2026-09-11',
    time: '05:00 م',
    status: 'قيد الاستشارة',
    type: 'حضوري بالعيادة',
    clinicRoom: 'عيادة 201 - الأسنان',
    paidAmount: '500 ر.س',
    paymentMethod: 'فيزا'
  },
  {
    id: 'APT-1003',
    patientName: 'عبدالله سلمان الرشيد',
    patientPhone: '0541122334',
    doctor: 'د. عبدالمجيد الغامدي',
    specialty: 'القلب والأوعية الدموية',
    date: '2026-09-11',
    time: '05:30 م',
    status: 'بانتظار الطبيب',
    type: 'عيادة افتراضية',
    clinicRoom: 'عيادة افتراضية #3',
    paidAmount: '400 ر.س',
    paymentMethod: 'تأمين بوبا'
  },
  {
    id: 'APT-1004',
    patientName: 'ريما عبدالعزيز الزهراني',
    patientPhone: '0567788990',
    doctor: 'د. نورة الشمري',
    specialty: 'الأطفال وحديثي الولادة',
    date: '2026-09-11',
    time: '06:00 م',
    status: 'مكتمل',
    type: 'حضوري بالعيادة',
    clinicRoom: 'عيادة 104 - الأطفال',
    paidAmount: '250 ر.س',
    paymentMethod: 'كاش'
  }
];

export const initialPrescriptions = [
  {
    id: 'RX-9081',
    patientName: 'محمد عبدالكريم السبيعي',
    doctorName: 'د. سارة الشهري',
    specialty: 'الجلدية والتجميل',
    date: '2026-09-11',
    diagnosis: 'جفاف وملازمة التصبغات الشمسية (Solar Hyperpigmentation)',
    medicines: [
      { name: 'كريم نضارة وتبييض Ozen Skin C', dose: 'مرة واحدة مساءً', duration: '30 يوم' },
      { name: 'واقي شمس SPF 50+ Fluid', dose: 'قبل التعرض للشمس 15 دقيقة', duration: 'مستمر' }
    ]
  },
  {
    id: 'RX-9082',
    patientName: 'نورة فهد الدوسري',
    doctorName: 'د. خالد العتيبي',
    specialty: 'طب الأسنان',
    date: '2026-09-11',
    diagnosis: 'حساسية لثوية وتنظيف قشور جيرية (Gingival Scaling)',
    medicines: [
      { name: 'غسول مطهر للثة Chlorhexidine 0.2%', dose: 'مضمضة مرتين يومياً', duration: '10 أيام' },
      { name: 'مسكن آلام وتورم Profen 400mg', dose: 'عند الحاجة بعد الأكل', duration: '5 أيام' }
    ]
  }
];

export const initialInvoices = [
  {
    id: 'INV-2026-081',
    patientName: 'محمد عبدالكريم السبيعي',
    date: '2026-09-11',
    services: 'استشارة جلدية + جلسة نضارة نانو',
    subtotal: 350,
    vat: 52.5,
    total: 402.5,
    paymentMethod: 'مدى',
    zatcaQr: 'ZATCA-OZEN-2026-081-OK'
  },
  {
    id: 'INV-2026-082',
    patientName: 'نورة فهد الدوسري',
    date: '2026-09-11',
    services: 'كشف أسنان + تنظيف تلميع بالليزر',
    subtotal: 500,
    vat: 75,
    total: 575,
    paymentMethod: 'فيزا',
    zatcaQr: 'ZATCA-OZEN-2026-082-OK'
  }
];
