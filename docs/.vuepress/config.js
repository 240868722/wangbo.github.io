module.exports = {
    title: '王波的脚手架',
    description: '快速搭建项目',
    docsRepo: 'codexu/codexu.github.io',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '快速上手', link: '/zh/' },
            { text: '案例', link: 'https://google.com' },
            {
                text: '语言选择',
                ariaLabel: 'Language Menu',
                items: [
                  { text: '中文', link: '/language/chinese/' },
                  { text: '英文', link: '/language/japanese/' }
                ]
            },
            { text: 'Github', link: 'https://google.com' },
          ],
        sidebar: [
            {
                title: '快速上手',   // 必要的
                collapsable: false,
                children: [
                  ['/zh/','标题'],
                  ['/zh/概念','概念'],
                  ['/zh/命令行工具','命令行工具']
                ]
              }
        ]
    }
}