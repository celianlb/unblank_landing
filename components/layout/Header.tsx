"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#comment-ca-marche", label: "Comment ça marche" },
    { href: "#fonctionnalites", label: "Fonctionnalités" },
    { href: "#tarifs", label: "Tarifs" },
  ];

  return (
    <header
      className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-[120px]"
      role="banner"
    >
      <div className=" ">
        {/* Navigation desktop */}
        <div className="flex px-2 sm:px-4 md:px-8 py-4 items-center justify-between">
          {/* Logo */}
          <div className="flex bg-[#FFE3E8] border-2 px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-3xl gap-3 sm:gap-6 md:gap-8 items-center">
            <a
              href="#"
              className="flex items-center"
              aria-label="UnBlank - Retour à l'accueil"
            >
              <Image
                src={"/logo.svg"}
                alt="Logo UnBlank"
                width={183}
                height={32}
                className="w-auto h-6 sm:h-7 md:h-8"
              />
            </a>
            <nav
              className="hidden md:flex items-center gap-3"
              aria-label="Navigation principale"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-(--color-primary) transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Buttons desktop */}
          <div className="hidden w-fit md:flex items-center space-x-3">
            <Button
              className="w-fit"
              variant="secondary"
              href="#connexion"
              aria-label="Se connecter à votre compte"
            >
              S&apos;identifier
            </Button>
            <Button
              className="w-fit max-w-none"
              variant="primary"
              href="#essai"
              aria-label="Essayer UnBlank gratuitement"
            >
              Essayer gratuitement
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-(--color-primary)"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
            {!isMobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="bg-white border-2 border-black rounded-3xl p-4 shadow-lg">
            <nav id="mobile-menu" aria-label="Navigation mobile">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 space-y-2 border-t border-gray-200">
                  <Button
                    variant="secondary"
                    href="#connexion"
                    className="w-full text-center"
                    aria-label="Se connecter à votre compte"
                  >
                    S&apos;identifier
                  </Button>
                  <Button
                    variant="primary"
                    href="#essai"
                    className="w-full text-center"
                    aria-label="Essayer UnBlank gratuitement"
                  >
                    Essayer gratuitement
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
