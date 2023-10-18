import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Pruebas con Tailwindcss",
  description: "Instalando prettier-plugin-tailwind y tailwindcss-animated",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
