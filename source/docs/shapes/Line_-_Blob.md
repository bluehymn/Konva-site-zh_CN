title: HTML5 canvas Blob Tutorial
---

To create a blob with `Konva`, we can instantiate a `Konva.Line()` object with `closed = true` and `tension` attributes.

To define the path of the line you should use `points` property. If you have three points with `x` and `y` coordinates you should define `points` property as: `[x1, y1, x2, y2, x3, y3]`.

Flat array of numbers should work faster and use less memory than array of objects.

For a full list of attributes and methods, check out the [Konva.Line documentation](/cn.konvajs/api/Konva.Line.html).

{% iframe /cn.konvajs/downloads/code/shapes/Line_-_Blob.html %}

{% include_code Konva Blob Demo shapes/Line_-_Blob.html %}
