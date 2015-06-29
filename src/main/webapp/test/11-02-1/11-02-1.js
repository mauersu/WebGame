///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "哈佛情商测试，来晚了，抱歉啊!",
desc: "很准的呦,都来试试吧"
};


///////////////////////////////////////////////////////////////

var ID = getQueryString("sid") || Date.now() + "" + Math.floor(Math.random() * 1000);
var fen = 0;

document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {WeixinJSBridge.call('hideOptionMenu');});

function showQ(){
$("#zhao").hide();
} 

function tap(elemvm, select, cb) {
var a = false;
for (var i = 0; i < select.length; i++) {
a = a || select[i].active;
};
if (!a) {
elemvm.active = true;
setTimeout(function () {
cb && cb()
}, 500)
}
}
function getQueryString(name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
var r = location.search.substr(1).match(reg);
if (r != null) return unescape(decodeURI(r[2])); return null;
}

/////////////////////////////////////////
var model = avalon.define("test", function (vm) {
vm.arr = [{
type: "hello",
text: "哈佛心理学系博士戴尼尔·高尔曼为情商的测试做了一些努力，尝试出了一些问题，通过对这些问题的回答，您可以获得一个关于自己的EQ的粗略的感性印象.问题共10个，计分标准见后文，最高分数为200分，一般人的平均分为100分，如果您得了25分以下，最好另找个时间重测一下。",
text1: "点击开始测试咯~",
select: [
{
text: "开始测试",
active: false,
tap: function (ele, select) {
tap(ele, select, function () {
model.item = model.arr[1];
model.result.sex = 0;
});
}
}
]
}, {
type: "select",
id: 1,
text: "坐飞机时，突然受到很大的震动，你开始随着机身左右摇摆。这时候，您会怎样做呢? ",
select: [{
text: "A. 继续读书或看杂志，或继续看电影，不太注意正在发生的骚乱",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[2];
fen += 20;
});
}
},
{
text: "B. 注意事态的变化，仔细听播音员的播音，并翻看紧急情况应付手，以备万一",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[2];      fen += 20;
});
}
},
{
text: "C. A和B都有一点",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[2];      fen += 20;
});
}
},
{
text: "D. 不能确定--根本没注意到",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[2];
});
}
}]
},
{
type: "select",
id: 2,
text: "带一群4岁的孩子去公园玩，其中一个孩子由于别人都不和他玩而大哭起来。这个时候，您该怎么办呢?",
select: [
{
text: "A. 置身事外--让孩子们自己处理 ",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[3];
});
}
},
{
text: "B. 和这个孩子交谈，并帮助她想办法",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[3];fen += 20;
});
}
},
{
text: "C. 轻轻地告诉她不要哭",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[3];
});
}
},
{
text: "D. 想办法转移这个孩子的注意力，给她一些其他的东西让她玩",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[3];
});
}
}]
},
{
type: "select",
id: 3,
text: "假设您是一个大学生，想在某门课程上得优秀，但是在其中考试时却只得了及格。这时候，您该怎么办呢?",
select: [
{
text: "A. 制定一个详细的学习，并决心按计划进行 ",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[4];fen += 20;
});
}
},
{
text: "B. 决心以后好好学 ",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[4];
});
}
},
{
text: "C. 告诉自己在这门课上考不好没什么大不了的，把精力集中在其他可能考得好的课程上 ",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[4];fen += 20;
});
}
},
{
text: "D. 去拜访任课教授，试图让他给您高一点的分数",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[4];
});
}
}]
},
{
type: "select",
id: 4,
text: "假设您是一个保险推销员，去访问一些有希望成为您的顾客的人。可是一连十五个人都只是对您敷衍，并不明确表态，您变得很失望。这时候，您会怎么做呢?",
select: [
{
text: "A、认为这只不过是一天的遭遇而已，希望明天会有好运气 ",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[5];
});
}
},
{
text: "B、考虑一下自己是否适合做推销员",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[5];
});
}
},
{
text: "C、在下一次拜访时再做努力，保持勤勤恳恳工作的状态",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[5];fen += 20;
});
}
},
{
text: "D、考虑去争取其他的顾客",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[5];
});
}
}]
},
{
type: "select",
id: 5,
text: "您是一个经理，提倡在公司中不要搞种族歧视。一天您偶然听到有人正在开有关种族歧视的玩笑。您会怎么办呢?",
select: [
{
text: "A、不理它--这只是一个玩笑而已. ",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[6];
});
}
},
{
text: "B、把那人叫到办公室去，严厉斥责他一顿.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[6];
});
}
},
{
text: "C、当场大声告诉他，这种玩笑是不恰当的，在您这里是不能容忍的.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[6];fen += 20;
});
}
},
{
text: "D、建议开玩笑的人去参加一个有关反对种族歧视的培训班.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[6];
});
}
}]
},
{
type: "select",
id: 6,
text: "您的朋友开车时别人的车突然危险地抢到你们前面，您的朋友勃然大怒，而您试图让他平静下来。您会怎么做呢?",
select: [{
text: "A、告诉他忘掉它吧--现在没事了，这不是什么大不了的事.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[7];
});
}
},
{
text: "B、放一盘他喜欢听的磁带，转移他的注意力",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[7];fen += 5;

});
}
},
{
text: "C、一起责骂那个司机，表示自己站在他那一边",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[7];fen += 5;

});
}
},
{
text: "D、告诉他您也曾有同样的经历，当时您也一样气得发疯，可是后来您看到那个司机出了车祸，被送到医院急救室.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[7];fen += 20;

});
}
}]
},
{
type: "select",
id: 7,
text: "您和伴侣发生了争论，两人激烈地争吵;盛怒之下，互相进行人身攻击，虽然你们并不是真的想这样做。这时候，最好怎么办呢?",
select: [
{
text: "A、停止20分钟，然后继续争论 ",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[8];fen += 20;
});
}
},
{
text: "B、停止争吵……保持沉默，不管对方说什么",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[8];
});
}
},
{
text: "C、向对方说抱歉，并要求他(她)也向您道歉",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[8];
});
}
},
{
text: "D、先停一会儿，整理一下自己的想法，然后尽可能清楚地阐明自己的立场",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[8];
});
}
}]
},
{
type: "select",
id: 8,
text: "您被分到一个单位当领导，想提出一些解决工作中烦难问题的好方法。这时候，您第一件要做的是什么呢?？",
select: [
{
text: "A、起草一个议事日程，以便充分利用和大家在一起讨论的时间. ",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[9];
});
}
},
{
text: "B、给人们一定的时间相互了解.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[9];fen += 20;
});
}
},
{
text: "C、让每一个人说出如何解决问题的想法",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[9];
});
}
},
{
text: "D、采用一种创造性地发表意见的形式，鼓励每一个人说出此时进入他脑子里的任何想法，而不管该想法有多疯狂.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[9];
});
}
}]
},
{
type: "select",
id: 9,
text: "您3岁的儿子非常胆小，实际上，从他出生起就对陌生地方和陌生人有些神经过敏或者说有些恐惧。您该怎么办呢?",
select: [
{
text: "A、接受他具有害羞气质的事实，想办法让他避开他感到不安的环境 ",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[10];
});
}
},
{
text: "B、带他去看儿童精神科医生，寻求帮助",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[10];fen+=5;
});
}
},
{
text: "C、有目的地让他一下子接触许多人，带他到各种陌生的地方，克服他的恐惧心理",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[10];
});
}
},
{
text: "D、设计渐进的系列挑战性计划，每一个相对来说都是容易对付的，从而让他渐渐懂得他能够应付陌生的人和陌生的地方",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[10];fen+=20;
});
}
}]
},
{
type: "select",
id: 10,
text: "多年以来，您一起想重学一种您在儿时学过的乐器，而现在只是为了娱乐，您又开始学了。您想最有效的利用时间。您该怎么做呢？",
select: [{
text: "A、每天坚持严格的练习.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[11];
});
}
},
{
text: "B、选择能稍微扩展能力的有针对性的曲子去练习.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
model.item = model.arr[11];fen+=20;
});
}
},
{
text: "C、只有当自己有情绪的时候才去练习.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
//model.item = model.arr[11];
result();
});
}
},
{
text: "D、选择远远超出您的能力但通过勤奋的努力能掌握的乐曲去练习.",
active: false,
error: false,
tap: function (ele, select) {
tap(ele, select,
function () {
//model.item = model.arr[11];
result();
});
}
}]
}, {
type: "result",
id: 11
}
];
vm.item = vm.arr[0];
vm.result = {
sex: 0
}
vm.shared = false;
vm.sharebox = function () {
model.showshare = true;
};

vm.livetip = false;
vm.hidelivetip = function () {
model.livetip = false;
}
vm.livenow = function () {

};
vm.showxz = function () {
model.xunzhang = true;
};
vm.$watch("item", function (newval) {
if (newval.type == 'result') {
//tarShare((newval.id-18));
result();
return false;
};
})
});

var ylist = [{
	"biao": "EQ：80分",
	"t1": "低于普通人水平",
	"t2": "自我意识差，没有自信，无确定的目标，也不打算付诸实践，严重依赖他人。",
	},{
	"biao": "EQ：120分",
	"t1": "比普通人稍高！",
	"t2": "易受他人影响，自己的目标不明确。比低情商者善于原谅，能控制大脑。能应付较轻的焦虑情绪。",
	},{
	"biao": "EQ：150分",
	"t1": "不错！属于高水平了！",
	"t2": "自信而不自满，很乐观，很幽默，能站在别人的角度想问题，有较好的人际关系，做事不怕难，心里承受能力强，能应对大多数的问题。",            
	},{
	"biao": "EQ：200分",
	"t1": "啧啧，这情商高得有点吓人",
	"t2": "肯于帮助别人，知道什么时候该拒绝，善于读懂别人的面部表情。情商高的人无论遇到何等逆境，都会坚持下去，迅速调整情绪，恢复活力，具有很强的心理韧性。",            
	},{
	"biao": "EQ：250分",
	"t1": "你情商可以和哈佛博士媲美了",
	"t2": "自动自发，目光远大，对自己有清醒的认识，能承受压力。",            
}];
			
document.body.className = "";
function tarShare(score){
$('#tips').show();
mebtnopenurl = "http://"+basedns+"/test/"+spid+"/result.html?s="+score;
WeixinJSBridge.call("showOptionMenu");

return false;
}

function result() {
var sco = fen;if( sco<100) scores = 1;
else if(sco>100 && sco <120)scores = 2;
else if(sco>120 && sco <150)scores = 3;
else if(sco>150 && sco <200)scores = 4;
else if( sco>=200)scores = 5;


tarShare(scores);

}
function showAns(ans){
ans = ans-1;
if(ans<0 || ans>5){
ans = 1;
}
$("#sans").show();
$("#fis").html("<span>"+ylist[ans].biao+"</span></br>"+ylist[ans].t1);
$("#sec").html(ylist[ans].t2);
//	shareCount(spid);
//	scoreCount(spid,ans);
}
////////////////////
