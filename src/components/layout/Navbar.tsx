export function Navbar() {
  return (
    <nav id="navbar" role="banner">
      <div className="nav-inner">
        <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/logo1.webp" alt="CloserOS™" style={{ height: 32, width: 'auto' }} />
        </a>
        <a href="#oferta" className="btn-ghost">Quero o CloserOS™ — R$47 →</a>
      </div>
    </nav>
  )
}
