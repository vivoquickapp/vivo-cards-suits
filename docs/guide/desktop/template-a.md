## 【模板】卡片模板 A

### 描述

图文类卡片模板，图文按钮+图片组合+文本按钮。

### 使用效果

<div style="text-align: center;margin: 40px;">
<img src="../../assets/desktop-template-a.png" style="width:300px" alt="template-a"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="card-a"
  src="vivo-cards-suits/components/desktop/card-template-a/index"
></import>
```

### 示例

```html
<template>
  <card-a icons="{{icons}}" images="{{images}}" buttons="{{buttons}}"></card-a>
</template>
<script>
  export default {
    data() {
      return {
        icons: [
          {
            imageUrl:
              "https://statres.quickapp.cn/quickapp/icon/201803/dd5f359e/f4e9449535a1e2141eda5a063c028bff.png",
            text: "网易新闻",
            url: "http://www.baidu.com"
          },
          {
            imageUrl:
              "https://statres.quickapp.cn/quickapp/icon/201909/72f02942/e3a0e7c80c26eff2765e74450585a0dc.png",
            text: "看漫画",
            url: "http://www.baidu.com"
          },
          {
            imageUrl:
              "https://statres.quickapp.cn/quickapp/icon/202001/a05bd0fb/d60d379bcba70a33119e9f74079f37c0.png",
            text: "百度地图打车",
            url: "http://www.baidu.com"
          },
          {
            imageUrl:
              "https://statres.quickapp.cn/quickapp/icon/201911/fc3f343a/55892ef474922a4996bf2b7fe759e983.png",
            text: "菜鸟裹裹",
            url: "http://www.baidu.com"
          }
        ],
        images: [
          {
            imageUrl:
              "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2575325937.jpg",
            text: "小妇人",
            url: "hap://app/com.vivo.shop"
          },
          {
            imageUrl:
              "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2569332465.jpg",
            text: "譬如朝露",
            url: "hap://app/com.vivo.shop"
          },
          {
            imageUrl:
              "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561439800.jpg",
            text: "寄生虫",
            url: "hap://app/com.vivo.shop"
          },
          {
            imageUrl:
              "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2568902055.jpg",
            text: "爱尔兰人",
            url: "hap://app/com.vivo.shop"
          }
        ],
        buttons: [
          {
            text: "马上观看",
            url:
              "https://movie.douban.com/subject/27119724/?tag=%E7%83%AD%E9%97%A8&from=gaia"
          },
          {
            text: "查看详情",
            url:
              "https://movie.douban.com/subject/27119724/?tag=%E7%83%AD%E9%97%A8&from=gaia"
          }
        ]
      };
    }
  };
</script>
```

### API

#### 组件属性

| 属性           | 类型   | 默认值     | 说明                                    |
| -------------- | ------ | ---------- | --------------------------------------- |
| iconType       | string | 'square'   | icon 的显示模式，可选值'square','round' |
| icons          | array  | []         | icon 组，最大支持 5 个 icon，最少一个   |
| icon.imageUrl  | string | -          | icon 链接地址，支持 base64              |
| icon.text      | string | '文字模板' | 单个 icon 文本                          |
| icon.url       | string | -          | 单个 icon 点击后跳转的地址              |
| images         | array  | []         | 图片组，最大支持 4 个，最少一个         |
| image.imageUrl | string | -          | 单个图片地址，支持 base64               |
| image.text     | string | '文字模板' | 单个图片文本                            |
| image.url      | string | -          | 单个图片点击后跳转的地址                |
| buttons        | array  | []         | 底部按钮组，最大支持三个按钮，最少一个  |
| button.text    | string | '按钮'     | 按钮组单个按钮文本                      |
| button.url     | string | -          | 按钮组单个按钮文本，点击后跳转地址      |
