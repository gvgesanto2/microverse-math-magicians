import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <span className="header__logo">math magicians</span>
        </Link>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-link">
              <Link to="/">home</Link>
            </li>
            <li className="header__nav-link">
              <Link to="/calculator">calculator</Link>
            </li>
            <li className="header__nav-link">
              <Link to="/quote">quote</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
