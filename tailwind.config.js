import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./assets/**/*.{svg}`,
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.teal,
        gray: colors.neutral,
        "san-juan": {
          50: "#f2f5fc",
          100: "#e2eaf7",
          200: "#ccd9f1",
          300: "#a9c2e7",
          400: "#80a2da",
          500: "#6284cf",
          600: "#4e6ac2",
          700: "#4459b1",
          800: "#3c4a91",
          900: "#344073",
          950: "#242a47",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.slate.500"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.600")} !important`,
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontSize: "1.25rem",
              fontWeight: "600",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.san-juan.800"),
            },
            h2: {
              fontSize: "1.25rem",
              fontWeight: "300",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.san-juan.800"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            details: {
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.slate.300"),
            a: {
              color: theme("colors.emerald.400"),
              "&:hover": {
                color: `${theme("colors.primary.400")} !important`,
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.slate.200"),
            },
            h2: {
              fontSize: "1.25rem",
              fontWeight: "300",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.emerald.500"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.slate.300"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            details: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.slate.500") },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.slate.400"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              th: {
                color: theme("colors.gray.100"),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
