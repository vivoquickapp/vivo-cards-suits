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
        title: "Jovi语音",
        collapsable: true,
        children: [
          "/guide/voice/list",
          "/guide/voice/template",
          "/guide/voice/list-a",
          "/guide/voice/list-b",
          "/guide/voice/list-c",
          "/guide/voice/list-d",
          "/guide/voice/list-e",
          "/guide/voice/list-f",
          "/guide/voice/list-g",
          "/guide/voice/list-h",
          "/guide/voice/list-i",
          "/guide/voice/template-a",
          "/guide/voice/template-b",
          "/guide/voice/template-c",
          "/guide/voice/template-d",
          "/guide/voice/template-e",
          "/guide/voice/template-f",
          "/guide/voice/template-g",
          "/guide/voice/template-h",
          "/guide/voice/text-a",
          "/guide/voice/text-b"
        ]
      },
      {
        title: "智慧识屏",
        collapsable: true,
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
        collapsable: true,
        children: [
          "/guide/desktop/template-a",
          "/guide/desktop/template-b",
          "/guide/desktop/template-c",
          "/guide/desktop/template-d",
          "/guide/desktop/component-buttons",
          "/guide/desktop/component-icons",
          "/guide/desktop/component-images",
          "/guide/desktop/component-network",
          "/guide/desktop/component-search"
        ]
      },
      {
        title: "Jovi主页",
        collapsable: true,
        children: [
          "/guide/jovi/component-tabs",
          "/guide/jovi/component-sign",
          "/guide/jovi/component-line",
          "/guide/jovi/component-entrance",
          "/guide/jovi/component-picture-a",
          "/guide/jovi/component-picture-b",
          "/guide/jovi/component-picture-c",
          "/guide/jovi/component-list-item-a",
          "/guide/jovi/component-list-item-b",
          "/guide/jovi/component-list-item-c",
          "/guide/jovi/component-blank-a",
          "/guide/jovi/component-blank-b",
          "/guide/jovi/component-buttons",
          "/guide/jovi/component-status",
          "/guide/jovi/component-travel",
          "/guide/jovi/component-image-header",
          "/guide/jovi/component-header",
          "/guide/jovi/component-textarea"
        ]
      },
      {
        title: "全局搜索",
        collapsable: true,
        children: [
          "/guide/search/component-a",
          "/guide/search/component-b",
          "/guide/search/component-c",
          "/guide/search/component-button"
        ]
      }
    ]
  }
};
