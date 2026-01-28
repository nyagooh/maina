import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Orange - Primary accent color
        orange: {
          50: "#FFF5F0",
          100: "#FFE8E0",
          200: "#FFD1C0",
          300: "#FFBAA0",
          400: "#FFA07A",
          500: "#FF8B5A", // Main orange
          600: "#FF6B35", // Primary accent
          700: "#E55A2B",
          800: "#CC4A21",
          900: "#B33A17",
        },
        // Black - High contrast
        black: {
          DEFAULT: "#000000",
          900: "#000000",
          800: "#1A1A1A",
          700: "#2C2C2C",
        },
        // Charcoal - Dark backgrounds and depth
        charcoal: {
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#999999",
          400: "#666666",
          500: "#4D4D4D",
          600: "#333333",
          700: "#2C2C2C",
          800: "#1A1A1A",
          900: "#0F0F0F",
        },
        // White - Clean backgrounds
        white: {
          DEFAULT: "#FFFFFF",
          off: "#FAFAFA",
          warm: "#F8F8F8",
        },
        // Neutral Greys - Subtle backgrounds and secondary text
        grey: {
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#999999",
          400: "#666666",
          500: "#4D4D4D",
          600: "#333333",
        },
        // Legacy support - map old colors to new palette
        base: {
          light: "#FAFAFA", // White off
          dark: "#000000", // Black
          muted: "#666666", // Neutral grey
        },
        accent: {
          50: "#FFF5F0",
          100: "#FFE8E0",
          200: "#FFD1C0",
          300: "#FFBAA0",
          400: "#FFA07A",
          500: "#FF8B5A",
          600: "#FF6B35", // Primary orange accent
          700: "#E55A2B",
          800: "#CC4A21",
          900: "#B33A17",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
