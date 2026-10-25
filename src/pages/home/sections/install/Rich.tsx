import { Fragment, type ReactNode } from 'react'
import { waLink } from '@/lib/site'
import { WA_MESSAGES, type WaMessageKey } from './devices'
import { nb } from './text'

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\(wa:[a-zA-Z]+\))/g

function renderToken(token: string, key: number): ReactNode {
  if (token.startsWith('**')) return <strong key={key} className="font-semibold text-heading">{nb(token.slice(2, -2))}</strong>
  if (token.startsWith('*')) return <em key={key}>{nb(token.slice(1, -1))}</em>
  if (token.startsWith('`'))
    return (
      <code key={key} className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[0.88em] text-heading [box-decoration-break:clone]">
        {token.slice(1, -1)}
      </code>
    )
  const match = /^\[([^\]]+)\]\(wa:([a-zA-Z]+)\)$/.exec(token)
  if (!match) return token
  const message = WA_MESSAGES[match[2] as WaMessageKey]
  return (
    <a
      key={key}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium whitespace-nowrap text-brand underline decoration-brand/30 underline-offset-2 hover:text-brand-hover hover:decoration-brand"
    >
      {match[1]}
    </a>
  )
}

/** Renders the data modules' light inline markup: **bold**, *italic*, `mono`, [label](wa:key). */
export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN)
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? renderToken(part, i) : <Fragment key={i}>{nb(part)}</Fragment>))}
    </>
  )
}
