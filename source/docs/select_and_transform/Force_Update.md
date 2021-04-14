title: 强制更新
---

`Konva.Transformer` 会自动追踪被附加的节点属性，因此会自动根据属性的变化适配尺寸。

但是有些情况例外。`Konva.Transformer` 目前不能追踪 `Konva.Group` 内的变化。此时你应该使用 `forceUpdate` 重置变换工具尺寸。

**说明：点击按钮，查看变换工具的变化。**

{% iframe /downloads/code/select_and_transform/Force_Update.html %}

{% include_code Transformer Force Update Demo select_and_transform/Force_Update.html %}