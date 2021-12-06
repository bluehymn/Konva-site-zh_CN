title: 噪点
---

给图片添加滤镜前，我们必须先使用`cache()`方法将它缓存起来，然后使用`filter()`方法添加滤镜。

我们可以使用`Konva.Filters.Noise`滤镜给图片添加噪点

说明：拖动滑块改变噪点强度

查看所有滤镜 [Filters Documentation](/api/Konva.Filters.html).

{% iframe /downloads/code/filters/Noise.html %}

{% include_code Konva Noise Image Demo filters/Noise.html %}