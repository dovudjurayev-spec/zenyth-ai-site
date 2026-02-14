import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#090E1A",
        muted: "rgba(232,238,248,0.72)",
        line: "rgba(226,234,247,0.2)",
        accent: "#F3F7FF",
        brand: "#5E78FF"
      },
      maxWidth: {
        content: "78rem",
        prose: "56rem"
      },
      fontFamily: {
        heading: ["Geist", "Inter", "ui-sans-serif", "sans-serif"],
        body: ["Geist", "Inter", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
