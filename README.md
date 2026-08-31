# Keshav's Digital World

A futuristic, interactive personal website showcasing research, projects, and personal interests.

## 🚀 Quick Deployment (5 Minutes!)

### **Fastest Way - No Local Setup Needed**

1. **Push to GitHub:**
   - Create a GitHub account (free): https://github.com/signup
   - Push your code to a new repository

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "New Project" → "Import Git Repository"
   - Select your repository
   - Click "Deploy" ✅

**That's it!** Your site is live. You'll get a URL like `https://keshav-world.vercel.app`

For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 💻 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ ([Download here](https://nodejs.org))

### Installation & Run

**Windows:**
```bash
setup.bat
npm run dev
```

**Mac/Linux:**
```bash
chmod +x setup.sh
./setup.sh
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Navbar.tsx
│   ├── ARIA/               # AI Assistant
│   ├── Home/               # Homepage sections
│   ├── About/              # About section
│   ├── Research/           # Research section
│   ├── Projects/           # Projects section
│   └── Personal/           # Personal section
├── data/                   # Content files (EDIT THESE!)
│   ├── profile.json        # Your bio and intro
│   ├── education.json      # Education history
│   ├── research.json       # Research info
│   ├── projects.json       # Projects list
│   ├── experience.json     # Work experience & teaching
│   ├── personal.json       # Hobbies & interests
│   ├── social.json         # Social links
│   └── travel.json         # Travel locations
├── hooks/                  # Custom React hooks
│   ├── useSound.ts         # Sound management
│   └── useVoice.ts         # Voice input
├── lib/
│   ├── constants.ts        # App constants
│   └── utils.ts            # Utility functions
└── styles/                 # Additional styles

public/
├── sounds/                 # Audio files
│   ├── startup.mp3
│   ├── click.mp3
│   ├── transition.mp3
│   └── ambient.mp3
└── fonts/                  # Custom fonts (if needed)
```

## 📝 How to Update Your Content

All your content is stored in **JSON files** in `src/data/`. You can edit these without touching any code.

### Update Your Profile

Edit `src/data/profile.json`:

```json
{
  "name": "Your Name",
  "tagline": "Your tagline here",
  "introduction": "Your introduction...",
  "email": "your.email@example.com"
}
```

### Add a New Project

Edit `src/data/projects.json` and add to the projects array:

```json
{
  "projects": [
    {
      "id": "my-new-project",
      "title": "Project Title",
      "startDate": "January 2025",
      "endDate": "March 2025",
      "problem": "What problem did it solve?",
      "approach": "How did you approach it?",
      "tech": ["Tech1", "Tech2"],
      "github": "https://github.com/...",
      "status": "completed"
    }
  ]
}
```

### Update Research Information

Edit `src/data/research.json`:

```json
{
  "thesis": {
    "title": "Your thesis title",
    "description": "Your thesis description",
    "startDate": "January 2025",
    "guide": "Guide name"
  }
}
```

### Add Travel Memories

Edit `src/data/travel.json`:

```json
{
  "travelMemories": [
    {
      "location": "Location Name",
      "coordinates": { "lat": 0, "lng": 0 },
      "description": "Your memory",
      "category": "mountains"
    }
  ]
}
```

### Update Personal Interests

Edit `src/data/personal.json`:

```json
{
  "interests": [
    {
      "category": "Category Name",
      "items": ["Item 1", "Item 2"],
      "icon": "🎮"
    }
  ]
}
```

### Update Social Links

Edit `src/data/social.json`:

```json
{
  "social": [
    {
      "platform": "GitHub",
      "url": "https://github.com/your-username",
      "icon": "github"
    }
  ]
}
```

## 🎨 Customization

### Colors

Colors are defined in `tailwind.config.js` and `src/app/globals.css`:

```css
--primary: #0A1428
--accent: #00D9FF
--secondary: #9D4EDD
--tertiary: #FF6B35
--neutral: #F0F4F8
```

### Sounds

Sound files go in `public/sounds/`:
- `startup.mp3` - System startup sound
- `click.mp3` - Button click
- `transition.mp3` - Page transition
- `ambient.mp3` - Background ambience

To mute sounds, look for the mute control in the UI or press `M`.

### Fonts

Fonts are loaded from Google Fonts in `src/app/globals.css`. Change them there.

## 🎯 Features Implemented

- ✅ Cinematic homepage with initialization sequence
- ✅ Interactive navigation
- ✅ Sound system with mute control
- ✅ Voice input support
- ✅ Dark/Light theme support (coming)
- ✅ Mobile responsive design
- ✅ Smooth animations throughout
- 🔄 ARIA AI Assistant (in progress)
- 🔄 Easter eggs and hidden features (in progress)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📚 Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Web APIs** - Voice recognition, Audio

## 📝 Notes

- All data is stored in JSON files for easy updates
- No database needed unless you want to add advanced features
- Sound is disabled by default for accessibility; user can enable it
- Mobile responsive design is built-in
- Respects `prefers-reduced-motion` for accessibility

## 🔐 Privacy

- No personal data is transmitted
- All content is client-side only
- You control what gets displayed

## 📧 Support

For questions about updating content, refer to this README.

---

Built with ❤️ by GitHub Copilot
