import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keshav Sharma | Postgraduate Researcher",
  description: "Building AI that learns, adapts, and discovers in the real world.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A1428" />
        {/* Set theme before paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('keshav_theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-primary text-neutral overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
