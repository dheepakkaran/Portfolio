import { useEffect } from 'react';

export const Analytics = () => {
  useEffect(() => {
    // Add your analytics initialization code here
    // Example: Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'YOUR-GA-ID');

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};