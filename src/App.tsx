import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import Header from './components/Header';
import Main from './components/Main';

/* Styles */
import './App.css';

export default function App() {
  const [isBreakpointXs, setIsBreakpointXs] = useState<boolean>(true);
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

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

  return (
    // <>
    //   <Header isBreakpointXs={isBreakpointXs} />
    //   <Main />
    // </>
    <BrowserRouter>
      <Header isBreakpointXs={isBreakpointXs} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recording" element={<Main />} />
          <Route path="/editing" element={<Main />} />
          <Route path="/consulting" element={<Main />} />
          <Route path="/about" element={<Main />} />
          <Route path="/contact" element={<Main />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </BrowserRouter>
  );
}
