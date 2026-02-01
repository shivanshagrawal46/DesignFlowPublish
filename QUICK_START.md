# 🚀 Quick Start Guide - Swara Vigyan Wellness

## ⚡ Next Steps (Do These Now)

### 1. Manual Cleanup (IMPORTANT)
Delete these old folders manually from File Explorer:
- `server/` folder
- `shared/` folder
- `client/` folder
- `drizzle.config.ts` file (if exists)

**Why?** These are backend-related files that are no longer needed.

### 2. Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The site will open at `http://localhost:5173`

### 4. Update WhatsApp Number
Edit `src/components/contact.tsx` (line 8):
```typescript
const phoneNumber = "YOUR_WHATSAPP_NUMBER"; // Format: 919876543210
```

### 5. Update Contact Info
In `src/components/contact.tsx`, update:
- Studio address (line ~145)
- Email address (line ~168)
- Phone number (line ~188)

## 📦 Build for Production

When ready to deploy:
```bash
npm run build
```
This creates a `dist/` folder with your production files.

## 🌐 Deploy to Hosting

### Option 1: Vercel (Recommended - Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Vite settings)
6. Done! You get a live URL

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

### Option 3: Cloudflare Pages
1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create a new project
4. Connect GitHub repository
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy

## 📱 Test Before Deploying

1. Run `npm run build` locally
2. Run `npm run preview` to test the production build
3. Open `http://localhost:4173`
4. Test all pages and links
5. Test WhatsApp button functionality
6. Test on mobile view (Chrome DevTools → Toggle device toolbar)

## ✅ What's Already Done

- ✅ Project restructured to root-level
- ✅ All backend code removed
- ✅ `package.json` cleaned up
- ✅ Configuration files updated
- ✅ Contact form uses WhatsApp
- ✅ No database needed
- ✅ Ready for static hosting

## 🎯 Current Project Structure

```
DesignFlowPublish/
├── src/                 # All React code
│   ├── components/      # UI components
│   ├── pages/          # Page components
│   ├── hooks/          # React hooks
│   └── lib/            # Utilities
├── public/             # Static files (favicon, etc.)
├── attached_assets/    # Images
├── index.html         # Main HTML file
├── package.json       # Dependencies
├── vite.config.ts     # Vite config
└── README.md          # Full documentation
```

## 🆘 Troubleshooting

### "Module not found" errors after npm install
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Build fails
Make sure all folders (server, shared, client) are deleted.

## 📞 Support

Read the full `README.md` for detailed documentation and deployment guides.

---

**🎉 You're all set! Just delete those old folders, run `npm install`, and you're ready to go!**
