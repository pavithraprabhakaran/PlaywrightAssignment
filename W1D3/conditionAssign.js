let browserName="Chrome"
function launchBrowser(){
    if (browserName=="chrome"){
        console.log("This is chromebrowser",browserName)
    } else {
        console.log("This is not chromebrowser", browserName);
    }
}
launchBrowser();

let testType="String1"
function runTest(){
    switch(testType){
    case "String1":
        console.log("String1");
        break;
    case "set value":
        console.log("set value");
        break;
        case "prompt":
            console.log("Prompt alert")
            break
    default:
        console.log("invalid string")
        break
}
}
runTest()