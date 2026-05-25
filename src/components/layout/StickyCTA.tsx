import { useStickyCTA } from '../../hooks/useStickyCTA'

export function StickyCTA() {
  const visible = useStickyCTA()
  return (
    <div id="sticky-cta" role="complementary" className={visible ? 'visible' : ''}>
      <div className="sticky-label">
        <small>Pagamento único</small>
        <strong>R$47</strong>
      </div>
      <a href="#oferta" className="btn-primary" style={{ minHeight: 44, padding: '0 24px', fontSize: '0.82rem' }}>
        Quero agora →
      </a>
    </div>
  )
}
