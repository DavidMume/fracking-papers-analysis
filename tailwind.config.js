/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          plane: "#0d0d0c",
          surface: "#171613",
          raised: "#1f1d19",
          primary: "#f3efe6",
          secondary: "#c3bfb2",
          muted: "#8a8578",
          hairline: "#2c2a25",
          baseline: "#3a372f",
        },
        theme: {
          water: "#3987e5",
          environment: "#199e70",
          economy: "#c98500",
          justice: "#9085e9",
          health: "#e66767",
          seismicity: "#d95926",
        },
      },
      backgroundImage: {
        core: "repeating-linear-gradient(180deg, rgba(243,239,230,0.05) 0px, rgba(243,239,230,0.05) 1px, transparent 1px, transparent 14px)",
      },
    },
  },
  plugins: [],
};
