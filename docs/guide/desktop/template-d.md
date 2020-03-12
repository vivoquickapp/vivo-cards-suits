## 【模板】卡片模板 D

### 描述

综合卡片模板，Tips 提示+图文按钮+正文+图+辅助信息+按钮。

### 使用效果

<div style="text-align: center;margin: 40px;">
<img src="../../assets/desktop-template-d.png" style="width:300px" alt="template-d"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="card-d"
  src="vivo-cards-suits/components/desktop/card-template-d/index"
></import>
```

### 示例

```html
<template>
  <card-d
    tips="本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。"
    title="20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……"
    info="又名: 月黑高飞(港) / 刺激1995(台) / 地狱诺言 / 铁窗岁月 / 消香克的救赎"
    image-url="https://img9.doubanio.com/view/photo/l/public/p490578846.webp"
    icons="{{icons}}"
    buttons="{{buttons}}"
  ></card-d>
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
            url: "hap://app/com.vivo.shop"
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
            text: "百度地图",
            url: "http://www.baidu.com"
          },
          {
            imageUrl:
              "https://statres.quickapp.cn/quickapp/icon/201911/fc3f343a/55892ef474922a4996bf2b7fe759e983.png",
            text: "菜鸟裹裹",
            url: "http://www.baidu.com"
          },
          {
            imageUrl:
              "https://statres.quickapp.cn/quickapp/icon/201911/fc3f343a/55892ef474922a4996bf2b7fe759e983.png",
            text: "菜鸟裹裹",
            url: "http://www.baidu.com"
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

| 属性          | 类型   | 默认值     | 说明                                    |
| ------------- | ------ | ---------- | --------------------------------------- |
| tips          | string | -          | 提示文本                                |
| tipsUrl       | string | -          | 提示文本跳转链接                        |
| title         | string | -          | 标题文本                                |
| info          | string | -          | 辅助说明文本                            |
| imageUrl      | string | -          | 图片地址，支持 base64                   |
| iconType      | string | 'square'   | icon 的显示模式，可选值'square','round' |
| icons         | array  | []         | icon 组，最大支持 5 个 icon，最少一个   |
| icon.imageUrl | string | -          | icon 链接地址，支持 base64              |
| icon.text     | string | '文字模板' | 单个 icon 文本                          |
| icon.url      | string | -          | 单个 icon 点击后跳转的地址              |
| buttons       | array  | []         | 底部按钮组，最大支持三个按钮，最少一个  |
| button.text   | string | '按钮'     | 按钮组单个按钮文本                      |
| button.url    | string | -          | 按钮组单个按钮文本，点击后跳转地址      |
