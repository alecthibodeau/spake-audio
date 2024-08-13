import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/* Constants */
// import images from '../constants/images';
import stringValues from '../constants/string-values';
import svgPaths from '../constants/svg-paths';

function Header(props: { isBreakpointXs: boolean }): JSX.Element {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  // const { spakeLogoGreen, spakeLogoWhite } = images.header;

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

  function renderSVGPath(drawn: string, index: number): JSX.Element {
    return (
      <path
        key={`pathDrawn${index}`}
        d={drawn}
        className={`spake-logo-${props.isBreakpointXs ? 'light' : 'dark'}`}
      />
    );
  }

  return (
    <header>
      <div className="spake-logo-and-burger-button">
        <Link to="/" onClick={closeMobileNav}>
          {/* <img
            className={`spake-logo-${props.isBreakpointXs ? 'light' : 'dark'}`}
            src={props.isBreakpointXs ? spakeLogoWhite : spakeLogoGreen}
            alt="Spake Audio logo" /> */}
            <svg id="SpakeAudioLogo" xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="140 100 200 200">
              {svgPaths.spakeLogoPaths.map(renderSVGPath)}
            </svg>
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
        {stringValues.routes.map(renderNavLink)}
      </nav>
    </header>
  );
}

export default Header;