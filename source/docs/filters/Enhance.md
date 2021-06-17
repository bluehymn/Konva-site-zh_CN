title: 反差滤镜
---

给图片添加滤镜前，我们必须先使用`cache()`方法将它缓存起来，然后使用`filter()`方法添加滤镜。

我们可以使用`Konva.Filters.Enhance`滤镜调节图片反差，然后设置`enhance`来控制反差大小。

说明：滑动控制杆来调节反差值。

查看所有滤镜 [Filters Documentation](/api/Konva.Filters.html).

{% iframe /downloads/code/filters/Enhance.html %}

{% include_code Konva Enhance Image Demo filters/Enhance.html %}