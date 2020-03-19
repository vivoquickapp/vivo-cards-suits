## 【组件】 单图片组件

### 描述

jovi 主页 单图片组件

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/jovi-picture-c.jpg" style="width:300px" alt="jovi-picture-c"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="component-picture-c"
  src="vivo-cards-suits/components/jovi/component-picture-c/index.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <component-picture-c
      width="{{width}}"
      height="{{height}}"
      src="{{imgUrl}}"
      resize-mode="{{imgResizeMode}}"
      object-fit="{{imgObjectFit}}"
    ></component-picture-c>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        width: "100%",
        height: "500px",
        imgUrl: "imgUrl",
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
| width         | String | -       | 图片宽度, 带单位(px, %)                                |
| height        | String | -       | 图片高度, 带单位(px, %)                                |
| imgUrl        | String | -       | 图片链接, 支持 base64                                  |
| imgDefault    | String | -       | 默认图片链接, 支持 base64                              |
| imgError      | String | -       | 错误图片链接, 支持 base64                              |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |
