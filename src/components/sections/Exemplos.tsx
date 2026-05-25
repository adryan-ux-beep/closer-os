import { exemplos } from '../../data/exemplos'

export function Exemplos() {
  return (
    <section id="exemplos">
      <div className="container">
        <div className="section-eyebrow fade-up">Veja funcionando</div>
        <h2 className="exemplos-headline fade-up d1" style={{
          textAlign: 'center',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: 80,
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-0.04em',
        }}>
          Situações reais.<br className="br-desktop" />{' '}Respostas em tempo real.
        </h2>
        <p className="body-lg fade-up d2" style={{ textAlign: 'center', maxWidth: 620, margin: '16px auto 0' }}>
          Por trás do CloserOS™: mais de R$9.000.000 em vendas 1:1 e a expertise dos maiores especialistas em vendas do mundo.
        </p>
        <div className="exemplos-grid">
          {exemplos.map((ex, i) => (
            <div key={ex.id} className={`exemplo-card fade-up${i > 0 ? ` d${i}` : ''}`}>
              <div className="ex-header">
                <span className="ex-tag-dot" />
                <div className="ex-tag">{ex.titulo}</div>
              </div>
              <div className="ex-body">
                <div className="ex-bubble ex-user">{ex.pergunta}</div>
                <div style={{ alignSelf: 'flex-start' }}>
                  <div className="ex-sender">▸ CloserOS™</div>
                  <div className="ex-bubble ex-ai">
                    {ex.resposta}<strong>{ex.destacado}</strong>
                    {ex.id === 'e1' && ' Isso reativa sem pressionar.'}
                    {ex.id === 'e2' && ' Fique em silêncio depois. Quase sempre a objeção real não é o preço — é incerteza sobre o resultado. A resposta dele vai te dizer exatamente como conduzir.'}
                    {ex.id === 'e3' && ' Essa pergunta faz ele revelar a dor real — e te coloca no papel de especialista, não de vendedor.'}
                    {ex.id === 'e4' && ' A resposta revela se é objeção real ou teste.'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
