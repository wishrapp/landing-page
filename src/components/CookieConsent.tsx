import React from 'react';
import CookieConsent from 'react-cookie-consent';

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="wishr-cookie-consent"
      style={{ background: '#2B3137' }}
      buttonStyle={{ 
        background: '#9333EA',
        color: 'white',
        fontSize: '13px',
        borderRadius: '20px',
        padding: '8px 24px'
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience. See our{' '}
      <a href="/privacy" className="text-purple-300 hover:text-purple-200">
        Privacy Policy
      </a>
      {' '}for more details.
    </CookieConsent>
  );
}