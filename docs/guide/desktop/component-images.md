## 【组件】图文组

### 描述

用于显示多个或单个图文

### 使用效果

<div style="text-align: center;margin: 40px;">
<img src="../../assets/desktop-component-images.png" style="width:300px" alt="component-images"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="images"
  src="vivo-cards-suits/components/desktop/components/images"
></import>
```

### API

#### 组件属性

| 属性           | 类型   | 默认值     | 说明                            |
| -------------- | ------ | ---------- | ------------------------------- |
| images         | array  | []         | 图片组，最大支持 4 个，最少一个 |
| image.imageUrl | string | -          | 单个图片地址，支持 base64       |
| image.text     | string | '文字模板' | 单个图片文本                    |
| image.url      | string | -          | 单个图片点击后跳转的地址        |
