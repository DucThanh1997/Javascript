- JS có 2 kiểu dữ liệu chính: Primitive và Object

- `null` để bảo nó là 1 object nhưng nó chưa có giá trị gì, `null` hay dùng cho object còn `undefined` để báo rằng 1 biến chưa thuộc về kiểu nào nhưng đã được khai báo

- `NaN` để biểu diễn số mà không biểu diễn được chẳng hạn kết quả của 0/0

- Lưu ý nếu bạn so sánh `NaN === NaN` nó sẽ là 2 giá trị khác nhau và trả ra false vì `NaN` sẽ không equal với cái nào kể cả  để kiểm tra chúng ta dùng `isNaN(myNum)`

- Và dị vl `NaN` có nghĩa là **not a number** nhưng kiểu của nó lại là **Number**

- Nếu bạn dùng dấu `==` nó sẽ xử lý như này. Nếu 2 cái so sánh cùng kiểu thì so sáng bình thường, còn nếu khác kiểu nó sẽ đưa cả 2 về cùng kiểu rồi mới so sánh, điều này làm cho cái `99=="99"` trả về `true`

- `undefined == null` trả về kết quả true

- Javascript có kiểu không đúng cũng không sai đó là falsy và truthy với

```
undefined is falsey.
null is falsey.
0 is falsey.
The empty string is falsey.
NaN is falsey
```
còn lại là truthy

- String vừa có thể kiểu primitive và object