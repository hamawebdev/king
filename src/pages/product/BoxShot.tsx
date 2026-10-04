import { Placeholder } from '@/components/site/Placeholder'

// Stand-in for the product box render. The original is a 1304×1557 transparent PNG with the 3D box
// drawn in its middle, so the frame keeps that ratio and the box sits where the artwork does.
export function BoxShot({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`relative aspect-[1304/1557] ${className}`} role="img" aria-label={label}>
      <div className="absolute top-[8.5%] left-[12.7%] flex h-[85%] w-[75.4%] drop-shadow-[0_10px_14px_rgba(11,30,71,0.22)]">
        <Placeholder tone="light" bare label="" className="mt-[1.5%] h-[97%] flex-[0_0_15.6%]" />
        <Placeholder tone="product" label={label} className="flex-auto" />
      </div>
    </div>
  )
}
