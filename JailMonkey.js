Java.perform(function(){

var jailMonkey = Java.use("com.gantix.JailMonkey.JailMonkeyModule");

    jailMonkey.getConstants.overload().implementation = function(){
    console.log("[+] Returning 0 on getConstants method")
    return 0;
};
});
