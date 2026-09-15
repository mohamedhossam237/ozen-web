'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  Award, 
  Sparkles,
  Building2,
  FileCheck,
  BarChart3,
  Calendar,
  Lock
} from 'lucide-react';

export default function AdminPortal() {
  const departmentStats = [
    { name: 'قسم الجلدية والتجميل والليزر', revenue: '195,000 ر.س', visits: 540, share: '40%' },
    { name: 'قسم طب وتجميل الأسنان', revenue: '145,000 ر.س', visits: 380, share: '30%' },
    { name: 'قسم القلب والأوعية الدموية', revenue: '65,000 ر.س', visits: 190, share: '13%' },
    { name: 'قسم الأطفال وحديثي الولادة', revenue: '45,000 ر.س', visits: 180, share: '9%' },
    { name: 'قسم العظام والأنف والأذن', revenue: '35,000 ر.س', visits: 130, share: '8%' }
  ];

  const auditLogs = [
    { time: '10:45 ص', user: 'أحمد الإداري (Admin)', action: 'تعديل جدول مواعيد د. سارة الشهري' },
    { time: '09:30 ص', user: 'مها الاستقبال (Reception)', action: 'إصدار فاتورة ZATCA بقيمة 575 ر.س' },
    { time: '08:15 ص', user: 'د. خالد العتيبي (Doctor)', action: 'اعتماد وصفة طبية إلكترونية RX-9082' },
    { time: '08:00 ص', user: 'نظام أوزين التلقائي', action: 'نسخ احتياطي يومي لقاعدة البيانات EHR' }
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#573F36] flex flex-col font-sans">
      
      {/* Universal Top Switcher Bar (Centered) */}
      <div className="bg-[#573F36] text-[#F9F8F6] px-4 py-2 text-xs border-b border-[#C5A059]/40 flex flex-wrap justify-center sm:justify-between items-center gap-2 text-center">
        <div className="flex items-center justify-center gap-2 font-bold">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>لوحة التحكم والتحليلات التنفيذية لعيادات أوزين (Executive Admin)</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-[#D5BAA5] font-semibold hidden sm:inline">مبدل الأنظمة والمراكز:</span>
          <Link href="/portal/patient" className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#D5BAA5] font-bold">
            تطبيق المرضى
          </Link>
          <Link href="/portal/doctor" className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#D5BAA5] font-bold">
            تطبيق الأطباء
          </Link>
          <Link href="/portal/reception" className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#D5BAA5] font-bold">
            مكتب الاستقبال
          </Link>
          <Link href="/portal/admin" className="px-2.5 py-1 rounded bg-[#C5A059] text-white font-extrabold shadow-sm">
            الإدارة والتحليلات
          </Link>
          <Link href="/" className="px-2.5 py-1 rounded bg-[#1B2A4A] text-white font-bold mr-2">
            العودة للموقع
          </Link>
        </div>
      </div>

      {/* Admin Header */}
      <header className="bg-white border-b border-[#C5A059]/30 px-6 py-4 shadow-sm text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#573F36] to-[#3A2822] p-1 shadow flex items-center justify-center">
              <Image src="/brand/brand_logo_page.png" alt="Ozen Logo" width={34} height={34} style={{ width: 'auto', height: 'auto' }} className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#573F36]">المركز الإداري والمالي لمجمع أوزين</h1>
              <p className="text-xs text-[#7D6D6B]">مجموعة أوزين الطبية | Executive & Operations Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-[#573F36] text-[#D4AF37] text-xs font-bold flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>جلسة محمية بشرائح الأمان</span>
            </span>
          </div>
        </div>
      </header>

      {/* Admin Dashboard Body */}
      <main className="max-w-7xl mx-auto w-full p-6 lg:p-8 space-y-8 flex-1">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-gradient-to-br from-[#573F36] to-[#3A2822] rounded-3xl p-6 text-white shadow-xl border border-[#C5A059]/40 space-y-2">
            <div className="flex justify-between items-center text-[#D5BAA5]">
              <span className="text-xs font-bold">الإيراد الشهري الإجمالي</span>
              <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="text-3xl font-black font-mono text-[#F9F8F6]">485,000 ر.س</div>
            <div className="text-xs text-emerald-400 font-bold">+14.2% مقارنة بالشهر السابق</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#C5A059]/30 shadow-sm space-y-2">
            <div className="flex justify-between items-center text-[#7D6D6B]">
              <span className="text-xs font-bold">إجمالي مراجعات المرضى</span>
              <Users className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div className="text-3xl font-black text-[#573F36]">1,420</div>
            <div className="text-xs text-[#7D6D6B] font-semibold">موزعين على 15 عيادة</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#C5A059]/30 shadow-sm space-y-2">
            <div className="flex justify-between items-center text-[#7D6D6B]">
              <span className="text-xs font-bold">نسبة تشغيل غرف العيادات</span>
              <Activity className="w-5 h-5 text-[#1B2A4A]" />
            </div>
            <div className="text-3xl font-black text-[#1B2A4A]">92.4%</div>
            <div className="text-xs text-emerald-600 font-bold">معدل كفاءة تشغيلية ممتازة</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#C5A059]/30 shadow-sm space-y-2">
            <div className="flex justify-between items-center text-[#7D6D6B]">
              <span className="text-xs font-bold">نسبة رضا المراجعين</span>
              <Award className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="text-3xl font-black text-[#C5A059]">99.4%</div>
            <div className="text-xs text-[#7D6D6B] font-semibold">بناءً على 850 استبيان</div>
          </div>

        </div>

        {/* Department Revenue Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-[#C5A059]/30 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-black text-[#573F36] flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#C5A059]" />
                <span>أداء الإيرادات بحسب الأقسام والعيادات الطبية</span>
              </h3>
            </div>

            <div className="space-y-4">
              {departmentStats.map((dept, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FAF5F0] border border-[#C5A059]/20 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-[#573F36]">{dept.name}</span>
                    <span className="text-[#573F36] font-mono">{dept.revenue} ({dept.share})</span>
                  </div>

                  <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#573F36] rounded-full"
                      style={{ width: dept.share }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Logs Column */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#C5A059]/30 shadow-sm space-y-4">
            <h3 className="text-base font-black text-[#573F36] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              <span>سجل العمليات والأمان (Audit Log)</span>
            </h3>

            <div className="space-y-3">
              {auditLogs.map((log, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#FAF5F0] border border-gray-200 text-xs space-y-1">
                  <div className="flex justify-between text-[#7D6D6B] font-bold">
                    <span>{log.user}</span>
                    <span>{log.time}</span>
                  </div>
                  <div className="font-semibold text-[#573F36]">{log.action}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}
