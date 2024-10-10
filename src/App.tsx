import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Section from './components/Section';

/* Interfaces */
import SectionProps from './interfaces/SectionProps';

/* Constants */
import stringValues from './constants/string-values';

/* Styles */
import './App.css';

export default function App() {
  const [isBreakpointXs, setIsBreakpointXs] = useState<boolean>(true);
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const { sections, textWelcome } = stringValues;

  useEffect(() => {
    const breakpointSm: number = 576;
    const resize: string = 'resize';
    window.addEventListener(resize, getViewportWidth);
    setIsBreakpointXs(viewportWidth < breakpointSm);
    return () => window.removeEventListener(resize, getViewportWidth);
  }, [viewportWidth]);

  function getViewportWidth(): void {
    setViewportWidth(window.innerWidth);
  }

  function renderRoute(props: SectionProps): JSX.Element {
    const routePath = `/${props.heading === textWelcome ? '' : props.heading}`;
    return (
      <Route
        key={`${props.heading}SectionRoute`}
        path={routePath}
        element={
          <Section
            heading={props.heading}
            description={props.description}
          />
        }
      />
    );
  }

  return (
    <BrowserRouter>
      <Header isBreakpointXs={isBreakpointXs} />
      <main>
        <Routes>
          {sections.map(renderRoute)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
