title: 线性补间动画
---

我们实例化`Konva.Tween`对象创建补间动画，然后执行`play()`运行动画。
任何数值类型的参数都可以用于补间动画， 比方说 `Shape`,`Group`, `Layer`, 或者 `Stage` 的数值型属性： `x`, `y`, `rotation`,
`width`, `height`, `radius`, `strokeWidth`, `opacity`, `scaleX`, `offsetX` 等等。

点击[Konva.Tween documentation](/api/Konva.Tween.html)查询详细的参数和方法。

{% iframe /downloads/code/tweens/Linear_Easing.html %}

{% include_code Konva Tweening Demo tweens/Linear_Easing.html %}
