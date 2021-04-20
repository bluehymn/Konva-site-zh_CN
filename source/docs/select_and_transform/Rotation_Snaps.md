title: 旋转吸附
---

在一些应用里面，你可能想旋转接近到某些特定角度时吸附上去。吸附功能可以让图形旋转时黏在你设定的角度就像对旋转角度四舍五入一样。

吸附的角度通常我们会设置为0, 45, 90, 135, 180 等等，同时也可以限制图形只能旋转到这些角度。

例如，如果你设置吸附角度为45°，那么用户就不能将它旋转到43°，但是他可以旋转到35°，因为离45°还有一些距离。

说明：试试旋转下面图形，它会吸附到 0°, 90°, 180°, 270°。

{% iframe /downloads/code/select_and_transform/Rotation_Snaps.html %}

{% include_code Konva Shape transform and selection Demo select_and_transform/Rotation_Snaps.html %}