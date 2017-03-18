var frameModule = require("ui/frame");

exports.pageloaded = (args) => {
    let page = args.object
}

exports.gohomepage = function() {
    console.log('home complete!!!')
    var topmost = frameModule.topmost();
    topmost.navigate("views/home/home");
};