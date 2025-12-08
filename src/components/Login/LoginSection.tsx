import { useState } from "react";
import { Icon } from "@iconify/react";
import { Form, Input } from "antd";
import type { dataLogin } from "../../services/loginApi";
import { NotificationFailure } from "../Common/Notifications";
import { useAuth } from "../../context/useAuth";

export default function LoginnSection() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //useAuth
  const { login, isLoading } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data: dataLogin = {
        email: values.email,
        password: values.password,
      };
      await login(data);
    } catch (error: any) {
      console.error(error);
      NotificationFailure(error.response.error);
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 xl:gap-24  gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative w-full h-[380px] md:h-[450px] lg:h-[520px] xl:h-[620px] bg-linear-to-br from-sky-50 to-white rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/assets/authentication.png"
                alt="illustration"
                className="object-contain w-full h-full aspect-video"
                style={{ objectPosition: "left center" }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/40 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 xl:order-2">
            <div
              className="relative rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl 
             p-8 md:p-10 max-w-[420px] mx-auto
             translate-y-0
             ring-1 ring-black/5"
              role="region"
              aria-labelledby="login-title"
            >
              <h2
                id="login-title"
                className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2"
              >
                ¡Bienvenido a PRO!
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Bienvenido a la plataforma virtual de gestión de archivos de
                PROTECCIÓN LABORAL, para poder acceder deberás ingresar con tu
                mail y contraseña asignada. Si aún no posees acceso, podés
                solicitarlo a:&nbsp;
                <a
                  className="text-blue-700 underline"
                  href="mailto:info@proteccionlaboral.com.ar"
                >
                  info@proteccionlaboral.com.ar
                </a>
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                id="contact-form"
              >
                <Form.Item layout="vertical" name="email">
                  <Input
                    prefix={
                      <Icon icon="mdi:email-outline" className="w-5 h-5" />
                    }
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    className="peer w-full bg-white/90 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm placeholder-transparent
                               focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </Form.Item>
                <Form.Item layout="vertical" name="password">
                  <Input.Password
                    autoComplete="off"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    prefix={
                      <Icon icon="mdi:lock-outline" className="w-5 h-5" />
                    }
                    className="peer w-full bg-white/90 border border-gray-200 rounded-xl py-3 pl-12 pr-12 text-sm placeholder-transparent
                               focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                    placeholder="Contraseña"
                    aria-label="Contraseña"
                  />
                </Form.Item>

                <div className="flex items-center justify-between">
                  <a
                    className="text-sm text-sky-700 hover:underline!"
                    href="/forgot"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div className="mt-4 flex justify-center md:justify-end">
                  <button
                    type="submit"
                    className="
      w-full md:w-auto
      inline-flex items-center justify-center gap-3
      bg-linear-to-br from-[#0F41A2] to-[#316FC8]
      text-white font-semibold 
      rounded-full px-6 py-3 shadow-lg
      hover:scale-[1.02] active:scale-100
      transition cursor-pointer
    "
                  >
                    <Icon icon="mdi:login" className="w-5 h-5" />
                    {isLoading ? "Ingresando..." : "Ingresar"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
