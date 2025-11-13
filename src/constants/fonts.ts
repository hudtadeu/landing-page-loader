import { Inter, Instrument_Serif } from "next/font/google";

export const heading = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    variable: "--font-heading",
});

export const base = Inter({
    subsets: ["latin"],
    variable: "--font-base",
});

export const subheading = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-subheading",
});