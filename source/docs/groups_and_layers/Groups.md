title: 分组
---

通过 `Group` 我们将多个图形以分组的方式聚合在一起，首先我们实例化一个 `Konva.Group()` 对象然后使用 `add()` 方法将图形加入到分组。当我们要同时转换多个图形时，使用分组就非常方便了，例如我们需要同时移动、旋转、缩放都给图形时。组也可以添加到其它组内。更详细的文档请查看[Konva.Group documentation](/api/Konva.Group.html)。

{% iframe /downloads/code/groups_and_layers/Groups.html %}

{% include_code Konva Groups Demo groups_and_layers/Groups.html %}