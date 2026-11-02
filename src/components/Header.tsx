import './Header.css'

const navItems = [
  { label: 'About me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="#top" aria-label="alice.dev – back to top">
          alice<span>.dev</span>
        </a>

        <nav aria-label="Main">
          <ul className="header__nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="header__link" href={item.href}>
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
