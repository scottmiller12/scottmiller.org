# Scott M. Miller - Personal Website

A professional website for showcasing research, projects, and professional portfolio in development economics.

## 🎨 Design Philosophy

This website uses a "Field-to-Evidence" design system that reflects both on-the-ground development work and analytical rigor:

- **Colors**: Deep teal (primary) + warm terracotta (accent) + neutral charcoal
- **Typography**: Inter (sans-serif) + Merriweather (serif for warmth)
- **Style**: Clean, academic credibility with field presence
- **Inspiration**: GiveWell, JPAL, IPA, Evidence Action (but uniquely yours)

## 📁 Site Structure

```
scott-miller-website/
├── index.html              # Homepage with hero, stats, featured work
├── research.html           # Filterable research paper repository
├── projects.html          # Project portfolio (placeholder)
├── about.html             # Biography, CV, credentials
├── contact.html           # Contact information (placeholder)
├── css/
│   ├── styles.css         # Main stylesheet with design system
│   ├── research.css       # Research page specific styles
│   └── about.css          # About page specific styles
├── js/
│   ├── main.js            # Navigation, smooth scroll, animations
│   └── research.js        # Research filtering and search
└── assets/
    ├── images/            # For photos
    └── pdfs/              # For research papers and CV

```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

1. Create a new repository on GitHub called `scottmmiller.com` or `username.github.io`
2. Push this code to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `username.github.io` or custom domain

### Option 2: Netlify (Free)

1. Create account at netlify.com
2. Drag and drop the entire folder
3. Configure custom domain
4. Automatic SSL certificate

### Option 3: Vercel (Free)

1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project directory
3. Follow prompts to deploy

## 🌐 Custom Domain Setup

Once you purchase `scottmmiller.com`:

### For GitHub Pages:
1. Create a file called `CNAME` in the root directory
2. Add one line: `scottmmiller.com`
3. In your domain registrar (Namecheap, etc.):
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Add CNAME record: `www` → `username.github.io`

### For Netlify/Vercel:
- They provide automatic DNS configuration - just follow their setup wizard

## 🔧 Using Claude Code to Update Your Site

Claude Code makes it incredibly easy to update your site without knowing web development. Here are common tasks:

### Adding a New Research Paper

**Just say to Claude Code:**
```
"Add a new paper to research.html:
- Title: [Your paper title]
- Authors: Miller, S.M., [co-authors]
- Journal: [Journal name]
- Year: 2026
- Topic: food-security
- Type: journal
- Abstract: [Your abstract]
- PDF link: assets/pdfs/your-paper.pdf"
```

Claude Code will:
1. Add the paper HTML to research.html
2. Ensure proper data attributes for filtering
3. Style it consistently

### Updating Your Bio

**Just say:**
```
"Update my bio in about.html to mention that I recently joined [Organization] as a [Position]"
```

### Adding Project Case Studies

**Just say:**
```
"Create a new project page for my Ethiopia food security study with:
- Project name
- Location
- Partner organizations
- Description
- Key findings
- Photos in assets/images/ethiopia/"
```

### Changing Photos

**Just say:**
```
"Replace the hero image placeholder with my conference photo at assets/images/conference-photo.jpg"
```

Claude Code will update the HTML and CSS automatically.

### Adding New Sections

**Just say:**
```
"Add a 'Media' section to about.html showing press mentions and interviews"
```

## 📝 Content Management Tips

### Organizing Research Papers

Store PDFs in `assets/pdfs/` with consistent naming:
- `miller-2026-water-insecurity.pdf`
- `miller-kamau-2025-food-security-rct.pdf`

### Managing Photos

Store images in `assets/images/` organized by type:
- `assets/images/profile/` - Professional headshots
- `assets/images/field/` - Field work photos
- `assets/images/projects/` - Project-specific images
- `assets/images/presentations/` - Conference/speaking photos

### Best Practices

1. **Always use high-quality images** (at least 1200px wide for hero images)
2. **Optimize images** before uploading (use tools like TinyPNG)
3. **Name files descriptively** (`conference-nairobi-2025.jpg` not `IMG_1234.jpg`)
4. **Keep PDFs under 5MB** for faster loading
5. **Update regularly** - add new papers as soon as they're published

## 🎯 Quick Commands for Claude Code

Here are example commands you can use with Claude Code:

**Content Updates:**
- "Add my new paper about [topic] to the research page"
- "Update my CV PDF link to the latest version"
- "Add a new project card for my [country] work"
- "Update the impact stats to show 110 NGO partnerships"

**Design Changes:**
- "Make the hero image darker so text is more readable"
- "Change the primary color to a darker teal"
- "Add more spacing between research papers"
- "Make the mobile menu work better on small screens"

**New Features:**
- "Add a blog section for research insights"
- "Create a presentations page with links to my slides"
- "Add an interactive map showing countries where I've worked"
- "Add Google Analytics tracking"

**Deployment:**
- "Help me set up GitHub Pages deployment"
- "Create a deployment script for Netlify"
- "Generate a sitemap for SEO"

## 📊 Analytics Setup

To track visitors (optional):

**Google Analytics:**
```
"Add Google Analytics tracking with ID: G-XXXXXXXXXX"
```

Claude Code will add the tracking code to all pages.

## 🔍 SEO Optimization

The site includes basic SEO best practices:
- Meta descriptions on each page
- Semantic HTML structure
- Fast loading times
- Mobile-responsive
- Clean URLs

**To improve further, ask Claude Code:**
```
"Improve SEO by adding:
- Open Graph tags for social sharing
- Twitter cards
- Schema.org markup for Person/Scholar
- Better meta descriptions"
```

## 🆘 Troubleshooting

### Images not showing:
- Check file paths are correct
- Ensure images are in `assets/images/`
- File names are case-sensitive

### Styling looks wrong:
- Clear browser cache
- Check CSS file paths are correct
- Ensure all CSS files are linked in HTML

### Site not deploying:
- Check for syntax errors in HTML
- Verify file names are correct
- Ensure CNAME file exists (for custom domain)

**For any issue, just ask Claude Code:**
```
"The research filter isn't working - can you debug it?"
"My hero image isn't showing up"
"The mobile menu isn't toggling properly"
```

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Web.dev - Best Practices](https://web.dev/)
- [Google Scholar Profile Setup](https://scholar.google.com/)

## 🚀 Next Steps

1. **Purchase domain**: Buy scottmmiller.com (~$12/year)
2. **Add content**: 
   - Upload your CV PDF
   - Add your research papers
   - Replace photo placeholders with actual images
   - Update bio with specific institutions
3. **Deploy**: Push to GitHub Pages or Netlify
4. **Configure domain**: Point your domain to the hosting
5. **Test**: Check on mobile devices and different browsers
6. **Launch**: Share with colleagues!

## 💡 Pro Tips

1. **Use Claude Code iteratively** - make small updates and test
2. **Keep a backup** - save a copy before major changes
3. **Test locally** - open index.html in browser before deploying
4. **Update regularly** - add papers immediately when published
5. **Engage visitors** - consider adding a newsletter signup

## 📞 Support

If you need help with anything:
1. Open Claude Code
2. Describe what you want to do
3. Claude Code will handle the technical implementation

Remember: You don't need to learn web development. Just describe what you want in plain English, and Claude Code will update the site for you!

---

Built with care for Scott M. Miller | Development Economist
