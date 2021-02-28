- DOM (document object model) là thằng nằm giữa JS và html, nó giúp js có thể interact với html. DOM được tạo ra khi bạn load page

![image](https://user-images.githubusercontent.com/45547213/90916527-621c0c80-e40b-11ea-8bdd-f1c26bede704.png)

```
var planet = document.getElementById("greenplanet)
```
- `document` đại diện cho cả cái page bao gồm DOM hoàn chỉnh, vậy nên chúng ta có thể nhờ nó tìm element bằng id qua câu lệnh `getElementById` với cái tên là `greenplanet`

- planet ở đây có giá trị là `<p id='greenplanet'> all is well </p>`

- Chúng ta sẽ sử dụng `innerHTML` để thay đổi nội dung bên trong thẻ `p`
```
planet.innerHTML = "Red Alert"
```

- Bất kì sự thay đổi nào trong DOM sẽ được DOM phát hiện và show ra trên page

- Ngoài ra bạn có thể sử dụng cả `setAttribute` để thêm thuôc tính vào element
```
planet.setAtribute("class", "redtext")
```
- Ngoài ra bạn có thể lấy cả giá trị của thuộc tính đó
```
planet.getAtribute("class", "redtext")
```
