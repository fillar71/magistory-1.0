# Cloudflare Pages Deployment Guide for Magistory Next.js App

## Prerequisites
1. Cloudflare account (sign up at https://dash.cloudflare.com/sign-up)
2. Cloudflare CLI installed (`npm install -g wrangler`)
3. Git installed and project committed to GitHub/GitLab/Bitbucket

## Step 1: Prepare Your Project
✅ Your project is already built successfully with `next build`
✅ The build output is in the `.next` directory

## Step 2: Create a Cloudflare Pages Project

### Option A: Using Cloudflare Dashboard (Recommended)
1. Go to [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. Click "Create project" and "Connect GitHub account" (or GitLab/Bitbucket)
3. Select your Magistory repository
4. Click "Begin setup"

### Option B: Using Wrangler CLI
```bash
cd magistory
npm install -g wrangler
wrangler login
```

## Step 3: Configure Build Settings

For Next.js applications, use these build settings:

- **Project name**: magistory-app (or your preferred name)
- **Production branch**: main (or your production branch)
- **Build command**: `npm run build` or `next build`
- **Build output directory**: `.next`
- **Environment variables**: Add any required environment variables

## Step 4: Framework Preset
Select "Next.js" as the framework preset. Cloudflare Pages will automatically:
- Install dependencies
- Run the build command
- Deploy the static files from `.next`

## Step 5: Deploy
1. Click "Save and Deploy"
2. Wait for the build process to complete (usually 2-5 minutes)
3. Once deployed, you'll get a URL like: `https://magistory-app.pages.dev`

## Step 6: Custom Domain (Optional)
1. Go to your Pages project settings
2. Click "Custom domains"
3. Add your domain (e.g., magistory.com)
4. Follow DNS configuration instructions

## Step 7: Continuous Deployment
- Any push to your production branch will trigger automatic redeployment
- Preview deployments are created for pull requests

## Troubleshooting

### Common Issues:
1. **Build failures**: Check build logs in Cloudflare dashboard
2. **Missing dependencies**: Ensure all dependencies are in package.json
3. **Environment variables**: Make sure all required vars are set in Cloudflare

### Local Testing:
```bash
cd magistory
npx next start
# App will be available at http://localhost:3000
```

## Cloudflare Pages Configuration File (Optional)

Create a `wrangler.toml` file in your project root:

```toml
name = "magistory-app"
type = "webpack"
account_id = "YOUR_CLOUDFLARE_ACCOUNT_ID"
workers_dev = true
route = ""
zone_id = ""

[site]
bucket = ".next"
entry-point = "workers-site"
```

## Advanced Configuration

For better performance, add this to your `next.config.js`:

```javascript
module.exports = {
  output: 'export', // For static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Other Next.js config
}
```

## Deployment Checklist
- [x] Project builds successfully locally
- [ ] Git repository connected to Cloudflare
- [ ] Build settings configured correctly
- [ ] Environment variables set (if needed)
- [ ] Custom domain configured (optional)
- [ ] Continuous deployment enabled

## Post-Deployment
1. Test all functionality on the deployed URL
2. Set up monitoring in Cloudflare dashboard
3. Configure analytics if needed
4. Set up automatic deployments for future updates

Your Magistory app should now be live on Cloudflare Pages with global CDN distribution, automatic HTTPS, and instant deployments!