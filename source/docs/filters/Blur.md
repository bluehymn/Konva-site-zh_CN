title: 模糊滤镜
---

给图片添加滤镜前，我们必须先使用`cache()`方法将它缓存起来，然后使用`filter()`方法添加滤镜。

我们可以使用`Konva.Filters.Blur`滤镜使图片模糊，然后设置`blurRadius`来控制模糊的大小。

说明：滑动控制杆来调节模糊半径。

查看所有滤镜 [Filters Documentation](/api/Konva.Filters.html).

{% iframe /downloads/code/filters/Blur.html %}

{% include_code Konva Blur Image Demo filters/Blur.html %}