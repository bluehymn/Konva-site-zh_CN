title: 控制对象是否被监听事件
---

我们可以通过设置 listening 属性在对象实例化时控制对象是被监听事件，也可以通过 `setListening()` 方法设置；当我们给节点设置了 listening 属性，我们将重绘所有受影响 layer 的事件响应区域。

说明：mouseover 卵形图形上，发现事件没有响应。点击 "Listen" 打开事件监听，可以发现事件被响应了。

{% iframe /downloads/code/events/Listen_for_Events.html 

{% include_code Konva Listen_for_Events Demo events/Listen_for_Events.html %}
