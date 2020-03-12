## 【组件】 卡片模板组件 H

### 描述

播放器

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-template-h-1.jpg" style="width:300px" alt="voice-template-h-1"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="template-h"
  src="vivo-cards-suits/components/voice/components/template-h.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <template-h
      song="{{song}}"
      singer="{{singer}}"
      img-url="{{imgUrl}}"
      img-resize-mode="{{imgResizeMode}}"
      img-object-fit="{{imgObjectFit}}"
      onclick-play="handleClickPlay"
      onclick-stop="handleClickStop"
      onclick-next="handleClickNext"
    ></template-h>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        song: "歌曲",
        singer: "歌手",
        imgUrl: "",
        imgResizeMode: "cover",
        imgObjectFit: "cover"
      };
    },
    handleClickPlay() {
      console.log("点击播放按钮");
    },
    handleClickStop() {
      console.log("点击暂停按钮");
    },
    handleClickNext() {
      console.log("点击下一首按钮");
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
| song          | String | -       | 歌曲                                                   |
| singer        | String | -       | 歌手                                                   |
| imgUrl        | String | -       | 图片地址，支持 base64                                  |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |

#### 组件事件

| 事件名称  | 事件描述           | 返回值 |
| --------- | ------------------ | ------ |
| clickPlay | 点击播放按钮触发   | -      |
| clickStop | 点击暂停按钮触发   | -      |
| clickNext | 点击下一首按钮触发 | -      |
