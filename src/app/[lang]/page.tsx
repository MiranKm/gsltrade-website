import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhySolar } from "@/components/WhySolar";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} t={t} />
      <main>
        <Hero t={t} />
        <WhySolar t={t} />
        <About t={t} />
        <Gallery t={t} />
        <Services t={t} />
        <Process t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
