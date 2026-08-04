import type {Metadata} from "next"; import "./globals.css";
export const metadata:Metadata={title:"Hospedagem & Eventos | Calculadora de preço",description:"Preço sugerido para hospedagens e eventos com base em custos e meta de lucro."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
