
export default function HomePage() {
  return (
    <main className="bg-[#0d1117] text-gray-100 px-6 py-20">
      <section className="flex flex-col items-center justify-center text-center mb-24">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4">Dani Andrés</h1>
        <p className="text-2xl text-gray-400 mb-8 font-medium">
          Full‑Stack Developer · React · Next.js · Laravel · Docker
        </p>
        <p className="max-w-3xl text-gray-200 text-xl md:text-xl leading-relaxed mb-12 py-14">
          Desarrollador Full‑Stack con fuerte enfoque en frontend. Apasionado por la arquitectura limpia, el rendimiento y la experiencia de usuario. Actualmente lidero el desarrollo de una plataforma SaaS multi-tenant para e-commerce, basada en Laravel y Next.js. Siempre abierto a nuevos retos donde pueda aportar valor con código claro, escalable y centrado en el usuario.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:andresvidaldaniel@gmail.com"
            className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full text-lg hover:bg-yellow-400 hover:text-[#0d1117] transition font-medium text-center"
          >
            Contacto
          </a>
          <a
            className="bg-yellow-400 text-[#0d1117] px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
            href="/CV_Dani_Andres_FullStack_Dev_Visual_v2.pdf"
            download
          >
            Descargar CV
          </a>
       
        </div>
      </section>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-[#161B22] rounded-lg p-8 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Stack</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>React / Next.js / RemixJS</li>
            <li>Laravel 8/10 / MySQL / Prisma</li>
            <li>Tailwind CSS / Storybook</li>
            <li>Docker / Git</li>
            <li>Arquitectura multi-tenant / JWT Auth</li>
          </ul>
        </div>

        <div className="bg-[#161B22] rounded-lg p-8 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Proyecto destacado</h2>
          <h3 className="text-lg font-bold mb-1">Usuriaga.com</h3>
          <p className="text-sm text-gray-300 mb-2">
            E-commerce de moda con arquitectura multi-tenant, refactorizado en 2023 a SaaS. Next.js (front) + Laravel 8 (back) + Docker. Pasarela de pago Redsys.
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

        <div className="bg-[#161B22] rounded-lg p-8 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Otras colaboraciones</h2>
          <div className="text-sm text-gray-300 space-y-3">
            <div>
              <p className="font-semibold">Grupo Mayo (2023)</p>
              <p>Desarrollo de módulos de formación con React.js. Maquetación responsive con Tailwind CSS.</p>
            </div>
            <div>
              <p className="font-semibold">Labelgrup (2021)</p>
              <p>App web para el sector farmacéutico. Componentes reutilizables con Storybook y diseño responsive.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
