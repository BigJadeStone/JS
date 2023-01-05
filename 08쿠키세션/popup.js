//링크의 순서

var check = document.querySelector("#check");
check.onclick = function(){
    var cuki = "popup=done; path:/; expires=";
    var date = new Date();
    // console.log(date);
    date.setDate(date.getDate()+1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    // console.log(date);
    // console.log(date.toUTCString());

    cuki += date.toUTCString();

    document.cookie = cuki
    window.close();
}
