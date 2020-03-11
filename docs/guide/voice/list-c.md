## 【组件】 列表组件 C

### 描述

右图 + 标题 + 文字内容 + 浏览点赞

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-list-item-c.jpg" style="width:300px" alt="voice-list-item-c"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="list-item-c"
  src="vivo-cards-suits/components/voice/components/list-item-c.ux"
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
        <list-item-c
          title="{{$item.title}}"
          content="{{$item.content}}"
          record="{{$item.record}}"
          img-url="{{$item.imgUrl}}"
          img-resize-mode="{{imgResizeMode}}"
          img-object-fit="{{imgObjectFit}}"
        ></list-item-c>
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
            record: [
              {
                type: "browse",
                number: 1000
              },
              {
                type: "like",
                number: 1000
              }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            content:
              "文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。",
            record: [
              {
                type: "browse",
                number: 1000
              },
              {
                type: "like",
                number: 1000
              }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            content:
              "文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。",
            record: [
              {
                type: "browse",
                number: 1000
              },
              {
                type: "like",
                number: 1000
              }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            content:
              "文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。文字内容，行数尽量控制在2-3行。",
            record: [
              {
                type: "browse",
                number: 1000
              },
              {
                type: "like",
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
| content       | String | -       | 文字内容                                               |
| record        | Array  | -       | 浏览点赞数量，可选 type 类型：browse，like，collect    |
| imgUrl        | String | -       | 图片地址，支持 base64                                  |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |