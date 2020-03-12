## 【组件】底部按钮组

### 描述

用于显示底部多个或单个按钮

### 使用效果

<div style="text-align: center;margin: 40px;">
<img src="../../assets/desktop-component-buttons.png" style="width:300px" alt="component-buttons"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="buttons"
  src="vivo-cards-suits/components/desktop/components/buttons"
></import>
```

### API

| 属性        | 类型   | 默认值 | 说明                                   |
| ----------- | ------ | ------ | -------------------------------------- |
| buttons     | array  | []     | 底部按钮组，最大支持三个按钮，最少一个 |
| button.text | string | '按钮' | 按钮组单个按钮文本                     |
| button.url  | string | -      | 按钮组单个按钮文本，点击后跳转地址     |
