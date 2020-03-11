## 【组件】 列表组件 D

### 描述

右图 + 标题 + 参数

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-list-item-d.jpg" style="width:300px" alt="voice-list-item-d"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="list-item-d"
  src="vivo-cards-suits/components/voice/components/list-item-d.ux"
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
        <list-item-d
          title="{{$item.title}}"
          params="{{$item.params}}"
          img-url="{{$item.imgUrl}}"
          img-resize-mode="{{imgResizeMode}}"
          img-object-fit="{{imgObjectFit}}"
        ></list-item-d>
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
            params: [
              {
                key: "参数参数",
                value: "参数信息参数信息参数信息参数信息参数信息"
              },
              {
                key: "参数数",
                value: "参数信息参数信息参数信息参数信息参数信息"
              },
              { key: "参数", value: "参数信息参数信息参数信息参数信息参数信息" }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            params: [
              {
                key: "参数参数",
                value: "参数信息参数信息参数信息参数信息参数信息"
              },
              {
                key: "参数数",
                value: "参数信息参数信息参数信息参数信息参数信息"
              },
              { key: "参数", value: "参数信息参数信息参数信息参数信息参数信息" }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            params: [
              {
                key: "参数参数",
                value: "参数信息参数信息参数信息参数信息参数信息"
              },
              {
                key: "参数数",
                value: "参数信息参数信息参数信息参数信息参数信息"
              },
              { key: "参数", value: "参数信息参数信息参数信息参数信息参数信息" }
            ],
            imgUrl: ""
          },
          {
            title: "标题",
            params: [
              {
                key: "参数参数",
                value: "参数信息参数信息参数信息参数信息参数信息"
              },
              {
                key: "参数数",
                value: "参数信息参数信息参数信息参数信息参数信息"
              },
              { key: "参数", value: "参数信息参数信息参数信息参数信息参数信息" }
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
| params        | Array  | -       | 参数数据                                               |
| imgUrl        | String | -       | 图片地址，支持 base64                                  |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |
