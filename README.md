# T2T-YAO Genome Data Download Portal

A modern, responsive web portal for downloading T2T-YAO genome assembly data.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
- Comprehensive genome information
- Direct download links for genome assemblies
- Contact form for inquiries

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run serve

# Build for production
npm run build

# Lint code
npm run lint
```

## Netlify Deployment

This project is configured for easy deployment on Netlify.

### Option 1: Drag & Drop (Recommended for first deployment)

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Drag the entire project folder to the Netlify dashboard
3. Your site will be automatically deployed

### Option 2: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Set build settings:
   - Build command: `npm run netlify-build` (or leave empty)
   - Publish directory: `.` (root directory)
4. Deploy automatically on every push

### Option 3: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

## Project Structure

```
t2t-yao-download-portal/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── genome-illustration.png  # Genome visualization
├── netlify.toml        # Netlify configuration
├── _redirects          # Netlify redirects
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Customization

- Update genome data in `index.html`
- Modify styles in `styles.css`
- Add functionality in `script.js`
- Replace `genome-illustration.png` with your own image

## License

Data released to the public domain under CC0 license 