/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: {
          primary: "#080B14",
          secondary: "#0D1120",
          card: "#0F1525",
          glass: "rgba(15, 21, 37, 0.6)",
        },
        accent: {
          blue: "#4F8EF7",
          purple: "#8B5CF6",
          cyan: "#22D3EE",
          green: "#10B981",
          pink: "#EC4899",
        },
        text: {
          primary: "#F0F4FF",
          secondary: "#8B96B5",
          muted: "#4B5678",
        },
        border: {
          glass: "rgba(79, 142, 247, 0.15)",
          glow: "rgba(79, 142, 247, 0.4)",
        },
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { "box-shadow": "0 0 20px rgba(79, 142, 247, 0.3)" },
          "50%": { "box-shadow": "0 0 50px rgba(79, 142, 247, 0.7)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(79,142,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};
