import { defineConfig } from "windicss-webpack-plugin";

export default defineConfig({
  attributify: true,
  extract: {
    include: ["**/*.{jsx,tsx,css}", "./src/**/*.{jsx,js,ts,tsx"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      colors: {
        "pri-100": "var(--pri-100)",
        "pri-110": "var(--pri-110)",

        "neutral-100": "var(--neutral-100)",
        "neutral-110": "var(--neutral-110)",
        "neutral-120": "var(--neutral-120)",
        "neutral-130": "var(--neutral-130)",
        "neutral-140": "var(--neutral-140)",
        "neutral-150": "var(--neutral-150)",
      },
    },
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    screens: {
      'xs': "475px",
      'sm': "476px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1400px",
      "2xl": "1536",
    },
    flex: {
      "1/4": '1 1 25%',
      "1/3": '1 1 33%',
      "1/2": '1 1 50%',
    }
  },
  shortcuts: {
    'btn': 'focus:outline-none focus-visible:ring focus-visible:ring-pri-100 rounded-xl  ',
    'pgt-hover': 'hover:opacity-60',
  }
});

