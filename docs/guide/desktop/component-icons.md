## 【组件】icon 组

### 描述

用于显示多个或单个 icon

### 使用效果

<div style="text-align: center;margin: 40px;">
<img src="../../assets/desktop-component-icons.png" style="width:300px" alt="component-icons"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="icons"
  src="vivo-cards-suits/components/desktop/components/icons"
></import>
```

### API

| 属性          | 类型   | 默认值     | 说明                                    |
| ------------- | ------ | ---------- | --------------------------------------- |
| iconType      | string | 'square'   | icon 的显示模式，可选值'square','round' |
| icons         | array  | []         | icon 组，最大支持 5 个 icon，最少一个   |
| icon.imageUrl | string | -          | icon 链接地址，支持 base64              |
| icon.text     | string | '文字模板' | 单个 icon 文本                          |
| icon.url      | string | -          | 单个 icon 点击后跳转的地址              |
