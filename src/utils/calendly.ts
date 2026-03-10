export const openCalendly = (url: string) => {
  window.dispatchEvent(new CustomEvent('openCalendly', { detail: { url } }));
};

export const CALENDLY_URLS = {
  discovery: 'https://calendly.com/raghav-rapidxai/discovery',
  deepdive: 'https://calendly.com/raghav-rapidxai/deep-dive'
};
