"use client"

export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label: string, value?: number) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  return { trackEvent }
}
