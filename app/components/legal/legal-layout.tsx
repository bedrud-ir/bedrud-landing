import { Footer } from "~/components/landing/footer";
import { Navbar } from "~/components/landing/navbar";

export function LandingLayout({
  children,
  narrow = false,
}: {
  children: React.ReactNode;
  narrow?: boolean;
}) {
  return (
    <>
      <Navbar />
      <div className="h-16" />
      <main
        id="main-content"
        className={narrow ? "mx-auto max-w-3xl px-6 py-16" : undefined}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return <LandingLayout narrow={true}>{children}</LandingLayout>;
}
