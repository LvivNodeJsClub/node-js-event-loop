function apiCall(arg, callback) {
  if (typeof arg !== "string")
    return callback(new TypeError("argument should be string"));
    // return process.nextTick(
    //   callback,
    //   new TypeError("argument should be string")
    // );
}

function main() {
  apiCall(0, (error) => {
    if (error) {
      console.log(error.message);
    }
  });
  console.log("after api call");
}

main();
