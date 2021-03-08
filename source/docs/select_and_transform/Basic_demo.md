title: 调整图形尺寸、旋转图形
---

`Transformer` 是一种特殊的 `Konva.Group`。它可以方便的调整节点尺寸和旋转节点，它可以操作一个或者一组节点。

如何使用：

1. 新建一个`new Konva.Transformer()`的实例
2. 将它添加到 Layer
3. 将节点附加到 `transformer`, `transformer.nodes([shape]);`
4. 通过 `layer.batchDraw()` 更新图层


*提示:* 当你调整尺寸时变形工具没有改变节点的 `width` 和 `height` 属性，而是改变了 `scaleX` 和 `scaleY`属性。

**说明: 试试调整图形的尺寸和旋转图形。点击空白区域取消选择，按住 SHIFT 或者 CTRL 将图形添加或移除选择。试试用鼠标划一个选区。**

{% iframe /downloads/code/select_and_transform/Basic_demo.html %}

{% include_code Konva Shape transform and selection Demo select_and_transform/Basic_demo.html %}