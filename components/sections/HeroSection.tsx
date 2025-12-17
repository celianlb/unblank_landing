import Image from "next/image";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section
      className="relative bg-white px-4 sm:px-6 lg:px-[120px] pt-32 pb-16 md:pt-60 md:pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Illustration */}

          <Image
            src="/hero.svg"
            alt="Illustration d'un robot représentant UnBlank"
            width={360}
            height={350}
            priority
            className="ml-auto h-full w-auto"
          />
          {/* Contenu texte */}
          <div className="lg:pr-8">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-none font-black tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Un espace pour tout ce que vous découvrez
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8 text-gray-800 leading-relaxed max-w-xl">
              Unblank est un gestionnaire de favoris nouvelle génération.
              Organisez, partagez et retrouvez vos liens plus facilement que
              jamais.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-12">
          <Button
            variant="primary"
            className="w-fit"
            href="#essai"
            aria-label="Installer l'extension de navigateur UnBlank"
          >
            Installer l&apos;extension de navigateur
          </Button>
        </div>
        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="#comment-ca-marche"
            className="flex flex-col items-center gap-2 animate-bounce focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2 rounded p-2"
            aria-label="Défiler vers la section Comment ça marche"
          >
            <Image
              src={"/down-arrow.svg"}
              width={32}
              height={32}
              alt="Icône de flèche vers le bas"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
