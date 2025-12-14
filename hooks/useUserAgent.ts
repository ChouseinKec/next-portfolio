'use client';
import { useEffect, useState } from 'react';

export type BrowserType = 'chrome' | 'firefox' | 'safari' | 'edge' | 'opera' | 'unknown';

interface UserAgentInfo {
  browser: BrowserType;
  userAgent: string;
  isChromium: boolean;
  supportsAnimationTimeline: boolean;
}

export const useUserAgent = (): UserAgentInfo => {
  const [userAgentInfo, setUserAgentInfo] = useState<UserAgentInfo>({
    browser: 'unknown',
    userAgent: '',
    isChromium: false,
    supportsAnimationTimeline: false,
  });

  useEffect(() => {
    const detectBrowser = (): UserAgentInfo => {
      const userAgent = navigator.userAgent.toLowerCase();
      let browser: BrowserType = 'unknown';
      let isChromium = false;

      // Edge (must be checked before Chrome since it contains 'chrome' in UA)
      if (userAgent.includes('edg/') || userAgent.includes('edge/')) {
        browser = 'edge';
        isChromium = true;
      }
      // Chrome (must be checked before Safari since Safari UA contains 'chrome')
      else if (userAgent.includes('chrome') && !userAgent.includes('edg/')) {
        browser = 'chrome';
        isChromium = true;
      }
      // Firefox
      else if (userAgent.includes('firefox')) {
        browser = 'firefox';
        isChromium = false;
      }
      // Safari (check after Chrome to avoid false positives)
      else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
        browser = 'safari';
        isChromium = false;
      }
      // Opera
      else if (userAgent.includes('opera') || userAgent.includes('opr/')) {
        browser = 'opera';
        isChromium = true;
      }

      // Check for animation-timeline support
      const supportsAnimationTimeline = CSS.supports('animation-timeline', 'scroll()');

      return {
        browser,
        userAgent,
        isChromium,
        supportsAnimationTimeline,
      };
    };

    setUserAgentInfo(detectBrowser());
  }, []);

  return userAgentInfo;
};

export default useUserAgent;
