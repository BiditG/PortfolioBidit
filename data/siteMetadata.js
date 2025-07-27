/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Bidit Giri',
  author: 'Bidit Giri',
  headerTitle: 'Bidit Giri',
  description:
    'I design intelligent solutions using large language models and generative AI — turning ideas into powerful web and software experiences.',
  language: 'en-us',
  theme: 'system', // Options: 'system', 'dark', 'light'
  siteUrl: 'https://biditgiri.com.np',
  siteRepo: 'https://github.com/BiditG/portfolio-site',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  email: 'biditgiri123@gmail.com',
  github: 'https://github.com/BiditG',
  linkedin: 'https://www.linkedin.com/in/bidit-giri-948345309/',
  instagram: 'https://www.instagram.com/biditgiri',
  medium: 'https://medium.com/@biditgiri',
  locale: 'en-US',
  stickyNav: true, // Enables a sticky top navigation bar

  analytics: {
    // To enable analytics, configure the relevant provider and ID
    umamiAnalytics: {
      // umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: 'biditgiri.com.np',
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '',
    // },
  },

  newsletter: {
    provider: '', // Set to 'buttondown', 'mailchimp', etc., if using a newsletter
  },

  comments: {
    provider: '', // Options: 'giscus', 'utterances', 'disqus'
    // Uncomment and configure below if enabling comments
    // giscusConfig: {
    //   repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
    //   repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    //   category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    //   categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    //   mapping: 'pathname',
    //   reactions: '1',
    //   metadata: '0',
    //   theme: 'light',
    //   darkTheme: 'transparent_dark',
    //   themeURL: '',
    //   lang: 'en',
    // },
  },

  search: {
    provider: 'kbar', // 'kbar' or 'algolia'
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
    // algoliaConfig: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },
  },

  // Optional: Add featured links for external pages
  externalLinks: {
    resume: '/static/files/BiditGiri_Resume.pdf',
    projects: '/projects',
    blog: '/blog',
  },
}

module.exports = siteMetadata
