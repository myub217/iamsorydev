import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top smoothly on route change.
 * Improves UX by mimicking native mobile navigation behavior.
 */
const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
