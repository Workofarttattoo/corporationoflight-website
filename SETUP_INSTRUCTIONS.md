# Corporation of Light Website - GitHub Pages Setup

**Copyright (c) 2025 Joshua Hendricks Cole (DBA: Corporation of Light). All Rights Reserved. PATENT PENDING.**

## 🚀 QUICK START - Get Your Site Live in 10 Minutes

### Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `corporationoflight` (or any name you want)
3. Set to **Public** (required for free GitHub Pages)
4. Click "Create repository"

### Step 2: Upload Your Website

**Option A - Use GitHub Web Interface (EASIEST):**

1. In your new repository, click "uploading an existing file"
2. Drag and drop `index.html` from this folder
3. Click "Commit changes"

**Option B - Use Git Command Line:**

```bash
cd "/Users/noone/Blank_Business_Builder (aka BBB)/corporation-of-light-website"
git init
git add index.html
git commit -m "Initial commit - Corporation of Light website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/corporationoflight.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click "Settings" (top right)
2. Scroll down to "Pages" (left sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://YOUR_USERNAME.github.io/corporationoflight/`

**It takes 2-3 minutes to go live. Refresh the Settings page to see the URL.**

---

## 🌐 Connect Your Custom Domain (corporationoflight.com)

### Step 1: Configure DNS at Your Domain Registrar

Go to your domain registrar (Namecheap, GoDaddy, etc.) and add these DNS records:

**A Records (add all 4):**
```
Type: A
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.111.153
TTL: Automatic
```

**CNAME Record (for www subdomain):**
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
TTL: Automatic
```

### Step 2: Add Custom Domain in GitHub

1. Go to your repository Settings → Pages
2. Under "Custom domain", enter: `corporationoflight.com`
3. Click "Save"
4. Wait 10-30 minutes for DNS to propagate
5. Check the box "Enforce HTTPS" (after DNS propagates)

### Step 3: Verify It Works

Visit: https://corporationoflight.com

If you see your site, you're done! 🎉

---

## ✅ IMPORTANT: Update Your Calendly Links

Before going live, update these sections in `index.html`:

### Find and Replace:

**Line 546:** Replace `https://calendly.com/your-calendly-link` with your actual Calendly link

**Example:**
```html
<!-- BEFORE -->
<a href="https://calendly.com/your-calendly-link" class="cta-button">

<!-- AFTER -->
<a href="https://calendly.com/joshuacole/free-discovery" class="cta-button">
```

### Also Update Contact Info:

**Lines 555-558:** Update with your actual links:
```html
📧 Email: joshua@corporationoflight.com
📱 LinkedIn: linkedin.com/in/joshuacole  <!-- Update this -->
🌐 Inventor@aios.is
```

---

## 📧 Email Configuration

### Set Up joshua@corporationoflight.com Email

**Option 1: Namecheap Private Email ($1.18/month)**

1. Log into Namecheap
2. Go to corporationoflight.com domain
3. Click "Email" → "Private Email"
4. Purchase Private Email Starter (1 mailbox)
5. Create mailbox: joshua@corporationoflight.com
6. Follow their setup instructions

**Option 2: Google Workspace ($6/month)**

1. Go to: https://workspace.google.com/
2. Sign up with corporationoflight.com domain
3. Verify domain ownership
4. Create user: joshua@corporationoflight.com
5. Update DNS records (Google provides instructions)

**Option 3: Zoho Mail (FREE for 1 user)**

1. Go to: https://www.zoho.com/mail/
2. Sign up for free plan
3. Add domain: corporationoflight.com
4. Create mailbox: joshua@corporationoflight.com
5. Update DNS records (Zoho provides instructions)

### Email Forwarding (Quick Setup)

If you just want joshua@corporationoflight.com to forward to Inventor@aios.is:

1. Log into your domain registrar
2. Go to Email Forwarding settings
3. Create forwarding rule:
   - From: joshua@corporationoflight.com
   - To: Inventor@aios.is

**Note:** Forwarding only works for RECEIVING emails. For cold email campaigns (Instantly.ai), you need a full mailbox.

---

## 🎨 Customization Options

### Update Colors

Edit the CSS variables in `index.html` (lines 18-24):

```css
:root {
    --primary: #1a3a52;      /* Main dark blue */
    --secondary: #2c5f7f;    /* Lighter blue */
    --accent: #4a90c2;       /* Accent blue */
    --gold: #d4af37;         /* Gold accents */
}
```

### Add Your Logo

Replace "CORPORATION OF LIGHT" text with an image:

```html
<!-- Find this in line 42 -->
<div class="logo">CORPORATION OF LIGHT</div>

<!-- Replace with -->
<div class="logo">
    <img src="logo.png" alt="Corporation of Light" style="height: 50px;">
</div>
```

Then upload `logo.png` to your repository.

### Add Real Testimonials

Replace the placeholder testimonials (lines 495-522) with real client quotes once you have them.

### Update LinkedIn URL

Replace `linkedin.com/in/joshuacole` with your actual LinkedIn profile URL throughout the site.

---

## 📊 Add Analytics (Optional)

### Google Analytics

1. Go to: https://analytics.google.com/
2. Create account and property
3. Get your tracking code
4. Add before `</head>` tag in index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔧 Troubleshooting

### "Your site is not published yet"
- Wait 2-3 minutes and refresh
- Make sure repository is set to Public
- Check that index.html is in the root directory

### Custom domain not working
- Wait 30 minutes for DNS propagation
- Verify DNS records are correct (use https://dnschecker.org/)
- Make sure HTTPS enforcement is OFF until DNS propagates

### Changes not showing up
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Wait 1-2 minutes for GitHub Pages to rebuild

---

## 🚀 Going Live Checklist

Before promoting your site:

- [ ] Update Calendly links in 3 places
- [ ] Update LinkedIn profile URL
- [ ] Update email addresses
- [ ] Test all buttons and links
- [ ] Test on mobile device
- [ ] Verify contact form works (if you add one)
- [ ] Add Google Analytics (optional)
- [ ] Set up joshua@corporationoflight.com email
- [ ] Update LinkedIn profile with website link
- [ ] Update email signature with website link

---

## 📱 Share Your Site

Once live, share it:

**LinkedIn Post:**
```
I'm excited to announce the launch of Corporation of Light 🚀

We build AI systems that run businesses on autopilot. But more importantly,
we do it with integrity, transparency, and a commitment to your success.

All good business. No exceptions.

Check out our approach: https://corporationoflight.com

#AIAutomation #BusinessAutomation #Entrepreneurship
```

**Twitter/X:**
```
Just launched Corporation of Light - AI automation done right.

All good business. Morals. Honor. Duty.

https://corporationoflight.com
```

---

## 🎯 Next Steps After Launch

1. **Add site to LinkedIn profile:**
   - Edit LinkedIn → Contact Info → Website
   - Add: https://corporationoflight.com

2. **Update email signature:**
   ```
   Joshua Cole
   AI Systems Architect
   Corporation of Light

   🌐 https://corporationoflight.com
   📅 Book free session: [Calendly link]
   📧 joshua@corporationoflight.com
   ```

3. **Use in cold email:**
   - Add "Learn more: corporationoflight.com" to your email templates
   - Gives instant credibility

4. **Share on social media:**
   - LinkedIn, Twitter, Reddit (r/entrepreneur, r/SaaS)
   - Position as "how I'm disrupting consulting with radical transparency"

---

## 📞 Need Help?

If you run into issues setting this up, the documentation is here:
- GitHub Pages: https://docs.github.com/en/pages
- Custom Domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Your site is ready to launch. Follow the steps above and you'll be live in 10 minutes.** 🚀
