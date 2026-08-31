# ⚡ QUICK REFERENCE - Deployment & Updates

## 🚀 Deploy in 10 Minutes

```bash
# 1. Create GitHub account: https://github.com/signup

# 2. Push code to GitHub
git init
git add .
git commit -m "Initial commit - Keshav's Digital World"
git remote add origin https://github.com/YOUR_USERNAME/keshav-world.git
git branch -M main
git push -u origin main

# 3. Deploy to Vercel
# Go to: https://vercel.com
# Sign up (use GitHub) → New Project → Import your repo → Deploy
```

**Your live site:** `https://keshav-world.vercel.app` 🎉

---

## 📝 Update Content Anytime

```bash
# 1. Edit any JSON file in src/data/
#    Example: src/data/profile.json

# 2. Commit and push
git add .
git commit -m "Update profile"
git push

# 3. Site auto-updates in 2-3 minutes ✨
```

---

## 📂 Key Files to Edit

| File | What to Edit |
|------|-------------|
| `src/data/profile.json` | Your bio, intro, contact |
| `src/data/social.json` | Instagram, GitHub, LinkedIn |
| `src/data/projects.json` | Your projects |
| `src/data/research.json` | Thesis, research areas, skills |
| `src/data/experience.json` | Work, teaching, awards |
| `src/data/personal.json` | Hobbies, interests, philosophy |
| `src/data/travel.json` | Travel stories & locations |

---

## 🎧 Audio Files

Auto-generated at:
```
public/sounds/
├── startup.wav      (Sci-fi chime)
├── click.wav        (Button beep)
├── transition.wav   (Page whoosh)
└── ambient.wav      (Background tone)
```

Replace anytime with your own audio!

---

## 🎯 Essential Commands

```bash
# Development
npm run dev              # Run locally (http://localhost:3000)
npm run build            # Build for production
npm run generate-audio   # Regenerate audio files
npm run lint             # Check for errors

# Git
git status              # Check what changed
git add .               # Stage all changes
git commit -m "msg"     # Commit with message
git push                # Push to GitHub
git log                 # View commit history
```

---

## 🔗 Important Links

| What | URL |
|------|-----|
| GitHub | https://github.com |
| Vercel | https://vercel.com |
| Your Site | https://keshav-world.vercel.app |
| Project Repo | https://github.com/YOUR_USERNAME/keshav-world |
| Vercel Dashboard | https://vercel.com/dashboard |

---

## 📋 Common Updates

### Add Instagram Handle
```json
// src/data/social.json
{
  "platform": "Instagram",
  "url": "https://instagram.com/your_actual_handle"
}
```

### Update Bio
```json
// src/data/profile.json
{
  "tagline": "Your new tagline",
  "introduction": "Your introduction"
}
```

### Add Travel Memory
```json
// src/data/travel.json
{
  "id": "trek-name",
  "location": "Mountain Name",
  "country": "Country",
  "visitedDates": ["2025-05"],
  "description": "Your story",
  "highlights": ["Memory 1", "Memory 2"]
}
```

### Add Project
```json
// src/data/projects.json
{
  "id": "project-id",
  "title": "Project Name",
  "startDate": "January 2025",
  "endDate": "March 2025",
  "problem": "What problem it solved",
  "approach": "Your approach",
  "tech": ["Tech1", "Tech2"],
  "github": "https://github.com/...",
  "status": "completed"
}
```

---

## 🆘 Quick Fixes

| Problem | Solution |
|---------|----------|
| Changes not showing | Wait 3-5 min, refresh page (Ctrl+Shift+R) |
| Build failed | Check Vercel logs, run setup locally |
| Audio not working | Check mute (🔊 button), refresh page |
| Mobile looks weird | Refresh (Ctrl+Shift+R), try different browser |
| Git commands fail | Install Git, restart terminal |

---

## ✅ Deployment Checklist

- [ ] GitHub account created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project deployed
- [ ] Site is live
- [ ] Tested on phone
- [ ] Shared with people
- [ ] Instagram handle added

---

## 📚 Full Documentation

- **START_HERE.md** - Complete overview
- **GETTING_STARTED.md** - Beginner friendly guide
- **DEPLOYMENT.md** - Detailed instructions
- **DEPLOYMENT_CHECKLIST.md** - Step-by-step checklist
- **README.md** - Technical details

---

## 🎯 Timeline

**Today:** Deploy (10 min)
**This Week:** Add Instagram, share site
**This Month:** Add travel photos, update projects
**Ongoing:** Keep site current

---

## 💡 Remember

- Edit JSON files, not code
- Push to GitHub, Vercel auto-deploys
- All changes live in 2-3 minutes
- No coding needed for content updates
- Sound mute remembers user preference
- Everything is backed up on GitHub

---

**Ready to launch?** 🚀

Next step: Read `GETTING_STARTED.md` or run setup script!
