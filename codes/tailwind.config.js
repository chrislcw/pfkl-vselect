const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./layouts/**/*.twig",
    "./templates/**/*.twig",
    "./src/**/*.{js,jsx}",
    "../../../modules/custom/tema_mod/templates/**/*.twig",
  ],
  // safelist: [
  //   {
  //     pattern: /grid-cols-(1|2|3|4|5|6)/,
  //     variants: ["lg", "xl"],
  //   },
  // ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {},
      colors: {
        ideaOrange100: "#F38336",
        ideaOrange100Hover: "#F29A16",

        ideaBlue100: "#004587",
        ideaBlue100Hover: "#0369CB",

        ideaCyanSignal: "#36A0E7",
        ideaTextBlack100: "#2D3246",
        ideaListGrey100: "#E5E7E9",
        ideaBackgroundGrey100: "#F9F9FB",
        ideaTableThead: "#A3ABBC",

        ideaFooterBlue: "#023D75",
        ideaFooterBlueDark: "#00305E",
      },
      fontSize: {
        desktopL: "24px",
        desktopM: "18px",
        desktopS: "15px",
        desktopXS: "12px",

        mobileL: "17px",
        mobileM: "15px",
        mobileS: "13px",
        mobileXS: "10px",

        desktopCardTitleL: "28px",
        mobileCardTitleL: "18px",

        desktopCardTitleM: "18px",
        mobileCardTitleM: "14px",

        mobileCardTitleS: "13px",

        // xs: "12px",
        // sm: "15px",
        // base: "1rem",
        // lg: "20px",
        // xl: "22px",
        // "2xl": "28px",
        // "3xl": "33px",
        // "4xl": "40px",
        // "5xl": "54px",
        // "6xl": "68px",
      },
      fontFamily: {
        inter: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      textAlign: ["child-th"],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("child-th", "& th");
      addVariant("child-td", "& td");
    }),
  ]
  // plugins: [
  //   plugin(function({ addBase }) {
  //     addBase({
  //        'html': { fontSize: "18px" },
  //      })
  //    }),
  //    require('tw-elements/dist/plugin'),
  // ],
};
