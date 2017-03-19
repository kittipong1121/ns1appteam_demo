var UserViewModel = require("../../shared/view-models/user-view-model");
// var user = new UserViewModel();
var dialogs = require("ui/dialogs");
var frameModule = require("ui/frame");

var user = new UserViewModel({
    email: "username@domain.com",
    password: "password"
});

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};

exports.signIn = function() {
    user.login()
        .catch(function(error) {
            console.log(error);
            //---------- Show กล่องข้อความ -------------
            dialogs.alert({
                    title: "ผลการทำงาน",
                    message: "ไม่พบชื่อ User ของคุณ",
                    okButtonText: "ปิด"
                })
                //---------- EnD Show กล่องข้อความ ------------- 
            return Promise.reject();
        })
        .then(function() {
            // console.log("Login Success..!! go to list page...")
            frameModule.topmost().navigate("views/page2/page2");
        });
};

exports.register = function() {
    var page;
    var email;
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
    //    alert("Registering");
    //---------- Show กล่องข้อความ -------------
    dialogs.alert({
            title: "ผลการทำงาน",
            message: "กำลังเรียกหน้าลงทะเบียน....",
            okButtonText: "ปิด"
        })
        //---------- EnD Show กล่องข้อความ -------------        
};