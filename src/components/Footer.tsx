import React, { useEffect, useRef } from 'react';

function Footer(): JSX.Element {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const companies: string[] = [
    'New York Times',
    'Penguin Random House',
    'HarperCollins Publishers',
    'John Marshall Media',
    'Dreamscape Media',
    'Blackstone Publishing',
    'Berklee Online'
  ];

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scrollerRef.current?.setAttribute('data-animated', 'true');
    }
  }, []);

  function renderScrollItem(name: string, index: number): React.JSX.Element {
    return (<div key={`${index}${name}`}>{name}</div>);
  }

  function renderHiddenScrollItem(name: string, index: number): React.JSX.Element {
    return (<div key={`${index}Hidden${name}`} aria-hidden="true">{name}</div>);
  }

  return (
    <footer>
      <div className="scroller" ref={scrollerRef}>
        <div className="scroller-inner">
          {companies.map(renderScrollItem)}
          {companies.map(renderHiddenScrollItem)}
        </div>
      </div>
      <div className="footer-copyright">
        {`Copyright Spake Audio ${new Date().getFullYear()}`}
      </div>
    </footer>
  );
}

export default Footer;
