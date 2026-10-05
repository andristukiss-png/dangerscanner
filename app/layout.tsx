import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "DangerScanner", description: "Point. Scan. Understand." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}