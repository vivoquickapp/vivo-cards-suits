## 【组件】搜索栏

### 描述

用于显示多个或单个图文

### 使用效果

<div style="text-align: center;margin: 40px;">
<img src="../../assets/desktop-component-search.png" style="width:300px" alt="component-search"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="search"
  src="vivo-cards-suits/components/desktop/components/search"
></import>
```

### API

| 属性        | 类型   | 默认值 | 说明                 |
| ----------- | ------ | ------ | -------------------- |
| placeholder | string | '搜索' | 搜索栏提示文本       |
| url         | string | -      | 点击搜索栏跳转的地址 |
