function outer(){
    count = 0
function countTo(){
    while(count<100){
    document.getElementById("countDisplay").innerHTML += `${count},`
    count++
    countTo() //the function is calling itself which checks condition, if it's true then increase count and recal itself until the condition is met
    }
}
countTo() //the outer function invokes the inner function so onclick the global exe context is the outer function then inner(lifo executed)
}
//using a closure is good practice since having variables in global scope can be dangerous
function create(event){
    event.preventDefault()
    count =0
function inner(){
    
    let num = document.getElementById("num").value
    while(count < num){
    document.getElementById("divDisplay").innerHTML += `<div> Div number ${count+1}.</div>`
    count++
    inner()
}
}
inner()}