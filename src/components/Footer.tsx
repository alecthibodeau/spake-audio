import React, { useEffect, useRef } from 'react';

/* Interfaces */
import Company from '../interfaces/Company';

/* Constants */
import stringValues from '../constants/string-values';

/* Helpers */
import formatText from '../helpers/format-text';

function Footer(): JSX.Element {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { companies } = stringValues;
  const { formatLettersAndNumbers } = formatText;
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
      >
        {company.name}
      </div>
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
      <div className="footer-copyright">
        {`Copyright Spake Audio ${new Date().getFullYear()}`}
      </div>
    </footer>
  );
}

export default Footer;
