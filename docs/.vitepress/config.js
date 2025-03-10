export default {
  title: 'Web Blog',
  description: 'Web Blog',
  base: '/web-blog/',
  head: [
    [
        'link',
        {
            rel: 'icon', 
            href: '/favicon.svg'
        }
    ]
  ],
  themeConfig: {
    nav: [
        {
            text: 'Home',
            link: '/',
        },
        { text: "Guide", link: "/guide/" },
        { text: "GuideTest", link: "/guide/test" },
        // {
        //     text: "Drop Menu",
        //     items: [
        //     { text: 'Item A', link: '/item-1' },
        //     { text: 'Item B', link: '/item-2' },
        //     { text: 'Item C', link: '/item-3' }
        //     ]
        // }
    ],
    logo: '/javascript.png',
    sidebar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Javascript',
        items: [
            {
                text: 'Object.defineProperty和Proxy',
                link: '/javascript/Object.defineProperty和Proxy',
            }
        ]
      },
      {
        text: 'CSS',
        items: [
            {
                text: 'BFC',
                link: '/css/BFC',
            },
            {
                text: '区块盒子和行内盒子',
                link: '/css/区块盒子和行内盒子',
            },
            {
                text: 'TailwindCSS原理',
                link: '/css/TailwindCSS原理',
            },
            {
              text: 'Grid',
              link: '/css/Grid',
            },
            {
              text: 'Flex',
              link: '/css/Flex',
            }
        ]
      },
      {
        text: '工程化',
        items: [
            {
                text: 'Compiler和Compilation',
                link: '/engineering/Compiler和Compilation',
            },
            {
              text: 'webpack工作流程',
              link: '/engineering/webpack工作流程',
            },
            {
              text: 'webpack性能优化',
              link: '/engineering/webpack性能优化',
            },
            {
              text: 'webpack性能优化（举例）',
              link: '/engineering/webpack性能优化（举例）',
            },
            {
              text: 'webpack splitChunks最佳实践',
              link: '/engineering/webpack splitChunks最佳实践',
            },
            {
              text: 'webpack热更新原理',
              link: '/engineering/webpack热更新原理',
            }
        ]
      },
    ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
};