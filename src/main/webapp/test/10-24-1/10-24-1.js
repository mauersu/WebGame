///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://" +basedns +"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "来自美国非常著名的心里专家测试",
desc: "很准的呦,都来试试吧"
};

            var model = avalon.define("test", function (vm) {
					vm.arr = [{
						type: "hello",
						text: "本心理测试是由中国现代心理研究所以著名的美国兰德公司（战略研究所）拟制的一套经典心理测试题为蓝本，根据中国人心理特点加以适当改造后形成的心理测试题，目前已被一些著名大公司，如联想、长虹、海尔等公司作为对员工心理测试的重要辅助试卷，据说效果很好。现在已经有人建议将来作为对公务员的必选辅助心理测试推广使用。快来测试一下！",
						text1: "点击开始测试咯~   请先选择性别",
						select: [{
							img: "http://" +basedns +"/test/image/sex1.jpg",
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
							img: "http://" +basedns +"/test/image/sex0.jpg",
							text: "女生",
							active: false,
							error: true,
							tap: function(ele, select) {
								tap(ele, select,
								function() {
									model.item = model.arr[1];
									model.result.sex = 1;
								});
							}
						}]
					}, {
                        type: "select",
                        id: 1,
                        text: "你更喜欢吃那种水果？",
                        select: [
                            {
                                text: "草莓",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "苹果",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "西瓜",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "菠萝",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "橘子",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[2];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 2,
                        text: "你平时休闲经常去的地方是？",
                        select: [
                            {
                                text: "郊外",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[3];
                                    });
                                }
                            }, {
                                text: "电影院",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[3];
                                    });
                                }
                            }, {
                                text: "公园",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[3];
                                    });
                                }
                            }, {
                                text: "商场",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[3];
                                    });
                                }
                            }, {
                                text: "酒吧",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[3];
                                    });
                                }
                            }, {
                                text: "练歌房",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 20;
                                        model.item = model.arr[3];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 3,
                        text: "你认为容易吸引你的人是？",
                        select: [
                            {
                                text: "有才气的人",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[4];
                                    });
                                }
                            }, {
                                text: "依赖你的人",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[4];
                                    });
                                }
                            }, {
                                text: "优雅的人",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[4];
                                    });
                                }
                            }, {
                                text: "善良的人",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[4];
                                    });
                                }
                            }, {
                                text: "性情豪放的人",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[4];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 4,
                        text: "如果你可以成为一种动物，你希望自己是哪种？",
                        select: [
                            {
                                text: "猫",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[5];
                                    });
                                }
                            }, {
                                text: "马",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[5];
                                    });
                                }
                            }, {
                                text: "大象",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[5];
                                    });
                                }
                            }, {
                                text: "猴子",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[5];
                                    });
                                }
                            }, {
                                text: "狗",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[5];
                                    });
                                }
                            }, {
                                text: "狮子",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 20;
                                        model.item = model.arr[5];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 5,
                        text: "天气很热，你更愿意选择什么方式解暑？",
                        select: [
                            {
                                text: "游泳",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[6];
                                    });
                                }
                            }, {
                                text: "喝冷饮",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[6];
                                    });
                                }
                            }, {
                                text: "开空调",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[6];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 6,
                        text: "如果必须与一个你讨厌的动物或昆虫在一起生活，你能容忍哪一个？",
                        select: [
                            {
                                text: "蛇",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[7];
                                    });
                                }
                            }, {
                                text: "猪",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[7];
                                    });
                                }
                            }, {
                                text: "老鼠",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[7];
                                    });
                                }
                            }, {
                                text: "苍蝇",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[7];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 7,
                        text: "你喜欢看哪类电影、电视剧？",
                        select: [
                            {
                                text: "悬疑推理类",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[8];
                                    });
                                }
                            }, {
                                text: "童话神话类",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[8];
                                    });
                                }
                            }, {
                                text: "自然科学类",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[8];
                                    });
                                }
                            }, {
                                text: "伦理道德类",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[8];
                                    });
                                }
                            }, {
                                text: "战争枪战类",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[8];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 8,
                        text: "以下哪个是你身边必带的物品？",
                        select: [
                            {
                                text: "打火机",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[9];
                                    });
                                }
                            }, {
                                text: "口红",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[9];
                                    });
                                }
                            }, {
                                text: "记事本",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[9];
                                    });
                                }
                            }, {
                                text: "纸巾",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[9];
                                    });
                                }
                            }, {
                                text: "手机",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[9];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 9,
                        text: "你出行时喜欢坐什么交通工具？",
                        select: [
                            {
                                text: "火车",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "自行车",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "汽车",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "飞机",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "步行",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[10];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 10,
                        text: "以下颜色你更喜欢哪种？",
                        select: [
                            {
                                text: "紫",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[11];
                                    });
                                }
                            }, {
                                text: "黑",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[11];
                                    });
                                }
                            }, {
                                text: "蓝",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[11];
                                    });
                                }
                            }, {
                                text: "白",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 8;
                                        model.item = model.arr[11];
                                    });
                                }
                            }, {
                                text: "黄",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 12;
                                        model.item = model.arr[11];
                                    });
                                }
                            }, {
                                text: "红",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[11];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 11,
                        text: "下列运动中挑选一个你最喜欢的（不一定擅长）？",
                        select: [
                            {
                                text: "瑜珈",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[12];
                                    });
                                }
                            }, {
                                text: "骑自行车",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[12];
                                    });
                                }
                            }, {
                                text: "乒乓球",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[12];
                                    });
                                }
                            }, {
                                text: "拳击",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 8;
                                        model.item = model.arr[12];
                                    });
                                }
                            }, {
                                text: "足球",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[12];
                                    });
                                }
                            }, {
                                text: "蹦极",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[12];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 12,
                        text: "如果你拥有一座别墅，你认为它应当建立在哪里？",
                        select: [
                            {
                                text: "湖边",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[13];
                                    });
                                }
                            }, {
                                text: "草原",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[13];
                                    });
                                }
                            }, {
                                text: "海边",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[13];
                                    });
                                }
                            }, {
                                text: "森林",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[13];
                                    });
                                }
                            }, {
                                text: "城中区",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[13];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 13,
                        text: "你更喜欢以下哪种天气现象？",
                        select: [
                            {
                                text: "雪",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[14];
                                    });
                                }
                            }, {
                                text: "风",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[14];
                                    });
                                }
                            }, {
                                text: "雨",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[14];
                                    });
                                }
                            }, {
                                text: "雾",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[14];
                                    });
                                }
                            }, {
                                text: "雷电",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[14];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 14,
                        text: "你希望自己的窗口在一座30层大楼的第几层？",
                        select: [
                            {
                                text: "七层",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 2;
                                        model.item = model.arr[15];
                                    });
                                }
                            }, {
                                text: "一层",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        model.item = model.arr[15];
                                    });
                                }
                            }, {
                                text: "二十三层",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        model.item = model.arr[15];
                                    });
                                }
                            }, {
                                text: "十八层",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        model.item = model.arr[15];
                                    });
                                }
                            }, {
                                text: "三十层",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        model.item = model.arr[15];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 15,
                        text: "你认为自己更喜欢在以下哪一个城市中生活？",
                        select: [
                            {
                                text: "丽江",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 1;
                                        testEnd();
                                    });
                                }
                            }, {
                                text: "拉萨",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 3;
                                        testEnd();
                                    });
                                }
                            }, {
                                text: "昆明",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 5;
                                        testEnd();
                                    });
                                }
                            }, {
                                text: "西安",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 8;
                                        testEnd();
                                    });
                                }
                            }, {
                                text: "杭州",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 10;
                                        testEnd();
                                    });
                                }
                            }, {
                                text: "北京",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        fen += 15;
                                        testEnd();
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
                    }, {
                        type: "result",
                        id: 20
                    }, {
                        type: "result",
                        id: 21
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
				"biao": "A",
				"t1": "40分",
				"t2": "散漫，爱玩，富于幻想。聪明机灵，待人热情，爱交朋友，但对朋友没有严格的选择标准。事业心较差，更善于享受生活，意志力和耐心都较差，我行我素。有较好的异性缘，但对爱情不够坚持认真，容易妥协。没有财产观念。",      
			},{
				"biao": "B",
				"t1": "69分",
				"t2": "性情温良，重友谊，性格塌实稳重，但有时也比较狡黠。事业心一般，对本职工作能认真对待，但对自己专业以外事物没有太大兴趣，喜欢有规律的工作和生活，不喜欢冒险，家庭观念强，比较善于理财。",            
			},{
				"biao": "C",
				"t1": "99分",
				"t2": "好奇心强，喜欢冒险，人缘较好。事业心一般，对待工作，随遇而安，善于妥协。善于发现有趣的事情，但耐心较差，敢于冒险，但有时较胆小。渴望浪漫的爱情，但对婚姻的要求比较现实。不善理财。",            
			},{
				"biao": "D",
				"t1": "139分",
				"t2": "爱幻想，思维较感性，以是否与自己投缘为标准来选择朋友。性格显得较孤傲，有时较急噪，有时优柔寡断。事业心较强，喜欢有创造性的工作，不喜欢按常规办事。性格倔强，言语犀利，不善于妥协。崇尚浪漫的爱情，但想法往往不切合实际。金钱欲望一般。",            
			},{
				"biao": "E",
				"t1": "179分",
				"t2": "聪明，性格活泼，人缘好，善于交朋友，心机较深。事业心强，渴望成功。思维较理性，崇尚爱情，但当爱情与婚姻发生冲突时会选择有利于自己的婚姻。金钱欲望强烈。",            
			},{
				"biao": "F",
				"t1": "180分满分",
				"t2": "意志力强，头脑冷静，有较强的领导欲，事业心强，不达目的不罢休。外表和善，内心自傲，对有利于自己的人际关系比较看重，有时显得性格急噪，咄咄逼人，得理不饶人，不利于自己时顽强抗争，不轻易认输。思维理性，对爱情和婚姻的看法很现实，对金钱的欲望一般。",            
			}];
            document.body.className = "";
			
			function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>5){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);
			}
						function testEnd() {
				if (fen >= 180) {
                   var scores = 6;
                } else if (fen >= 140) {
                   var scores = 5;
                } else if (fen >= 100) {
                    var scores = 4;
                } else if (fen >= 70) {
                    var scores = 3;
                } else if (fen >= 40) {
                   var scores = 2;
                } else {
                   var scores = 1;
                }
			tarShare(scores);
			}
						
			
  