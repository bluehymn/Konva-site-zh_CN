title: 键盘事件
---

## 键盘事件

我们没有内建像 `keydown` 或者 `keyup` 这些键盘事件

### 怎么样在 canvas 上监听键盘事件呢？

你可以通过两种很简单的方法监听它们：
1. 全局监听 `window` 对象的事件
2. 给 stage container 设置 `tabIndex` 属性使它可以被 focus, 然后监听它上面的事件。

说明：点击 stage 使它被 focus, 使用键盘方向键移动图形

{% iframe /downloads/code/events/Keyboard_Events.html %}

{% include_code HTML5 Canvas Keyboard events events/Keyboard_Events.html %}
