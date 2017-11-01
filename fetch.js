var qhttp = require('q-io/http');

qhttp.read("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done()


/*

Error: Cannot find module 'q-io/http'
    at Function.Module._resolveFilename (module.js:470:15)
    at Function.Module._load (module.js:418:25)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/adrianshepelavey/nodeschool/promise-it-wont-hurt/fetch.js:1:75)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   ""                                  !=    "{ id: 1337, name: 'Katy Perry', occupation: '???' }"
                                       !=    ""

────────────────────────────────────────────────────────────────────────────────

✗ Submission results did not match expected!

# FAIL

Your solution to Fetch JSON didn't pass. Try again!

Fetch JSON
 Exercise 12 of 13


# Let's do something, you know, from "real life"

Let's fetch JSON over HTTP… YAY!

Fetching JSON data from remote machines via AJAX is commonplace
on both the server and client.  Promises also happen to map to AJAX
particularly well.  Any AJAX request may either succeed or fail,
never both.  Promises may fulfill or reject, never both.

So wow.  Much similarity.  Very promising…

Let's use a new module called q-io to take advantage of its http.read
method which returns a promise for the value of a successful HTTP response
body.

Install by typing:

    $ npm install q-io --save

## Task

Fetch JSON from [http://localhost:1337](http://localhost:1337) and console.log
it.

There are several things you will want to know:

  * `q-io`'s `http` module has a `read` method which returns a promise for the
    content of a successful (status 200) HTTP request.
  * Parse the returned JSON and `console.log` it for much win.

This challenge is a bit tricky but the implementation is relatively
straightforward.  If you get stuck, refer to the q-io documentation for
clarification:

  [https://github.com/kriskowal/q-io](https://github.com/kriskowal/q-io)


 » To print these instructions again, run: promise-it-wont-hurt print
 » To execute your program in a test environment, run: promise-it-wont-hurt run program.js
 » To verify your program, run: promise-it-wont-hurt verify program.js
 » For help run: promise-it-wont-hurt help

*/
