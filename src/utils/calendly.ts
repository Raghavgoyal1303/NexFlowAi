export const openCalendly = (url: string) => {
  // Try the PopupModal via custom event first
  const event = new CustomEvent('openCalendly', { detail: { url } });
  const dispatched = window.dispatchEvent(event);
  
  // Fallback: open in new tab if popup doesn't work
  setTimeout(() => {
    const modal = document.querySelector('.calendly-overlay');
    if (!modal) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, 500);
};

export const CALENDLY_URLS = {
  discovery: 'https://calendly.com/raghavgoyal1303/30min',
  deepdive: 'https://calendly.com/raghavgoyal1303/deep-dive-with-raghav'
};
