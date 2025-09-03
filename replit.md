# Overview

This is a multi-country inflation calculator website that provides financial calculation tools for various Latin American countries and the United States. The application allows users to calculate the impact of inflation on their money over time, with localized versions for Argentina, Chile, Colombia, Mexico, Paraguay, Peru, Uruguay, and the United States. Each country version displays calculations in the respective local currency and language (Spanish for Latin American countries, English for the US).

The calculator computes future purchasing power, value loss due to inflation, and equivalent present-day values based on user-input parameters including initial amount, inflation rate, and time period in years.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a **static HTML/CSS/JavaScript architecture** with separate pages for each country calculator. This approach was chosen for:
- **Simplicity**: No server-side complexity or frameworks needed
- **SEO Optimization**: Each country gets its own URL for better search engine indexing
- **Performance**: Fast loading with minimal dependencies
- **Maintainability**: Easy to update individual country calculators without affecting others

### Page Structure Design
Each HTML page follows a consistent template pattern with:
- **Country-specific localization**: Currency symbols, placeholder values, and language adapted per region
- **Shared navigation**: Dropdown menu allowing users to switch between country calculators
- **Consistent layout**: Uniform calculator form structure across all pages
- **SEO optimization**: Meta tags, descriptions, and keywords tailored for each country

### Calculator Logic Implementation
The JavaScript calculation engine (`script.js`) implements:
- **Compound interest formula**: Uses `Math.pow((1 + inflationRate / 100), years)` for accurate compound calculations
- **Multi-currency support**: Dynamic currency formatting based on country context
- **Input validation**: Comprehensive error handling for invalid or missing inputs
- **Real-time results**: Immediate calculation display without page refresh

### Styling Architecture
The CSS follows a **component-based approach** with:
- **Gradient backgrounds**: Professional visual design with linear gradients
- **Responsive design**: Mobile-first approach with flexible layouts
- **Consistent spacing**: Uniform padding and margins across components
- **Visual hierarchy**: Clear typography and color scheme for enhanced readability

### File Organization
- **index.html**: Main Argentina calculator (default entry point)
- **Country-specific pages**: Separate HTML files for each supported country
- **shared assets**: Common CSS (`style.css`) and JavaScript (`script.js`) files
- **URL structure**: Clean, SEO-friendly URLs matching country names

## External Dependencies

### JavaScript APIs
- **Intl.NumberFormat API**: Used for currency formatting and localization
- **Math.pow() function**: Core mathematical calculations for compound inflation

### Web Standards
- **HTML5 semantic elements**: Form inputs, select dropdowns, and responsive meta tags
- **CSS3 features**: Linear gradients, flexbox, and media queries
- **ES6 JavaScript**: Modern syntax for calculations and DOM manipulation

### SEO and Meta Integration
- **Meta description tags**: Country-specific descriptions for search optimization
- **Meta keywords**: Spanish language keywords for Latin American markets
- **Viewport meta tags**: Mobile responsiveness configuration
- **Canonical URL preparation**: Empty canonical tags ready for domain setup

### Browser Compatibility
- **Cross-browser support**: Uses standard web APIs compatible with modern browsers
- **Progressive enhancement**: Basic functionality works without JavaScript
- **Responsive design**: Compatible with mobile and desktop devices