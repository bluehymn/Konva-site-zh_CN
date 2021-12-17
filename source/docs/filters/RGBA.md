title: RGBA滤镜
---

给图片添加滤镜前，我们必须先使用`cache()`方法将它缓存起来，然后使用`filter()`方法添加滤镜。

我们可以使用`Konva.Filters.RGBA`滤镜修改图片的RGB三原色及透明通道的组成比例。

说明：拖动下面滑块改变rgba的值。

查看所有滤镜 [Filters Documentation](/api/Konva.Filters.html).

{% iframe /downloads/code/filters/RGBA.html %}

{% include_code Konva RGBA Image Demo filters/RGBA.html %}