title: 怎么在缩放图形时保持它的描边宽度？
---

### 想要改变图形尺寸时不改变它的描边宽度？

首先要明确的是，`Konva.Transformer` 是改变节点的 `scaleX` 和 `scaleY` 属性。

默认情况下，变换图形时，它的描边也会相应的变化。某些场景下这不是我们想要的结果。

这里有两张方法避免描边的缩放：（1）重置图形的 `scale` 或者 （2）结合使用 `shape.strokeScaleEnabled(false)` 和 `transformer.ignoreStroke(true)`

**说明：下面两个矩形，绿色的缩放时重置了 `scale`，红色的关闭了描边的缩放。**

{% iframe /downloads/code/select_and_transform/Ignore_Stroke_On_Transform.html %}

{% include_code Konva ignore stroke  select_and_transform/Ignore_Stroke_On_Transform.html %}