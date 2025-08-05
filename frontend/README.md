# URL Shortener - Campus Hiring Evaluation

A production-ready React-based URL shortening application built with Material UI and TypeScript. This application allows users to shorten up to 5 URLs simultaneously, manage expiry times, and track comprehensive analytics.

## Features

### Core Functionality
- **Bulk URL Shortening**: Process up to 5 URLs simultaneously with individual validation
- **Custom Shortcodes**: Users can specify custom shortcodes or let the system generate them
- **Flexible Expiry**: Default 30-minute expiry with customizable duration (1 minute to 30 days)
- **Client-side Redirection**: Direct browser redirection using React Router
- **Comprehensive Analytics**: Track clicks, expiry status, and URL management

### User Experience
- **Responsive Design**: Fully responsive Material UI interface
- **Real-time Validation**: Comprehensive client-side validation with human-friendly error messages
- **Copy to Clipboard**: One-click copying of shortened URLs
- **Statistics Dashboard**: Complete overview of all shortened URLs with filtering options
- **Session Persistence**: URLs persist across browser sessions using localStorage

### Technical Features
- **Custom Logging**: Structured logging system with authentication credentials
- **Error Handling**: Robust error handling with user-friendly messaging
- **Unique URL Generation**: Ensures all generated short URLs are unique
- **Expiry Management**: Automatic expiry tracking with real-time status updates

## Architecture Overview

### Design Decisions

**Frontend Framework**: React with TypeScript for type safety and better developer experience
- Material UI for consistent, professional design system
- React Router for client-side routing and redirection handling
- Custom hooks for state management and data persistence

**Data Persistence**: localStorage for client-side data persistence
- No backend required, fully client-side application
- Data persists across browser sessions
- Automatic cleanup of expired entries

**Validation Strategy**: Multi-layer validation system
- Real-time form validation with immediate feedback
- Bulk validation for simultaneous URL processing
- URL format validation using native URL constructor
- Custom shortcode validation with uniqueness checking

**Routing Architecture**: 
- `/` - Main URL shortening interface
- `/statistics` - Analytics and management dashboard  
- `/:shortCode` - Dynamic redirection handler for shortened URLs
- `*` - 404 error handling

### Data Modeling

```typescript
interface UrlEntry {
  id: string;                    // Unique identifier
  originalUrl: string;           // Original long URL
  shortCode: string;             // Generated/custom short code
  customShortCode?: string;      // User-provided shortcode (if any)
  validityMinutes: number;       // Duration in minutes
  createdAt: Date;              // Creation timestamp
  expiresAt: Date;              // Expiry timestamp
  isExpired: boolean;           // Current expiry status
  clickCount: number;           // Redirection analytics
}
```

**Storage Strategy**: 
- Primary storage in localStorage as JSON array
- Automatic expiry status calculation on data retrieval
- Click tracking with persistent storage updates
- Cleanup and optimization for storage efficiency

### Technology Selection

**React + TypeScript**: Chosen for type safety, developer experience, and component reusability
**Material UI**: Professional design system with comprehensive component library
**React Router**: Client-side routing with dynamic parameter handling for shortcode redirection
**localStorage**: Simple, effective client-side persistence without backend complexity

### Key Assumptions

1. **Client-side Only**: No backend infrastructure required, all functionality implemented in the browser
2. **Session Scope**: Data persists across browser sessions but is device-specific
3. **Localhost Deployment**: Application designed to run exclusively on http://localhost:3000
4. **Modern Browser Support**: Assumes support for modern JavaScript features (localStorage, URL constructor, clipboard API)

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Environment
The application will be available at http://localhost:3000

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navigation.tsx   # Main navigation bar
│   ├── RedirectHandler.tsx # URL redirection logic
│   ├── UrlShortenerForm.tsx # Main form component
│   ├── UrlResults.tsx   # Results display
│   └── UrlStatistics.tsx # Analytics dashboard
├── middleware/          # Custom middleware
│   └── logging.ts      # Structured logging system
├── pages/              # Route components
│   ├── Shortener.tsx   # Main shortening interface
│   ├── Statistics.tsx  # Analytics page
│   └── NotFound.tsx    # 404 error page
├── types/              # TypeScript definitions
│   └── url.ts         # URL-related interfaces
├── utils/              # Utility functions
│   ├── urlShortener.ts # Core shortening logic
│   └── urlValidator.ts # Validation utilities
└── App.tsx            # Main application component
```

## Usage Guide

### Shortening URLs

1. **Navigate** to the main page (http://localhost:3000)
2. **Enter URLs** in the form fields (up to 5 simultaneously)
3. **Customize** expiry time (optional, defaults to 30 minutes)
4. **Set custom shortcode** (optional, system generates if not provided)
5. **Submit** to create shortened URLs
6. **Copy** generated short URLs for sharing

### Managing URLs

1. **Visit Statistics** page via navigation
2. **View comprehensive analytics** including click counts and expiry status
3. **Filter** between active and expired URLs
4. **Copy or test** shortened URLs directly from the dashboard
5. **Clear data** using the bulk clear functionality

### URL Redirection

- **Direct access**: Visit `http://localhost:3000/{shortCode}` to redirect
- **Automatic redirection**: Browser automatically redirects to original URL
- **Error handling**: Clear error messages for expired or invalid short codes

## Testing and Validation

### Manual Testing Scenarios

1. **Form Validation**
   - Test invalid URLs, custom shortcode conflicts, and invalid expiry times
   - Verify error messages are clear and actionable

2. **Bulk Processing** 
   - Submit multiple URLs with mix of valid/invalid data
   - Verify partial success handling

3. **Redirection**
   - Test active short URLs redirect correctly
   - Verify expired URLs show appropriate error messages

4. **Analytics**
   - Create several URLs and verify statistics accuracy
   - Test filtering and data management features

### Browser Compatibility
Tested on modern browsers supporting:
- ES6+ JavaScript features
- localStorage API
- Clipboard API
- CSS Grid and Flexbox

## Implementation Notes

### Security Considerations
- Client-side validation prevents malicious input
- URL validation ensures only valid HTTP/HTTPS URLs are processed
- Shortcode sanitization prevents injection attacks

### Performance Optimizations
- Efficient localStorage usage with automatic cleanup
- Debounced validation to prevent excessive processing
- Lazy loading of statistics data

### Error Handling
- Comprehensive validation at multiple levels
- User-friendly error messages with specific guidance
- Graceful degradation for unsupported features

## Future Enhancements

While not implemented in this evaluation version, potential improvements include:
- Backend integration for cross-device synchronization
- Advanced analytics with detailed click tracking
- Bulk export/import functionality
- QR code generation for shortened URLs
- Rate limiting and abuse prevention

---

*This application was developed as part of a campus hiring evaluation, demonstrating full-stack thinking, clean architecture, and production-ready code quality.*