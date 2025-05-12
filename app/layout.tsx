import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dani Andrés – Full-Stack Developer",
  description: "Portfolio de Dani Andrés, desarrollador Full-Stack especializado en frontend con React y Next.js.",
  authors: [{ name: "Dani Andrés", url: "https://danielandresvidal.com" }],
  keywords: ["Full-Stack", "React", "Next.js", "Laravel", "Frontend", "Developer"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={`${inter.className} bg-[#0d1117] text-gray-100 min-h-screen flex flex-col`}>
        <main className="flex-grow">{children}</main>
        <footer className="bg-[#0d1117] text-gray-400 text-sm text-center py-16">
          <div className="space-y-2">
            <p>Email: <a href="mailto:andresvidaldaniel@gmail.com" className="underline">andresvidaldaniel@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/daniel-andrés-vidal" target="_blank" className="underline">/daniel-andrés-vidal</a></p>
            <p>© {new Date().getFullYear()} Dani Andrés. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
