


var arr = [1, 2, 3, 4, 5, 6, 7, 7, 1, 0];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("-----------")

arr.map(function(index) {
    console.log(index);
});
console.log("-----------")
arr.filter((index) => console.log(index))