## 【组件】 文本组件 B

### 描述

图标 + 文本 + 按钮

### 使用效果

<div style="text-align: center;margin: 40px;">
  <img src="../../assets/voice-text-b.jpg" style="width:300px" alt="voice-text-b"/>
</div>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="text-b"
  src="vivo-cards-suits/components/voice/components/text-b.ux"
></import>
```

### 示例

```html
<template>
  <div class="card">
    <text-b content="{{content}}">
      <image
        class="icon"
        slot="icon"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABxRJREFUaAXtm1tPVEkQx3tGREFABUQFVHADoohoYoRgiGhMfDC47jsvG9838RMYPwdLeOF94yZEXwzEFzSE4C2GGBUSEQTvgjfksv2rnTr2HGaGM04265yxkp7u05fq+ldVV9eZzERMCurr66v+8uXLrysrK2dt+cVOrbSlKMWS/2No3m46FYlEHtvSv2HDhitdXV2TyQSJJBro6emptAAv27Hfbb0u0Zwftc+CXrKy9dr60oULF6b8cq4CbMGesyD7bCn2T86mZwt4zpYuC/pvV+6o+9Dd3f3H8vLyX9kOFkxgAAuYXIyehbEsE+xgnBLcyVnaXo5Go7+ppQVw7MyOhcGyiYwSc+8GzrRY0wK9HFawKABsYKQd4er5/PnzhO3IqmiM8OmQtfLSxo0ba6KxezbUYFEMBgVr1DbOpqOpbJ4LVgCTQeUEgZWgRbqYK1QJ4B8tN/4vlV8UtiRjTWX9BLymirJ8Ql468tvL25tuI57XzqZGIMCAs1mKOX78uNm0aZNZWFgwQ0ND5s2bN2bduuzKWQIDxro7duwwhYWFZnFx0eTn55O9ZJNxRdbAQQvA6tJaZx1aK3AgCwMQq967d8/Y74zM0tKS+fjxo7HvmVmHOTDgr1+/mpGREXFjFJCXl5cUMK5uv0xY5fIoKKiS4KF8VKvs6xbtT6cOBBiGbFRaWioCI8iHDx/E0v7NsD7K2LZtm8znzDN/fn7evHr1SgIdykgV7PAmPIn9tm7dKnGDNcrj3bt3otCgynNlDASYzQoKCsyZM2dMUVGRROlr166ZFy9eeIKrNSorK01TU5Oprq4W4O5m9r3bTExMmDt37pi3b996a3UOPCi7du0yzc3NBl5+UPYVz+PxPbdEIMAIhIXXr18vIBCKZ2ollHLgwAHT2toq87QfazEXi3K1NTQ0CJDBwUEzPT0dBxp+hw4dMkePHo1TlssDy+/bt89UVVWZGzdumKdPn8bx0H2T1YEBw0ABaq1MceM9e/bEgZ2dnTVjY2PeXV1RUWEOHjwo7llSUmLa29vN1atXxU2xIjxqamriwOJBDx48EG9gDjwaGxvFy/A0ePT395v379+v8gSVzV+nBdi/mGfAcycfPnzYs+zU1JS5fv26gMG6EJbAoqdPn5bkZcuWLWbv3r3i3srjyJEjnmWZjxdwbpXH5OSk8Dh16pRBacXFxeJVJEFBKWPAuDIJCdqHOGO3bt2SoMYRcOn58+dmYGBAAhFBj+Cj1uXMl5eXy3TO+s2bNxPyQGncFidOnJC1tbW15u7du4GvyYwA6zkmImtwwbq4IpHaT5zjZ8+eGSwFsUbX+Xm8fv06KQ+sj+WxMrcAkZxn5eXf133OKHPAFdmEjZVevnwpV4Y++2tAowz3Hqdv8+bN3tSZmRkvXnidsQb74UV4B8RaXDsoZQSYTbAyZ1gJYfTMaV+qGqX5efBykoo4Rri9EtE/KGUMGIGJsEpB3ErnUqtyXB7a585z24xjWSV3rfYlqzMCzMYAJq9W4rqgLxkxhoXcOTx/+vTJW+IeEa8z1mAdYNlHyd1f+5LVGQFWoUkZlYjYRGcd035q+jRlJHNTbwAwZ19p586dSXkwF4WoUjhCZFxreYXyzggwTNiIIKNa5mqpq6uTtysXNIJCLS0t5vz586azs1MSEfqVh1oZHjU2CSHDSsRj//79krXBj2iu1xvPa1HGgLESefHDhw9lL56PHTsmKSSRGEAUAgtpZ319vURoXBLPABAuipUePXokPHhua2uTFJK2ywOFkcJCrCUT09RTOtf4WH1ZrrEg0TAgb9++bcrKyiTxB1xHR4e4qaZ9jKkbwmN0dDQuD1YeJDDbt2+Xl5WTJ0/KnT43Nyfuz9uTe32Ruj558iQugCWSz+1LCzDahrCce2Zoc5ZI5rEi2Q8ASCYoLnHl3L9/X1JKPw+OBekkPHbv3i17oADN4pQPFsWjhoeHxcouH52TrI7YnwQkD6mxVbgOgQhXwnp8GYB2SQ8BpoTroRTeZMiTAUtwYj1zSS1xW14sEDKRoPBAobyMcI7xDPaEB9kUWdz4+Lgho6PP3V/lSFUHAqwM3PtOra1jWiME8xgnImvERkl4AePJ1vp5AJykRnngHRRVis5Pp/4ul061AVZDUAiAZERqyaDW8POAjxI8gvLRNW6dFmB3YZA2givYIPMTzcl0vZ/ntwPoHwnp80/AITWsB+unhT1VhLSRkxbm98a5QvNYeCpX0II1ai/2x7kCGKwA7s8hwP1Rm+BfsaC/fQsXUvRgBGs09oeI3pDidGH1glWuJYv+ki1z7miY2mADI5gEML8Utx1d9vnfb9rChNZiAhsYPcA0bAf//rhoS5hAg+ViDJtt2m9Z5dP5yKm/8YAbbVgXaLDlT1uyLnojc0x2/tQR958l8K2yMJ1KYfwr3j/sSY8gJGBupwAAAABJRU5ErkJggg=="
      ></image>
      <image
        class="btn"
        slot="button"
        src="data:image/png;base64,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"
      ></image>
    </text-b>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: "只需要输入文字，高度自动匹配"
      };
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

| 属性    | 类型   | 默认值 | 说明     |
| ------- | ------ | ------ | -------- |
| content | String | -      | 文本内容 |
