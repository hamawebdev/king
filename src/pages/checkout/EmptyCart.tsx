import { ButtonLink, ChannelMosaic, DeviceFrame } from '@/components/brand'

// Empty checkout: a dark, unselected channel screen (nothing in the cart yet), the notice, the way back to the shop.
export function EmptyCart() {
  return (
    <div className="mx-auto flex max-w-[560px] flex-col items-center text-center">
      <DeviceFrame className="w-[min(100%,240px)] md:w-[280px]">
        <ChannelMosaic selected={0} osd={false} className="opacity-45" />
      </DeviceFrame>
      <p className="mt-12 font-display text-display-sm text-ink">Votre panier est actuellement vide.</p>
      <ButtonLink to="/pricing/" size="lg" className="mt-8 w-full sm:w-auto">
        Retour à la boutique
      </ButtonLink>
    </div>
  )
}
