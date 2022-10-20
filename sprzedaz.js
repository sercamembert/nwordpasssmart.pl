
let button = document.getElementById("btn");
button.addEventListener("click",function(){
    let check = document.getElementById("checkbox").checked;
    if(check == false){
        $(".required").css("opacity","1");
        $("#check-label").addClass("nocheck")
    }

})
