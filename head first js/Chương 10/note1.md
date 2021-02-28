- Đây là function declaration
```
function quack(num) {
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}
quack(3);
```

-- Đay là function expression
```
var fly = function(num) {
    for (var i = 0; i < num; i++) {
        console.log("Flying!");
    }
};
fly(3);
```

- Sự khác biệt giữa `function expression` và `function declaration` là khi browser load page nó sẽ load `function declaration` trước và bỏ qua `function expression` vì nó nghĩ đó là khai báo biến nên để sau
- Thêm vào đó `function declaration` không tạo ra 1 tham chiếu đến function mà nó tạo 1 biến và chỉ định function mới là tên biến đó còn `function declaration` trả về 1 tham chiếu với tên là function đó
- 

