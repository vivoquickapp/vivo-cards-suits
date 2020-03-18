## 【组件】 运营图组件

### 描述

jovi 主页 运营图组件

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/jovi-picture-b-1.jpg" style="width:300px" alt="jovi-picture-b-1"/>
  <img src="../../assets/jovi-picture-b-2.jpg" style="width:300px" alt="jovi-picture-b-2"/>
  <img src="../../assets/jovi-picture-b-3.jpg" style="width:300px" alt="jovi-picture-b-3"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="component-picture-b"
  src="vivo-cards-suits/components/jovi/component-picture-b/index.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <component-picture-b img-list="{{imgList}}"></component-picture-b>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgList: ["imgUrl", "imgUrl", "imgUrl"]
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

| 属性    | 类型  | 默认值 | 说明                                        |
| ------- | ----- | ------ | ------------------------------------------- |
| imgList | Array | -      | 图片链接数组，图片数量不超过 3，支持 base64 |
