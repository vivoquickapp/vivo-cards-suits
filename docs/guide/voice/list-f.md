## 【组件】 列表组件 F

### 描述

左图 + 标题 + 标签文字 + 浏览收藏

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-list-item-f.jpg" style="width:300px" alt="voice-list-item-f"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="list-item-f"
  src="vivo-cards-suits/components/voice/components/list-item-f.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <div class="list">
      <div
        class="list-item-wrap {{$idx!==0?'border-top':''}}"
        for="{{listData.slice(0,5)}}"
      >
        <list-item-f
          title="{{$item.title}}"
          content="{{$item.content}}"
          record="{{$item.record}}"
          img-url="{{$item.imgUrl}}"
          img-resize-mode="{{imgResizeMode}}"
          img-object-fit="{{imgObjectFit}}"
        ></list-item-f>
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
            content: "标签文字",
            record: [
              {
                type: "browse",
                number: 1000
              },
              {
                type: "collect",
                number: 1000
              }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            content: "标签文字",
            record: [
              {
                type: "browse",
                number: 1000
              },
              {
                type: "collect",
                number: 1000
              }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            content: "标签文字",
            record: [
              {
                type: "browse",
                number: 1000
              },
              {
                type: "collect",
                number: 1000
              }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            content: "标签文字",
            record: [
              {
                type: "browse",
                number: 1000
              },
              {
                type: "collect",
                number: 1000
              }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            content: "标签文字",
            record: [
              {
                type: "browse",
                number: 1000
              },
              {
                type: "collect",
                number: 1000
              }
            ],
            imgUrl: ""
          }
        ],
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
| content       | String | -       | 标签文字                                               |
| record        | Array  | -       | 浏览点赞数量，可选 type 类型：browse，like，collect    |
| imgUrl        | String | -       | 图片地址，支持 base64                                  |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |
