import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button as AntButton } from "antd";
import { CarouselService } from "./CarouselService";
import { Link } from "react-router";

type ServiceKey = "gestion" | "prevencion" | "asesoramiento";

const servicesData: {
  key: ServiceKey;
  title: string;
  desc: string;
  details: string[];
}[] = [
  {
    key: "gestion",
    title: "Gestión",
    desc: "Planificamos, organizamos y ejecutamos las acciones necesarias para lograr la excelencia en seguridad laboral.",
    details: [
      "Informes para habilitación Municipal.",
      "Programas de Seguridad para obras (Resoluciones S.R.T. 51/1997, 35/1998, 319/1999).",
      "Relevamientos direccionados sobre el control de infraestructura y elementos de prevención.",
      "Confección y control de legajos técnicos en materia de Higiene y Seguridad.",
      "Implementación de programas para reducir la siniestralidad.",
    ],
  },
  {
    key: "prevencion",
    title: "Prevención",
    desc: "Detectamos riesgos para la prevención de accidentes de trabajo y enfermedades profesionales.",
    details: [
      "Capacitaciones en materia de prevención.",
      "Estudios técnicos de Carga de Fuego.",
      "Supervisión de obras (Resolución S.R.T. 231/1996).",
      "Mediciones de Ruido e Iluminación (Resoluciones 85/2012 y 84/2012).",
      "Planes de acción ante emergencias y planos de evacuación.",
      "Evaluaciones ergonómicas y puesta a tierra (Resoluciones 886/2015 y 900/2015).",
    ],
  },
  {
    key: "asesoramiento",
    title: "Asesoramiento",
    desc: "Brindamos información clara y actualizada sobre los requerimientos de cumplimiento legal.",
    details: [
      "Servicios mensuales de asesoramiento y gestión (Decreto 1338/1996 y Resolución 900/2015).",
      "Asesoramiento sobre gestión de siniestros y coberturas de A.R.T.",
    ],
  },
];

export default function ServicesSection() {
  const [openKey, setOpenKey] = useState<ServiceKey | null>(null);

  const toggle = (k: ServiceKey) => {
    setOpenKey((prev) => (prev === k ? null : k));
  };

  return (
    <section id="about-services" className="relative z-10 bg-white">
      <CarouselService />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="flex justify-center items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
            Servicios
          </h2>
        </header>

        <p className="max-w-4xl mx-auto text-center text-gray-600 mb-12 leading-relaxed">
          Ofrecemos servicios integrales en seguridad e higiene laboral, desde
          asesoramiento técnico hasta planes de emergencia, mediciones
          especializadas y capacitaciones adaptadas a cada sector.
        </p>

        {/* SERVICES GRID: 3 cards en la misma fila en pantallas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {servicesData.map((s) => {
            const expanded = openKey === s.key;
            return (
              <article
                key={s.key}
                className="relative rounded-2xl overflow-hidden shadow-md bg-white transition-transform hover:-translate-y-1"
              >
                <button
                  onClick={() => toggle(s.key)}
                  aria-expanded={expanded}
                  className="w-full text-left p-6 flex flex-col gap-4 cursor-pointer"
                >
                  {/* Header area */}
                  <div className="flex items-start gap-4">
                    <div className="flex-none bg-linear-to-tr from-[#316FC8] to-[#0F41A2] text-white rounded-full w-14 h-14 flex items-center justify-center shadow">
                      <Icon icon="mdi:briefcase-check" className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 uppercase">
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                    </div>
                  </div>

                  {/* Expandable area: inline style maxHeight para evitar problemas con tailwind y permitir animación */}
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                      maxHeight: expanded ? 240 : 0, // 240px when open, 0 when closed
                    }}
                    aria-hidden={!expanded}
                  >
                    <ul className="text-sm text-gray-700 space-y-2 pl-2 mt-3">
                      {s.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#0F41A2] mt-1">
                            <Icon icon="mdi:circle-small" className="w-3 h-3" />
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </article>
            );
          })}
        </div>

        {/* CONTACT CARD (siempre abajo) */}
        <div className="mt-8">
          <div className="mx-auto max-w-3xl rounded-2xl p-6 bg-linear-to-b from-[#0F41A2] to-[#316FC8] text-white shadow-xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              {/* Contenido izquierdo */}
              <div className="md:h-full">
                <div className="flex items-center gap-3 mb-2">
                  <Icon icon="mdi:account-tie-voice" className="w-10 h-10" />
                  <h4 className="text-2xl font-bold">
                    ¿Necesitás asesoramiento?
                  </h4>
                </div>

                <p className="text-sm leading-relaxed text-white/90 max-w-xl">
                  Te ayudamos a implementar planes y cumplir con la normativa
                  vigente. Consultá por presupuestos, auditorías y
                  capacitaciones a medida.
                </p>
              </div>

              {/* Botón abajo a la derecha */}
              <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-end md:self-end">
                <Link to="/contacto">
                  <AntButton
                    type="default"
                    className="rounded-full bg-white font-semibold hover:brightness-95 w-full md:w-56 h-11"
                  >
                    <span className=" font-semibold  text-[#0F41A2] text-center">
                      CONTACTANOS
                    </span>
                  </AntButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
