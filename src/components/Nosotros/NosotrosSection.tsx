export const NosotrosSection = () => {
  return (
    <section className="pt-6 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* === QUIÉNES SOMOS === */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <span className="text-sm tracking-widest text-blue-700 font-semibold">
              NOSOTROS
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              ¿Quiénes somos?
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Somos una empresa con más de quince años de experiencia en el
              ámbito de la seguridad laboral, a lo largo de estos años hemos
              podido desarrollar e implementar un sistema de gestión y
              asesoramiento con el fin de brindar soporte a nuestros clientes
              para la prevención de contingencias laborales.
            </p>

            <div className="w-24 h-1 bg-blue-700 rounded-full"></div>
          </div>

          {/* Imagen o logo moderno */}
          <div className="flex justify-center">
            <img
              src="/assets/logo.webp"
              alt="Protección Laboral"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* === SEPARADOR === */}
        <div className="my-24 border-t border-gray-300"></div>

        {/* === QUÉ NOS DISTINGUE === */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Imagen grande */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/assets/nosotros.webp"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <span className="text-sm tracking-widest text-blue-700 font-semibold">
              VALORES
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              ¿Qué nos distingue?
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Contamos con un equipo de trabajo multidisciplinario con el
              propósito de lograr un asesoramiento preciso, ágil y actualizado.
              Implementamos estándares de control de gestión dinámicos,
              adaptados a la necesidad de cada empresa, así como también de la
              verificación sobre el desarrollo seguro de las tareas y procesos.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Trabajamos para que nuestros clientes puedan alcanzar la
              excelencia en seguridad e higiene, tomando cómo parámetros el
              cumplimiento de la legislación vigente.
            </p>

            <div className="w-24 h-1 bg-blue-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
