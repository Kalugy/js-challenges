import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      // Example: Include query parameters if necessary
      const pagePath = `${location.pathname}${location.search}`;
      window.gtag('config', 'G-8Y63JDMW1T', {
        page_path: pagePath, // Includes full path with query parameters
      });
    }
  }, [location]); // Track every time location changes
};

export default useAnalytics;