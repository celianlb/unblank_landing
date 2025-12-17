import Image from "next/image";

export default function InspirationSection() {
  const platforms = [
    { name: "Instagram", icon: "instagram" },
    { name: "Pinterest", icon: "pinterest" },
    { name: "Behance", icon: "behance" },
  ];

  return (
    <section
      className="relative py-12 md:py-20 lg:py-24 bg-black text-white overflow-hidden"
      aria-labelledby="inspiration-heading"
    >
      {/* Vague bleue décorative */}
      <Image
        className="absolute top-0 left-0 hidden md:block"
        src={"/cta/star.svg"}
        width={150}
        height={150}
        alt=""
      />
      <Image
        className="absolute bottom-0 right-0"
        src={"/cta/line.svg"}
        width={350}
        height={350}
        alt=""
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="inspiration-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mx-auto px-4 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Collectez les meilleures inspirations de vos réseaux préférés
          </h2>
        </div>

        {/* Grille de plateformes */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-3 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full border-4 border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 cursor-pointer shadow-lg"
            >
              {/* Icône */}
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center"
                role="img"
                aria-label={`Logo ${platform.name}`}
              >
                {platform.icon === "instagram" && (
                  <svg
                    className="w-full h-full"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {platform.icon === "pinterest" && (
                  <svg
                    className="w-full h-full"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                )}
                {platform.icon === "behance" && (
                  <svg
                    className="w-full h-full"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                )}
              </div>
              <span
                className="font-bold text-base sm:text-lg"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
