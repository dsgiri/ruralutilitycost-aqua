export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  } else {
    console.log(`[Analytics Analytics] Event: ${eventName}`, params);
  }
}
