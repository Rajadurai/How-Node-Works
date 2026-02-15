// =================================================================================
// NOTE:
// ---------------------------------------------------------------------------------
// This code fail on execution
//       process.env.UV_THREADPOOL_SIZE = 3;
// --------------------------------------------------------------------------------
// This code success on execution only through Terminal
//      $env:UV_THREADPOOL_SIZE = 1; node .\eventLoop.js
// -------------------------------------------------------------------------------
// OUTPUT:
// -------------------------------------------------------------------------------
//      PS C:\> $env:UV_THREADPOOL_SIZE = 1; node .\eventLoop.js
//      Top-Level Finished
//      SetTimeOut Timer I Finished
//      read file input / output Finished
//      -------------------------------------
//      Next Tick Finished
//      SetTimeOut Timer II Finished
//      1163 password encrypted
//      2306 password encrypted
//      SetTimeOut Timer III Finished
//      3464 password encrypted
//      4621 password encrypted
// ================================================================

const fs = require("fs");
const crypt = require("crypto");
const start = Date.now();
setTimeout(() => console.log("SetTimeOut Timer I Finished"), 0);

fs.readFile("test-file.txt", () => {
  console.log("read file input / output Finished");
  console.log("-------------------------------------");
  setTimeout(() => console.log("SetTimeOut Timer II Finished"), 0);
  setTimeout(() => console.log("SetTimeOut Timer III Finished"), 3000);

  process.nextTick(() => console.log("Next Tick Finished"));

  crypt.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypt.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypt.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypt.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});

console.log("Top-Level Finished");
