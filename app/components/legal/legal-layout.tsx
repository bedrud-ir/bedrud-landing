import { Footer } from "~/components/landing/footer";
import { Navbar } from "~/components/landing/navbar";

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="h-16" />
      <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>
      <Footer />
    </>
  );
}
