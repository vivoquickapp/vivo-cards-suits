## 【组件】 组件 C

### 描述

全局搜索组件 C

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/search-component-c-1.jpg" style="width:300px" alt="search-component-c-1"/>
  <img src="../../assets/search-component-c-2.jpg" style="width:300px" alt="search-component-c-2"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="component-c"
  src="vivo-cards-suits/components/search/component-c/index.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <component-c
      img-url="{{imgUrl}}"
      info1="{{info1}}"
      info2="{{info2}}"
      info3="{{info3}}"
      info1-lines="{{info1Lines}}"
      info2-lines="{{info2Lines}}"
      info3-lines="{{info3Lines}}"
    ></component-c>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgUrl: "imgUrl",
        info1: "文字模板文字模板",
        info2: "文字模板文字模板文字模板文字模板文字模板文字模板",
        info3: "文字模板文字模板",
        info1Lines: 2,
        info2Lines: 3,
        info3Lines: 1
      };
    }
  };
</script>

<style lang="less">
  .card {
    width: 100%;
  }
</style>
```

### API

#### 组件属性

| 属性       | 类型   | 默认值 | 说明                                |
| ---------- | ------ | ------ | ----------------------------------- |
| imgUrl     | String | -      | 图片地址，支持 base64，不传则不显示 |
| info1      | String | -      | 标题文字，不传则不显示              |
| info2      | String | -      | 次要文字，不传则不显示              |
| info3      | String | -      | 说明文字，不传则不显示              |
| info1Lines | Number | 2      | 标题文字显示行数，超过显示...       |
| info2Lines | Number | 3      | 次要文字显示行数，超过显示...       |
| info3Lines | Number | 1      | 说明文字显示行数，超过显示...       |

#### 组件事件

| 事件名称 | 事件描述     | 返回值 |
| -------- | ------------ | ------ |
| clickbtn | 点击按钮触发 | -      |
