import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* Interfaces */
import Company from '../interfaces/Company';

/* Constants */
import images from '../constants/images';
import stringValues from '../constants/string-values';

/* Helpers */
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/footer.css';

function Footer(): JSX.Element {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { spakeLogoLichen } = images.header;
  const { companies, footerRoutes, textFAQ } = stringValues;
  const { formatDisplayedRouteName, formatLettersAndNumbers } = formatText;
  const isMotionReduced: boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hiddenCompanies = companies.map(company => ({...company, isHidden: true}));

  useEffect(() => {
    if (!isMotionReduced) scrollerRef.current?.setAttribute('data-animated', 'true');
  }, [isMotionReduced]);

  function renderScrollItem(company: Company, index: number): React.JSX.Element {
    return (
      <div
        key={`${index}${formatLettersAndNumbers(company.name)}`}
        {...(company.isHidden ? { 'aria-hidden': true } : {})}
        className="scroll-item"
      >
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          title={company.name}
          className="scroll-item-logo"
        />
      </div>
    );
  }

  function renderFooterLink(routeName: string): React.JSX.Element {
    const formattedRoute: string = `/${routeName.replace(/\s+/g, '-').toLowerCase()}`
    return (
      <Link
        key={`route-${formattedRoute}`}
        className="text-link"
        to={formattedRoute}>
        {formatDisplayedRouteName(routeName, routeName === textFAQ)}
      </Link>
    );
  }

  return (
    <footer>
      <div className="scroller-outer" ref={scrollerRef}>
        <div className="scroller-inner">
          {companies.map(renderScrollItem)}
          {!isMotionReduced ? hiddenCompanies.map(renderScrollItem) : null}
        </div>
      </div>
      <div className="footer-information">
        <div className="footer-left">
          <div className="spake-information">
            <Link to="/">
              <img
                className="spake-logo-footer"
                src={spakeLogoLichen}
                alt="Spake Audio logo" />
            </Link>
            <div className="location">Providence, Rhode Island USA</div>
          </div>
          <div className="footer-copyright">
            &copy;{` Spake Audio ${new Date().getFullYear()}`}
          </div>
        </div>
        <div className="footer-right">
          {footerRoutes.map(renderFooterLink)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
