// call back function
let browser="chrome" // global variable declared
function checkBrowserVersion(cb){ // checkBrowserVersion is just a name we are not taking actual browser version
setTimeout(() => {
    cb(browser); // pass the browser value after the delay
  }, 2000); // 2 second delay
}
    function version(a){
        console.log("Browser version using callback:", a)

    }checkBrowserVersion(version)

/**
 * Note: Syntax for setTimeout
 * setTimeout(() => {
  // code to run after delay
   }, 2000);
 */