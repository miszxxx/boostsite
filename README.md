# Zyn Shop - Discord Boosting Services

A modern, responsive Discord boosting service website built with Next.js 14, featuring server-side API integration with Sell.app.

## 🚀 Features

- **Modern Design**: Clean, responsive design with purple/pink gradient theme
- **Server-Side API**: Optimized for Vercel with caching and edge functions
- **Sell.app Integration**: Complete product management and checkout system
- **Performance Optimized**: Fast loading with proper caching strategies
- **Mobile Responsive**: Works perfectly on all devices

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **API**: Sell.app REST API
- **Deployment**: Vercel (optimized)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Zyn-Site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Sell.app credentials:
   ```env
   SELLAPP_API_KEY=your_sellapp_api_key_here
   NEXT_PUBLIC_SELLAPP_STORE_ID=your_store_id_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Sell.app Setup

1. Get your API key from [Sell.app Dashboard](https://sell.app/dashboard/settings/api)
2. Find your Store ID in your Sell.app settings
3. Update the `.env` file with your credentials

### Customization

- **Colors**: Update the gradient colors in `app/globals.css` and component files
- **Branding**: Replace logo and update text in components
- **Links**: Update social links in `components/config.ts`

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # Server-side API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── framer/           # Animation components
│   └── ...               # Feature components
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set environment variables**
   - Go to your Vercel dashboard
   - Add `SELLAPP_API_KEY` and `NEXT_PUBLIC_SELLAPP_STORE_ID`

3. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Other Platforms

The app is optimized for Vercel but can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔍 API Endpoints

- `GET /api/products` - Fetch all product groups
- `GET /api/groups/[id]` - Fetch specific group
- `GET /api/groups/[id]/products` - Fetch products in group
- `GET /api/products/[id]` - Fetch specific product
- `GET /api/health` - Health check

## 🎨 Customization Guide

### Colors
The site uses a purple/pink gradient theme. To change colors:

1. Update CSS variables in `app/globals.css`
2. Update Tailwind classes in components
3. Update the `brand_gradient` class

### Content
- **Hero Section**: Edit `components/Hero.tsx`
- **About Section**: Edit `components/Aboutus.tsx`
- **Features**: Edit `components/Features.tsx`
- **FAQ**: Edit `components/Faq.tsx`

### Links & Configuration
Update `components/config.ts` for:
- Social media links
- Navigation links
- Notification settings

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized
- **Caching**: 5-minute cache with stale-while-revalidate
- **Bundle Size**: Optimized with code splitting

## 🛡 Security

- API keys are server-side only
- CORS headers configured
- Input validation on all endpoints
- Rate limiting ready

## 📝 License

This project is licensed under the MIT License.

## 🤝 Support

For support, join our [Discord server](https://discord.gg/zynshop) or contact us through the website.