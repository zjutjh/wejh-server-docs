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
        text: "链接",
        link: "/wejh-server/"
      },
      {
        text: "链接",
        link: "/wejh-ios-server/"
      },
      {
        text: "Github",
        link: "https://https://github.com/GetToSet/wejh-server-docs/"
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
                // {
                //   title: "功能模块",
                //   children: [
                //   ]
                // },
              ]
            },
          ],
        },
        {
          title: "微精弘 iOS 后端",
          collapsable: true,
          children: [
            // "wejh-ios-server/social-media",
            // "wejh-ios-server/new-media",
            // "wejh-ios-server/traditional-media",
            // "wejh-ios-server/bbs",
            // "wejh-ios-server/blog",
            // "wejh-ios-server/programming",
            // "wejh-ios-server/design",
            // "wejh-ios-server/live",
            // "wejh-ios-server/multimedia",
            // "wejh-ios-server/picture",
            // "wejh-ios-server/anime",
            // "wejh-ios-server/program-update",
            // "wejh-ios-server/university",
            // "wejh-ios-server/forecast",
            // "wejh-ios-server/travel",
            // "wejh-ios-server/shopping",
            // "wejh-ios-server/game",
            // "wejh-ios-server/reading",
            // "wejh-ios-server/government",
            // "wejh-ios-server/study",
            // "wejh-ios-server/other"
          ]
        }
      ]
    }
  }
};
