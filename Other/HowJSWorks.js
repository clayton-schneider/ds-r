// How does JavaScript work?

// What is a program?

// - Allocate memory
// - Parse and execute commands

// JS Engine consists of two portions
    // Memory Heap (Memory Allocation)
        const a = 1
        // Memory Leak
            // When we have unused memory laying around it fills up the memory leak
            // This is why global variables can be bad. If we don't remember to clean up after ourselves we can fill up memory
    // Call Stack (Where code is read and executed)
        console.log('1')
        // Adds commands to the stack and executes

        const one = () => {
            const two  = () {
                console.log('4')
            }
            two()
        }

        // CALL STACK
            // One gets added first
            // We see it is calling two, so two gets added
            // We add console.log('4')
            // We reomove the console.log
            // We remove two
            // We remove one 


// Javascript is a single threaded language that can be non-blocking
        // Only one call stack - Can do one thing at a time - Whatever is at the top of the call stack
            //  Other languages can have multiple call stacks
            // JS on a single thread can be quite easy to implement
            // This is the definition of Singlethreaded, we run things one at a time
            // Stack overflow - when the stack gets too large and don't have the space to store all the functions
            // This can be a problem since large tasks can hold up shorter tasks behind it
        // Ansynchronous
            // For when something takes too long
            console.log(1) // Executes first
            setTimeout(() => {
                console.log(2)  // Executes last
            }, 2000);
            console.log(3)  // Executes second

// Javascript Run Time Environment
    // Memory Heap & Call Stack
    // Web Apis (DOM, AJAX, Timeout)
    // Event Loop and Callback queue

// Call Stack

// Web Api

// Callback Queue

// Event Loop