///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "你的心里到底活着几个恋人?太可怕了，超准的测试!",
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
                vm.arr = [
                    {
                        type: "hello",
                        text: "你的心里到底活着几个恋人？答案直戳你的心房。",
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
                    },  {
                        type: "select",
                        id: 1,
                        text: "在很久很久以前，故事里有一位王子和一位卖花的姑娘，你要当：",
                        select: [
                            {
                                text: "a、王子",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "b、卖花的姑娘",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[6];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 2,
                        text: "尊敬的王子，你的国家发生暴乱，你会选择于以下那位结婚：",
                        select: [
                             {
                                 text: "a、手握兵权大臣的女儿",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[4];
                                     });
                                 }
                             }, {
                                 text: "b、深爱你的卖花姑娘",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[3];
                                     });
                                 }
                             }
                        ]
                    }, {
                        type: "select",
                        id: 3,
                        text: "大臣带着兵哗变，使你退位并且杀了卖花的姑娘，大臣的女儿来营救你，你愿意相信她吗?",
                        select: [
                            {
                                text: "a、yes",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[4];
                                    });
                                }
                            }, {
                                text: "b、no",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[5];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 4,
                        text: "大臣的女儿让你吃下一颗药，能假死，避过眼前灾难，你会：",
                        select: [
                           {
                               text: "a、拒绝",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[5];
                                   });
                               }
                           }, {
                               text: "b、接受",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[8];
                                   });
                               }
                           }
                        ]
                    }, {
                        type: "select",
                        id: 5,
                        text: "你的兄长来营救你，并打伤了大臣的女儿，进一步处死她，你会：",
                        select: [
                           {
                               text: "a、接受她处死",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[7];
                                   });
                               }
                           }, {
                               text: "b、放她一条生路",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[8];
                                   });
                               }
                           }
                        ]
                    }, {
                        type: "select",
                        id: 6,
                        text: "你爱上了一位王子，但是王子却爱上了大臣的女儿，于是：",
                        select: [
                            {
                                text: "a、你成为了他们的红娘",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[4];
                                    });
                                }
                            }, {
                                text: "b、你离去",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[7];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 7,
                        text: "天降大雨，你迷失在森林，你捡到了一个指南针，你会使用它吗?",
                        select: [
                            {
                                text: "a、no",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "b、yes",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[9];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 8,
                        text: "大臣的女儿找到你，表示只能和你在一起，做你的妾服侍你，你会：",
                        select: [
                           {
                               text: "a、接受",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[10];
                                   });
                               }
                           }, {
                               text: "b、拒绝",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[9];
                                   });
                               }
                           }
                        ]
                    },
                   {
                       type: "select",
                       id: 9,
                       text: "大臣的女儿死去，她的灵魂却被黑巫师所利用，她诅咒跟你相爱的人会在你们孩子诞辰之日而死，你还会要孩子么?",
                       select: [
                           {
                               text: "a、不要",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[11];
                                   });
                               }
                           }, {
                               text: "b、要",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[10];
                                   });
                               }
                           }
                       ]
                   },
                     {
                         type: "select",
                         id: 10,
                         text: "可怕的事情发生了，很多年后，你新生的孩子长了一张大臣女儿一模一样的脸，你会杀死你孩子么?",
                         select: [
                            {
                                text: "a、yes",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[11];
                                    });
                                }
                            }, {
                                text: "b、no",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[14];
                                    });
                                }
                            }
                         ]
                     },
                    {
                        type: "select",
                        id: 11,
                        text: "与你相爱的人，随着岁月的流失而衰老，你却惊人的拥有不老的身体，你会选择：",
                        select: [
                           {
                               text: "a、人间流浪",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[14];
                                   });
                               }
                           }, {
                               text: "b、隐居山林",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[12];
                                   });
                               }
                           }
                        ]
                    },
                    {
                        type: "select",
                        id: 12,
                        text: "有一天你遇到一个会说话的牛，它问你是否捡到一个指南针，那是它遗失了，你身上有这么块指南针么?",
                        select: [
                           {
                               text: "a、yes",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[13];
                                   });
                               }
                           }, {
                               text: "b、no",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[14];
                                   });
                               }
                           }
                        ]
                    },
                   {
                       type: "select",
                       id: 13,
                       text: "神牛从你思考的表情来看，抢走了指南针，哈哈大笑，它把指南针回拨，让你重新选择，当年，最初的时候，你会投胎做：",
                       select: [
                           {
                               text: "a、卖花姑娘",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[14];
                                   });
                               }
                           }, {
                               text: " b、大臣女儿",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[15];
                                   });
                               }
                           }
                       ]
                   },
                 {
                     type: "select",
                     id: 14,
                     text: "你遇到了一位故事家，他拿了2条台词给你念，你会选择那个?",
                     select: [
                           {
                               text: "a、茶凉了，我再去给你续上",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[16];
                                   });
                               }
                           }, {
                               text: " b、你是爱钱的坏肉肉",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[17];
                                   });
                               }
                           }
                     ]
                 },
                    {
                        type: "select",
                        id: 15,
                        text: "你爱上了一位王子，王子却爱卖花姑娘，你的父亲手握兵权，父亲问你，对王子是不是势在必得，你说：",
                        select: [
                             {
                                 text: "a、宁为玉碎，不为瓦全",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[18];
                                     });
                                 }
                             }, {
                                 text: "b、我是爱他，他却没有爱我的资格",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[19];
                                     });
                                 }
                             }
                        ]
                    },
                    {
                        type: "result",
                        id: 16
                    }, {
                        type: "result",
                        id: 17
                    }, {
                        type: "result",
                        id: 18
                    }, {
                        type: "result",
                        id: 19
                    }
                ];
                vm.item = vm.arr[0];
                vm.result = {
                    sex: 0
                }
                vm.shared = false;
                vm.sharebox = function () {
                    model.showshare = true;
                }
                vm.livetip = false;
                vm.hidelivetip = function () {
                    model.livetip = false;
                }
                vm.livenow = function () {

                }
                vm.showxz = function () {
                    model.xunzhang = true;
                }
                vm.$watch("item", function (newval) {
                    if (newval.type == 'result') {
                        tarShare((newval.id-15));
						return false;
                    };
                })
            });
			var ylist = [{
				"biao": "A、没有恋人",
				"t1": "",
				"t2": "　当你停止爱一个人的时候，他的记忆就完全被你粉碎掉了。你能如此的绝决，是因为你的不爱并非一时的冲动，而是一件件事情的总结。也许有的时候，你也会想起来偶尔的温暖，但你心里坚定的理由，能让你不会因为怀旧而回头。因此，与你投入一段恋情的人，是世界上最幸福的人，因为你的睿智能让你开始每段恋情的时候，全情的投入，百分百心里只有对方，没有他人。",      
			},{
				"biao": "B、两个恋人",
				"t1": "",
				"t2": "感情热烈的你心中有两个恋人长存，这两位恋人是你的两面镜子，每每提醒你，应该如何对待别人，应该如何自律。这两种恋爱，一种是父母之爱，一种是孩童之爱。父母之爱的恋人总是包容你，安慰你受伤的心，你还能向他撒撒娇，无论你生理年龄多大，你都能像个孩子一样耍耍赖，使使坏，欺负下对方。你在这种无赖泼皮的状态下，感受到对方因为爱你而对你的宽容和在意。当你受伤的时候，你看到对方眼中的泪光，于是有了无限的满足感，似乎身上的伤痛都不那么重要了，只是到后来，你深深的自责，你知道你的任性伤了他的心，从此他离你而去。另外一种恋人，他像你的孩子，像你那个想要成为却不能成为的人，你追求他，讨好他，想要把全世界上最昂贵最稀有的东西捧到他面前来，你的灵魂突然从散漫自由，摇身一变成为有责任感严肃思维缜密，你无法抑制对这个恋人付出，而这位恋人一星半点的回报就令你欣喜若狂，铭刻于心。但终于有一天，你觉得累了疲倦了，于是放好了该做的早餐，说消失就消失，心里甚至有些怅然若失的念叨着，他真是太不懂事了……并以此为鉴，再也不傻乎乎的全心付出。",            
			},{
				"biao": " C、一位恋人",
				"t1": "",
				"t2": "因为你是个对生活有要求的人，所以，一旦你遇到过一位最最符合你的理想追求的伴侣，这位恋人就会在你心中成为一个恋人榜样。从此以后，你遇到的恋人都在你有意无意下，与他相对比。对比现任恋人有没有他对你好，对比现任恋人有没有他能力强……甚至，当你失恋了，你都习惯性的抹去这段不成功的恋爱，心里喃喃自语道：还是你最好。我始终只爱过你。于是这一位恋人成为了你心中不朽的恋情，也是唯一的一段得到你官方独家认可的恋情。在这里，诚挚的为你向上苍祈祷，上帝老大呀!您救救他吧!不过又转念一想，明白了，上帝老大肯定救过你，必然是你自己不自救啊!不打破爱情的榜样，就无法有真正意义上幸福的爱情。那个你心里的榜样恋人，并不是真的那么好哇!你仔细想想吧，你也不容易呀……",            
			},{
				"biao": "D、许多恋人",
				"t1": "",
				"t2": "你是个有故事的人，别人想象不到生活曾经怎样无情的蹂躏过你，让你遭遇那些残暴的冷血的爱情。因此，当三教九流的人向你讨教各种不同的爱情问题，这些爱情问题，羽扇纶巾，谈笑间，在你面前灰飞烟灭。也许，在别人眼中你是个大师，但只有你心里明白，你这些见解，不过手熟尔。然后，因为经历的太多，所以你虽然知道感情是怎么回事，你只有疯癫没有勇气。当你面对你真心喜欢的人，也许你跟他不过隔着一道布帘的距离，刹那间，你却因为心中那种羞涩的难以启齿的倾诉，望而却步，在即将开展一段恋情之前，你逃之夭夭了。太多的前车之鉴，让你凭空就能编织出各种跟他的结局和片段，太多的前车之鉴，也让你不断清点着人类的弱点。",            
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
	$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
	$("#sec").html(ylist[ans].t2);
//	shareCount(spid);
//	scoreCount(spid,ans);
}
////////////////////
