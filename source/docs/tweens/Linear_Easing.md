title: HTML5 Canvas Tweening Tutorial
---

To tween properties with Konva, we can instantiate a `Konva.Tween` object
and then start the tween by calling `play()`.  Any numeric property of a `Shape`,
`Group`, `Layer`, or `Stage` can be transitioned, such as `x`, `y`, `rotation`,
`width`, `height`, `radius`, `strokeWidth`, `opacity`, `scaleX`, `offsetX`, etc.

For a full list of attributes and methods, check out the [Konva.Tween documentation](/cn.konvajs/api/Konva.Tween.html).

{% iframe /cn.konvajs/downloads/code/tweens/Linear_Easing.html %}

{% include_code Konva Tweening Demo tweens/Linear_Easing.html %}
