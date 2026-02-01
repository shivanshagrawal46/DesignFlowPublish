# Swara Vigyan Wellness

A beautiful, modern landing page for Swara Vigyan Wellness - The Path to Divine Success.

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` to see the app in development mode.

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
swara-vigyan-wellness/
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── hero.tsx       # Hero section
│   │   ├── about.tsx      # About section
│   │   ├── contact.tsx    # Contact section
│   │   └── ...
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── attached_assets/       # Project assets (images)
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🌐 Deployment

This is a standard React + Vite application that can be deployed to any static hosting service.

### Deploy to Vercel
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build settings
4. Click "Deploy"

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click "Deploy"

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Update `vite.config.ts` to add base path:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```
4. Run: `npm run deploy`

### Deploy to Cloudflare Pages
1. Push your code to GitHub
2. Create a new project on [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Click "Save and Deploy"

## 🛠️ Technology Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Wouter** - Lightweight routing
- **React Query** - Data fetching and state management

## 📝 Configuration

### Update WhatsApp Number
Edit `src/components/contact.tsx` and replace the phone number:
```typescript
const phoneNumber = "1234567890"; // Replace with your WhatsApp number
```
Format: Country code + number (without + sign). Example for US: "15551234567"

### Update Contact Information
Edit `src/components/contact.tsx` to update:
- Studio address
- Email address
- Phone number

### Update Images
Place your images in the `attached_assets/generated_images/` folder and update the import paths in the components.

## 🎨 Customization

### Colors
Edit `src/index.css` to change the color theme (search for HSL color values).

### Typography
The site uses:
- **Serif font**: Cormorant Garamond (headlines)
- **Sans font**: Inter (body text)

Change these in `client/index.html` if you want different fonts.

### Content
- **Hero**: Edit `src/components/hero.tsx`
- **Philosophy**: Edit `src/components/philosophy.tsx`
- **Services**: Edit `src/components/services.tsx`
- **Programs**: Edit `src/components/programs.tsx`
- **About**: Edit `src/components/about.tsx`
- **Footer**: Edit `src/components/footer.tsx`

## 📧 Support

For any questions or issues, please contact the development team.

## 📄 License

MIT License - feel free to use this project for your needs.
