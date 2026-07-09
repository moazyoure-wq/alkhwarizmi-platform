import "./globals.css";

export const metadata = {
  title: "الخوارزمي",
  description: "منصة مستر أمير طلعت للرياضيات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
