import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/* Constants */
import images from '../constants/images';

function Header(props: { isBreakpointXs: boolean }): JSX.Element {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const { spakeLogoGreen, spakeLogoWhite } = images.header;
  const routes = ['recording', 'editing', 'consulting', 'about', 'contact'];

  useEffect(() => {
    const mainElement: HTMLElement | null = document.getElementById('main');
    if (mainElement) {
      const click: string = 'click';
      mainElement.addEventListener(click, closeMobileNav);
      return function cleanupEventListener() {
        mainElement.removeEventListener(click, closeMobileNav);
      }
    }
  }, []);

  useEffect(() => {
    if (!props.isBreakpointXs && isMobileNavOpen) closeMobileNav();
  }, [props.isBreakpointXs, isMobileNavOpen]);

  function closeMobileNav(): void {
    setIsMobileNavOpen(false);
  }

  function renderBurgerBar(bar: string, index: number): JSX.Element {
    return (
      <div
        key={`${bar}-${index}`}
        className={`${bar}${isMobileNavOpen ? ' closing-x-bar' : ''}`}>
      </div>
    )
  }

  function renderNavLink(link: string): JSX.Element {
    return (
      <div className="nav-link-wrapper" key={`linkTo${link}`}>
        <NavLink
          to={`/${link}`}
          className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          onClick={closeMobileNav}>
          {link}
        </NavLink>
      </div>
    );
  }

  return (
    <header>
      <div className="spake-logo-and-burger-button">
        <Link to="/" onClick={closeMobileNav}>
          <img
            className={`spake-logo-${props.isBreakpointXs ? 'light' : 'dark'}`}
            src={props.isBreakpointXs ? spakeLogoWhite : spakeLogoGreen}
            alt="Spake Audio logo" />
        </Link>
        {props.isBreakpointXs ?
          <button
            id="burgerButton"
            className={`burger-button${isMobileNavOpen ? ' closing-x-button' : ''}`}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            <div className="burger-bars-container">
              {Array(3).fill('bar').map(renderBurgerBar)}
            </div>
          </button>
        : null}
      </div>
      <nav className={`mobile-nav-is-${isMobileNavOpen ? 'open' : 'closed'}`}>
        {routes.map(renderNavLink)}
      </nav>
    </header>
  );
}

export default Header;