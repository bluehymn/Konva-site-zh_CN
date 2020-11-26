title: 通过名称移除事件
---

需要通过名称移除事件时，我们可以使用 `on()` 时给事件设置命名空间，之后可以使用 `off()` 方法设置的命名空间移除事件。

说明：点击下面的圆形可以看到两个事件绑定的 alert 弹出，点击左边的按钮移除事件监听，然后再次点击圆形观察变化。


{% iframe /downloads/code/events/Remove_by_Name.html %}

{% include_code Konva Remove By Name Demo events/Remove_by_Name.html %}
