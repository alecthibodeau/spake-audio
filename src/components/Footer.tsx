import React, { useEffect, useRef } from 'react';

/* Constants */
import stringValues from '../constants/string-values';

/* Helpers */
import formatText from '../helpers/format-text';

function Footer(): JSX.Element {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { companies } = stringValues;
  const { formatLettersAndNumbers } = formatText;
  const isMotionReduced: boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!isMotionReduced) scrollerRef.current?.setAttribute('data-animated', 'true');
  }, [isMotionReduced]);

  function renderScrollItem(name: string, index: number): React.JSX.Element {
    return (
      <div key={`${index}${formatLettersAndNumbers(name)}`}>
        {name}
      </div>
    );
  }

  function renderHiddenScrollItem(name: string, index: number): React.JSX.Element {
    return (
      <div key={`${index}Hidden${formatLettersAndNumbers(name)}`} aria-hidden="true">
        {name}
      </div>
    );
  }

  return (
    <footer>
      <div className="scroller-outer" ref={scrollerRef}>
        <div className="scroller-inner">
          {companies.map(renderScrollItem)}
          {!isMotionReduced ? companies.map(renderHiddenScrollItem) : null}
        </div>
      </div>
      <div className="footer-copyright">
        {`Copyright Spake Audio ${new Date().getFullYear()}`}
      </div>
    </footer>
  );
}

export default Footer;
