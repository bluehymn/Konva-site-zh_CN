title: 事件委托
---

我们可以通过 Event 对象的 target 属性获取触发事件的对象。当我们使用事件委托将事件处理绑定在父节点时，可以通过 target 监听子节点触发的事件；

说明: 点击下面的星形，可以看到 layer 绑定的事件处理指明被点击的图形。

{% iframe /downloads/code/events/Event_Delegation.html %}

{% include_code Konva Event_Delegation Demo events/Event_Delegation.html %}
