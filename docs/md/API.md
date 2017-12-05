## API
### `<Clipboard/>`
|属性|类型|默认值|描述|
|---|---|---|---|
|text|`String`|--|要被复制的文字|
|children|`String`|--| Clipboard 是一个简单的包装组件,它不呈现任何标签,所以它需要一个子元素将用于捕获点击事件。|
|onCopy|`function(text,result)`|--|执行 Copy 操作后的回调|

#### Clipboard.copy
如果你不想使用`Clipboard`， 你可以执行这个方法进行复制操作。

```
 @param {String} text - 要被复制的文字. 
 @param {Element} prevElem - 复制需要一个伪元素，默认会插入在 `document.body.firstElementChild` 前。 
 @return {Boolean} - 是否复制成功.
```

####  Clipboard.select
选择元素中的文本

```
 @param {HTMLElement} Element
```
