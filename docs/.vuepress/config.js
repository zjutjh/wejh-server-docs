module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo-square.png' }],
  ],
  title: "微精弘",
  themeConfig: {
    docsDir: "docs",
    logo: '/logo-round.png',
    lastUpdated: "最近更新",
    smoothScroll: true,
    search: false,
    nav: [
      {
        text: "Github",
        link: "https://github.com/GetToSet/wejh-server-docs/"
      },
      {
        text: "主页",
        link: "/"
      }
    ],
    sidebar: {
      "/": [
        {
          title: "微精弘数据后端",
          collapsable: true,
          children: [
            "wejh-server/console-tasks",
            {
              title: "API",
              children: [
                "wejh-server/apis-weapp",
                "wejh-server/apis-auth",
                {
                  title: "数据模块",
                  children: [
                    "wejh-server/apis-exam",
                    "wejh-server/apis-score",
                    "wejh-server/apis-timetable",
                    "wejh-server/apis-library"
                  ]
                },
              ]
            },
          ],
        },
        {
          title: "微精弘 iOS 后端",
          collapsable: true,
          children: [
          ]
        }
      ]
    }
  }
};
