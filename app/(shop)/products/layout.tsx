// app/(shop)/products/layout.tsx
import type { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3">
          <Sidebar />
        </aside>
        <main className="lg:col-span-9">{children}</main>
      </div>
    </div>
  );
}
