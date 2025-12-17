import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Pourquoi', href: '#pourquoi' },
      { label: 'Fonctionnalités', href: '#fonctionnalites' },
      { label: 'Comment ça marche', href: '#comment-ca-marche' },
    ],
    company: [
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'API Docs', href: '#api' },
    ],
  };

  const legalLinks = [
    { label: 'CGU', href: '#cgu' },
    { label: "Politique de confidentialité", href: '#privacy' },
  ];

  return (
    <footer
      className="bg-black text-white py-12 md:py-16 lg:py-20"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                UnBlank
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Un espace pour tout ce que vous découvrez. Organisez, partagez et retrouvez vos inspirations facilement.
            </p>
          </div>

          {/* Produit */}
          <nav aria-labelledby="footer-product-heading">
            <h3
              id="footer-product-heading"
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Produit
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Entreprise */}
          <nav aria-labelledby="footer-company-heading">
            <h3
              id="footer-company-heading"
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Entreprise
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} UnBlank. Tous droits réservés.
            </p>

            {/* Legal links */}
            <nav aria-label="Liens légaux">
              <ul className="flex gap-6">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
