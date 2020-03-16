## 【组件】 分割线组件

### 描述

jovi 主页 分割线组件

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/jovi-line.jpg" style="width:300px" alt="jovi-line"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="component-line"
  src="vivo-cards-suits/components/jovi/component-line/index.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <component-line></component-line>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
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
