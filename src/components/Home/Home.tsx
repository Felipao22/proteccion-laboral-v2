import { HomeCarousel } from "../Home/Carousel";
import { Services } from "./Services";

export default function Home() {
  return (
    <>
      <HomeCarousel />

      <>
        <div className="w-full backdrop-blur-md py-16 px-6 flex justify-center">
          <div className="max-w-4xl text-center animate-fadein">
            <h2
              className="relative text-center text-4xl font-bold
               after:content-[''] after:block after:w-44 after:h-0.5
               after:bg-blue-800 after:mx-auto after:mt-2 after:mb-24"
            >
              Nuestra misión
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              La Seguridad e Higiene Laboral tiene como objetivo principal
              articular e implementar las medidas necesarias para prevenir la
              ocurrencia de accidentes y enfermedades laborales, debido a los
              riesgos o peligros que están expuestos los trabajadores durante o
              con motivo de su trabajo.
            </p>
          </div>
        </div>
        <Services />
      </>
    </>
  );
}
