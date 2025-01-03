import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transform: { "preserve-3d": "preserve-3d" },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      flip: {
        "0%, 100%": { transform: "rotateX(0)" },
        "50%": { transform: "rotateX(180deg)" },
      },
      animation: {
        flip: "flip 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
