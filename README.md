# The Node.js Event Loop, Timers, and process.nextTick()

![Event Loop phases](https://image.prntscr.com/image/iYcHm0aWSSeFoLdgb-PGTA.png)

## Phases Overview
- timers: this phase executes callbacks scheduled by `setTimeout()` and `setInterval()`.
- pending callbacks: executes I/O callbacks deferred to the next loop iteration.
- idle, prepare: only used internally.
- poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and `setImmediate()`); node will block here when appropriate.
- check: `setImmediate()` callbacks are invoked here.
- close callbacks: some close callbacks, e.g. `socket.on('close', ...)`.

### Links
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
- https://nodejs.org/api/cli.html#cli_uv_threadpool_size_size
- https://www.youtube.com/watch?v=zphcsoSJMvM
- https://www.youtube.com/watch?v=P9csgxBgaZ8
- https://nodejs.org/uk/docs/guides/dont-block-the-event-loop/
- https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c
