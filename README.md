# 🎨 SVG Holder Frontend

A beautiful, modern React frontend for the SVG Holder application with stunning animations and responsive design.

## ✨ Features

- **🎯 Beautiful SVG Viewer** - Organize SVGs by date (like Google Photos)
- **📤 Easy SVG Import** - Drag & drop interface with live preview
- **🔍 Smart Search** - Find SVGs quickly by name or description
- **📥 Direct Download** - Download SVGs directly from the grid
- **📋 Copy to Clipboard** - Copy SVG content with one click
- **🗑️ Safe Deletion** - Remove unwanted SVGs with confirmation
- **📱 Responsive Design** - Works perfectly on all devices
- **🎨 Modern UI** - Beautiful animations and glassmorphism design

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast development and building
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API communication

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Backend API** running (see backend repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone <frontend-repo-url>
   cd svg-holder-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   The app uses environment-specific configuration files:
   
   **For Development (default):**
   ```bash
   # .env.development (already created)
   VITE_API_BASE_URL=http://localhost:3001/api
   ```
   
   **For Production:**
   ```bash
   # .env.production (already created)
   VITE_API_BASE_URL=https://svgviewerbackend.onrender.com/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

**Frontend will run on:** `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   └── Navbar.tsx      # Navigation component with animations
├── pages/               # Page components
│   ├── Home.tsx        # Landing page with hero section
│   ├── SvgViewer.tsx   # SVG display and management
│   └── SvgImporter.tsx # SVG upload form
├── services/            # API services
│   └── svgStorage.ts   # SVG API communication
├── types/               # TypeScript interfaces
│   └── svg.ts          # SVG data types
├── App.tsx              # Main app component with routing
├── main.tsx             # App entry point
└── index.css            # Global styles and Tailwind directives
```

## 🎯 Component Overview

### 🧭 **Navbar Component**
- **Scroll-based styling** - Transparent to solid background
- **Active state indicators** - Current page highlighting
- **Responsive design** - Mobile-friendly navigation
- **Beautiful animations** - Smooth transitions and hover effects

### 🏠 **Home Page**
- **Animated hero section** - Parallax scrolling effects
- **Feature highlights** - Interactive feature cards
- **Call-to-action buttons** - Direct navigation to main features
- **Modern design** - Glassmorphism and gradient effects

### 📤 **SVG Importer**
- **Drag & drop interface** - Intuitive file upload
- **Live preview** - See SVG before uploading
- **Form validation** - Required fields and error handling
- **Beautiful styling** - Animated background elements

### 👁️ **SVG Viewer**
- **Date-based organization** - Group SVGs by upload date
- **Grid layout** - Beautiful card-based design
- **Direct actions** - Download, Copy, Delete buttons
- **Search functionality** - Find SVGs quickly
- **Modal details** - Full SVG preview and metadata

## 🚀 Available Scripts

```bash
npm run dev                # Start development server (uses .env.development)
npm run build              # Build for production (uses .env.production)
npm run build:production   # Explicit production build with production backend
npm run preview            # Preview production build locally
npm run lint               # Run ESLint
```

## 🔧 Configuration

### Tailwind CSS
- **Custom animations** - Fade-in effects and transitions
- **Responsive breakpoints** - Mobile-first design approach
- **Custom color palette** - Purple, blue, and cyan gradients

### API Configuration
- **Environment-based URLs** - Automatic backend switching
  - Development: `http://localhost:3001/api`
  - Production: `https://svgviewerbackend.onrender.com/api`
- **CORS support** - Cross-origin request handling
- **Error handling** - User-friendly error messages

## 🎨 Styling Features

### **Design System**
- **Glassmorphism** - Frosted glass effects
- **Gradient backgrounds** - Beautiful color transitions
- **Smooth animations** - CSS transitions and keyframes
- **Responsive grid** - Adaptive layout for all screen sizes

### **Color Palette**
- **Primary**: Purple (`#8b5cf6`) to Blue (`#3b82f6`) to Cyan (`#06b6d4`)
- **Neutral**: Gray scale with transparency
- **Accent**: White with backdrop blur effects

### **Typography**
- **Modern fonts** - Clean, readable text
- **Hierarchy** - Clear heading and body text distinction
- **Responsive sizing** - Adaptive text sizes

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: `< 768px` - Single column layout
- **Tablet**: `768px - 1024px` - Two column grid
- **Desktop**: `> 1024px` - Multi-column grid
- **Large**: `> 1280px` - Maximum grid expansion

### **Mobile Features**
- **Touch-friendly** - Large touch targets
- **Swipe gestures** - Intuitive navigation
- **Optimized spacing** - Comfortable mobile experience

## 🔌 API Integration

### **SVG Operations**
- **Upload** - File upload with metadata
- **Fetch** - Retrieve all SVGs with pagination
- **Search** - Find SVGs by name or description
- **Update** - Modify SVG metadata
- **Delete** - Remove SVGs with confirmation

### **Error Handling**
- **Network errors** - Connection timeout handling
- **Validation errors** - Form input validation
- **User feedback** - Toast notifications and alerts

## 🚀 Performance Features

### **Optimizations**
- **Lazy loading** - Route-based code splitting
- **Image optimization** - Efficient SVG rendering
- **Bundle splitting** - Separate vendor and app bundles
- **Tree shaking** - Remove unused code

### **Loading States**
- **Skeleton screens** - Placeholder content while loading
- **Progress indicators** - Upload and download progress
- **Smooth transitions** - Loading state animations

## 🌐 Production Deployment

### **Build Process**
```bash
# Create production build (automatically uses production backend)
npm run build:production

# Alternative: Standard build (also uses production environment)
npm run build

# Preview build locally
npm run preview

# Deploy dist/ folder to your hosting service
```

### **Backend Configuration**
The app is pre-configured to work with:
- **Production Backend**: `https://svgviewerbackend.onrender.com/api`
- **Development Backend**: `http://localhost:3001/api`

No additional configuration needed - the correct backend URL is automatically selected based on build mode.

### **Hosting Options**
- **Vercel** - Zero-config deployment (includes `vercel.json` for SPA routing)
- **Netlify** - Static site hosting (requires `_redirects` file)
- **GitHub Pages** - Free hosting for open source
- **AWS S3** - Scalable static hosting

### **SPA Routing Configuration**
For Single Page Application routing to work on static hosts:

**Vercel** (included):
```json
// vercel.json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Netlify** (if needed):
```
# _redirects file
/*    /index.html   200
```

### **Environment Variables**
The following environment files are pre-configured:

```bash
# .env.development (for local development)
VITE_API_BASE_URL=http://localhost:3001/api

# .env.production (for production builds)
VITE_API_BASE_URL=https://svgviewerbackend.onrender.com/api
```

**Custom Backend URL:**
If you need to use a different backend, update the respective `.env` file:
```bash
# For production
echo "VITE_API_BASE_URL=https://your-custom-backend.com/api" > .env.production
```

## 🐛 Troubleshooting

### **Common Issues**

#### 1. **Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 2. **Tailwind CSS Not Working**
```bash
# Rebuild CSS
npm run build
# Restart development server
npm run dev
```

#### 3. **API Connection Issues**
- **Development**: Verify local backend is running on `http://localhost:3001`
- **Production**: Check if `https://svgviewerbackend.onrender.com` is accessible
- Verify CORS configuration on backend
- Check environment file configuration:
  ```bash
  cat .env.development  # For dev environment
  cat .env.production   # For production environment
  ```

#### 4. **Port Conflicts**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

## 🔒 Security Features

- **Input sanitization** - XSS prevention
- **File type validation** - SVG-only uploads
- **CORS configuration** - Restricted origins
- **Error masking** - No sensitive information exposure

## 📈 Analytics & Monitoring

### **Performance Monitoring**
- **Core Web Vitals** - LCP, FID, CLS tracking
- **Bundle analysis** - Build size optimization
- **Error tracking** - User experience monitoring

### **User Analytics**
- **Page views** - Navigation tracking
- **Feature usage** - SVG operations monitoring
- **Performance metrics** - Load time tracking

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### **Development Guidelines**
- **TypeScript** - Use strict typing
- **Component structure** - Follow existing patterns
- **Styling** - Use Tailwind CSS utilities
- **Testing** - Ensure responsive design

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the troubleshooting section
2. Review the console logs
3. Verify your backend API is running
4. Ensure all dependencies are installed

## 🔗 Related Repositories

- **Backend API**: [svg-holder-backend](https://github.com/your-username/svg-holder-backend)
- **Documentation**: [svg-holder-docs](https://github.com/your-username/svg-holder-docs)

---

**Happy SVG Managing! 🎨✨**
