let collapse = document.querySelector("#collapse")

function reload(){
    if(
        JSON.parse(localStorage.getItem("collapse")) == false ||
        JSON.parse(localStorage.getItem("collapse")) == null
    ){
        localStorage.setItem("collapse","true");
    }
    else{
        localStorage.setItem("collapse","false");
    }
}

reload();
collapse.onclick = reload;
reload();