## 【组件】网络状态组件

### 描述

用于显示网络状态

### 使用效果

<div style="text-align: center;margin: 40px;">
<img src="../../assets/desktop-component-network-a.png" style="width:300px" alt="component-network"/>
<img src="../../assets/desktop-component-network-b.png" style="width:300px" alt="component-network"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="network"
  src="vivo-cards-suits/components/desktop/components/network"
></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <network status="{{status}}" onretry="clickHandler"></network>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        status: "loading"
      };
    },
    onInit() {
      setTimeout(() => {
        this.status = "error";
      }, 2000);
    },
    clickHandler() {
      this.status = "loading";
      console.log(this.status);
    }
  };
</script>
<style lang="less">
  .wrap {
    background-color: #ffffff;
    border-bottom-left-radius: ~"theme.borderBottomRadius"; /* theme是动态主题变量，不要设置具体值*/
    border-bottom-right-radius: ~"theme.borderBottomRadius"; /* theme是动态主题变量，不要设置具体值*/
  }
</style>
```

### API

#### 组件属性

| 属性    | 类型   | 默认值    | 说明                                        |
| ------- | ------ | --------- | ------------------------------------------- |
| status  | string | 'loading' | 网络状态，'loading' 加载中 'error' 数据出错 |
| onretry | event  | -         | 点击重试按钮触发的回调事件                  |
