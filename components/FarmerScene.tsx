type FarmerSceneProps = {
  className?: string;
};

export function FarmerScene({ className }: FarmerSceneProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 960 540"
      role="img"
      aria-labelledby="farmerSceneTitle farmerSceneDesc"
    >
      <title id="farmerSceneTitle">
        किसान खेत में हल चलाते हुए दो बैलों के साथ
      </title>
      <desc id="farmerSceneDesc">
        A farmer steering a traditional plough pulled by two oxen across a
        lush field under a rising sun.
      </desc>
      <defs>
        <linearGradient
          id="skyGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="70%" stopColor="#E0F7FF" />
        </linearGradient>
        <linearGradient
          id="soilGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#8B5E3C" />
          <stop offset="100%" stopColor="#A7744A" />
        </linearGradient>
        <linearGradient
          id="fieldHighlight"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#6FCF97" />
          <stop offset="100%" stopColor="#3F8E5A" />
        </linearGradient>
      </defs>
      <rect width="960" height="540" fill="url(#skyGradient)" />
      <g opacity="0.45">
        {[...Array(5)].map((_, index) => (
          <ellipse
            key={index}
            cx={120 + index * 200}
            cy={120 + index * 10}
            rx={80 + index * 10}
            ry={30 + index * 5}
            fill="#FFFFFF"
          />
        ))}
      </g>
      <circle cx="820" cy="90" r="70" fill="#FFD166" opacity="0.8" />
      <g transform="translate(0, 260)">
        <rect width="960" height="280" fill="url(#soilGradient)" />
        <g opacity="0.25">
          {[...Array(20)].map((_, index) => (
            <path
              key={index}
              d={`M0 ${index * 16} Q480 ${index * 12 + 24} 960 ${
                index * 18
              } L960 ${index * 18 + 10} Q480 ${index * 16 + 28} 0 ${
                index * 18 + 10
              } Z`}
              fill="#6B4423"
            />
          ))}
        </g>
        <g>
          {[...Array(6)].map((_, index) => (
            <path
              key={index}
              d={`M${60 + index * 140} 40 C${120 + index * 140} -20 ${
                160 + index * 140
              } 140 ${240 + index * 140} 40`}
              stroke="url(#fieldHighlight)"
              strokeWidth="30"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
          ))}
        </g>
      </g>
      <g transform="translate(220, 250)">
        <g id="oxen">
          <g transform="translate(0, 20)">
            <path
              d="M30 70 C20 20 120 -10 200 10 C260 30 260 130 180 130 L70 120 Z"
              fill="#D1A05F"
              stroke="#8A6B3D"
              strokeWidth="4"
            />
            <ellipse cx="80" cy="65" rx="12" ry="18" fill="#8A6B3D" />
            <ellipse cx="78" cy="63" rx="6" ry="8" fill="#2F1B0D" />
            <path
              d="M210 30 L235 10 L255 60"
              stroke="#8A6B3D"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="220" cy="25" r="6" fill="#2F1B0D" />
            <path
              d="M45 110 L30 170"
              stroke="#8A6B3D"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M150 120 L140 180"
              stroke="#8A6B3D"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M230 80 L300 90"
              stroke="#8A6B3D"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </g>
          <g transform="translate(-40, 0)">
            <path
              d="M30 60 C10 10 100 -10 180 10 C240 40 240 120 160 120 L60 100 Z"
              fill="#C8964D"
              stroke="#805A2D"
              strokeWidth="4"
            />
            <ellipse cx="70" cy="50" rx="11" ry="16" fill="#805A2D" />
            <ellipse cx="68" cy="48" rx="5" ry="7" fill="#2F1B0D" />
            <path
              d="M190 40 L215 15 L230 60"
              stroke="#805A2D"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="200" cy="32" r="5" fill="#2F1B0D" />
            <path
              d="M40 105 L20 160"
              stroke="#805A2D"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M130 110 L115 165"
              stroke="#805A2D"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M210 70 L280 75"
              stroke="#805A2D"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </g>
          <path
            d="M-30 40 L260 20"
            stroke="#654321"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M-40 55 L270 35"
            stroke="#A76C38"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>
        <g id="plough">
          <path
            d="M-20 50 C-40 20 -80 10 -100 80 C-60 75 -40 80 -20 110 Z"
            fill="#5E381B"
            stroke="#2F1B0D"
            strokeWidth="4"
          />
          <path
            d="M-18 110 L-70 190"
            stroke="#2F1B0D"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M-60 190 Q-70 210 -95 200"
            stroke="#2F1B0D"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M-40 100 L-150 160"
            stroke="#1B1108"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>
        <g id="farmer" transform="translate(-150, 40)">
          <path
            d="M0 0 C-10 30 -10 60 5 90 L-10 110 L20 115 L40 80 C20 45 10 20 15 -10 Z"
            fill="#CC8C57"
            stroke="#6D3D1F"
            strokeWidth="4"
          />
          <path
            d="M10 -10 L50 -20 L65 -5 L25 5 Z"
            fill="#2C3E50"
          />
          <circle cx="35" cy="-7" r="12" fill="#F5CBA7" />
          <path
            d="M30 -13 Q34 -20 40 -14"
            stroke="#5C3317"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="31" cy="-7" r="2.5" fill="#2F1B0D" />
          <circle cx="40" cy="-4" r="2.5" fill="#2F1B0D" />
          <path
            d="M28 5 Q35 12 42 4"
            stroke="#8E4B2D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 95 L0 150"
            stroke="#6D3D1F"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M45 98 L30 152"
            stroke="#6D3D1F"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M25 20 L-90 100"
            stroke="#2F1B0D"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M-50 110 Q-70 120 -60 135"
            stroke="#2F1B0D"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>
      </g>
      <g transform="translate(0, 380)" opacity="0.35">
        {[...Array(10)].map((_, index) => (
          <path
            key={index}
            d={`M${index * 120} 0 C${index * 120 + 30} -10 ${
              index * 120 + 90
            } -10 ${index * 120 + 120} 0`}
            stroke="#2C5530"
            strokeWidth="12"
            strokeLinecap="round"
          />
        ))}
      </g>
    </svg>
  );
}
