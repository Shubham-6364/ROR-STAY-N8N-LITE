# ROR-STAY Lite (n8n Backend)

A lightweight property rental platform with **zero traditional backend** - powered entirely by n8n, Google Sheets, and Google Drive.

## 🏗️ Architecture

```
Frontend (Static HTML/CSS/JS)
        ↓
   n8n Workflows
        ↓
Google Sheets (Database) + Google Drive (Image Storage)
```

## ✨ Features

- 📝 Contact form submissions → Google Sheets
- 🏠 Property listings management
- 📸 Image uploads → Google Drive
- 🔍 Property search and filtering
- 📱 Fully responsive design
- 🚀 No server maintenance required

## 📁 Project Structure

```
ROR-STAY-N8N-LITE/
├── public/
│   ├── index.html          # Main landing page
│   ├── listings.html       # Property listings page
│   └── admin.html          # Admin panel for adding properties
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── config.js           # n8n webhook URLs
│   ├── contact.js          # Contact form logic
│   ├── listings.js         # Listings display logic
│   └── admin.js            # Admin panel logic
├── workflows/
│   ├── contact-form.json   # n8n workflow export
│   ├── add-listing.json    # n8n workflow export
│   └── get-listings.json   # n8n workflow export
├── docs/
│   ├── SETUP.md            # Setup instructions
│   └── N8N-WORKFLOWS.md    # Workflow configuration guide
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites

- n8n installed (local or cloud)
- Google Account (for Sheets and Drive)
- Modern web browser

### Setup Steps

1. **Set up n8n workflows** (see [N8N-WORKFLOWS.md](docs/N8N-WORKFLOWS.md))
2. **Configure webhook URLs** in `js/config.js`
3. **Open `public/index.html`** in your browser or serve with:
   ```bash
   python3 -m http.server 8000
   # or
   npx serve .
   ```
4. **Start using!** No backend server needed

## 📊 Google Sheets Structure

### Contact Submissions Sheet
| Name | Email | Phone | Preferred Location | Requirements | Timestamp |

### Property Listings Sheet
| ID | Title | Description | Price | Location | Property Type | Features | Image URLs | Status | Timestamp |

## 🔧 Technology Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Backend**: n8n (workflow automation)
- **Database**: Google Sheets
- **Storage**: Google Drive
- **Hosting**: Any static host (GitHub Pages, Netlify, Vercel)

## 🎯 Why This Approach?

✅ **Zero backend maintenance** - No servers to manage  
✅ **Free tier friendly** - Google's free tier is generous  
✅ **Easy to modify** - Visual workflow editor  
✅ **Reliable** - Google's infrastructure  
✅ **Scalable** - n8n cloud can handle growth  

## 📖 Documentation

- [Setup Guide](docs/SETUP.md) - Detailed setup instructions
- [n8n Workflows](docs/N8N-WORKFLOWS.md) - Workflow configuration guide

## 🌐 Deployment

Deploy to any static hosting:

```bash
# GitHub Pages - Just push and enable Pages

# Netlify
netlify deploy --dir=.

# Vercel
vercel --prod

# Simple local server
python3 -m http.server 8000
```

## 🔐 Security Notes

- n8n webhooks are public by default - add authentication if needed
- Google Sheets can have row-level permissions
- Consider using n8n cloud for better security
- Image URLs from Google Drive are shareable links

## 📝 License

MIT License - feel free to use for your projects!

---

**Made with ❤️ using n8n automation**
