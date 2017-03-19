var frameModule = require("ui/frame");

exports.loaded = () => {
    //console.log('loaded cpmplete!!!')
}

exports.gologinpage = function() {
    console.log('page1 cpmplete!!!')
    var topmost = frameModule.topmost();
    topmost.navigate("views/page1/page1");
};

exports.golistpage = function() {
    console.log('page2 cpmplete!!!')
    var topmost = frameModule.topmost();
    topmost.navigate("views/page2/page2");
};

exports.goaboutpage = function() {
    console.log('page3 cpmplete!!!')
    var topmost = frameModule.topmost();
    topmost.navigate("views/page3/page3");
};