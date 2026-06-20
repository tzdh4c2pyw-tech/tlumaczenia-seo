import type { Metadata } from "next";
import ContactFormPage from "../components/ContactFormPage";

export const metadata: Metadata = {
  title: "Wstępna ocena materiału do tłumaczenia",
  description:
    "Prześlij dokument, tekst, skan, zdjęcie, fragment akt lub materiał cyfrowy do wstępnej oceny tłumaczenia. Język ukraiński, rosyjski i angielski. Prawo, sądy, Policja, prokuratura, cyber i forensic.",
  alternates: {
    canonical: "/kontakt"
  }
};

export default function ContactPage() {
  return <ContactFormPage />;
}