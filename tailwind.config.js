// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Your color palette
        honeydew: "#E5F4E3",
        "argentinian-blue": "#5DA9E9",
        "marian-blue": "#003F91",
        white: "#FFFFFF",
        finn: "#6D326D",

        // Semantic color assignments
        primary: "#003F91", // marian-blue
        secondary: "#5DA9E9", // argentinian-blue  
        accent: "#6D326D", // finn
        background: "#FFFFFF", // white
        muted: "#E5F4E3", // honeydew
        text: "#111827", // keep your existing text color
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
        bebas: ["var(--font-bebas-neue)"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      screens: {
        // customize breakpoints if you want
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
