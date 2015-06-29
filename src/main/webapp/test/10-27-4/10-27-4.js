///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "手机对你来说有多重要？",
desc: "很准的呦,都来试试吧"

};

var model = avalon.define("test", function (vm) {
vm.arr = [
    {
        type: "hello",
        text: "现在手机成为了人们生活中必不可少的部分，甚至已经开始主宰了人们的生活。过度地玩手机对人们的健康没好处，尽早摆脱手机的诱惑吧。测测手机对你来说有多重要",
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
        text: "你睡觉时没有关手机的习惯？",
        select: [
            {
                text: "不是",
                active: false,
                tap: function (ele, select) {
                    tap(ele, select, function () {
                        model.item = model.arr[2];
                    });
                }
            }, {
                text: "是的",
                active: false,
                tap: function (ele, select) {
                    tap(ele, select, function () {
                        model.item = model.arr[3];
                    });
                }
            }
        ]
    },
    {
        type: "select",
        id: 2,
        text: "当你忘记带手机出门会没安全感？",
        select: [
          {
              text: "是的",
              active: false,
              tap: function (ele, select) {
                  tap(ele, select, function () {
                      model.item = model.arr[4];
                  });
              }
          }, {
              text: "不是",
              active: false,
              tap: function (ele, select) {
                  tap(ele, select, function () {
                      model.item = model.arr[6];
                  });
              }
          }
        ]
    }, {
        type: "select",
        id: 3,
        text: "有段时间你特别喜欢玩手机游戏？",
        select: [
          {
              text: "不是",
              active: false,
              tap: function (ele, select) {
                  tap(ele, select, function () {
                      model.item = model.arr[5];
                  });
              }
          }, {
              text: "是的",
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
        id: 4,
        text: "你工作或休息时会时不时看看手机，害怕错过信息电话？",
        select: [
           {
               text: "不是",
               active: false,
               tap: function (ele, select) {
                   tap(ele, select, function () {
                       model.item = model.arr[7];
                   });
               }
           }, {
               text: "是的",
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
        id: 5,
        text: "你经常在聚餐的时候玩手机？",
        select: [
          {
              text: "是的",
              active: false,
              tap: function (ele, select) {
                  tap(ele, select, function () {
                      model.item = model.arr[6];
                  });
              }
          }, {
              text: "不是",
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
        text: "你在无聊的时候喜欢摇微信打发时间？",
        select: [
           {
               text: "是的",
               active: false,
               tap: function (ele, select) {
                   tap(ele, select, function () {
                       model.item = model.arr[7];
                   });
               }
           }, {
               text: "不是",
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
        id: 7,
        text: "你特别喜欢把自己的身边发生的趣事发到微信上？",
        select: [
           {
               text: "不是",
               active: false,
               tap: function (ele, select) {
                   tap(ele, select, function () {
                       model.item = model.arr[10];
                   });
               }
           }, {
               text: "是的",
               active: false,
               tap: function (ele, select) {
                   tap(ele, select, function () {
                       model.item = model.arr[13];
                   });
               }
           }
        ]
    }, {
        type: "select",
        id: 8,
        text: "你坐车时会时不时摸摸自己的手机？",
        select: [
           {
               text: "不是",
               active: false,
               tap: function (ele, select) {
                   tap(ele, select, function () {
                       model.item = model.arr[11];
                   });
               }
           }, {
               text: "是的",
               active: false,
               tap: function (ele, select) {
                   tap(ele, select, function () {
                       model.item = model.arr[10];
                   });
               }
           }
        ]
    },{
        type: "select",
        id: 9,
        text: "当你一天没收到信息或者电话时会怀疑自己的手机出问题了？",
        select: [
          {
              text: "不是",
              active: false,
              tap: function (ele, select) {
                  tap(ele, select, function () {
                      model.item = model.arr[12];
                  });
              }
          }, {
              text: "是的",
              active: false,
              tap: function (ele, select) {
                  tap(ele, select, function () {
                      model.item = model.arr[13];
                  });
              }
          }
        ]
    },{
        type: "select",
        id: 10,
        text: "你经常关注新上市品牌手机？",
        select: [
          {
              text: "不是",
              active: false,
              tap: function (ele, select) {
                  tap(ele, select, function () {
                      model.item = model.arr[12];
                  });
              }
          }, {
              text: "是的",
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
        tarShare((newval.id-10));
		return false;
    };
})
});

var ylist = [{
"biao": "A",
"t1": "你能击退手机诱惑",
"t2": "我能击退手机诱惑，你并不特喜欢玩手机，但是你却容易被手机的魔法功力吸引；当你无聊的时候喜欢玩手机打发时间，玩着玩着就容易上瘾了，但是你内心清楚不能沉迷于手机，不仅浪费时间，而且辐射大。为了阻止手机影响你的正常生活，你会控制自己少玩手机游戏，少上微博、微信、少看手机电视等，所以别担心，通过努力你能摆脱手机的诱惑。",      
},{
"biao": "B",
"t1": "手机诱惑不了你",
"t2": "手机等高科技产品对你正常生活影响并不大，也许你的日常生活工作忙碌，没有多余的时间玩手机，不大可能得手机综合依赖症。但也因为你不关注手机等科技产品，也不容易得知最新的信息，有时候会比较落伍。对你而言，手机只是通讯工具，没有任何的特殊情感，摆脱手机对你生活的影响是轻而易举的事情。",            
},{
"biao": "C",
"t1": "手机能诱惑到你",
"t2": "你对手机有着特殊的感情，在你看来手机不仅是通讯工具，更是你的朋友，记录你生活的点点滴滴。你认为手机是神奇的发明，可以用手机联络朋友，可以通过手机关注外界的最新消息，不开心时也可以躲在手机为你设置的虚幻世界里，所以你容易陷入手机情结无法自拔。你把手机看的过于重要，要摆脱手机诱惑要加把劲才行。",            
},{
"biao": "D",
"t1": "你难敌手机诱惑",
"t2": "手机等电子产品成为你生活中必不可少的部分，甚至已经开始主宰你的生活，当你丢失手机时内心会丢失安全感，无所适从的感觉油然而生，这不是一种好现象。如果再这样下去你会成为手机的奴隶，沉迷于手机给你设置的虚拟世界，慢慢地对现实生活漠不关心，而且过度地玩手机对你的健康没好处，尽早摆脱手机的诱惑吧，把手机当做通讯工具使用。",            
}];
document.body.className = "";

function showAns(ans){
ans = ans-1;
if(ans<0 || ans>3){
	ans = 1;
}
$("#sans").show();
$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
$("#sec").html(ylist[ans].t2);
//	shareCount(spid);
//	scoreCount(spid,ans);
}