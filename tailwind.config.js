/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        DarkSlateGrey: "hsl(234, 29%, 20%)",
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(231, 7%, 60%)",
        Tomato: "hsl(4, 100%, 67%)",
      },
      gradientColorStops: {
        Tomato: "hsl(4, 100%, 67%)",
      },
      textColor: {
        CharcoalGrey: "hsl(235, 18%, 26%)",
        DarkSlateGrey: "hsl(234, 29%, 20%)",
        Grey: "hsl(231, 7%, 60%)",
        Tomato: "hsl(4, 100%, 67%)",
      },
      fontFamily: {
        outfit: "Outfit, sans-serif",
        pop: "Poppins, sans-serif",
        Roboto: "Roboto, sans-serif",
      },
      borderColor: {
        Tomato: "hsl(4, 100%, 67%)",
      },
      outlineColor: {
        Tomato: "hsl(4, 100%, 67%)",
      },
      listStyleType: {
        tick: "",
      },
    },
  },
  plugins: [],
};
