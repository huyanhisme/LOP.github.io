
// bai 1
function gthua() {
    let num = prompt("chon 1 so");
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    console.log(result)
    alert("giai thua cua so"+ "" + num + ""+"la :"+""+ result)
  }


// bai 2
function loop() {
    let num = prompt("Nhập vào 1 chuỗi kí tự bất kì");
    let loop = ""
    for (let i = 0; i < 10; i++) {
      loop = loop + num + "-";
    }
    console.log(loop)
    alert(loop)
  }


// bai 3
function chiahet(){
    for(let i = 0 ; i < 50 ; i++) {
        if( i % 2 ==0){
            console.log(i)
        }
    }
    
    for(let i = 0 ; i < 50 ; i++) {
        if( i % 3 ==0){
            console.log(i)
        }
    }
    
    for(let i = 0 ; i < 50 ; i++) {
        if( i % 4 ==0){
            console.log(i)
        }
    }
}

//bai 6
function day(){
    var num = prompt("Chon 1 so");
    if( num > 1 && num <8 ){
        console.log("thu"+ "" + num)
        alert("thu"+ "" + num)
    }
    else if(num == 0){
        console.log("chu nhat")
        alert("thu"+ "" + num)
    }
    else{
        console.log("so ban nhap k hop le")
        alert("thu"+ "" + num)
    }
}




// bai1
function ten(){
let FirstName = prompt("Nhap Ho cua ban")
let SurName = prompt("Nhap Ten Dem cua ban")
let LastName = prompt("Nhap Ten Cua Ban")
console.log(FirstName + " " + SurName + " " + LastName )
alert(FirstName + " " + SurName + " " + LastName)
}


// bai2 
function nhan2so(){
    let num1 = prompt("Chọn số thứ 1");
    let num2 = prompt("Chọn số thứ 2");
    let result = num1 * num2;
    console.log(num1 + "x" + num2 + "=" + result); 
    alert(num1 + "x" + num2 + "=" + result)
}



// bai3
function dodai(){
    let str = prompt("Nhap 1 string")
    console.log("string cua b co doi dai la :" + str.length);
    alert("string cua b co doi dai la :"+"" + str.length)
}
