## 【组件】 卡片模板组件 A

### 描述

纯文本卡片

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-template-a.png" style="width:300px" alt="voice-template-a-1"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="template-a"
  src="vivo-cards-suits/components/voice/components/template-a.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <template-a content="{{content}}"></template-a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content:
          "纯文本，卡片内容无限折行，不超过最大卡片高度，内容行数2行以上。"
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

| 属性    | 类型   | 默认值 | 说明     |
| ------- | ------ | ------ | -------- |
| content | String | -      | 文本内容 |
