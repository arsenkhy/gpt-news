/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        gray: "#808080",
        third: "#4362ff",
        accent: "#FCA5A5",
        success: "#48BB78",
        warning: "#FBBF24",
        danger: "#DC2626",
        neutral: "#E5E7EB",
      },
      backgroundImage: (theme) => ({
        'gradient-beams': 'linear-gradient(to left, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.2) 50%), linear-gradient(to bottom, rgba(106, 130, 250, 0.1) 0%, rgba(222, 99, 155, 0.1) 100%)',
        "gradient-gradual":
          "linear-gradient(180deg, rgba(67, 98, 255, 0) 66.15%, #000000 100%)",
        "gradient-new": 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.15) 0px, transparent 0%), radial-gradient(at 97% 21%, hsla(191, 39%, 50%, 0.2) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(202, 69%, 62%, 0.15) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.15) 0px, transparent 50%), radial-gradient(at 97% 96%, hsla(241, 92%, 42%, 0.1) 0px, transparent 50%), radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 0.3) 0px, transparent 50%), radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 0.3) 0px, transparent 50%)',  
      }),
      maxWidth: {
        maxw: '1600px',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px", 
      lg: "1280px",
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
