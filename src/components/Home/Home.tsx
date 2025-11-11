import { HomeCarousel } from "../Home/Carousel";
import { Services } from "./Services";

export default function Home() {
  return (
    <>
      <HomeCarousel />

      <>
        <p>
          La Seguridad e Higiene Laboral tiene como objetivo principal articular
          e implementar las medidas necesarias para prevenir la ocurrencia de
          accidentes y enfermedades laborales, debido a los riesgos o peligros
          que están expuestos los trabajadores durante o con motivo de su
          trabajo.
        </p>
        <Services />
      </>
    </>
  );
}
