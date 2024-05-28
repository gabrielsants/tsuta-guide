import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Tesutā</span>,
  project: {
    link: 'https://github.com/gabrielsants/tsuta-guide',
  },
  docsRepositoryBase: 'https://github.com/gabrielsants/tsuta-guide/tree/main/docs',
  footer: {
    text: 'Gabriel Santos © 2024',
  },
  useNextSeoProps() {
    return {
      title: 'Tesutā',
      description: 'Tesutā is a complete guide to perform metamorphic test on chatbots.',
      openGraph: {
        type: 'website',
        url: 'https://tsuta-guide.vercel.app',
        title: 'Tesutā',
        description: 'Tesutā is a complete guide to perform metamorphic test on chatbots.',
      },
    }
  }
}

export default config
