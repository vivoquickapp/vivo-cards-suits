## Textarea

### 描述

多行文本组件

### 使用效果


### 使用方法

在`.ux`文件中引入组件

```html
<import name="v-textarea" src="vivo-cards-suits/components/textarea/index"></import>
```

### 示例

```html
<template>
  <div class="page">
    <v-textarea lines="3">
        这是一个Textarea组件，多行显示；这是一个Textarea组件，多行显示；
        这是一个Textarea组件，多行显示；这是一个Textarea组件，多行显示；
        这是一个Textarea组件，多行显示；这是一个Textarea组件，多行显示；
    </v-textarea>
  </div>
</template>
```

### API

#### 组件属性

| 属性      | 类型   | 默认值    | 说明     |
| -------- | ------ | ------    | ------- |
| lines    | Number | 1         | 文本行数 |
| fontSize | Number | 14        | 文本大小 |
| color    | String | '#666666' | 文本颜色 |


#### slot

| 名称 | 描述     | 返回值 |
| ---- | ------- | ------ |
| -    | 文本内容 | -      |
