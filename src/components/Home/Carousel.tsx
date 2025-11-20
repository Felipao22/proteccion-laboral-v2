import { Carousel } from "antd";

interface Slide {
  key: number;
  image: string;
  logo: string;
  title: string;
  subtitle?: string;
}

const slides: Slide[] = [
  {
    key: 1,
    image: "/assets/exit.webp",
    logo: "/assets/LOGO CUADRADO blanco.png",
    title: "Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.",
  },
  {
    key: 2,
    image: "/assets/im1.webp",
    logo: "/assets/LOGO CUADRADO blanco.png",
    title: "Gestión y Asesoramiento en Higiene y Seguridad en el Trabajo.",
  },
];

export const HomeCarousel = () => {
  return (
    <Carousel autoplay autoplaySpeed={5000} effect="fade" arrows draggable>
      {slides.map((slide, key) => (
        <div className="relative w-full h-full overflow-hidden" key={key}>
          {/* img-overlay */}
          <img
            src={slide.logo}
            alt="logo"
            className="
          absolute left-0 right-0 top-0 mx-auto
          w-[37%] xl:w-2/6 md:w-1/2 
          z-999
          /* breakpoints originales */
          max-[675px]:w-1/2
          max-[463px]:w-1/2
          max-[391px]:w-1/2
          max-[340px]:w-1/2
          aspect-square
        "
          />

          {/* box-text */}
          <div
            className="
          absolute left-0 right-0 mx-auto
          top-5/6 min-w-[60%] min-h-[55px] z-999
          max-[675px]:top-[75%]
          max-[463px]:top-[70%]
          max-[391px]:top-[70%]
          max-[340px]:top-[60%]
        "
          >
            {/* text-overlay */}
            <h2
              style={{ fontSize: "clamp(0.7rem, 4vw, 1.8rem)" }}
              className="text-center text-white text-[1.438rem] font-extrabold tracking-[0.25rem] uppercase h-13.75 text-shadow-lg xl:text-2xl md:text-base"
            >
              {slide.title}
            </h2>
          </div>

          <img
            className="block w-full object-fill max-h-[80vh] aspect-video"
            src={slide.image}
            alt={`slide ${key}`}
          />
        </div>
      ))}
    </Carousel>
  );
};
