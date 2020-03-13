## 【模板】 卡片模板 A

### 描述

全局搜索卡片模板 A

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/search-template-a-1.jpg" style="width:300px" alt="search-template-a-1"/>
  <img src="../../assets/search-template-a-2.jpg" style="width:300px" alt="search-template-a-2"/>
  <img src="../../assets/search-template-a-3.jpg" style="width:300px" alt="search-template-a-3"/>
  <img src="../../assets/search-template-a-4.jpg" style="width:300px" alt="search-template-a-4"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="card-template-a"
  src="vivo-cards-suits/components/search/card-template-a/button.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <card-template-a
      img-url="{{imgUrl}}"
      img-type="{{imgType}}"
      info1="{{info1}}"
      info2="{{info2}}"
      info3="{{info3}}"
      button="{{button}}"
    ></card-template-a>
  </div>
</template>

<script>
  import router from "@system.router";

  export default {
    data() {
      return {
        imgUrl: "imgUrl",
        imgType: "A", // A B
        info1: "文字模板文字模板",
        info2: "文字模板文字模板文字模板文字模板文字模板文字模板",
        info3: "文字模板文字模板",
        button: "按钮"
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

| 属性       | 类型   | 默认值 | 说明                                            |
| ---------- | ------ | ------ | ----------------------------------------------- |
| imgUrl     | String | -      | 图片地址，支持 base64，不传则不显示             |
| imgType    | String | A      | 图片样式，可选值：A，B                          |
| info1      | String | -      | 标题文字，标题文字不超过 2 行，不传则不显示     |
| info2      | String | -      | 次要文字，次要文字不超过 3 行，不传则不显示     |
| info3      | String | -      | 说明文字，说明文字不超过 1 行，不传则不显示     |
| info1Lines | Number | 2      | 标题文字显示行数，超过显示...                   |
| info2Lines | Number | 3      | 次要文字显示行数，超过显示...                   |
| info3Lines | Number | 1      | 说明文字显示行数，超过显示...                   |
| button     | String | -      | 按钮文字，按钮文字不超过 2 个，不传则不显示按钮 |

#### 组件事件

| 事件名称 | 事件描述     | 返回值 |
| -------- | ------------ | ------ |
| clickbtn | 点击按钮触发 | -      |
