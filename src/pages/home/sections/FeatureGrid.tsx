import type { ReactNode } from "react";
import { Card, Section, SectionHeading } from "@/components/kit";
import { cn } from "@/lib/utils";

type Feature = {
  emoji: string;
  title: string;
  text: ReactNode;
  highlight?: boolean;
};

const Kw = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-heading">{children}</strong>
);

/** Spec S2 — the 8 CleanShot cards, word for word (bold = the spec's bold SEO phrases). */
const FEATURES: Feature[] = [
  {
    emoji: "📺",
    title: "+5700 Chaînes Direct",
    text: "Sélection complète de flux TV en direct (France, Belgique, Suisse, International). Chaînes sportives, ciné et jeunesse en Full HD et 4K sans latence.",
  },
  {
    emoji: "📱",
    title: "Tous Vos Écrans",
    text: "Fonctionne sur Google TV, Smart TV Android (Sony, TCL, Xiaomi), TV Box, Fire TV Stick, smartphones et tablettes (Android & iOS), ainsi que PC et Mac.",
  },
  {
    emoji: "💰",
    title: "Économiser avec King 365",
    highlight: true,
    text: (
      <>
        Un seul <Kw>abonnement King 365 TV</Kw> remplace l'ensemble de vos
        abonnements séparés (Sport, Cinéma, Séries, EPG et Replay) au tarif le
        plus compétitif du marché.
      </>
    ),
  },
  {
    emoji: "⚡",
    title: "Stabilité Anti-Coupure",
    text: "Infrastructure éprouvée lors des grands soirs de matchs mondiaux. Serveurs puissants assurant une bande passante stable à 99,99% sans buffering ni gel d'image.",
  },
  {
    emoji: "🎬",
    title: "+12K Films & +4K Séries",
    text: "Bibliothèque VOD ultra-complète en haute définition. Des milliers de blockbusters récents et intégrales de séries avec mises à jour hebdomadaires.",
  },
  {
    emoji: "⏪",
    title: "Replay sur +580 Chaînes",
    text: "Ne manquez aucun programme. Profitez d'une fonction rediffusion (Replay) performante couvrant plus de 580 chaînes avec contrôle du direct de 7 à 15 jours.",
  },
  {
    emoji: "🚀",
    title: "Envoi Immédiat & Renouvellement",
    text: (
      <>
        Codes envoyés immédiatement dès validation. Déjà client ? Optez pour le{" "}
        <Kw>renouvellement King 365</Kw> sans réinstaller votre application ni
        perdre vos réglages.
      </>
    ),
  },
  {
    emoji: "🛡️",
    title: "Accès Garanti & Support 24/7",
    text: (
      <>
        Assistance réactive pour vous accompagner,{" "}
        <Kw>renouveler votre abonnement King 365</Kw> ou assurer la{" "}
        <Kw>recuperation code king 365</Kw> sans frais supplémentaires.
      </>
    ),
  },
];

/** Section 02 — « Points forts »: badge, H2, SEO subtitle and the 8-card grid (4 / 2 / 1 columns). */
export function HomeFeatureGrid() {
  return (
    <Section id="points-forts" className="scroll-mt-20">
      <SectionHeading
        eyebrow="POINTS FORTS · PERFORMANCE & FIABILITÉ"
        title="Tout Savoir sur Votre Abonnement King 365 TV"
        subtitle="Que vous souhaitiez activer un nouvel abonnement King 365 ou sécuriser le renouvellement King 365 de votre code actuel, découvrez une infrastructure stable et réactive, pensée pour le confort de chaque utilisateur, du salon au mobile."
      />

      <ul className="m-0 mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-5">
        {FEATURES.map((f) => (
          <Card
            as="li"
            key={f.title}
            interactive
            className={cn(
              "relative flex flex-col gap-3 p-5 sm:gap-4 sm:p-6",
              f.highlight &&
                "border-brand/40 bg-brand-soft ring-1 ring-brand/20 hover:border-brand/60",
            )}
          >
            <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
              <span
                aria-hidden="true"
                className={cn(
                  "inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-[1.375rem] leading-none",
                  f.highlight ? "bg-canvas shadow-card" : "bg-brand-soft",
                )}
              >
                {f.emoji}
              </span>
              <h3
                className={cn(
                  "text-lg leading-snug font-semibold tracking-tight",
                  f.highlight ? "text-brand" : "text-heading",
                )}
              >
                {f.title}
              </h3>
            </div>
            <p className="text-[0.9375rem] leading-relaxed text-pretty text-body">
              {f.text}
            </p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
