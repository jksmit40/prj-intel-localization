// Language Switcher for RTL/LTR Support
// This script detects and switches between RTL (Right-to-Left) and LTR (Left-to-Right) languages

// List of RTL languages
const rtlLanguages = ['ar', 'he', 'ur', 'fa', 'yi'];

// Function to set the page language and direction
function setLanguage(lang) {
  // Get the html element
  const html = document.documentElement;
  
  // Get the Bootstrap CSS link
  const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
  
  // Check if the language is RTL
  if (rtlLanguages.includes(lang)) {
    // Set RTL attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', 'rtl');
    
    // Load Bootstrap RTL CSS
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.rtl.min.css';
    bootstrapLink.integrity = 'sha384-WoTJNKZ1S0p9rs5XfENydhXiR7h5s8so81nVl2W0N0Ly7Y/PrhtS/WIvZQSkg7Q6';
  } else {
    // Set LTR attributes (default)
    html.setAttribute('lang', lang);
    html.removeAttribute('dir');
    
    // Load Bootstrap LTR CSS
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css';
    bootstrapLink.integrity = 'sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB';
  }
  
  // Store the selected language in localStorage
  localStorage.setItem('selectedLanguage', lang);
}

// Function to detect browser language on page load
function detectBrowserLanguage() {
  // Check if user has previously selected a language
  const savedLanguage = localStorage.getItem('selectedLanguage');
  
  if (savedLanguage) {
    // Use the saved language preference
    setLanguage(savedLanguage);
  } else {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    // Get the first two characters (e.g., 'en' from 'en-US')
    const langCode = browserLang.substring(0, 2);
    setLanguage(langCode);
  }
}

// Run language detection when page loads
window.addEventListener('DOMContentLoaded', detectBrowserLanguage);

// Example usage:
// To manually switch languages, you can call:
// setLanguage('en') for English
// setLanguage('ar') for Arabic
// setLanguage('he') for Hebrew
