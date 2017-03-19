var dialogs = require("ui/dialogs");
var frameModule = require("ui/frame");

exports.pageloaded = (args) => {
    let page = args.object
}

exports.gohomepage = function() {
    console.log('home complete!!!')
    var topmost = frameModule.topmost();
    topmost.navigate("views/home/home");
};

exports.detel = function() {
    //---------- Show กล่องข้อความ -------------
    dialogs.alert({
            title: "รายละเอียด",
            message: "Application นี้จัดทำเพื่อใช้ประกอบการอบรม การพัฒนาโปรแกรมบนอุปกรณ์เคลื่อนที่ด้วย Native Script วันที่ 15 - 19 มีนาคม 2560 โดยชมรมพัฒนาเทคโนโลยีเพื่อการ บริหารจัดการสารสนเทศบนระบบเครือข่าย",
            okButtonText: "ปิด"
        })
        //---------- EnD Show กล่องข้อความ -------------        
};