///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "男神女神大测验，屌丝也试试!",
desc: "很准的呦,都来试试吧"
};

/////////////////////////////////////////
            var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "放下你手中的卫生纸，测测你的男神指数吧。摘下你的xx，看看你的女神系数吧。有胆量的都来试试看！",
						text1: "点击开始测试咯~  请先选择性别",
	                    select: [{
							img: "../image/sex1.jpg",
							text: "男生",
							active: false,
							error: true,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[1];
									model.result.sex = 0;
								});
							}
						},
						{
							img: "../image/sex0.jpg",
							text: "女生",
							active: false,
							error: true,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[9];
									model.result.sex = 1;
								});
							}
						}]
                    },  {
                        type: "select",
                        id: 1,
                        text: "对待问路的人，即使是同性，也能耐心地指路？",
                        select: [
                            {
                                text: "a、YES",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[2];
                                        fen +=20;
                                    });
                                }
                            }, {
                                text: "b、NO",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[2];
                                    });
                                }
                            }
                        ]
                    },
                    {
                        type: "select",
                        id: 2,
                        text: "夏季能够依然坚持自己的脚不外露，坚定自己的帆布鞋等？",
                        select: [
                             {
                                 text: "a、YES",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[3];
                                         fen +=20;
                                     });
                                 }
                             }, {
                                 text: "b、NO",
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
                        text: "即使有女朋友，依然能够在公共场合向柳下惠看齐?",
                        select: [
                            {
                                text: "a、YES",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[4];
                                        fen += 15;
                                    });
                                }
                            }, {
                                text: "b、NO",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[4];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 4,
                        text: "对待女生，即使再生气，也不大声说话？",
                        select: [
                           {
                               text: "a、YES",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[5];
                                       fen+=20;
                                   });
                               }
                           }, {
                               text: "b、NO",
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
                        id: 5,
                        text: "至少有一项自己喜欢的运动，并持之以恒？",
                        select: [
                           {
                               text: "a、YES",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[6];
                                       fen+=25;
                                   });
                               }
                           }, {
                               text: "b、NO",
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
                        id: 6,
                        text: "换下的衣服不洗，隔几天再穿？",
                        select: [
                            {
                                text: "a、YES",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[7];
                                        fen-=30;
                                    });
                                }
                            }, {
                                text: "b、NO",
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
                        text: "对来来往往的女生露出不一样的神情?",
                        select: [
                            {
                                text: "a、YES",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[8];
                                        fen -=20;
                                    });
                                }
                            }, {
                                text: "b、NO",
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
                        id: 8,
                        text: "在女生面前滔滔不绝，犹如三峡断堤？",
                        select: [
                           {
                               text: "a、YES",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[17];
                                       fen-=20;
                                   });
                               }
                           }, {
                               text: "b、NO",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[17];
                                   });
                               }
                           }
                        ]
                    },  {
                        type: "select",
                        id: 9,
                        text: "我若出门，必定洗头；我若在家，不洗不梳？",
                        select: [
                            {
                                text: "a、YES",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[10];
                                        fen -=20;
                                    });
                                }
                            }, {
                                text: "b、NO",
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
                        text: "要我陪你到老，飘逸的长发必不可少，等待着它的及腰？",
                        select: [
                             {
                                 text: "a、YES",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[11];
                                         fen +=20;
                                     });
                                 }
                             }, {
                                 text: "b、NO",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[11];
                                     });
                                 }
                             }
                        ]
                    }, {
                        type: "select",
                        id: 11,
                        text: "过着二师弟的生活，却想要大师兄的身材？",
                        select: [
                            {
                                text: "a、YES",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[12];
                                        fen -= 25;
                                    });
                                }
                            }, {
                                text: "b、NO",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[12];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 12,
                        text: "每天早上看时间不是为了起床，而是算算还能赖床多久？",
                        select: [
                           {
                               text: "a、YES",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[13];
                                       fen-=25;
                                   });
                               }
                           }, {
                               text: "b、NO",
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
                        id: 13,
                        text: "跟男生讲话时落落大方，上的了厅堂，下得了厨房？",
                        select: [
                           {
                               text: "a、YES",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[14];
                                       fen+=30;
                                   });
                               }
                           }, {
                               text: "b、NO",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[14];
                                   });
                               }
                           }
                        ]
                    }, {
                        type: "select",
                        id: 14,
                        text: "说脏话跟你半毛钱关系都没有？",
                        select: [
                            {
                                text: "a、YES",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[15];
                                        fen+=30;
                                    });
                                }
                            }, {
                                text: "b、NO",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[15];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 15,
                        text: "见公交车开来顿时抛开淑女姿势蜂拥而至？",
                        select: [
                            {
                                text: "a、YES",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[16];
                                        fen -=10;
                                    });
                                }
                            }, {
                                text: "b、NO",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[16];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 16,
                        text: "有自己的小梦想，并且像个小向日葵一样每天付出一点点努力？",
                        select: [
                           {
                               text: "a、YES",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[17];
                                       fen=20;
                                   });
                               }
                           }, {
                               text: "b、NO",
                               active: false,
                               tap: function (ele, select) {
                                   tap(ele, select, function () {
                                       model.item = model.arr[17];
                                   });
                               }
                           }
                        ]
                    },{
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
                vm.$watch("item", function (newval) {
                    if (newval.type == 'result') {
                        //tarShare((newval.id-9));
                        result();
						return false;
                    };
                })
            });
			var ylist = [{
				"biao": "100分",
				"t1": "",
				"t2": "　OMG!我在【男神】测试中竟然得了100分，可望而不可及的男人，你确定没作弊？",
			},{
				"biao": "80-90分",
				"t1": "",
				"t2": "OMG!我在【男神】测试中竟然得了90分，呵呵，快接近男神啦……", 
			},{
				"biao": "50-70分",
				"t1": "",
				"t2": "OMG!我在【男神】测试中竟然得了60分，呵呵，还算精神正常吧……", 
			},{
				"biao": "小于50分",
				"t1": "",
				"t2": "OMG!我在【男神】测试中竟然得了30分，“屌丝”，洗洗睡吧……", 
			}];

			var ylist1 = [{
				"biao": "100分",
				"t1": "",
				"t2": "　OMG!我在【女神】测试中竟然得了100分，可远观不可亵玩的女神，你确定没作弊？",
			},{
				"biao": "80-90分",
				"t1": "",
				"t2": "OMG!我在【女神】测试中竟然得了90分，呵呵，快接近女神啦，我会努力的……", 
			},{
				"biao": "50-70分",
				"t1": "",
				"t2": "OMG!我在【女神】测试中竟然得了60分，呵呵，还算精神正常吧……", 
			},{
				"biao": "小于50分",
				"t1": "",
				"t2": "OMG!我在【女神】测试中竟然得了30分，“屌丝女”，洗洗睡吧……", 
			}];
			
document.body.className = "";
function tarShareX(score){
$('#tips').show();
mebtnopenurl = "http://"+basedns+"/test/"+spid+"/result.html?s="+score+"&sex="+model.result.sex;
WeixinJSBridge.call("showOptionMenu");
return false;
}

function result() {
var sco = 0;if( fen==100) sco = 1;
else if(fen>80 && fen <100)sco = 2;
else if(fen>50 && fen <=80)sco = 3;
else if(fen <=50)sco = 4;
tarShareX(sco);
}

function showAns(ans, sex){
	ans = ans-1;
	if(ans<0 || ans>5){
		ans = 1;
	}
	
	$("#sans").show();
	if (0== sex){
	$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
	$("#sec").html(ylist[ans].t2);
	}
	if (1== sex){
	$("#fis").html("<span>"+ylist1[ans].biao+"</span>"+ylist1[ans].t1);
	$("#sec").html(ylist1[ans].t2);
	}
//	shareCount(spid);
//	scoreCount(spid,ans);
}
////////////////////
