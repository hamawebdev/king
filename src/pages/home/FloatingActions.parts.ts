/**
 * Shared finish for the phone buy bars (home and product): a short 1px brass rule on the top edge above the
 * price (the eyebrow rule of the brand) and a hairline split between the price and the actions.
 */
export const barAccentClass = [
  'before:pointer-events-none before:absolute before:top-[-1px] before:left-4 before:h-px before:w-7 before:bg-brass-500',
  '[&>div:first-child]:border-r [&>div:first-child]:border-hairline [&>div:first-child]:pr-4',
].join(' ')
