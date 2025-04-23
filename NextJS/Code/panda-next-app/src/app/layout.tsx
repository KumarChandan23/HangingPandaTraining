import { ReactNode } from "react";
import "./globals.css"; // optional
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Simple Layout Example",
  description: "Learning layout routing in Next.js",
};

export default function RootLayout({
  children,
  sidebar,
  add
}: {
  children: ReactNode;
  sidebar: ReactNode;
  add:ReactNode
}) {
  return (
    <html lang="en">
      <body className="border" style={{height:"100vh"}}>
     
        <Header />
        <div style={{ display: "flex", height: "" }} className="">
          {/* Sidebar Section */}
          <aside style={{ width: "25%", borderRight: "1px solid #ccc", padding: "1rem" }}>
            {sidebar}
          </aside>

          {/* Main Content Section */}
          <main style={{ padding: "1rem", flex: 1 }}>{children}</main>

          <aside className="border w-[200px]">
          {add}
          </aside>
        </div>

        <footer style={{ padding: "1rem", background: "#eee" }}>© 2025 My Website</footer>
      </body>
    </html>
  );
}