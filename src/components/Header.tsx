import { useEffect, useState } from 'react'
import './Header.css'

const navItems = [
  { label: 'About me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="#top" aria-label="Alice Larsson, till startsidan">
          <span className="header__logo-bracket">&lt;</span>
          <span className="header__logo-initials">AL</span>
          <span className="header__logo-bracket">/&gt;</span>
        </a>

        <button
          type="button"
          className="header__link header__menu-btn"
          aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`header__menu${menuOpen ? ' header__menu--open' : ''}`}
        >
          <ul className="header__nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="header__link" href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
