///////////////first setting//////////////////////////////
var basedns = window.location.hostname+"/game";
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://"+basedns+"/test/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "你拥有着什么样的潜在性格",
desc: "很准的呦,都来试试吧"
};

            var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "男人的心像洋葱，一边流泪一边剥，剥到最后却发现洋葱是没有心的。女人的心像梨，外面吃起来很甜，心却是酸的。越长大越躲在面具下不敢真心示人，最后连自己都忘了自己的初心。",
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
                    },{
                        type: "select",
                        id: 1,
                        text: "不喜欢吃的食物，你一定不吃？",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                      
                                        model.item = model.arr[2];
                                    });
                                }
                            }, {
                                text: "不是",
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
                        text: "你在约会的时候一向准时？",
                        select: [
                            {
                                text: "是",
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
                                        model.item = model.arr[5];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 3,
                        text: "你每天都要收看电视里的新闻节目？",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[5];
                                    });
                                }
                            }, {
                                text: "不是",
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
                        text: "你在没有心情上班或上学的时候，会请假休息一天",
                        select: [
                            {
                                text: "是",
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
                                        model.item = model.arr[7];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 5,
                        text: "心情不好的时候，你通常睡一觉就没事了？",
                        select: [
                            {
                                text: "是",
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
                                        model.item = model.arr[6];
                                    });
                                }
                            }
                        ]
                    }, {
                        type: "select",
                        id: 6,
                        text: "有时候你会故意放大喉咙大声地打喷嚏？",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[8];
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
                        text: "你喜欢卡通造形的物品？",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[9];
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
                        id: 8,
                        text: "在选择旅游的交通工具时，你比较喜欢快捷的飞机，多于悠哉悠哉的汽车或油轮？",
                        select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[10];
                                    });
                                }
                            }, {
                                text: "不是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[11];
                                    });
                                }
                            }
                        ]
                    },
                   {
                       type: "select",
                       id: 9,
                       text: "你很留意朋友们的衣着打扮？",
                       select: [
                             {
                                 text: "是",
                                 active: false,
                                 tap: function (ele, select) {
                                     tap(ele, select, function () {
                                         model.item = model.arr[11];
                                     });
                                 }
                             }, {
                                 text: "不是",
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
                         text: "你很在乎你给别人的第一印象？",
                         select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[12];
                                    });
                                }
                            }, {
                                text: "不是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[13];
                                    });
                                }
                            }
                         ]
                     },
                     {
                         type: "select",
                         id: 11,
                         text: "你喜欢吃三文治？",
                         select: [
                            {
                                text: "是",
                                active: false,
                                tap: function (ele, select) {
                                    tap(ele, select, function () {
                                        model.item = model.arr[14];
                                    });
                                }
                            }, {
                                text: "不是",
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
                        tarShare((newval.id-11));
						return false;
                    };
                })
            });
		var ylist = [{
				"biao": "A",
				"t1": "崇尚完美主义者",
				"t2": "你其实是个崇尚完美主义者，对问题大都不抱乐观态度。非常在意别人的想法，显得很神经质。注重修饰自己的外表，对新鲜事物最感敏感，最感兴趣。总是站立在时代尖端上。在恋爱中，女孩将表现出很温柔的一面，男孩喜欢性感的女孩。但都会由于你的潜在性格而有些不敢尝试。",      
			},{
				"biao": "B",
				"t1": "充满感情的行动家",
				"t2": "你是充满感情的行动家，个性爽朗，没心眼，有同情心。会凭直觉及印象，容易不顾一切的蛮干下去，不求结果，只在乎过程，极为重视现在。在恋爱中，女孩格外的纯情，易陷入情网，男孩则是个性独特，我行我素。你的内在性格特征表现出来就是投入快，也许退出的也会快。 ",            
			},{
				"biao": "C",
				"t1": "充满矛盾的自信家",
				"t2": "你是充满矛盾的自信家，天生和平主义者。很热心的做一些对自己没有利益的事。行动尖锐，忽冷忽热，常被视为异端，经常走自我的道路，不会主动投入团体。在恋爱中，女孩喜欢较叛逆的异性，男孩追求纯情，潜在性格使得他们易于陷于单恋的境地。",            
			},{
				"biao": "D",
				"t1": "现实浪漫主义者",
				"t2": "你是现实浪漫主义者，洞悉全盘大局再采取行动，一旦下定决心，便很难再改变。对善意、恶意很敏感，以信赖感为主轴，有很彻底的同伴意识，喜欢成群结党。在恋爱中，女孩属于天生的热情型，男孩则属于主攻型，如果对方配合，潜在性格会使他们很快体会到爱情的甜蜜。",            
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
							shareCount(spid);
				scoreCount(spid,ans);
				
			}