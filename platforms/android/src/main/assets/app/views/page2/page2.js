//###### Start Code OK #######################3
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var page;

var pageData = new observableModule.fromObject({
    groceryList: new ObservableArray([
        { name: "นาย ชลันธร ทับแทน", tel: "1111111111" },
        { name: "นาย ชานนท์ คหินทพงษ์", tel: "2222222222" },
        { name: "นาย ณัฐนันท์ แพทย์สาสดี", tel: "3333333333" },
        { name: "นาย ณัฐพล กวางทอง", tel: "4444444444" },
        { name: "นาย นฤดม ธาระ", tel: "5555555555" },
        { name: "นางสาว กนกวรรณ เรืองอร่าม", tel: "6666666666" },
        { name: "นางสาว คัทลียา อำภาทิพย์", tel: "7777777777" },
        { name: "นางสาว จิรติกาล ศรศรี", tel: "8888888888" },
        { name: "นางสาว นิรินรัตน์ คำหมาย", tel: "9999999999" },
        { name: "นางสาว ปานทอง ขำละม้าย", tel: "0000000000" },
        { name: "นางสาว ปิยนุช ขุนกนก", tel: "1010101010" },
        { name: "นางสาว จิรติกาล ศรศรี", tel: "2020202020" }
    ])
});

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
};
//##################################################