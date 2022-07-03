import { Link, Outlet } from 'react-router-dom';

import './header.styles.scss';

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <span className="header__logo">math magicians</span>
        </Link>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <Link className="header__nav-link" to="/">
                home
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/calculator">
                calculator
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/quote">
                quote
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
