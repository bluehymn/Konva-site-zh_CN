title: 等比缩放
---

## 怎么等比缩放图形?

默认情况下拖动控件四个角上的控制点缩放是等比例的，如果你不想拖动它们时等比缩放，可以设置 `keepRatio` 属性为 `false`来关闭此特性。

同时即使设置了 `keepRatio` 属性为 `false`,也可以在拖动控制点时按住 `SHIFT` 保持等比缩放。

**说明: 试试缩放下面的文字**

{% iframe /downloads/code/select_and_transform/Keep_Ratio.html %}

{% include_code Konva Shape transform and selection Demo select_and_transform/Keep_Ratio.html %}