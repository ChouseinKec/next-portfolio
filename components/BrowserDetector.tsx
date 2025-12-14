'use client';
import { useEffect } from 'react';
import { useUserAgent } from '@/hooks/useUserAgent';

const BrowserDetector: React.FC = () => {
  const { browser, supportsAnimationTimeline } = useUserAgent();

  useEffect(() => {
    // Update body attributes when browser info is available
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-browser', browser);
      document.body.setAttribute('data-supports-timeline', supportsAnimationTimeline.toString());
    }
  }, [browser, supportsAnimationTimeline]);

  return null; // This component doesn't render anything
};

export default BrowserDetector;
