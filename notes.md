summary from js tutorials

A recursive function is a function that calls itself until it doesn’t
A recursive function always has a condition that stops the function from calling itself.

free code camp notes
Recursion is when a function calls itself until someone stops it. If no one stops it then it'll recurse (call itself) forever.

This is exactly what for/while loops let us accomplish! Sometimes, however, recursive solutions are a more elegant approach to solving a problem.



Imperative approach (loops)

function countDownFrom(number) {
	for (let i = number; i > 0; i--) {
		console.log(i);
	}	
}

countDownFrom(5);
// 5
// 4
// 3
// 2


Recursive approach

function countDownFrom(number) {
	if (number === 0) {
		return;
	}

    console.log(number);    
    countDownFrom(number - 1);
}

countDownFrom(5);
// 5
// 4
// 3
// 2
// 1