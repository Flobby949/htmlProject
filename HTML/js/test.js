//提示框peompt，警告框alert
/* var user = prompt("请输入用户名");
while(user == undefined || user == null || user == ''){
alert("请输入正确用户名！")
var user = prompt("请输入用户名");
}
alert("\n欢迎您，"+user); */

document.write("<h1>Hello JavaScript!</h1>");

document.write("lalalala\n");

var x = 0;
document.write("<br>" + typeof (x) + " \n ");

var str1 = "wow";
var str2 = "awesome";
document.writeln(str1 + "\t" + str2);
document.writeln("wuwuwu<br>");
document.write(x + str1 + "<br>");
document.write(str2 + x + "<br>");

var MyStr = "abcd";
document.write(MyStr[0] + "<br>");

MyStr[3] = "e";
document.write(MyStr + "<br>");

MyStr = "abce";
document.write(MyStr + "<br>");

var y = '';
document.write(typeof (y) + "<br>")
for (i = 0; i <= 10; i++) {
    if (i == 3) {
        continue;
    }
    y = '数值是： ' + i + '<br>';
    document.write(y);
}

function getText() {
    var textValue = document.getElementById("textId").value;
    if (textValue == undefined || textValue == null || textValue == '') {
        alert("输入错误，重新输入")
    } else {
        alert("value = " + textValue);
    }
}

/*    确认框comfirm
    
    function leave(){
    var result = confirm('你确定要离开这个页面?') 
    if (result == true) {  
        alert('感谢你的光临!');
        window.close();
    } else {  
        alert('感谢你继续使用我们的服务!'); 
    }

} */


//关闭网页提示
/*
新版浏览器不支持自己写对话框，只能用默认的
*/

window.onbeforeunload = function (e) {
    var message = 'some word';
    e = e || window.event;
    if (e) {
        e.returnValue = message;
    }
    return message;
};


//对象，构造方法

var l = 'legs';
var ourDog = {
    name: 'Camper',
    legs: 4,
    tails: 1,
    friends: ['everything!', 'anything!'],
    eat: function () {
        return "I'm eating"
    }
}
delete ourDog.tails;
console.log(ourDog);
/*
console.log(ourDog['friends[0]']);
怎么用‘[]’查看数组的其中一个？1
*/
console.log(ourDog['friends']);
console.log(ourDog['name']);
console.log(ourDog['legs']);
console.log(ourDog[l]);
console.log(ourDog['eat']());


function person(name, age) {
    this.name = name
    this.age = age
    this.yearOfBirth = bornYear // 关联 bornYear 函数 
}
function bornYear() {
    return new Date().getFullYear() - this.age;
}

var man = new person("三", 15);
/*
如何创建对象时同时调用方法？
*/
console.log("出生年份：" + man.yearOfBirth());
console.log(man);

//数组
var arr = [];
arr[0] = '一';
arr[1] = 2;
document.write(arr + "<br>");

arr.push('三', 4);
document.write(arr + "<br>");

function myFunction(item, index) {

    /* 
       var demo = document.getElementById('demo');
       demo.innerHTML =demo.innerHTML + 'index[' + index + ']: ' + item + '<br>'  
    */

    document.write('index[' + index + ']: ' + item + '<br>');
}
arr.forEach(myFunction);

var fruits = ['香蕉', '橙子', '苹果', '甜瓜', '苹果'];
var apple = fruits.indexOf('苹果'); // a 的值为 2 
document.write("苹果在数组中的位置:" + apple + "<br>");
var cherry = fruits.indexOf('樱桃'); // b 的值为 -1
document.write("樱桃在数组中的位置:" + cherry + "<br>");
var fruits_slice = fruits.slice(1, 3);
document.write("fruits数组中1-3是：" + fruits_slice + "<br>");

//核心对象
var txt = "StringString";
document.write(txt.indexOf("i") + "<br>");   //数组中首次出现"xxx"的位置
document.write(txt.lastIndexOf("i") + "<br>");   //数组中最后一次出现"xxx"的位置
document.write(txt.includes("ings") + "<br>");   //数组是否包括"xxx"
document.write(txt.repeat(2) + "<br>");   //重复数组x次并连接
document.write(txt.replace("i", "G") + "<br>");   //把数组中符合条件的第一个子串"xxx"用"xxx"替换
document.write(txt.replace(/i/g, "G") + "<br>");   //把数组中符合条件的所有子串/xxx/g用"xxx"替换
document.write(txt.substring(3) + "<br>");
document.write(txt.substring(3, 7) + "<br><br>");

document.write(window.closed + "<br>");
//浏览器不支持
window.defaultStatus = "这是默认文本";
document.write(window.defaultStatus + "<br>");
var framesList = window.frames;
document.write(framesList + "<br>");
function goBack() {
    window.history.back();
}
function goForward() {
    window.history.forward();
}
function goBackTwo() {
    //正数前进，负数后退
    window.history.go(-2);
}

document.write("文档高度=" + window.innerHeight + "<br>文档宽度=" + window.innerWidth + "<br>");


document.write("外部高度=" + window.outerHeight + "<br>外部宽度=" + window.outerWidth + "<br>");


//????????????????????
function showDistance() {
    alert("当前页面相对于窗口左上角x坐标=" + window.pageXOffset + "\n"
        + "相对于窗口x坐标=" + window.screenLeft + "\n"
        + "相对于窗口x坐标=" + window.screenX + "\n");
}

//？？？？？？？只有IE浏览器支持，不会用
function Popup() {
    window.createPopup();
}

function createFrame() {
    newWindow = window.open('', '', 'width=500,height=500');
    newWindow.document.write("一个新窗口");
}
function moveFrame() {
    newWindow.moveBy(50, 50);
    newWindow.setTimeout((function () {
        newWindow.close();
    }), 2000);
    newWindow.focus();
}

//不能调整非window.open()打开的窗口大小
function sizeAdjustment() {
    newWindow.resizeBy(200, -100);
    newWindow.focus();
}

function scrollFrameTop() {
    window.scrollBy({
        top: -300,
        left: 0,
        behavior: "smooth"
    });
}

function scrollFrameFree() {
    window.scrollTo(0, 100);
}


//js外部链接生成在html前，获取不到HTML里的标签，可以按钮配合使用
function jsonParse() {
    var text = '{"employees":[' +
        '{"name":"baidu","site":"http://www.baidu.com" },' +
        '{"name":"Google","site":"http://www.Google.com" },' +
        '{"name":"Taobao","site":"http://www.taobao.com" }]}';
    obj = JSON.parse(text);
    var employee =  document.getElementById("demo1");
     employee.innerHTML =
     obj.employees[1].name + " " + obj.employees[1].site;
}

function changePicture() {
    var picture = document.getElementById("picture_a");
    picture.src = "../img/b.jpg";
}

