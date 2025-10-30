import { MetadataRoute } from 'next'

const locales = ['en', 'nl', 'es', 'fr', 'de']
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://zenvy.io'

// Define all static pages
const staticPages = [
  '',
  'features',
  'pricing',
  'about',
  'blog',
  'support',
  'legal',
  'privacy',
  'terms',
]

// Define blog posts
const blogPosts = [
  'digital-wellness',
  'screen-time-balance',
  'talking-to-kids',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []

  // Generate URLs for each locale and static page
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      const path = page ? `/${locale}/${page}` : `/${locale}`
      urls.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: page === 'blog' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === 'features' || page === 'pricing' ? 0.9 : 0.8,
      })
    })

    // Generate URLs for blog posts
    blogPosts.forEach((post) => {
      urls.push({
        url: `${baseUrl}/${locale}/blog/${post}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  return urls
}

