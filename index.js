function outer(){
    count = 0
function countTo(){
    if(count<100){
    document.getElementById("countDisplay").innerHTML += `${count},`
    count++
     countTo() 
    }
}
countTo() }


function create(event){
    event.preventDefault()
    count =0
function inner(){
    
    let num = document.getElementById("num").value
    if(count < num){
    document.getElementById("divDisplay").innerHTML += `<div> Div number ${count+1}.</div>`
    count++
     inner() //this was unecessary with the while loop
}
}
inner()}

function javascriptTutorialExample(fromNumber){
    console.log(fromNumber)
}

javascriptTutorialExample(10)