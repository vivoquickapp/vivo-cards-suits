## 【组件】 卡片模板组件 D

### 描述

左图 + 标题 + 正文

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-template-d-1.jpg" style="width:300px" alt="voice-template-d-1"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="template-d"
  src="vivo-cards-suits/components/voice/components/template-d.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <template-d
      title="{{title}}"
      content="{{content}}"
      img-url="{{imgUrl}}"
      img-resize-mode="{{imgResizeMode}}"
      img-object-fit="{{imgObjectFit}}"
    ></template-d>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "标题",
        content:
          "卡片内容，卡片内容无限折行，不超过最大卡片高度，内容行数2行以上。",
        imgUrl: "",
        imgResizeMode: "cover",
        imgObjectFit: "cover"
      };
    }
  };
</script>

<style lang="less">
  .card {
    width: 100%;
    flex-direction: column;
  }
</style>
```

### API

#### 组件属性

| 属性          | 类型   | 默认值  | 说明                                                   |
| ------------- | ------ | ------- | ------------------------------------------------------ |
| title         | String | -       | 标题                                                   |
| content       | String | -       | 正文                                                   |
| imgUrl        | String | -       | 图片地址，支持 base64                                  |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |
