function outer(){
    count = 0
function countTo10(){
    while(count<100){
    document.getElementById("countDisplay").innerHTML += `${count},`
    count++
    countTo10()
    }
}
countTo10()
}