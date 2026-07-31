import { useState } from 'react'
import './Menu.css'

function Menu({ items }) {
  const [active, setActive] = useState(items[0]?.label)

  return (
    <nav className="menu">
      <ul className="menu__list">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`menu_link ${active === item.label ? 'menu_link--active' : ''}`}
              onClick={() => setActive(item.label)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu