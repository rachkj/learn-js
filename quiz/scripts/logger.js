function logMsg(obj) {
    if (obj && obj.errMsg) {
        console.error(obj.errMsg);
    } else {
        console.log("No error message found in the object.");
    }
}