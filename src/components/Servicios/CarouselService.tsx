import { Carousel } from "antd";

interface Slide {
  key: number;
  image: string;
  title: string;
  subtitle?: string;
}

const slides: Slide[] = [
  {
    key: 1,
    image: "/assets/soluciones.webp",
    title: "GESTIÓN",
  },
  {
    key: 2,
    image: "/assets/soluciones2.webp",
    title: "ASESORAMIENTO",
  },
  {
    key: 2,
    image: "/assets/soluciones3.webp",
    title: "PREVENCIÓN",
  },
];

export const CarouselService = () => {
  return (
    <Carousel autoplay autoplaySpeed={5000} effect="fade" arrows draggable>
      {slides.map((slide, key) => (
        <div className="relative w-full h-full overflow-hidden" key={key}>
          <div
            className="
            absolute left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2
            z-999 w-full px-4
          "
          >
            <h2
              style={{ fontSize: "clamp(0.7rem, 4vw, 1.8rem)" }}
              className="
              text-center text-white font-extrabold 
              tracking-[0.25rem] uppercase 
              text-shadow-lg
              xl:text-2xl md:text-base
            "
            >
              {slide.title}
            </h2>
          </div>

          <img
            className="block w-full object-fill max-h-[80vh]"
            src={slide.image}
            alt={`slide ${key}`}
          />
        </div>
      ))}
    </Carousel>
  );
};
