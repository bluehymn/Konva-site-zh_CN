title: 亮度滤镜
---
给图片添加滤镜前，我们必须先使用`cache()`方法将它缓存起来，然后使用`filter()`方法添加滤镜。

我们可以使用`Konva.Filters.Brighten`滤镜，让图片颜色变亮或加深，通过设置`brightness`属性。
`brightness`属性可以设置-1到1之间的任意值，小于0颜色加深，大于0颜色变亮。

说明：拖动滑杆调节亮度。

查看所有滤镜 [Filters Documentation](/api/Konva.Filters.html).

{% iframe /downloads/code/filters/Brighten.html %}

{% include_code Konva Brighten Image Demo filters/Brighten.html %}