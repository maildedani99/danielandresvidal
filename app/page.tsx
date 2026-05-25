import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#121518] text-gray-100 ">

      {/* HEADER SECTION CON BACKGROUND */}
<section className="relative flex flex-col items-center justify-center text-center mb-24 overflow-hidden py-20 md:py-32 px-4">

  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-50 scale-110"
    style={{
      backgroundImage: "url('/header-bg.png')",
    }}
  />

  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-[#0d1117]/50" />

  {/* Content */}
<div className="relative z-10 w-full max-w-5xl xl:translate-x-36">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight">
      Dani Andrés
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 font-medium leading-snug">
      Full-Stack Developer · React · Next.js · Laravel · Docker
    </p>

    <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-xl text-white/90 leading-relaxed mb-10 md:mb-12 px-2 sm:px-4">
      Desarrollador Full-Stack con fuerte enfoque en frontend. Apasionado por la arquitectura limpia, el rendimiento y la experiencia de usuario. Actualmente lidero el desarrollo de una plataforma SaaS multi-tenant para e-commerce, basada en Laravel y Next.js.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">

      <Link
        href="/contact"
        className="border border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg hover:bg-yellow-400 hover:text-[#0d1117] transition font-medium text-center w-full sm:w-auto"
      >
        Contacto
      </Link>

      <a
        className="bg-yellow-400 text-[#0d1117] px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-300 transition text-center w-full sm:w-auto"
        href="/CV_Dani_Andres_FullStack_Dev_Visual_v2.pdf"
        download
      >
        Descargar CV
      </a>

    </div>

  </div>
</section>

      {/* GRID PRINCIPAL */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-[#505357] rounded-lg p-8 shadow-md hover:shadow-lg transition ">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Stack</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>React / Next.js / RemixJS</li>
            <li>Laravel 8/10 / MySQL / Prisma</li>
            <li>Tailwind CSS / Storybook</li>
            <li>Docker / Git</li>
            <li>Arquitectura multi-tenant / JWT Auth</li>
          </ul>
        </div>

        <div className="bg-[#505357] rounded-lg p-8 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-400">
            Proyecto destacado
          </h2>

          <h3 className="text-lg font-bold mb-1">Usuriaga.com</h3>

          <p className="text-sm text-gray-300 mb-2">
            E-commerce de moda con arquitectura multi-tenant, refactorizado en
            2023 a SaaS. Next.js (front) + Laravel 8 (back) + Docker. Pasarela
            de pago Redsys.
          </p>

          <a
            href="https://usuriaga.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-yellow-400 underline hover:opacity-80"
          >
            Ver demo →
          </a>
        </div>

        <div className="bg-[#505357] rounded-lg p-8 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Otras colaboraciones
          </h2>

          <div className="text-sm text-gray-300 space-y-3">
            <div>
              <p className="font-semibold">Grupo Mayo (2023)</p>
              <p>
                Desarrollo de módulos de formación con React.js. Maquetación
                responsive con Tailwind CSS.
              </p>
            </div>

            <div>
              <p className="font-semibold">Labelgrup (2021)</p>
              <p>
                App web para el sector farmacéutico. Componentes reutilizables
                con Storybook y diseño responsive.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}