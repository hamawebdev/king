// Routes and types shared by the home landing sections. Each section keeps its own copy in its file
// under ./sections; every sentence there is placeholder copy written for the layout clone, and
// lengths are matched to the original only so that lines wrap the same way.

export type IconText = { icon: string; label: string }
export type Card = { icon: string; title: string; text: string; badge?: string }

export const ROUTES = {
  p3: '/produit/abonnement-3-mois/',
  p6: '/produit/abonnement-6-mois/',
  p12: '/produit/abonnement-12-mois/',
  p24: '/produit/abonnement-24-mois/',
  renew: '/produit/renouvellement-12-mois/',
}
