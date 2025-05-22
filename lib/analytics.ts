// Event tracking utilities
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "engagement",
      event_label: window.location.pathname,
      ...parameters,
    })
  }
}

// Predefined events for common actions
export const analytics = {
  // Contact form events
  contactFormSubmit: (formType: string) => {
    trackEvent("contact_form_submit", {
      event_category: "form",
      form_type: formType,
    })
  },

  // Service page events
  servicePageView: (serviceName: string) => {
    trackEvent("service_page_view", {
      event_category: "service",
      service_name: serviceName,
    })
  },

  // Case study events
  caseStudyView: (caseStudyName: string) => {
    trackEvent("case_study_view", {
      event_category: "case_study",
      case_study_name: caseStudyName,
    })
  },

  // External link clicks
  externalLinkClick: (url: string, linkText: string) => {
    trackEvent("external_link_click", {
      event_category: "outbound",
      link_url: url,
      link_text: linkText,
    })
  },

  // Chat interactions
  chatInteraction: (action: string) => {
    trackEvent("chat_interaction", {
      event_category: "chat",
      chat_action: action,
    })
  },

  // Download events
  downloadClick: (fileName: string) => {
    trackEvent("file_download", {
      event_category: "download",
      file_name: fileName,
    })
  },

  // Consultation booking
  consultationBooking: (method: string) => {
    trackEvent("consultation_booking", {
      event_category: "conversion",
      booking_method: method,
    })
  },
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}
