// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
logMsg = function(obj){
    console.log(obj);
}

const test = {
    val: "Hi",
    errMsg: "Not Found"
}

logMsg.call(test);
