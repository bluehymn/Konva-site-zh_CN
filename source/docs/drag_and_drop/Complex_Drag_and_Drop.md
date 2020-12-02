title: 复杂的拖拽区域限制
---

我们可以使用 `dragBoundFunc` 属性定义一个区域，限制节点只能在这个区域内拖拽。

提示：`dragBoundsFunc` 使用的是绝对坐标，所以你必须返回绝对坐标。如果你想使用相对坐标可以配合使用 `dragmove` 事件。

说明：拖拽蓝色矩形，观察它的 y 坐标被限制在大于50；拖拽黄色矩形，观察它的拖拽区域被限制在一个圆形区域内。

{% iframe /downloads/code/drag_and_drop/Complex_Drag_and_Drop.html %}

{% include_code Konva Complex Drag and Drop Bounds Demo drag_and_drop/Complex_Drag_and_Drop.html %}