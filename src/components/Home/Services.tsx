import { useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";

type ServiceKey = "gestion" | "prevencion" | "asesoramiento";

export const Services = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<ServiceKey | null>(null);

  const handleOk = () => {
    setOpen(null);
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate("/services");
  };

  const services: {
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

  return (
    <section id="about-services" className="relative z-10">
      <div className="max-w-325 px-4 mx-auto mb-48">
        {/* Header */}
        <header className="flex justify-center items-center my-24">
          <h2
            className="text-4xl font-bold text-gray-800 text-center
             relative
             after:content-[''] after:block after:w-44 after:h-[3px]
             after:bg-blue-800 after:mx-auto after:mt-2 after:mb-24"
          >
            Nuestros servicios
          </h2>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <button
              style={{ borderRadius: ".938rem" }}
              key={s.key}
              onClick={() => setOpen(s.key)}
              className="bg-linear-to-t from-[#316FC8] to-[#0F41A2] rounded-2xl overflow-hidden text-white text-center pt-[2.188rem] pb-[.938rem]
                       shadow-md hover:scale-110 transition-transform duration-300 flex flex-col justify-between items-center cursor-pointer h-80"
            >
              <h2 className="text-xl font-semibold uppercase mb-2">
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed uppercase w-4/5 mx-auto mb-4">
                {s.desc}
              </p>
              <Icon icon="mdi:chevron-down" className="text-3xl" />
            </button>
          ))}
        </div>

        {/* Modales */}
        {services.map((s) => (
          <Modal
            key={s.key}
            title={s.title.toUpperCase()}
            open={open === s.key}
            onOk={handleOk}
            onCancel={() => setOpen(null)}
            okText="VER TODOS"
            cancelText="VOLVER"
          >
            {s.details.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </Modal>
        ))}
      </div>
    </section>
  );
};
