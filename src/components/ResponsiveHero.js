import React, { useEffect, useState } from 'react';
import DesktopHero from './DesktopHero.js';
import MobileHero from './MobileHero.js';

const ResponsiveHero = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return isDesktop ? <DesktopHero /> : <MobileHero />;
};

export default ResponsiveHero;
