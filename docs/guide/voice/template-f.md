## 【组件】 模板组件 F

### 描述

左图 + 标题 + 参数

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-template-f.jpg" style="width:300px" alt="voice-template-f"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="template-f"
  src="vivo-cards-suits/components/voice/components/template-f.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <template-f
      title="{{title}}"
      params="{{params}}"
      img-url="{{imgUrl}}"
      img-resize-mode="{{imgResizeMode}}"
      img-object-fit="{{imgObjectFit}}"
    ></template-f>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "标题",
        params: [
          {
            key: "参数参数",
            value: "参数信息参数信息参数信息参数信息参数信息"
          },
          {
            key: "参数数",
            value: "参数信息参数信息参数信息参数信息参数信息"
          },
          { key: "参数", value: "参数信息参数信息参数信息参数信息参数信息" }
        ],
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
| params        | Array  | -       | 参数数据                                               |
| imgUrl        | String | -       | 图片地址，支持 base64                                  |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |
