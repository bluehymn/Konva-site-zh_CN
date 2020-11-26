title: HTML5 Canvas Kaleidoscope Image Filter Tutorial
---

To apply filter to an `Konva.Image`, we have to cache it first with `cache()`
function. Then apply filter with `filter()` function.

To create a kaleidoscope with Konva, we can use the `Konva.Filters.Kaleidoscope`
filter and set the `kaleidoscopePower` and `kaleidoscopeAngle` properties.

Instructions: Slide the control to adjust the kaleidoscope angle.

For all available filters go to [Filters Documentation](/api/Konva.Filters.html).

{% iframe /downloads/code/filters/Kaleidoscope.html %}

{% include_code Konva Kaleidoscope Image Demo filters/Kaleidoscope.html %}