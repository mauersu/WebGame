///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "小学数学，你能得几分，刚才没进来的进来试试吧",
desc: "好难的哦,都来试试吧"
};

///////////////////////////////
var model = avalon.define("test", function (vm) {
			vm.arr = [
    {
        type: "hello",
        text: "小学数学，你能得几分？ 友情提示：不准携带通讯工具，不准交头接耳、 一经发现，取消考试成绩，并终生禁止再次参与本考试！一定要记得哦！",
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
        text: "小明的左边有5个人，右边有3个人。这一排共有多少人？",
        select: [{
            text: "7",
            active: false,
            error: false,
            tap: function (ele, select) {
                tap(ele, select,
						function () {
						    model.item = model.arr[2];
						});
            }
        },
				{
				    text: "8",
				    active: false,
				    error: false,
				    tap: function (ele, select) {
				        tap(ele, select,
						function () {
						    model.item = model.arr[2];
						});
				    }
				},
				{
				    text: "9",
				    active: false,
				    error: false,
				    tap: function (ele, select) {
				        tap(ele, select,
						function () {
						    model.item = model.arr[2];
						    fen += 10;
						});
				    }
				},
				{
				    text: "10",
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
			    text: "一队动物共有10个，从左数小猫是第5个，从右数它是第几？",
			    select: [{
			        text: "5",
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
             text: "6",
             active: false,
             error: false,
             tap: function (ele, select) {
                 tap(ele, select,
                 function () {
                     model.item = model.arr[3];
                     fen += 10;
                 });
             }
         },
         {
             text: "7",
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
             text: "8",
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
			    text: "两箱苹果都是30个，从第二箱拿出8个放入第一箱，现在第二箱比第一箱少几个苹果？",
			    select: [{
			        text: "4",
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
				    text: "8",
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
				    text: "16",
				    active: false,
				    error: false,
				    tap: function (ele, select) {
				        tap(ele, select,
						function () {
						    model.item = model.arr[4];
						    fen += 10;
						});
				    }
				},
				{
				    text: "20",
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
			    text: "一个人唱一首歌要2分钟，现在3个人合唱这首歌，要几分钟？",
			    select: [{
			        text: "2",
			        active: false,
			        error: false,
			        tap: function (ele, select) {
			            tap(ele, select,
						function () {
						    model.item = model.arr[5];
						    fen += 10;
						});
			        }
			    },
         {
             text: "3",
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
             text: "6",
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
             text: "8",
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
			    text: "有10个小朋友，每2个人照一张合影，一共要照多少张照片？",
			    select: [{
			        text: "20",
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
             text: "45",
             active: false,
             error: false,
             tap: function (ele, select) {
                 tap(ele, select,
                 function () {
                     model.item = model.arr[6];
                     fen += 10;
                 });
             }
         },
         {
             text: "50",
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
             text: "90",
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
			    text: "3个鹅蛋换9个鸡蛋，2个鸡蛋换4个鸽子蛋，5个鹅蛋换几个鸽子蛋？",
			    select: [{
			        text: "15",
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
             text: "20",
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
             text: "25",
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
             text: "30",
             active: false,
             error: false,
             tap: function (ele, select) {
                 tap(ele, select,
                 function () {
                     model.item = model.arr[7];
                     fen += 10;
                 });
             }
         }]
			},
			{
			    type: "select",
			    id: 7,
			    text: "两人同时上18楼，甲上到5楼时，乙恰好上到3楼。甲上到15楼时，乙上到了几楼？ ",
			    select: [{
			        text: "7",
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
				    text: "8",
				    active: false,
				    error: false,
				    tap: function (ele, select) {
				        tap(ele, select,
						function () {
						    model.item = model.arr[8];
						    fen += 10;
						});
				    }
				},
				{
				    text: "9",
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
				    text: "10",
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
			    text: "在1～99中，任取两个和小于100的数，有多少种不同的取法？",
			    select: [{
			        text: "2400",
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
				    text: "2401",
				    active: false,
				    error: false,
				    tap: function (ele, select) {
				        tap(ele, select,
						function () {
						    model.item = model.arr[9];
						    fen += 10;
						});
				    }
				},
				{
				    text: "3900",
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
				    text: "4802",
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
        text: "小明比爸爸大明小31岁，比妈妈小25岁，爸爸比妈妈大几岁？",
        select: [{
            text: "6",
            active: false,
            error: false,
            tap: function (ele, select) {
                tap(ele, select,
						function () {
						    model.item = model.arr[10];
						    fen += 10;
						});
            }
        },
				{
				    text: "8",
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
				    text: "10",
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
				    text: "12",
				    active: false,
				    error: false,
				    tap: function (ele, select) {
				        tap(ele, select,
						function () {
						    model.item = model.arr[10];
						});
				    }
				}]
    },
    {
        type: "select",
        id: 10,
        text: "有一杯橙汁，小明喝了半杯后，将它加满水；然后他又喝半杯，再加满水；最后全部喝完，小菜刀喝的橙汁多？还是水多？",
        select: [{
            text: "橙汁多",
            active: false,
            error: false,
            tap: function (ele, select) {
                tap(ele, select,
						function () {
						    testEnd();
						});
            }
        },
				{
				    text: "水多",
				    active: false,
				    error: false,
				    tap: function (ele, select) {
				        tap(ele, select,
						function () {
						    testEnd();
						});
				    }
				},
				{
				    text: "一样多",
				    active: false,
				    error: false,
				    tap: function (ele, select) {
				        tap(ele, select,
						function () {
						    testEnd();
						});
				    }
				},
				{
				    text: "不确定",
				    active: false,
				    error: false,
				    tap: function (ele, select) {
				        tap(ele, select,
						function () {
						    fen += 10;
						    testEnd();
						});
				    }
				}]
    },
    {
        type: "result",
        id: 11
    }, {
        type: "result",
        id: 12
    }, {
        type: "result",
        id: 13
    }, {
        type: "result",
        id: 14
    }, {
        type: "result",
        id: 15
    }, {
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
    }, {
        type: "result",
        id: 20
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
/* vm.$watch("item", function (newval) {
    if (newval.type == 'result') {
        tarShare((newval.id-16));
				return false;
    };
})*/
});
			var ylist = [{
				"biao": "0分",
				"t1": "",
				"t2": "我宁愿相信你是天才，答题的时候手抖了吗？",      
			},{
				"biao": "1-59分",
				"t1": "",
				"t2": "再接再厉哦！",            
			},{
				"biao": "60分",
				"t1": "",
				"t2": "不多不少，及格就好。",            
			},{
				"biao": "66分",
				"t1": "",
				"t2": "得这个分数真顺啊！",            
			},{
				"biao": "61-79分",
				"t1": "",
				"t2": "考试及格。",            
			},{
				"biao": "80分",
				"t1": "",
				"t2": "恭喜您，达标了。",            
			},{
				"biao": "81-90分",
				"t1": "",
				"t2": "恭喜您，成绩优良。",            
			},{
				"biao": "91-98分",
				"t1": "",
				"t2": "恭喜您得到高分，貌似平时很努力哦！",            
			},{
				"biao": "99分",
				"t1": "",
				"t2": "离神人只差一步，您太谦虚了。",            
			},{
				"biao": "100分",
				"t1": "",
				"t2": "您真是神人级别！",            
			}];
document.body.className = "";

function testEnd() {
		 if (fen == 0) {
   var scores = 1;
}else if (fen >= 1 && fen <= 59) {
   var scores = 1;
}else if (fen == 60) {
    var scores = 2;
}else if (fen == 66) {
   var scores = 3;
}else if (fen >= 61 && fen <= 79) {
   var scores = 4;
}else if (fen == 80) {
   var scores = 5;
}else if (fen >= 81 && fen <= 90) {
  var scores = 6;
}else if (fen >= 91 && fen <= 98) {
    var scores = 7;
}else if (fen == 99) {
    var scores = 8;
}else if (fen == 100) {
    var scores = 9;
}
tarShare(scores);
}
//openCount(spid);
function showAns(ans){
ans = ans-1;
if(ans<0 || ans>10){
	ans = 1;
}
$("#sans").show();
$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
$("#sec").html(ylist[ans].t2);
			shareCount(spid);
scoreCount(spid,ans);
				
}