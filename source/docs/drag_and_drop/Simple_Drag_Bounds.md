title: HTML5 Canvas Simple Drag Bounds Tutorial
---

可以自定义 `dragBoundsFunc` 函数来覆盖拖动、释放的位置来约束形状的移动。这个函数可以从各方面约束形状的移动，可以将形状的移动约束为水平方向、垂直方向、斜角方向、径向，甚至可以将形状约束在方形、圆形或者其他路径区域内。

**注意：`dragBoundsFunc` 是以节点的绝对位置工作的。因此它的参数和返回值都是绝对定位的坐标。如果你想使用相对位置操作，可以尝试配合 `dragmove` 事件。

说明：下面例子水平方向的文字只能水平方向拖动，垂直方向的文字则相反。

{% iframe /downloads/code/drag_and_drop/Simple_Drag_Bounds.html %}

{% include_code Konva Simple Drag Bounds Demo drag_and_drop/Simple_Drag_Bounds.html %}