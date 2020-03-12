## 【组件】 卡片模板组件 E

### 描述

左图 + 标题 + 正文内容 + 辅助内容

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-template-e-1.jpg" style="width:300px" alt="voice-template-e-1"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="template-e"
  src="vivo-cards-suits/components/voice/components/template-e.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <template-e
      title="{{title}}"
      info1="{{info1}}"
      info2="{{info2}}"
      img-url="{{imgUrl}}"
      img-resize-mode="{{imgResizeMode}}"
      img-object-fit="{{imgObjectFit}}"
    ></template-e>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "标题",
        info1:
          "正文内容，卡片内容无限折行，不超过最大卡片高度，内容行数2行以上。",
        info2:
          "辅助内容，行数尽量控制在两行以上。辅助内容，行数尽量控制在两行以上。",
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
| info1         | String | -       | 正文内容                                               |
| info2         | String | -       | 辅助内容                                               |
| imgUrl        | String | -       | 图片地址，支持 base64                                  |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |
