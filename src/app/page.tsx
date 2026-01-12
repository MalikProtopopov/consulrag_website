import {
  Header,
  Hero,
  HowItWorks,
  ForWhom,
  Features,
  Integrations,
  TrustSignals,
  Pricing,
  FAQ,
  FinalCTA,
  Footer,
} from "@/widgets";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ForWhom />
        <Features />
        <Integrations />
        <TrustSignals />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
