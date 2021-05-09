title: 使用 zIndex 调整图形层次顺序
---


## 什么是zIndex？

设置和获取zIndex的值

```javascript
// get
const zIndex = shape.zIndex();

// set
shape.zIndex(1);
```

zIndex 是节点在它父节点的子结点列表中的索引，不要和CSS的 `z-index` 的概念混淆。

```javascript
const group = new Konva.Group();

const circle = new Konva.Circle({});

group.add(circle);

// 输出0
console.log(circle.zIndex());  

// 下面代码不会起作用，因为组里只有一个元素
circle.zIndex(1);  

// 仍然输出0
console.log(circle.zIndex());  

// 输出true
console.log(circle.zIndex() === circle.getParent().children.indexOf(circle))
```

你不能像CSS那样，使用`zIndex`设置节点的绝对位置。Konva 将严格按照节点树中定义的顺序来绘制节点。

让我们来创建一个示例，先创建一个含有两个分组的图层，第一个组含有两个图形（黑色矩形和红色圆形），第二个组含有一个绿色矩形。


{% iframe /downloads/code/groups_and_layers/zIndex.html %}

<details><summary>查看源码</summary>
<p>
{% include_code Konva ZIndex demo groups_and_layers/zIndex.html %}
</p>
</details>

红色圆形的 `zIndex` 是1，绿色的矩形是0。红色的圆形的 zIndex 大于绿色矩形，但是为什么绿色矩形看起来在红色圆形上面？前面提到过Konva会严格按照顺序绘制节点树，因此他会先绘制第一个组的所有子结点，然后再绘制第二个组。

那么怎样才能绘制红色圆形在绿色矩形上面呢？你可以将红色圆形移动到第二个分组，或者移动到一个图层，并且图层的zIndex大于分组。
