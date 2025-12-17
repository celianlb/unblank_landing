"use client";

import { useState } from "react";
import Button from "../ui/Button";

interface PricingPlan {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: string[];
  variant: "white" | "black";
  buttonVariant: "primary" | "outline";
  buttonText: string;
  badge?: string;
}

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans: PricingPlan[] = [
    {
      name: "Gratuit",
      price: {
        monthly: "0€",
        yearly: "0€",
      },
      description: "Idéal pour tester UnBlank",
      features: [
        "Extension navigateur Chrome.",
        "Capture multi-sources (Instagram, Pinterest, Behance...).",
        "Tags manuels.",
        "Création de dossiers principaux illimité",
        "Sauvegarde de 50 liens par mois.",
        "Partage de dossier en lecture seul uniquement",
      ],
      variant: "white",
      buttonVariant: "primary",
      buttonText: "Continuer avec ce plan",
    },
    {
      name: "Pro",
      price: {
        monthly: "6,99€",
        yearly: "59€",
      },
      description:
        billingPeriod === "monthly"
          ? "Tester l'expérience complète"
          : "Pour les créatifs réguliers",
      features: [
        "Toutes les features du plan gratuit",
        "Tags des liens et images automatiquement par IA.",
        "Création de groupe de dossier et de sous-dossier en illimités",
        "Partage de dossier avec édition.",
      ],
      variant: "black",
      buttonVariant: "outline",
      buttonText: "Choisir ce forfait",
      badge: billingPeriod === "yearly" ? "Économisez 40%" : undefined,
    },
    {
      name: "Team",
      price: {
        monthly: "18,99€",
        yearly: "99€",
      },
      description:
        billingPeriod === "monthly"
          ? "Pour les équipes"
          : "Pour les créatifs réguliers",
      features: ["Toutes les features du plan pro", "Collaboration illimité."],
      variant: "white",
      buttonVariant: "primary",
      buttonText: "Continuer avec ce plan",
    },
  ];

  return (
    <section
      id="tarifs"
      className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-[120px] bg-[#FEF8EE]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tarifs, pensés pour créer
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 mb-8">
            Accède à 80% des fonctionnalités gratuitement dès maintenant.
          </p>

          {/* Toggle Mensuel/Annuel */}
          <div className="inline-flex items-center bg-white border-4 border-black rounded-xl p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 cursor-pointer sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all ${
                billingPeriod === "monthly"
                  ? "bg-[#FF506F] text-black border-2 border-black"
                  : "bg-white text-black hover:bg-gray-50"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 cursor-pointer sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all ${
                billingPeriod === "yearly"
                  ? "bg-[#FF506F] text-black border-2 border-black"
                  : "bg-white text-black hover:bg-gray-50"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Annuel
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border-4 border-black rounded-3xl p-6 sm:p-8 ${
                plan.variant === "black"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold border-2 border-black">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className="text-2xl sm:text-3xl font-black mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span
                  className="text-4xl sm:text-5xl font-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {billingPeriod === "monthly"
                    ? plan.price.monthly
                    : plan.price.yearly}
                </span>
                <span className="text-lg ml-1">
                  {billingPeriod === "monthly"
                    ? "/mois"
                    : plan.name === "Gratuit"
                    ? "/mois"
                    : plan.name === "Pro"
                    ? "/an"
                    : "/membre/an"}
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-sm sm:text-base mb-6 ${
                  plan.variant === "black" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                        stroke="#FF506F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.buttonVariant}
                className="w-full"
                href="#essai"
                aria-label={`${plan.buttonText} - Plan ${plan.name}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
