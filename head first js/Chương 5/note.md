- 1 Object là set chứa các thuộc tính

- Để truy cập vào thuộc tính sử dụng dấu chấm, tên của object rồi dấu chấm sau đó là thuộc tính

- Bạn có thể thêm thuộc tính mới vào object bất kì lúc nào

- Bạn cũng có thể xóa thuộc tính khỏi object bằng cách sử dụng toán tử delete

- Khác với kiểu dữ liệu primitive như là string, number và boolean, 1 biến không thể chứa 1 object.
Thay vào đó nó chứa 1 tham chiếu đến biến đó

- Khi bạn đưa 1 object vào 1 function bạn chỉ đưa 1 bản copy của tham chiếu của biến đó, không phải bản copy của 
biến đó nên nếu bạn thay đổi object nó sẽ thay đổi cả biến đó

- THuộc tính của object có thể là function, nếu function là thuộc tính của object thì nó là method

- Bạn cũng có thể dùng method bằng cách dùng dấu chấm như thuộc tính bình thường

- Method cũng giống như function ngoài việc nó nằm bên trong object, bạn cũng có thể truyền argument vào method
như bình thường

- Khi bạn bên trong method mà muốn gọi đến các thuộc tính bên ngoài hãy dùng `this`, `this` refer đến cái object mà bạn đang dùng

