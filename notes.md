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

Whichever approach you pick, always remember that at some point it needs to be stopped.

Recursion is when a function calls itself until someone stops it.
It can be used instead of a loop.
If no one stops it, it'll recurse forever and crash your program.
A base case is a condition that stops the recursion. Don't forget to add them!
Loops use extra state variables for tracking and counting, while recursion only uses the provided parameters.

sitepoint with the explaination of why- 
Recursion is best applied when you need to call the same function repeatedly with different parameters from within a loop. 
So when you want the loop to be dynamic, use recursion.
In many cases, recursion is the most direct way to solve a complex problem. (this seems accurate because most algorithms use recursion , binary trees, etc.)