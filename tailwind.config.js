/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 15px 5px rgba(0, 0, 0, 0.1)", // Custom shadow with blur, spread, and opacity
      },
      animation: {
        floatCheckout: "floatCheckout 1s ease-out forwards",
      },
      keyframes: {
        floatCheckout: {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
