## 【组件】 列表模板组件 B

### 描述

右图 + 标题 + 文字内容 + 标签内容

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-list-item-b.png" style="width:300px" alt="voice-list-item-b-1"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="list-item-b"
  src="vivo-cards-suits/components/voice/components/list-item-b.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <div class="list">
      <div
        class="list-item-wrap {{$idx!==0?'border-top':''}}"
        for="{{listData.slice(0,4)}}"
      >
        <list-item-b
          title="{{$item.title}}"
          content="{{$item.content}}"
          tips="{{$item.tips}}"
          img-type="{{imgType}}"
          img-url="{{$item.imgUrl}}"
          img-resize-mode="{{imgResizeMode}}"
          img-object-fit="{{imgObjectFit}}"
        ></list-item-b>
      </div>
    </div>
  </div>
</template>

<script>
  import router from "@system.router";

  export default {
    data() {
      return {
        listData: [
          {
            title: "标题",
            content:
              "文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。",
            tips: "tips, 一行",
            imgUrl: ""
          },
          {
            title: "标题",
            content:
              "文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。",
            tips: "tips, 一行",
            imgUrl: ""
          },
          {
            title: "标题",
            content:
              "文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。",
            tips: "tips, 一行",
            imgUrl: ""
          },
          {
            title: "标题",
            content:
              "文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。",
            tips: "tips, 一行",
            imgUrl: ""
          }
        ],
        imgType: "A", // A: 144*108 B: 128*128
        imgResizeMode: "cover",
        imgObjectFit: "cover"
      };
    }
  };
</script>

<style lang="less">
  .border-top {
    border-top: 2px solid rgba(0, 0, 0, 0.05);
  }

  .card {
    width: 100%;
    flex-direction: column;
    .list {
      flex-direction: column;
      padding: 0 32px;
    }
  }
</style>
```

### API

#### 组件属性

| 属性          | 类型   | 默认值  | 说明                                                   |
| ------------- | ------ | ------- | ------------------------------------------------------ |
| title         | String | -       | 标题                                                   |
| content       | String | -       | 文字内容                                               |
| tips          | String | -       | 标签内容                                               |
| imgType       | String | A       | 图片的尺寸类型，A: 144\*108 B: 128\*128                |
| imgUrl        | String | -       | 图片地址，支持 base64                                  |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |
