'use strict'

function parsePromised (json) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
};

parsePromised(process.argv[2])
.then(null, console.log)


/*

Official Solution is above, but doesn't verify:

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   "SyntaxError: Unexpected token o in JSON at position 1" ==    "SyntaxError: Unexpected token o in JSON at position 1"
   "    at JSON.parse (<anonymous>)"   ==    "    at JSON.parse (<anonymous>)"
   "    at /Users/adrianshepelavey/nodeschool/promise-it-wont-hurt/throw.js:6:20" !=    "    at /usr/local/lib/node_modules/promise-it-wont-hurt/exercises/throw_an_error/solution/solution.js:6:20"
   "    at parsePromised (/Users/adrianshepelavey/nodeschool/promise-it-wont-hurt/throw.js:4:10)" !=    "    at parsePromised (/usr/local/lib/node_modules/promise-it-wont-hurt/exercises/throw_an_error/solution/solution.js:4:10)"
   "    at Object.<anonymous> (/Users/adrianshepelavey/nodeschool/promise-it-wont-hurt/throw.js:13:1)" !=    "    at Object.<anonymous> (/usr/local/lib/node_modules/promise-it-wont-hurt/exercises/throw_an_error/solution/solution.js:13:1)"
   "    at Module._compile (module.js:571:32)" ==    "    at Module._compile (module.js:571:32)"
   "    at Object.Module._extensions..js (module.js:580:10)" ==    "    at Object.Module._extensions..js (module.js:580:10)"
   "    at Module.load (module.js:488:32)" ==    "    at Module.load (module.js:488:32)"
   "    at tryModuleLoad (module.js:447:12)" ==    "    at tryModuleLoad (module.js:447:12)"
   "    at Function.Module._load (module.js:439:3)" ==    "    at Function.Module._load (module.js:439:3)"
   "    at Module.runMain (module.js:605:10)" ==    "    at Module.runMain (module.js:605:10)"
   ""                                  ==    ""

────────────────────────────────────────────────────────────────────────────────

✗ Submission results did not match expected!

# FAIL

Your solution to Throw an error didn't pass. Try again!


Throw an error
 Exercise 9 of 13


# What happens when an error is thrown?

One of the tremendous strengths of promises is that they handle errors in a
manner similar to synchronous code.  Unlike in traditional callback-based code,
you do not need to strictly handle all your errors at every step.

If an error is thrown inside a function, it can be captured.

If an error is thrown inside a function, it will be handled by the next
available "rejection" handler.  This allows you to write code that looks
remarkably like a try/catch block would in synchronous code.

    try {
      doSomethingRisky();
      doAnotherRiskyThing();
    } catch (e) {
      console.log(e);
    }

The equivalent "promisified" code might look like:

    doSomethingRisky()
    .then(doAnotherRiskyThing)
    .then(null, console.log);

## Task

Let's build exactly the system discussed above.

Some invalid JSON will be available on process.argv[2].

  * Build a function called `parsePromised` that creates a promise, performs
   `JSON.parse` in a `try`/`catch` block, and fulfills or rejectsthe promise
    depending on whether an error is thrown.

    **Note:** your function should synchronously return the promise!

  * Build a sequence of steps like the ones shown above that catchesany thrown
    errors and logs them to the console.


 » To print these instructions again, run: promise-it-wont-hurt print
 » To execute your program in a test environment, run: promise-it-wont-hurt run program.js
 » To verify your program, run: promise-it-wont-hurt verify program.js
 » For help run: promise-it-wont-hurt help

*/
