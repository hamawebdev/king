export type LegalDoc = 'cgu' | 'cgv' | 'privacy' | 'refund'

// TODO: legal page template (placeholder stub).
export default function Legal({ doc }: { doc: LegalDoc }) {
  return <div style={{ minHeight: 600 }} data-doc={doc} />
}
