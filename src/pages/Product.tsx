import { useParams } from 'react-router'

// TODO: product page template (placeholder stub).
export default function Product() {
  const { slug } = useParams()
  return <div style={{ minHeight: 600 }} data-slug={slug} />
}
