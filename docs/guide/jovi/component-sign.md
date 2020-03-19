## 【组件】 卡片附属内容区组件

### 描述

jovi 主页 卡片附属内容区组件

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/jovi-component-sign.jpg" style="width:300px" alt="jovi-component-sign"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="component-sign"
  src="vivo-cards-suits/components/jovi/component-sign/index.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <component-sign
      sign-name="{{signName}}"
      sign-url="{{signUrl}}"
      skip-name="{{skipName}}"
      skip-link="{{skipLink}}"
      onclickmore="handleClickMore"
    ></component-sign>
  </div>
</template>

<script>
  import router from "@system.router";

  export default {
    data() {
      return {
        signName: "服务商名称",
        signUrl: "",
        skipName: "更多服务",
        skipLink: "https://www.quickapp.cn/"
      };
    },
    handleClickMore() {
      console.log(`点击查看更多 url: ${this.skipLink}`);

      router.push({
        uri: this.skipLink
      });
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

| 属性     | 类型   | 默认值     | 说明                               |
| -------- | ------ | ---------- | ---------------------------------- |
| signName | String | 服务商名称 | 服务商名称                         |
| signUrl  | String | -          | 服务商 logo                        |
| skipName | String | 更多服务   | 服务名称                           |
| skipLink | String | -          | 跳转链接，链接为空则不显示服务名称 |

#### 组件事件

| 事件名称  | 事件描述         | 返回值 |
| --------- | ---------------- | ------ |
| clickmore | 点击更多服务触发 | -      |
