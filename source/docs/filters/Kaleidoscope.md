title: 万花筒
---

给图片添加滤镜前，我们必须先使用`cache()`方法将它缓存起来，然后使用`filter()`方法添加滤镜。

我们可以使用`Konva.Filters.Kaleidoscope`滤镜，给图片创建一个万花筒效果，然后设置`kaleidoscopePower` 和 `kaleidoscopeAngle` 的值调整效果。

说明：拖动滑块调整万花筒的角度

查看所有滤镜 [Filters Documentation](/api/Konva.Filters.html).

{% iframe /downloads/code/filters/Kaleidoscope.html %}

{% include_code Konva Kaleidoscope Image Demo filters/Kaleidoscope.html %}