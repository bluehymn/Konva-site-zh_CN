title: 自定义滤镜教程 - 给图片非透明部分边缘添加描边
---

## 怎么给包含透明通道的图片添加描边？

本示例将演示如何使用Konva自定义滤镜。

首先`Flilter`是一个函数，它的入参是个ImageData对象，函数内将对这个ImageData对象进行修改。

```javascript
function Filter(imageData) {
  // 修改ImageData
  imageData.data[0] = 0;
}
```

本示例自定义了一个滤镜，滤镜会沿着图片边缘绘制实线描边。因为沿着边缘绘制会比较复杂，所以我们使用了一点技巧，我们以图片模糊的阴影作为基础，然后使用颜色替换掉透明和模糊的像素作为描边。

查看所有滤镜 [Filters Documentation](/api/Konva.Filters.html).

{% iframe /downloads/code/filters/Custom_Filter.html %}

{% include_code Konva Custom Filter Image Demo filters/Custom_Filter.html %}