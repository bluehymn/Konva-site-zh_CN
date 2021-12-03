title: HTML5 Canvas HSL(Hue 色相, Saturation 饱和度， Luminance 明度) 滤镜
---

给图片添加滤镜前，我们必须先使用`cache()`方法将它缓存起来，然后使用`filter()`方法添加滤镜。

我们可以使用`Konva.Filters.Contrast`滤镜调节图片的色相、饱和度及明度。

说明：移动滑块改变图色相、饱和度和明度的值。

查看所有滤镜 [Filters Documentation](/api/Konva.Filters.html).

{% iframe /downloads/code/filters/HSL.html %}

{% include_code Konva Hue, Saturation and Luminance Image Demo filters/HSL.html %}