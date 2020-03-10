module.exports = {
  base: "/vivo-cards-suits/",
  title: "vivo卡片组件库",
  description:
    "vivo卡片开发组件库是由vivo官方开发的一套包含个入口UI规范的组件库，可供开发者便捷快速开发能够在vivo手机上线的卡片项目。",
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-888888888-8"
      }
    ],
    "@vuepress/back-to-top"
  ],
  markdown: {
    lineNumbers: true
  },
  head: [
    ["link", { rel: "icon", href: "favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "快应用 组件库 UI组件库 快应用开发 卡片开发"
      }
    ]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/guide/" },
      {
        text: "GitHub",
        link: "https://github.com/vivoquickapp/vivo-cards-suits.git"
      }
    ],
    sidebar: [
      {
        title: "介绍",
        collapsable: false,
        children: ["/guide/"]
      },
      {
        title: "Jovi语音", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: ["/guide/voice/template-a"]
      },
      {
        title: "智慧识屏",
        collapsable: false,
        children: [
          "/guide/screen/template-a",
          "/guide/screen/template-b",
          "/guide/screen/template-c",
          "/guide/screen/component-a",
          "/guide/screen/component-b",
          "/guide/screen/component-c",
          "/guide/screen/component-d"
        ]
      },
      {
        title: "智慧桌面",
        collapsable: false,
        children: ["/guide/desktop/template-a"]
      },
      {
        title: "Jovi主页",
        collapsable: false,
        children: ["/guide/jovi/template-a"]
      },
      {
        title: "全局搜索",
        collapsable: false,
        children: ["/guide/search/template-a"]
      }
    ]
  }
};
