title: HTML5 Canvas Select Shape by Name Tutorial
---

To select shapes by name with Konva, we can use the `find()` method using the `.` selector.
The `find()` method returns an array of nodes that match the selector string.
The return array is a `Konva.Collection` array, which is basically a typical JavaScript array with a special `each()` method.
The `each()` method enables us to quickly iterate through every node in the array.

{% iframe /downloads/code/selectors/Select_by_Name.html %}

{% include_code Konva Select Shape by Name Demo selectors/Select_by_Name.html %}