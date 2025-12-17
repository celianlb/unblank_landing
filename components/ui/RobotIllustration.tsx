export default function RobotIllustration() {
  return (
    <svg
      viewBox="0 0 300 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration d'un robot représentant UnBlank"
    >
      {/* Corps du robot - forme rectangulaire avec écran */}
      <g>
        {/* Corps principal */}
        <rect
          x="50"
          y="100"
          width="200"
          height="180"
          rx="20"
          fill="white"
          stroke="black"
          strokeWidth="4"
        />

        {/* Écran/Visage */}
        <rect
          x="70"
          y="120"
          width="160"
          height="100"
          rx="15"
          fill="#E8E8E8"
          stroke="black"
          strokeWidth="3"
        />

        {/* Yeux */}
        <circle cx="110" cy="160" r="15" fill="black" />
        <circle cx="190" cy="160" r="15" fill="black" />

        {/* Pupilles brillantes */}
        <circle cx="115" cy="155" r="5" fill="white" />
        <circle cx="195" cy="155" r="5" fill="white" />

        {/* Sourire */}
        <path
          d="M 110 190 Q 150 210 190 190"
          stroke="black"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Bras gauche (levé pour saluer) */}
        <g>
          <rect
            x="15"
            y="120"
            width="45"
            height="15"
            rx="7"
            fill="white"
            stroke="black"
            strokeWidth="4"
            transform="rotate(-30 37.5 127.5)"
          />
          {/* Main gauche */}
          <ellipse
            cx="20"
            cy="105"
            rx="18"
            ry="22"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          {/* Doigts main gauche */}
          <line x1="10" y1="95" x2="10" y2="80" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="90" x2="20" y2="75" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="95" x2="30" y2="80" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Bras droit */}
        <g>
          <rect
            x="240"
            y="140"
            width="45"
            height="15"
            rx="7"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          {/* Main droite */}
          <ellipse
            cx="280"
            cy="147"
            rx="18"
            ry="22"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
        </g>

        {/* Jambes */}
        <g>
          {/* Jambe gauche */}
          <rect
            x="90"
            y="270"
            width="40"
            height="60"
            rx="10"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          {/* Pied gauche */}
          <ellipse
            cx="110"
            cy="335"
            rx="35"
            ry="20"
            fill="var(--color-primary)"
            stroke="black"
            strokeWidth="4"
          />

          {/* Jambe droite */}
          <rect
            x="170"
            y="270"
            width="40"
            height="60"
            rx="10"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          {/* Pied droit */}
          <ellipse
            cx="190"
            cy="335"
            rx="35"
            ry="20"
            fill="var(--color-primary)"
            stroke="black"
            strokeWidth="4"
          />
        </g>

        {/* Détails du corps */}
        <circle cx="150" cy="250" r="8" fill="black" />
        <rect x="130" y="235" width="40" height="6" rx="3" fill="black" />
      </g>
    </svg>
  );
}
