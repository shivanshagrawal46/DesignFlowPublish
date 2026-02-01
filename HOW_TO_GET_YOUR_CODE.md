# How to Access Your Project Code

## 📁 Accessing Your Code in Replit

Your entire project is stored in this Replit workspace. Here's how to access and download it:

### Method 1: View Files in Replit (Easiest)

**In the Replit interface (left sidebar):**

1. **Files Panel** - Click the folder icon to see all your project files
2. **Key folders and files:**
   ```
   ├── client/               # Frontend code
   │   ├── src/
   │   │   ├── components/  # All UI components (Hero, Services, etc.)
   │   │   ├── pages/       # Pages (Home, Admin, Login)
   │   │   ├── lib/         # Utilities
   │   │   └── App.tsx      # Main app file
   │   └── public/          # Static assets
   │
   ├── server/              # Backend code
   │   ├── routes.ts        # API endpoints
   │   ├── storage.ts       # Data storage
   │   └── index.ts         # Express server
   │
   ├── shared/              # Shared code
   │   └── schema.ts        # Database schema & types
   │
   ├── attached_assets/     # Generated images
   │   └── generated_images/
   │       └── Hero_meditation_sunrise_scene_*.png
   │
   ├── package.json         # Dependencies
   ├── OWNER_GUIDE.md       # Your user guide
   └── design_guidelines.md # Design system
   ```

3. **Click any file** to view or edit its contents

---

### Method 2: Download Everything (ZIP)

1. **Three-dot menu** in the top-right of Replit
2. Click **"Download as ZIP"**
3. Extract the ZIP file on your computer
4. You now have a complete local copy!

---

### Method 3: Clone with Git (For Developers)

If you want to use Git:

1. Open the **Shell** tab in Replit
2. Your code is already in a Git repository
3. To clone to your local machine:
   ```bash
   git clone <your-replit-git-url>
   ```

---

## 🔑 Important Files to Understand

### Frontend Components
- **`client/src/components/hero.tsx`** - Hero section with parallax
- **`client/src/components/navigation.tsx`** - Navbar
- **`client/src/components/services.tsx`** - Services section
- **`client/src/components/programs.tsx`** - Wellness programs
- **`client/src/components/about.tsx`** - About Maya Chen
- **`client/src/components/testimonials.tsx`** - Client testimonials
- **`client/src/components/contact.tsx`** - Contact form
- **`client/src/components/footer.tsx`** - Footer

### Pages
- **`client/src/pages/home.tsx`** - Main landing page
- **`client/src/pages/admin.tsx`** - Admin dashboard
- **`client/src/pages/admin-login.tsx`** - Admin login page

### Backend
- **`server/routes.ts`** - API endpoints (`/api/contact`)
- **`server/storage.ts`** - Data storage interface

### Configuration
- **`shared/schema.ts`** - Database schema & validation
- **`client/src/index.css`** - Tailwind config & custom styles
- **`design_guidelines.md`** - Complete design system
- **`OWNER_GUIDE.md`** - How to use the website

---

## 💻 Running Locally (On Your Computer)

If you download the code and want to run it on your own computer:

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps
```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open browser to:
http://localhost:5000
```

---

## 🖼️ Your Images

All generated images are in:
```
attached_assets/generated_images/
```

**Images included:**
- Hero meditation scene
- Owner portrait (Maya Chen)
- Testimonial portraits (3 images)
- Service illustrations
- Program images

---

## 🔐 Admin Credentials

**Login URL:** `/admin/login`
- Username: `admin`
- Password: `serenity2024`

*(You can change these in `client/src/pages/admin-login.tsx`)*

---

## 📦 What's Included

✅ **Complete source code** for frontend and backend
✅ **All components** with beautiful animations
✅ **All images** used in the website
✅ **Tailwind CSS configuration** with your custom colors
✅ **Design guidelines** documentation
✅ **Owner's guide** with instructions
✅ **Package.json** with all dependencies listed

---

## 🚀 Publishing Your Site

When you're ready to make your site live:

1. Click the **"Publish"** button in Replit (top-right)
2. Replit will give you a public URL
3. You can also add a custom domain in the deployment settings

---

## 📝 Editing Your Code

You can edit any file directly in Replit:

1. Click on a file in the Files panel
2. Make your changes
3. Save (Ctrl+S / Cmd+S)
4. The site will automatically reload with your changes!

**Common edits:**
- **Change colors:** Edit `client/src/index.css`
- **Change text:** Edit component files in `client/src/components/`
- **Add images:** Upload to `attached_assets/` and reference them
- **Change admin password:** Edit `client/src/pages/admin-login.tsx`

---

## 🆘 Need Help?

- **View this file:** `OWNER_GUIDE.md` for user instructions
- **Design system:** `design_guidelines.md` for design rules
- **Technical docs:** Check `replit.md` for architecture

---

**Your code is fully portable and can run anywhere Node.js is supported!** 🎉
