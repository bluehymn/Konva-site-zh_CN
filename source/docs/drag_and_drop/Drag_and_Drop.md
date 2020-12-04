title: 拖拽
---

我们可以设置 `draggable` 为 true 或者使用 `draggable()` 方法使图形可以被拖拽。`draggable()` 方法会自动适配桌面端和移动端。

我们通过 `on()` 方法监听节点的 `dragstart`、 `dragmove`、 `dragend` 等拖拽事件，`on()` 方法需要传入事件类型和事件发生时执行的函数。


{% iframe /downloads/code/drag_and_drop/Drag_and_Drop.html %}

{% include_code Konva Drag and Drop Demo drag_and_drop/Drag_and_Drop.html %}