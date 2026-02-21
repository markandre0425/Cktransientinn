import { images } from "../assets/images";
import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "./ui/hero-gallery-scroll-animation";
import { SparkleButton } from "../components/SparkleButton";

const IMAGES = [
  images.livingRoom,
  images.bedroom,
  images.bathroom,
  images.condo,
  images.games,
];

interface CKHeroProps {
  onBook: () => void;
}

export function CKHero({ onBook }: CKHeroProps) {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-3 md:p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt={`CK Transient Inn - view ${index + 1}`}
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center px-4">
        
        <h1
          className="max-w-xl text-4xl md:text-5xl tracking-tighter text-white drop-shadow-lg"
          style={{ fontWeight: 700 }}
        >
          Your Premium<br />Personal Sanctuary
        </h1>
        <p className="my-5 max-w-sm md:max-w-xl text-sm text-white/90 drop-shadow md:text-base mx-auto">
          A boutique solo-unit retreat in The Courtyards Condominium — where hotel-grade cleanliness meets the warmth of home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <SparkleButton
            onClick={onBook}
            className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-2 font-medium rounded-lg shadow-lg"
          >
            Book Your Stay
          </SparkleButton>
          <SparkleButton
            variant="link"
            className="bg-transparent px-4 py-2 font-medium text-white"
            onClick={() =>
              document
                .getElementById("amenities")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore the Space
          </SparkleButton>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
}