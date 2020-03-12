## 【组件】 列表模板组件 G

### 描述

左图 + 标题 + 评分 + 辅助信息

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-list-item-g-1.jpg" style="width:300px" alt="voice-list-item-g-1"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="list-item-g"
  src="vivo-cards-suits/components/voice/components/list-item-g.ux"
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
        <list-item-g
          title="{{$item.title}}"
          gradeNumber="{{$item.gradeNumber}}"
          info1="{{$item.info1}}"
          img-url="{{$item.imgUrl}}"
          img-resize-mode="{{imgResizeMode}}"
          img-object-fit="{{imgObjectFit}}"
        ></list-item-g>
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
            gradeNumber: 3.5,
            info1: ["标签文字"],
            imgUrl: ""
          },
          {
            title: "标题",
            gradeNumber: 3.5,
            info1: ["标签文字"],
            imgUrl: ""
          },
          {
            title: "标题",
            gradeNumber: 3.5,
            info1: ["标签文字"],
            imgUrl: ""
          },
          {
            title: "标题",
            gradeNumber: 3.5,
            info1: ["标签文字"],
            imgUrl: ""
          },
          {
            title: "标题",
            gradeNumber: 3.5,
            info1: ["标签文字"],
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
| gradeNumber   | Number | -       | 评分，stepsize=0.5                                     |
| info1         | Array  | -       | 标签文字，最多显示两个标签                             |
| imgUrl        | String | -       | 图片地址，支持 base64                                  |
| imgResizeMode | String | 'cover' | 图片的缩放类型：cover，contain，stretch，center        |
| imgObjectFit  | String | 'cover' | 图片的缩放类型：contain，cover，fill，none，scale-down |
