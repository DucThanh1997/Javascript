```
var justAVar = "Oh, don't you worry about it, I'm GLOBAL";
function whereAreYou() {
    var justAVar = "Just an every day LOCAL";
    function inner() {
        return justAVar;
    }
    return inner();
    // ở đây chúng ta gọi biến đó và return về kết quả của biến đó
}
var result = whereAreYou();
console.log(result);
```

Kết quả ở đây sẽ là `Just an every day LOCAL`

- Tại sao? Vì tất cả các biến local trong function được lưu trong enviroment 
và khi mà bạn return hoặc gọi cái function đó thì các cái enviroment chứa các biến local cũng sẽ được gọi