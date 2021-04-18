title: 缩放文本?
---

### 怎样使用变换工具调整文字宽度?

首先，`Konva.Transformer` 改变的是节点的 `scaleX` 和 `scaleY` 属性。如果你想改变文字的宽度，不需要修改它的大小，你应该将文字的缩放比例重置为1并且相应的调整 `width`。

你可以通过 `transform` 事件更新文字的属性。

说明：试试缩放下面文字

{% iframe /downloads/code/select_and_transform/Resize_Text.html %}

{% include_code Konva Text resize Demo select_and_transform/Resize_Text.html %}