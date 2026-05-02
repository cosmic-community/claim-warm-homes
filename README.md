# Claim Warm Homes UK

![App Preview](https://imgix.cosmicjs.com/ff97bcf0-466d-11f1-a3ff-65bbafb72c6d-autopilot-photo-1560518883-ce09059eeffa-1777757367863.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern Next.js website to help UK homeowners claim Warm Homes Grants for heating, insulation, and energy-saving improvements. Built with Cosmic CMS for easy content management.

## Features

- 🏡 Dynamic Grant Programs catalog with eligibility details
- ✨ Services showcase with savings estimates
- 💬 Customer testimonials with star ratings
- ❓ Categorized FAQs with accordion interface
- 📱 Fully responsive, mobile-first design
- 🎨 Modern warm gradient design system
- ⚡ Server-side rendering for optimal performance
- 🔍 SEO-optimized with proper metadata

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f66c2ac27d356ff5004f03&clone_repository=69f66d6ac27d356ff5004f97)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Claim the Warm Homes Grant UK to access free heating, insulation, and energy-saving improvements. Warm Homes Grant helps homeowners and tenants apply for government-funded programs to reduce bills and improve home comfort. https://warmhomesgrant.co.uk/"

### Code Generation Prompt

> Build a Next.js application for a website called "Claim Warm Homes". The content is managed in Cosmic CMS with the following object types: grant-programs, services, testimonials, faqs. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Bun** - Fast package manager and runtime

## Getting Started

### Prerequisites

- Bun installed
- Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all grant programs
const { objects: grants } = await cosmic.objects
  .find({ type: 'grant-programs' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch single service
const { object: service } = await cosmic.objects
  .findOne({ type: 'services', slug: 'service-slug' })
  .depth(1)
```

## Cosmic CMS Integration

Content types: grant-programs, services, testimonials, faqs.

## Deployment

Deploy to Vercel or Netlify with environment variables:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->