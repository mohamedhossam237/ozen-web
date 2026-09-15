import "./globals.css";

export const metadata = {
  title: "مجمع عيادات أوزين الطبية | Ozen Medical Group",
  description: "الوجهة الرائدة للرعاية الطبية الفاخرة، طب الأسنان، الجلدية والتجميل، الأطفال والقلب بالهوية البصرية الرسمية لأوزين.",
  keywords: ["مجمع عيادات أوزين", "أوزين الطبية", "عيادات دمياط الجديدة", "عيادات تجميل دمياط", "Ozen Medical Group", "تطبيق أوزين الطبي"],
  icons: {
    icon: [
      { url: "/brand/ozen_symbol_clean_gold.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/brand/ozen_symbol_clean_gold.png",
    apple: "/brand/ozen_symbol_clean_gold.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased overflow-x-hidden max-w-full" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/brand/ozen_symbol_clean_gold.png" />
        <link rel="shortcut icon" type="image/png" href="/brand/ozen_symbol_clean_gold.png" />
        <link rel="apple-touch-icon" href="/brand/ozen_symbol_clean_gold.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col items-center font-sans bg-[#F9F8F6] overflow-x-hidden w-full max-w-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
