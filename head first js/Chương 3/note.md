- param là cái biến định nghĩa đầu vào của 1 function

```
đây là param
function cook(time, meal, monney)
```

- argument là biến khi gọi function
```
cook (2.am, lunch, 30$$)
```


- GIống golang javascript khi truyền argument vào function sẽ tạo ra 1 bản copy của biến đó rồi sử dụng cái bản copy của biến để tính toán

```
function doIt(param) {
 param = 2;
}
var test = 1;
doIt(test);
console.log(test);
````

test ở đây sẽ in ra là bằng 1.

Chốt là cái gì ở trong function sẽ ở trong function thôi

- Khi pass thừa argument vào function thì JS kệ bỏ qua

- Nếu bạn tạo 1 biến bên trong function bạn chỉ dùng được nó ở bên trong function thôi

- Nếu bạn tạo 1 biến bên ngoài function bạn dùng nó ở đâu cũng được

- Đó là scope. Có 2 kiểu đó là global và local

- Nếu bạn không viết chữ `var` ở đầu khi khởi tạo biến, nó sẽ thành biến global kể cả khi ở trong function



Cách đọc file của js
Đọc từ trên xuống dưới nhưng đọc 2 lần. Lần đầu nó đọc tất cả các khởi tạo function và lần thứ 2 nó bắt đầu excute code