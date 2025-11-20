import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactoSection() {
  const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta
    .env;

  //Estados
  const [formData, setFormData] = useState({
    Nombre: "",
    Email: "",
    Empresa: "",
    Mensaje: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        e.currentTarget as HTMLFormElement,
        { publicKey: VITE_PUBLIC_KEY }
      )
      .then(() => {
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ Nombre: "", Email: "", Empresa: "", Mensaje: "" });
        }, 3000);
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        setIsSubmitted(false);
      });
  };

  return (
    <section id="contact" className="relative py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
            ¿Qué desea consultarnos?
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Estamos para ayudarte. Elegí tu forma de contacto preferida.
          </p>
        </header>
        <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 md:p-14">
            <div className="flex flex-col justify-start gap-7">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#316FC8] to-[#0F41A2] flex items-center justify-center text-white shadow-md">
                  <Icon icon="mdi:phone-outline" className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  Contacto directo
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed max-w-lg">
                Si querés una cotización o asesoramiento, dejá tus datos y te
                contactamos a la brevedad. También podés llamarnos o enviarnos
                un email para consultas urgentes.
              </p>
              <ul className="text-gray-700 space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <Icon
                    icon="mdi:whatsapp"
                    className="text-[#25D366] w-6 h-6"
                  />
                  <a
                    href="https://wa.me/542664722453"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#0F41A2] transition"
                  >
                    2664 722453
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <Icon
                    icon="mdi:email-outline"
                    className="text-[#316FC8] w-6 h-6"
                  />
                  <a
                    href="mailto:info@proteccionlaboral.com.ar"
                    className="hover:text-[#0F41A2] transition"
                  >
                    info@proteccionlaboral.com.ar
                  </a>
                </li>
              </ul>
            </div>
            {!isSubmitted ? (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="bg-white/70 rounded-2xl xl:p-6 p-10 shadow-md border border-gray-300/50"
                aria-labelledby="contactform-title"
              >
                <h4
                  id="contactform-title"
                  className="text-xl font-semibold text-gray-900 mb-6"
                >
                  Datos para el contacto
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Form.Item
                    layout="vertical"
                    label="Nombre"
                    name="Nombre"
                    rules={[{ required: true }]}
                  >
                    <Input
                      spellCheck={false}
                      className="bg-white text-black"
                      type="text"
                      placeholder="Nombre"
                      name="Nombre"
                      value={formData?.Nombre}
                      onChange={handleChange}
                    />
                  </Form.Item>

                  <Form.Item
                    layout="vertical"
                    label="Email"
                    name="Email"
                    rules={[{ required: true }]}
                  >
                    <Input
                      spellCheck={false}
                      type="email"
                      placeholder="Email"
                      name="Email"
                      value={formData?.Email}
                      onChange={handleChange}
                    />
                  </Form.Item>

                  <Form.Item
                    layout="vertical"
                    label="Empresa (opcional)"
                    name="Empresa"
                  >
                    <Input
                      spellCheck={false}
                      placeholder="Empresa (opcional)"
                      name="Empresa"
                      value={formData?.Empresa}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </div>

                <Form.Item
                  layout="vertical"
                  label="Mensaje"
                  name="Mensaje"
                  rules={[{ required: true }]}
                >
                  <Input.TextArea
                    rows={4}
                    name="Mensaje"
                    placeholder="Escriba su mensaje..."
                    value={formData?.Mensaje}
                    onChange={handleChange}
                  />
                </Form.Item>
                <div className="pt-4">
                  <Button
                    htmlType="submit"
                    style={{
                      backgroundColor: "#0F41A2",
                      color: "white",
                      padding: "1.25rem 1.25rem 1.25rem",
                    }}
                    className="w-full inline-flex justify-center items-center gap-3 hover:brightness-95 font-semibold  shadow-xl transition-all"
                  >
                    {isSubmitted ? "Enviando..." : "Enviar"}
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Icon
                    icon="simple-line-icons:check"
                    className="text-green-600 w-8 h-8"
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Mensaje Enviado!
                </h3>

                <p className="text-gray-600">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
