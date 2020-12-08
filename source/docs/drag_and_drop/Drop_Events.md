title: HTML5 Canvas Drop Events
---

Konva 不支持 drop 事件，但是你可以编写自己释放事件。

监听释放事件的对时，你需要先将拖动的对象移动到其它的图层。

下面的例子展示了 `drop`, `dragenter`, `dragleave`, `dragover` 等事件的实现。

说明：尝试拖动一个图形到另外一个上面然后释放。

{% iframe /downloads/code/drag_and_drop/Drop_Events.html %}

{% include_code Konva Drop Events Demo drag_and_drop/Drop_Events.html %}