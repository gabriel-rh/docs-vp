import { defineConfig } from 'vitepress'


const GITHUB_PAGES_REPO_NAME = 'docs-vp'; // Replace

let calculatedBase = '/'; // Default base

// Access Vite-exposed env variables
const netlifyContext = process.env.VITE_NETLIFY_CONTEXT || '';
const githubActions = process.env.VITE_GITHUB_ACTIONS === 'true' || false;
const githubRepo = process.env.VITE_GITHUB_REPOSITORY || '';

if (githubActions) {
    const repoName = githubRepo.split('/')[1];
    calculatedBase = `/${repoName}/`;
}
else if (netlifyContext === 'production') {
    calculatedBase = '/';
} 
else {
    calculatedBase = `/`;
}



// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: calculatedBase,
  ignoreDeadLinks: true,
  title: "VitePress",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'HTML Single',
        items: [

          { text: 'Networking', link: '/networking' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
