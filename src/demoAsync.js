
console.log('======================================');

//promise hell có nhiều công việc thì nhiều hàm then() lồng nhau ==> code khó bảo trì
//Chờ nhau nó mới chạy
/* 
Cách khác   


*/

var resultPost = fetch("http://api-meme-zendvn-01.herokuapp.com/api/post/getListPagination.php?pagesize=3&currPage=1");

console.log("resultPost = ", resultPost);
console.log("======================================");